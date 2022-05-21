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

  document.querySelector('#memory-board').innerHTML = html;

  let playingCardEl = undefined;
  let lockCards = false // anti-spam noob

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!lockCards){ // Obligé de bloquer les cartes quand 2 cartes sont retournés sinon bug si on spam click à cause du timeout -> playingCardEl fini par se comparer avec du undefined)
        card.classList.add("turned") // Defini la carte comme tourné (animation)
        memoryGame.pairsClicked++ // Incrément le compteur de click

      if (playingCardEl === undefined){ // 1er jet de carte
        playingCardEl = card //Enregistre le 1er jet
      }else{ // 2nd jet de carte
        lockCards = true // Bloque le click pour eviter de se retrouver avec des erreurs quand on spam click

        setTimeout(() => { // Mise en place du time out pour laisser le temps de voir la 2eme carte (sans time out, l'animation de la 2eme carte ne se fait pas)
          if (!memoryGame.checkIfPair(card.getAttribute("data-card-name"), playingCardEl.getAttribute("data-card-name"))){ //Compare le nom des cartes grace au getAttribute
            // Si les noms ne sont pas identiques
            card.classList.remove("turned") // Retourne les 2 cartes face caché
            playingCardEl.classList.remove("turned")
          }
          
          memoryGame.checkIfFinished() // Verifie si le jeu est terminé
          playingCardEl = undefined // Ré-initialisation du 1er jet de carte (pas besoin de réinitialiser le 2nd)
          document.querySelector("#score #pairs-guessed").innerHTML = memoryGame.pairsGuessed // Mise à jour du nombre de pairs rassemblés sur la page html
          lockCards = false //Ré-active le click
        }, 500);
      }
        document.querySelector("#score #pairs-clicked").innerHTML = memoryGame.pairsClicked // Mise à jour du nombre de click sur la page HTML
      }
    });
  });
});
