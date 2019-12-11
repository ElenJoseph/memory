function shuffle(src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  return copy
}




// Game Area is a ID in HTML which will hold everything
const gameArea = document.getElementById('gameArea');

// creating a array of level of dificulty

const levels = [
'Easy', 'Medium', 'Hard', 'Extreme'
]

// storing all the events happening with those button plus the HTML code for it
const levlesAction = []

// this will run a loop which will create buttons html code for every button/level in levels array

levlesAction.push(`<div class="btnArea">`);
for(let number = 0; number < levels.length ; number++){
  levlesAction.push(`<button class="btn" onclick="${levels[number]}()" id="${levels[number]}">${levels[number]}</button>`);
}
levlesAction.push(`</div>`)



gameArea.innerHTML = levlesAction.join(' ')
// =======================================================
// ======================Game Inventory==========================

const game = {
    // These are the default points
    startPoints : 0,
    // level selected by player
    level : null,
    // message to the player
    message : "Let's Start it!",
    // points of Player
    TotalPoints : "0",
    listOfCards : [
    //  array which will hold all the cards in it.
    // add all the link/name of the images which you want to add remeber to add every image twice.
    {link: "f1.png", codeWord: "x"},
    {link: "f1.png", codeWord: "x"},
    {link: "f2.png", codeWord: "y"},
    {link: "f2.png", codeWord: "y"},
    {link: "f3.png", codeWord: "cx"},
    {link: "f3.png", codeWord: "cx"},
    {link: "f4.png", codeWord: "bx"},
    {link: "f4.png", codeWord: "bx"},
    {link: "f5.png", codeWord: "i"},
    {link: "f5.png", codeWord: "i"},
    
    ],

    // suffles cards will come here
    suffleCards : [],
    // this will be updated by the function automatically ... this is the number of cards 
    numberOfCards : null,

  openedCards: [],
  numberOfOpenCards: 0

}


// =======================================================
// =======================================================









// getting all the button back from HTML
const $easy = document.getElementById('Easy')
const $medium = document.getElementById('Medium')
const $hard = document.getElementById('Hard')

function Easy(){
 game.numberOfCards = 4
 game.level = "Easy"

 return Start()
}


function Medium(){
  game.numberOfCards = 8
  game.level = "Medium"
 
  return Start()
 }


function Hard(){
  game.numberOfCards = 10
  game.level = "Hard"
 
  return Start()
 }

// start button will reset everything and trigger the createCard function
function Start(){
game.suffleCards = shuffle(game.listOfCards)
let firstDraw = null;
let secondDraw = null;
let drawn = true;
let drawCount = 0;

return createCards()
}


// this will craete the HTML code for card and it is the main Function.

function createCards(){
    const cardSet = []

    cardSet.push(`<div class="cards">`)
    for(let number = 0 ; number < game.numberOfCards; number++){

        cardSet.push(`<div class="flip" onclick="letsMatch()" data-code="${game.suffleCards[number].codeWord}" class="cardBox">
        <div class="top"><img src="img/bg.jpg" alt=""></div>
        <div class="bottom"><img src="img/${game.suffleCards[number].link}" ></div>
      </div>`)
      
      }      
    cardSet.push(`</div>`);

    return gameArea.innerHTML = cardSet.join(' ');
}




function letsMatch(){
  // this.classList.toggle('flip');
  
  
  if(game.numberOfOpenCards === 0 || game.numberOfOpenCards === 1 || game.numberOfOpenCards === 2){
game.openedCards.push(this);
game.numberOfOpenCards++;
  console.log(this);
    if(game.openedCards[0] === game.openedCards[1]){
      console.log(matched);
    }
}
  else{
    game.numberOfCards = 0;
    console.log('so many cards up')
  }
}

// final actions for the memory

