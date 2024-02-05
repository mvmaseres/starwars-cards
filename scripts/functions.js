export function authenticate() {

    const btn = document.querySelector('button')
    btn.addEventListener("click", (event) => {

        event.preventDefault()
        
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const messageContainer = document.getElementById('message-container')
        const wrongMessage = document.getElementById('wrong-container')
        const loginDiv = document.getElementById('login-page')
        const main = document.querySelector('main')
        const loadingSpinner = document.getElementById('loading-spinner');

        //Check the user and password. Just a one valid option
        if (username === 'demo1' && password === 'demo100') {
            
            //remove the login form
            loginDiv.classList.add('hide')

            //aply some styles
            main.style.display = 'flex'
            main.style.justifyContent = 'center'
            main.style.marginTop = '2rem'
            wrongMessage.classList.add('hide')

            //show the message to redirect and spinner to redirect to other page
            messageContainer.classList.remove('hide')
            loadingSpinner.classList.remove('hide')
            setTimeout(() => {
                window.location.href = 'game.html'
            }, 3000)

            //logged is true
            localStorage.setItem("logged", "true")

        } else {
            //show a message to wrong user o password
            wrongMessage.classList.remove('hide')
        }
})
    
}

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
    starPlay.classList.add('pressToStart')
    starPlay.textContent = 'Press to start'
    spanTime.appendChild(starPlay)

    starPlay.addEventListener('click', () => {
        btnSubmit.removeAttribute('disabled')
        btnClues.removeAttribute('disabled')
        spanTime.removeChild(starPlay)
        countdown()
    })
}