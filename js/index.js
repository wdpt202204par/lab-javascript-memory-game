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

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let card1 = undefined
  let card2 = undefined
  let card3 = undefined

  function f(el) {
    return el.getAttribute("data-card-name")
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add("turned")
      //
      // si playingCardEl vaut rien => playingCardEl = Card
      
      if (card1===undefined){
        card1=card 
        console.log("card1 =",card1)
      }
      else if (card1!=undefined && card2===undefined){
        card2=card
        console.log("card2 =",card2)

        const cardA = f(card1)
        const cardB = f(card2)
        if (memoryGame.checkIfPair(cardA,cardB)===true){
          card1.classList.add("blocked")
          card2.classList.add("blocked")

          card1=undefined
          card2=undefined
          if(memoryGame.checkIfFinished() === true){
            window.alert("YOU WON!")
          }
        }
      }
      else if (card1!=undefined && card2 !=undefined && card3===undefined){
        card1.classList.remove('turned')
        card2.classList.remove('turned')
        card3=card
        card1=card3
        card2=undefined
        card3=undefined
        card3.classList.remove('turned')
        console.log("card1=",card1)
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
