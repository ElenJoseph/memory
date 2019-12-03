// Game Area is a ID in HTML which will hold everything
const gameArea = document.getElementById('gameArea');

// creating a array of level of dificulty

const levels = [
'Easy', 'Medium', 'Hard', 'Extreme'
]

// storing all the events happening with those button plus the HTML code for it
const levlesAction = []

// this will runa loop which will create buttons html code for every button/level in levels array
for(let number = 0; number < levels.length ; number++){
  levlesAction.push(`<button class="btn" onclick="${levels[number]}()" id="${levels[number]}">${levels[number]}</button>`);
}


// =======================================================
// ======================Game Inventory==========================

const game = {
    // These are the deafult points
    startPoints = 0,
    // level selected by player
    level = null,
    // message to the player
    message = "Let's Start it!",
    // points of Player
    TotalPoints = "0",
    listOfCards = [
    //  array which will hold all the cards in it.
    // add all the link/name of the images which you want to add remeber to add every image twice.
    
    ],
    // this will be updated by the function automatically ... this is the number of cards 
    numberOfCards = null,
 

}


// =======================================================
// =======================================================









// getting all the button back from HTML
const $easy = document.getElementById('Easy')
const $medium = document.getElementById('Medium')
const $hard = document.getElementById('Hard')

function Easy(){
 game.numberOfCards = null
 game.level = "Easy"

 return Start()
}

// start button will reset everything and trigger the createCard function
function Start(){
let newList = shuffle(oldList)
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

        
    }
    cardSet.push(`</div>`)
}


