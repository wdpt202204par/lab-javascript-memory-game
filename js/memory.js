class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    let shuffleCardsArr = [];
    for (let i = 0; i < this.cards.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));

      shuffleCardsArr.push(this.cards[j])
      console.log('hey', i)
      console.log('hello', shuffleCardsArr)
    }
    return shuffleCardsArr
    // ... write your code here
  }
  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
