class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = null;
  }

  shuffleCards() {
    // ... write your code here
    this.cards.sort(function(a,b) {
      // Math.random() // ]0; 1[, ex: 0.123456

      if (Math.random() > .5) {
        return 1
      } else{
        return -1
      }
    })
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    const pairsClicked;

    if (card1 === card2) return 1;

  


  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
