class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let shuffleCardsArr = this.cards.sort((a, b) => 0.5 - Math.random());     // on crée un tableau reprenant le tableau cards en le triant aléatoirement
    return shuffleCardsArr
  }

  checkIfPair(card1, card2) {                                                     // methode checkIfPair()
    this.pairsClicked += 1                                                        // on ajoute 1 au compteur de paires cliquées
    document.querySelector('#pairs-clicked').innerHTML = `${this.pairsClicked}`   // on vient écrire la valeur du compteur dans la balise prévue
    if (card1 === card2) {                                                        // si les cartes sont identiques, alors:
      this.pairsGuessed += 1;                                                     // on ajoute 1 au compteur de paires trouvées
      document.querySelector('#pairs-guessed').innerHTML = `${this.pairsGuessed}` // on vient écrire la valeur du compteur dans la balise prévue
      return true;                                                                // on retourne true
    }
    else {                                                                        // sinon, alors on retourne false
      return false;
    }
  }

  checkIfFinished() {                                     // methode checkIfFinished()
    if (this.pairsGuessed === this.cards.length / 2) {    // si le nombre de paires trouvée est égale a la moitié du nombre de cartes alors
      //on vient écrire le message de victoire dans le memory-board
      document.querySelector('#memory-board').innerHTML = `<h1><br>You won with ${this.pairsClicked} tries!<br><br>Reload page for a new game.</h1>` 
      return true                                         // on retourne true
    }
    else {                                                // sinon on retourne false
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
