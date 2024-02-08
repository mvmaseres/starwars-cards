import {showClues, selectRandomElement} from "./dataFunctions.js"
import {lostGame, wrongAnswer, wonGame, gameLost, gameWon } from "./advices.js"
import { photosGame } from '../data/photos.js'


const selectedCategory = localStorage.getItem('selectedCategory')
const selectedDifficulty = localStorage.getItem('selectedDifficulty')

//buttons
const btnClues = document.getElementById('get-clues')
const starPlay = document.createElement('button')
const btnSubmit = document.getElementById('submit')
//input: the answer
const input = document.getElementById('userInput')

//spanTime
const spanTime = document.querySelector('span.time')

//div of attempts
let attempts = document.getElementById('attempts')

//get the img of the card
const theImg = document.querySelector('div.unknown img')

//show messages to remember to choose category and difficulty
export function showCategoryDifficulty() {
    const spanCategory = document.getElementById('cat-playing')
    const spanDifficulty = document.getElementById('mode-playing')

    if (selectedCategory && !selectedDifficulty) {
        spanCategory.textContent = selectedCategory
    } else if (!selectedCategory && selectedDifficulty) {
        spanDifficulty.textContent = selectedDifficulty
    } else if (selectedCategory && selectedDifficulty) {
        spanCategory.textContent = selectedCategory
        spanDifficulty.textContent = selectedDifficulty
    }
}

//reset values of the game in the localStorage and redirect to game screen
export function resetGame() {
    const resetBtn = document.getElementById('reset')

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('selectedCategory')
        localStorage.removeItem('selectedDifficulty')
        localStorage.removeItem('solution')
        localStorage.removeItem('categoryObject')
        localStorage.removeItem('selectedElement')
        window.location.href = 'game.html'
    })
}

//start countdown (time less to guess)
function countdown() {
    //set the time to guess
    let timeInSeconds = 2 * 60

    const countdownInterval = setInterval(() => {

        //if the game is ended, stop countdown
        if (gameLost || gameWon) {
            clearInterval(countdownInterval)
            return
        }
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = timeInSeconds % 60
      
        // get the format time
        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      
        spanTime.textContent = formattedTime;
      
        timeInSeconds--
      
        if (timeInSeconds < 0) {
          clearInterval(countdownInterval)
          spanTime.textContent = 'Time out!'
          spanTime.classList.add('timeOut')

          blockInputSubmitBtns()
          blockClueBtn()
        }

      }, 1000)
}

//create the StartButton. When we click it, the game starts
export function createStartBtn() {
    if (selectedCategory && selectedDifficulty) {
        //add button to stard the game
        starPlay.classList.add('pressToStart')
        starPlay.textContent = 'Press to start'
        spanTime.appendChild(starPlay)

        //if we click to start the game
        starPlay.addEventListener('click', startingGame)
    } 
}

//unlock the buttons and get the clues and solution of the guess game
async function startingGame() {

    //blockClueBtn and input
    btnSubmit.removeAttribute('disabled')
    input.removeAttribute('disabled')
    btnClues.removeAttribute('disabled')

    //remove the StarPlay button and start the countdown
    spanTime.removeChild(starPlay)
    countdown()
    
    //getArray of clues to guess
    const selectedElement = await selectRandomElement()
    localStorage.setItem("selectedElement", JSON.stringify(selectedElement))

    //storage the solution
    const solution = JSON.parse(localStorage.getItem("selectedElement"))
    const obtainSolution = solution.name ? solution.name.split("was")[1] : solution.title.split("was")[1]
    localStorage.setItem("solution", obtainSolution.trim())
    
    //show clues depend on the difficulty
    switch (selectedDifficulty) {
        case 'Begginer':
            showClues(selectedElement)
            showClues(selectedElement)
            showClues(selectedElement)
            break
        case 'Intermediate':
            showClues(selectedElement)
            showClues(selectedElement)
            break
        case 'Expert':
            showClues(selectedElement)
            break
    }


}

export function blockClueBtn() {
    btnClues.disabled = true
}
export function blockInputSubmitBtns() {
    btnSubmit.disabled = true
    input.disabled = true
}

export function checkAnswer() {
    btnSubmit.addEventListener('click', () => {

        // const img = photosGame[0].url
        const url = photosGame.filter(obj => obj.name === localStorage.getItem("solution"))
                                .map(obj => obj.url)[0]


        if (input.value.toLowerCase() === localStorage.getItem("solution").toLowerCase()) {
            wonGame()
            theImg.src = url

        } else {
            if (attempts.textContent > 0) {
                attempts.textContent = attempts.textContent - 1
                wrongAnswer()
            } else {
                lostGame()
            }
        }
    })
}