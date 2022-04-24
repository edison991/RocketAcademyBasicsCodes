var makeDeck = function () {
  var cardDeck = [];
  var suits = ["hearts", "diamonds", "clubs", "spades"];

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

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var moarDeck = makeDeck();
  var shuffledDeck = shuffleCards(moarDeck);
  var randomCard = shuffledDeck.pop();
  console.log(randomCard);
  var myOutputValue = `${randomCard.name} of ${randomCard.suit}`;
  return myOutputValue;
};
var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var myOutputValue = ``;
  var moarDeck = makeDeck();
  var shuffledDeck = shuffleCards(moarDeck);
  var userCard = shuffledDeck.pop();
  console.log(userCard);
  var computerCard = shuffledDeck.pop();
  console.log(computerCard);
  var lowerCard = Math.min(userCard.rank, computerCard.rank);
  if (lowerCard === userCard.rank) {
    myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br>
    Computer drew: ${computerCard.name} of ${computerCard.suit} <br> User wins.`;
  } else if (lowerCard === computerCard.rank) {
    myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br>
    Computer drew: ${computerCard.name} of ${computerCard.suit} <br> Computer wins.`;
  } else {
    myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br>
    Computer drew: ${computerCard.name} of ${computerCard.suit} <br> It's a tie!`;
  }
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var myOutputValue = ``;
  var moarDeck = makeDeck();
  var shuffledDeck = shuffleCards(moarDeck);
  var userCard = shuffledDeck.pop();
  console.log(userCard);
  var computerCard = shuffledDeck.pop();
  console.log(computerCard);
  //var lowerCard = Math.min(userCard.rank, computerCard.rank);
  if (
    (userCard.rank < computerCard.rank && computerCard.rank !== 12) ||
    userCard.rank == 12
  ) {
    myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br>
    Computer drew: ${computerCard.name} of ${computerCard.suit} <br> User wins.`;
  } else if (
    (userCard.rank > computerCard.rank && userCard.rank !== 12) ||
    computerCard.rank == 12
  ) {
    myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br>
    Computer drew: ${computerCard.name} of ${computerCard.suit} <br> Computer wins.`;
  } else if (userCard.rank === computerCard.rank) {
    myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br>
    Computer drew: ${computerCard.name} of ${computerCard.suit} <br> It's a tie!`;
  }
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
