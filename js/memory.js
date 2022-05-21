class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.cards.sort(function (a, b) {
      //return >0 / <0 / 0
      return Math.random() -.5 // ]0;1[ -.5= ]-.5;.5[
    })
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }else{
      return false
    }

  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2){
      console.log("Youhouuuuuuuu c'est fini, tu es trop fort !")
      return true
    } else{
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
