import { blockInputSubmitBtns, blockClueBtn } from './functions.js'

export let gameLost = false
export let gameWon = false

//spanTime
const spanTime = document.querySelector('span.time')

export function lostGame() {
    document.getElementById('popupGameOver').style.display = 'block';
    spanTime.textContent = 'Oh no!'
    spanTime.classList.add('timeOut')

    gameLost = true

    blockInputSubmitBtns()
    blockClueBtn()
}

export function wrongAnswer() {
    document.getElementById('popupLostTry').style.display = 'block';
}

export function wonGame() {
    spanTime.textContent = 'You got it!'
    spanTime.style.color = 'green'
    spanTime.classList.add('timeOut')

    gameWon = true

    blockInputSubmitBtns()
    blockClueBtn()
}

export function closeAdvices() {
    const closeAdviceWrongClue = document.querySelector('#popupLostTry span.close-btn')
    closeAdviceWrongClue.addEventListener('click', () =>{
        closePopup('popupLostTry')
    })
    
    const closeAdviceGameOver = document.querySelector('#popupGameOver span.close-btn')
    closeAdviceGameOver.addEventListener('click', () => {
        closePopup('popupGameOver')
    })
}

// Función para cerrar el popup
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}