import {showClues, selectRandomElement} from "./dataFunctions.js"

const selectedCategory = localStorage.getItem('selectedCategory')
const selectedDifficulty = localStorage.getItem('selectedDifficulty')

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

const btnSubmit = document.getElementById('submit')
const btnClues = document.getElementById('get-clues')

function countdown() {
    const timeSpan = document.querySelector('span.time')

    //set the time to guess
    let timeInSeconds = 2 * 60

    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = timeInSeconds % 60
      
        // get the format time
        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      
        timeSpan.textContent = formattedTime;
      
        timeInSeconds--
      
        if (timeInSeconds < 0) {
          clearInterval(countdownInterval)
          timeSpan.textContent = 'Time out!'
          timeSpan.classList.add('timeOut')

          btnSubmit.disabled = true
          btnClues.disabled = true
          input.disabled = true
        }
      }, 1000)
}

const input = document.getElementById('userInput')
const spanTime = document.querySelector('span.time')
const starPlay = document.createElement('button')



export function createStartBtn() {

    if (selectedCategory && selectedDifficulty) {
        //add button to stard the game
        starPlay.classList.add('pressToStart')
        starPlay.textContent = 'Press to start'
        spanTime.appendChild(starPlay)

        //if we click to start the game
        starPlay.addEventListener('click', unblockButtons)
    } 
}

async function unblockButtons() {

    //blockButtons and input
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
    localStorage.setItem("solution", obtainSolution)
    
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

export function blockButtons() {
    btnClues.disabled = true
}
