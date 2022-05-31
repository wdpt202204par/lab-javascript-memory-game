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

const memoryGame = new MemoryGame(cards); // le memory game recommence après que le constructor du fichier memory.js ait redémarré

window.addEventListener('load', (event) => { 

  memoryGame.shuffleCards() // première étape : on mélange les cartes

  let html = ''; // on déclare une variable html sans valeur pour qu'on le caractériser par la suite

  memoryGame.cards.forEach((pic) => { // pour chaque objet je créé un emplacement HTML par class qui sera pousser dans mon document
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  }); // "memoryGame.cards" fait appel à mon constructeur (donc à mon statut de démarrage)

  // dans window, nous devons marquer l'emplacement du code HTML produit par notre function addEventListener
  document.querySelector('#memory-board').innerHTML = html; // ceci représente l'id dans lequel sera pousser le code HTML de ma function forEach

  let clickOnCard = undefined; // on click sur xCard

  // ici, nous devons caractériser ce que provoque le click
  document.querySelectorAll('.card').forEach((card) => { // dans toute la class "card" pour chaque carte
    card.addEventListener('click', () => {

      if (clickOnCard === undefined) { // si je clique sur une carte indéfinie
        clickOnCard = card; // cette carte devient la variable card
        card.classList.add("turned")  // on ajoute un effet àla class card 
        } else {
        memoryGame.checkIfPair() // si par contre la variable card est déjà définie par un premier click, alors je teste ma function checkIfPair
      }


      setTimeout(() => { 
      if (checkIfPair() === true) { // si mon test de compatibilité est vrai alors...
        card.classList.add("turned") // je retourne la carte cliquée
        memoryGame.pairsClicked()++ // j'ajoute un test validé à pairsClicked qui est parti de 0 dans mon constructor
        } else {
        card.classList.remove("turned") // si ça ne se vérifie pas, j'enlève les cartes retournées.
        }
      

      memoryGame.checkIfFinished() // si j'ai trouvé toute les cartes...
      document.querySelector("#score #pairs-guessed").innerHTML = memoryGame.pairsGuessed // je pousse le résultat de mon this paisGuessed dans l'HTML du document

      console.log(`Card clicked: ${card}`); // je print la carte cliquée
      },1000);

      document.querySelector("#score #pairs-clicked").innerHTML = memoryGame.pairsClicked
    });
  });
});

