class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    let shuffleCardsArr = this.cards.sort((a, b) => 0.5 - Math.random());
    return shuffleCardsArr
    }
    // ... write your code here
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2){
      this.pairsGuessed +=1;
      return true;
    }
    else {
      return false;
    }
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed===this.cards.length/2){
      return true
    }
    else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
