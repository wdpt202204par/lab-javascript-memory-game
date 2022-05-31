class MemoryGame { // On doit créer une class qui représente la méthode du jeu
  constructor(cards) {
    this.cards = cards; // métode générale pour créer le constructor. La méthode this.cards concerne tous les éléments de la variable cards dans index.js
    this.pickedCards = []; // on prend les cartes du tableau
    this.pairsClicked = 0; // on commence avec 0 cartes cliquées
    this.pairsGuessed = 0; // on commence avec 0 cartes trouvées
  };


  shuffleCards() {
    this.cards.sort(function(a,b) { // .sort permet le tri mais je ne comprend pas l'importance des paramètres. Nous trions les objets de l'array "card"
      // Math.random() // ]0; 1[, ex: 0.123456

      if (Math.random() > .5) { // on créer une condition pour que le Math.random renvoie un nombre entier
        return 1
      } else {
        return -1
      }
    });
  };


  checkIfPair(card1, card2) {
    this.pairsClicked++ // dès que je click sur 2 cartes la condition ci-dessous s'applique...
    if (card2 === card1){
      this.pairsGuessed++ // on valide le fait d'avoir une paire et on ajoute 1 à la propriété this.pairsGuessed
      return true
    } else {
      return false
    }
  };


  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2){ // la condition est que si j'ai trouvé la moitié de l'ensemble des cartes, celà induit que j'ai également trouvé son équivalent et donc réussi le memoru game
      return true
      } else {
      return false
      }
    };
};


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
