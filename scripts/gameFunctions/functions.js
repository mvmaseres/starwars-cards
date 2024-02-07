import showClues from "./dataFunctions.js"

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
        window.location.href = 'game.html'
    })
}

const btnSubmit = document.getElementById('submit')
const btnClues = document.getElementById('get-clues')

export function countdown() {
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
        }
      }, 1000)
}

export function blockButtons() {
    const spanTime = document.querySelector('span.time')
    const starPlay = document.createElement('button')

    if (selectedCategory && selectedDifficulty) {
        starPlay.classList.add('pressToStart')
        starPlay.textContent = 'Press to start'
        spanTime.appendChild(starPlay)

        starPlay.addEventListener('click', () => {
        btnSubmit.removeAttribute('disabled')
        btnClues.removeAttribute('disabled')
        spanTime.removeChild(starPlay)
        countdown()
        showClues()
        })
    } 
}