let verify = true
let point = 0
let maxPoint = 0
const choice = document.getElementById('choice')
const help = document.getElementById('help')
const easybt = document.getElementById('easy')
const normalbt = document.getElementById('normal')
const hardbt = document.getElementById('hard')
const resetbt = document.getElementById('reset')
resetbt.style.visibility = 'hidden'
easybt.addEventListener('click', easy)
normalbt.addEventListener('click', normal)
hardbt.addEventListener('click', hard)
resetbt.addEventListener('click', reset)
let oldList = []
function easy() {
  if (verify) {
    verify = false
    oldList = []
    oldList = [
    { name: '2', img: 'img/2.png'},
    { name: '2', img: 'img/2.png' },
    { name: '3', img: 'img/3.png' },
    { name: '3', img: 'img/3.png' },
    { name: '4', img: 'img/4.png' },
    { name: '4', img: 'img/4.png' },
    { name: '5', img: 'img/5.png' },
    { name: '5', img: 'img/5.png' }
    ]
    maxPoint = 4
    start()
    choice.style.display = 'none'
    help.textContent = 'Game Started !'
    setTimeout(function () { help.textContent = 'Enjoy Playing !' }, 1000)
    setTimeout(function () { help.style.display = 'none! ' }, 3000)
  }
}
function normal() {
  if (verify) {
    verify = false
    oldList = []
    oldList = [
    { name: '2', img: 'img/2.png' },
    { name: '2', img: 'img/2.png' },
    { name: '3', img: 'img/3.png' },
    { name: '3', img: 'img/3.png' },
    { name: '4', img: 'img/4.png' },
    { name: '4', img: 'img/4.png' },
    { name: '5', img: 'img/5.png' },
    { name: '5', img: 'img/5.png' },
    { name: '6', img: 'img/6.png' },
    { name: '6', img: 'img/6.png' },
    { name: '7', img: 'img/7.png' },
    { name: '7', img: 'img/7.png' },
    { name: '8', img: 'img/8.png' },
    { name: '8', img: 'img/8.png' },
    { name: '9', img: 'img/9.png' },
    { name: '9', img: 'img/9.png' }
    ]
    maxPoint = 8
    start()
    choice.style.display = 'none'
    choice.style.display = 'none'
    help.textContent = 'Game Started !'
    setTimeout(function () { help.textContent = 'Enjoy Playing !' }, 1000)
    setTimeout(function () { help.style.display = 'none' }, 3000)
  }
}
function hard() {
  if (verify) {
    verify = false
    oldList = []
    oldList = [
      { name: '2', img: 'img/2.png' },
      { name: '2', img: 'img/2.png' },
      { name: '3', img: 'img/3.png' },
      { name: '3', img: 'img/3.png' },
      { name: '4', img: 'img/4.png' },
      { name: '4', img: 'img/4.png' },
      { name: '5', img: 'img/5.png' },
      { name: '5', img: 'img/5.png' },
      { name: '6', img: 'img/6.png' },
      { name: '6', img: 'img/6.png' },
      { name: '7', img: 'img/7.png' },
      { name: '7', img: 'img/7.png' },
      { name: '8', img: 'img/8.png' },
      { name: '8', img: 'img/8.png' },
      { name: '9', img: 'img/9.png' },
      { name: '9', img: 'img/9.png' },
      { name: '10', img: 'img/10.png' },
      { name: '10', img: 'img/10.png' },
      { name: '11', img: 'img/11.png' },
      { name: '11', img: 'img/11.png' }
       ]
    maxPoint = 10
    start()
    choice.style.display = 'none'
    choice.style.display = 'none'
    help.textContent = 'Game Started !'
    setTimeout(function () { help.textContent = 'Enjoy Playing !' }, 1000)
    setTimeout(function () { help.style.display = 'none' }, 3000)
  }
}

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
function start() {
  let newList = shuffle(oldList)
  let first = null
  let second = null
  let draws = true
  let flipCount = 0
  let game = document.getElementById('game')
  let grid = document.createElement('div')
  grid.setAttribute('class', 'grid')
  game.appendChild(grid)
  for (let i = 0; i < newList.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = newList[i].name

    let front = document.createElement('div')
    front.classList.add('front')

    let back = document.createElement('div')
    back.classList.add('back')
    back.style.backgroundImage = 'url(' + newList[i].img + ')'

    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
  }
  grid.addEventListener('click', function (e) {
    let clicked = e.target
    draws = true
    flipCount++
    if (draws === maxPoint) {
      gameOver()
    }
    if (clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    } else {
      if (draws === true && flipCount === 1) {
        first = clicked.parentNode.dataset.name
        console.log(first)
        clicked.parentNode.classList.add('selected')
      } else if (draws === true && flipCount === 2) {
        second = clicked.parentNode.dataset.name
        console.log(second)
        clicked.parentNode.classList.add('selected')
      }
      if (first && second) {
        if (first === second) {
          console.log('matched')
          draws = false
          first = null
          second = null
          flipCount = 0
          setTimeout(matched, 1000)
        } else {
          console.log('Not Matched')
          draws = false
          first = null
          second = null
          flipCount = 0
          setTimeout(notmatched, 1000)
        }
      }
    }
  })
  function matched() {
    let selectedCards = document.querySelectorAll('.selected')
    if (draws === maxPoint) {
      gameOver()
    }

    for (let j = 0; j < selectedCards.length; j++) {
      selectedCards[j].classList.add('match')
      selectedCards[j].classList.remove('selected')
    }
    point++
    console.log('matched')
    setTimeout(pointRecord, 500)
  }
  function notmatched() {
    let selectedCards = document.querySelectorAll('.selected')
    for (let j = 0; j < selectedCards.length; j++) {
      selectedCards[j].classList.remove('selected')
    }
    console.log('removed')
    setTimeout(pointRecord, 500)
  }
}
function pointRecord() {
  if (point === maxPoint) {
    gameOver()
    console.log('game over')
  }
}

function gameOver() {
  animation()
  choice.style.display = 'none'
  help.style.display = 'block'
  help.textContent = 'Game Over !'
  setTimeout(function () { help.textContent = 'Level up!' }, 1000)
  setTimeout(function () { help.textContent = `You rock it!` }, 3000)
}
function reset() {
  location.reload()

}


function animation() {
  let ReSelectingCards = document.querySelectorAll('.card')
  for (let j = 0; j < ReSelectingCards.length; j++) {
    ReSelectingCards[j].classList.add('selected')
    ReSelectingCards[j].classList.remove('match')
    console.log(ReSelectingCards)
    ReSelectingCards[j].classList.add('drop')
    setTimeout(function () {
      resetbt.style.visibility = 'visible'
      choice.style.display = 'block'
      easybt.style.display = 'none'
      normalbt.style.display = 'none'
      hardbt.style.display = 'none'
    }, 4000)
    
  }
}
