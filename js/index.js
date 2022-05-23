const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  // on appelle shuffleCards() au chargement de la page
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  // initialisation de card1 card2 & card3
  let card1 = undefined
  let card2 = undefined
  let card3 = undefined

  //déclaration de la fonction permettant d'aller chercher la balise correspondante à la carte
  function f(el) {
    return el.getAttribute("data-card-name")
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {                    // a chaque clic sur une carte
      card.classList.add("turned")                            // on aujoute la classe "turned" pour la retourner 

      if (card1 === undefined) {                              // 1er clic:
        card1 = card                                          // la carte cliquée devient la carte 1 
        console.log("card1 =", card1)
      }
      else if (card1 != undefined && card2 === undefined) {   // 2e clic:
        card2 = card                                          // la carte cliquée devient la carte 2
        console.log("card2 =", card2)

        const cardA = f(card1)                                // on applique notre fonction aux deux cartes
        const cardB = f(card2)

        if (memoryGame.checkIfPair(cardA, cardB) === true) {  // on check si les deux cartes sont identiques. Si oui:
          card1.classList.add("blocked")                      // on ajoute la classe "blocked" à la carte
          card2.classList.add("blocked")

          card1 = undefined                                   // on reset les valeur de carte 1 et carte 2
          card2 = undefined
          memoryGame.checkIfFinished()                        // on vient vérifier si la partie est terminée
        }
      }
      else if (card1 != undefined && card2 != undefined && card3 === undefined) { //Si les deux cartes sont definies (mais différentes)
        card1.classList.remove('turned')                // on retire l'attribut "turned" des deux premieres cartes
        card2.classList.remove('turned')
        card3 = card                                    // la carte 3 devient la carte cliquée
        card1 = card3                                   // la carte 3 donne sa valeur à la carte 1
        card2 = undefined                               // on reset les valeurs de carte 2 et carte 3
        card3 = undefined
        console.log("card1=", card1)
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
