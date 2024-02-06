import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'
import { showCategoryDifficulty, resetGame, blockButtons } from './gameFunctions/functions.js'
import showClues from './gameFunctions/dataFunctions.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

showCategoryDifficulty()
resetGame()
blockButtons()

const buttonClues = document.getElementById('get-clues')

buttonClues.addEventListener('click', () =>
    showClues()
)