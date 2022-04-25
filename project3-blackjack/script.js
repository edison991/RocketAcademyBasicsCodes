//player hits submit to begin game (first game mode)
// generates deck of cards
var makeDeck = function () {
  var cardDeck = [];
  var suits = ["♥️", "♦️", "♣️", "♠️"];
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    var currentSuit = suits[suitIndex];
    var rankCounter = 1;
    while (rankCounter <= 13) {
      var cardName = rankCounter;
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };
      cardDeck.push(card);
      rankCounter += 1;
    }
    suitIndex += 1;
  }
  return cardDeck;
};
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};
//helper function to calculate player score

var playerScore = 0;
var computerScore = 0;
var getScore = function (cardHand) {
  var score = 0;

  var index = 0;
  var aceCounter = 0;
  while (index < cardHand.length) {
    //converts jack, queen and king to a value of 10
    if (
      cardHand[index].rank == 11 ||
      cardHand[index].rank == 12 ||
      cardHand[index].rank == 13
    ) {
      cardHand[index].rank = 10;
    }
    //convert value of ace
    else if (cardHand[index].rank == 1) {
      //ace = 11 by default
      cardHand[index].rank = 11;
      aceCounter += 1;
    }
    score += cardHand[index].rank;
    index += 1;
  }
  for (var i = 0; i < aceCounter; i += 1) {
    if (score > 21) {
      score -= 10;
    }
  }
  if (cardHand == playerCards) {
    playerScore = score;
  } else if (cardHand == computerCards) {
    computerScore = score;
  }
};
//helper function to create output message after every hit
var myOutputValue = ``;
var showCardsDrawn = function (playerCards, computerCards) {
  var playerMessage = "Player hand:<br>";
  var index = 0;
  while (index < playerCards.length) {
    playerMessage += `-${playerCards[index].name} of ${playerCards[index].suit} <br>`;
    console.log(playerCards[index].name, playerCards[index].suit);
    index += 1;
  }
  var computerMessage = `Dealer's hand:<br> -${computerCards[0].name} of ${computerCards[0].suit}<br> -Unknown Card`;
  myOutputValue =
    playerMessage +
    `Score:${playerScore} <br><br>` +
    computerMessage +
    `<br><br> Type "hit" or "stand" to continue.`;
  console.log(myOutputValue);
};
//helper function to check blackjack
var checkForBlackjack = function (cardHand) {
  var cardOne = cardHand[0];
  var cardTwo = cardHand[1];
  var blackjack = false;
  if (
    (cardOne.name == `ace` && cardTwo.rank >= 10) ||
    (cardTwo.name == `ace` && cardOne.rank >= 10)
  ) {
    blackjack = true;
  }
  return blackjack;
};

var gameMode = `give instructions`;
var playerCards = [];
var computerCards = [];
var shuffledDeck = [];
var main = function (input) {
  //provides instruction to submit again to get cards

  if (gameMode === `give instructions`) {
    var orderedDeck = makeDeck();
    shuffledDeck = shuffleCards(orderedDeck);
    console.log(shuffledDeck);
    gameMode = `player's turn`;
    myOutputValue = `Hit "submit" again to receive your 2 cards.`;
    return myOutputValue;
  }
  //player hits submit again to receive his 2 cards and gives the computer 2 random cards too (2nd game mode)
  if (gameMode === `player's turn`) {
    //pop 2 cards for player and push into playerCard array
    playerCards.push(shuffledDeck.pop());
    playerCards.push(shuffledDeck.pop());
    console.log(`playerCards array: ` + playerCards);
    computerCards.push(shuffledDeck.pop());
    computerCards.push(shuffledDeck.pop());
    console.log(`computerCards array: ` + computerCards);
    //check for blackjack
    var playerBlackjack = checkForBlackjack(playerCards);
    var dealerBlackjack = checkForBlackjack(computerCards);
    if (playerBlackjack == true && dealerBlackjack == false) {
      return `Player wins by blackjack!`;
    } else if (dealerBlackjack == true && playerBlackjack == false) {
      return `Dealer wins by blackjack :(`;
    } else if (dealerBlackjack == true && playerBlackjack == true) {
      return `It's a blackjack tie!`;
    }
    //calculate player's highest possible score
    getScore(playerCards);
    console.log(`player score ` + playerScore);
    //calculate dealer's current score
    getScore(computerCards);
    console.log(`dealer score: ` + computerScore);
    //displays output
    //output will contain the 2 cards and the highest possible score for the 2 cards
    showCardsDrawn(playerCards, computerCards);
    gameMode = `hit or stand`;
    return myOutputValue;
  }
  //instructs player to type "hit" to draw another card or "stand" to stop drawing (player minimally 16 to stand)
  if (gameMode == `hit or stand`) {
    if (input == `hit`) {
      playerCards.push(shuffledDeck.pop());
      console.log(playerCards);
      getScore(playerCards);
      //check for bust
      showCardsDrawn(playerCards, computerCards);
      if (playerScore > 21) {
        myOutputValue = `You have busted with a score of ${playerScore}. Hit submit again to reveal results.`;
        gameMode = `computer's turn`;
      }
      return myOutputValue;
    }
    //if player busts or types "stand", player stops having the option to draw a card and goes to the computer (third game mode)
    else if (input == `stand`) {
      //if (playerScore < 16)
      //prevents player from standing and instructing to type "hit"
      if (playerScore < 16) {
        return `Your score is less than 16, you must type "hit".`;
      } else {
        gameMode = `computer's turn`;
        return `Click "Submit" to decide outcome.`;
      }
    } else {
      showCardsDrawn(playerCards, computerCards);
      return myOutputValue;
    }
  }
  if (gameMode == `computer's turn`) {
    //if computer's score is <17, automatically draws card until score is above 17
    if (input == ``) {
      while (computerScore < 17) {
        computerCards.push(shuffledDeck.pop());
        getScore(computerCards);
      }
      console.log(computerScore);
      //comparing results
      if (playerScore > computerScore) {
        myOutputValue = `Player wins! <br> Player's score is: ${playerScore}<br> Dealer's score is: ${computerScore}`;
      } else if (playerScore < computerScore) {
        myOutputValue = `Dealer wins! <br> Player's score is: ${playerScore}<br> Dealer's score is: ${computerScore}`;
      } else {
        myOutputValue = `Its a tie... Player and dealer both got ${playerScore}.`;
      }
    }
    return myOutputValue;
  }
};
