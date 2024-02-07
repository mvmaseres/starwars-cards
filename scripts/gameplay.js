import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'
import { showCategoryDifficulty, resetGame, createStartBtn, blockButtons } from './gameFunctions/functions.js'
import {showClues} from './gameFunctions/dataFunctions.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

showCategoryDifficulty()
resetGame()
createStartBtn()

const btnClues = document.getElementById('get-clues')
let attempts = document.getElementById('attempts')

btnClues.addEventListener('click', () => {

    if (attempts.textContent > 0) {
        attempts.textContent = attempts.textContent - 1
        showClues(JSON.parse(localStorage.getItem("selectedElement")))
    } else {
        blockButtons()
    }
    }
)