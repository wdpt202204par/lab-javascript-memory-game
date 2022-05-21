class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    //   if (this.cards === undefined){
    //     return undefined
    //   }

    // let numberOfcards = this.cards.length
    // for (let i = 0; i < numberOfcards; i++){
    //   let random = Math.floor(Math.random() * this.cards.length)
    //   this.pickedCards.push(this.cards[random])
    //   this.cards.splice(random,1)
    // }

    // trier this.cards de maniere aleatoire ie: melanger
    this.cards.sort(function (a, b) {
      //return >0 / <0 / 0
      return Math.random() -.5 // ]0;1[ -.5= ]-.5;.5[
    })
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }else{
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here

    console.log("picked card = ", this.pickedCards.length)
    if (this.pairsGuessed === this.cards.length / 2){
      console.log("finish")
      return true
    } else{
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
