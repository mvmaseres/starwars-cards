import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'
import { showCategoryDifficulty, resetGame, blockButtons } from './functions.js'
import { films, people, planets, species, starships, vehicles} from './api.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

showCategoryDifficulty()
resetGame()
blockButtons()

// const selectedCategory = localStorage.getItem('selectedCategory')

// function generateClue() {

//     const clueList = document.querySelector('#game-clues ul')
//     const newClue = document.createElement('li')

//     switch (true) {
//         case selectedCategory === 'Film':
//             newClue.textContent = `The name of the film is ${films[0].title}`
//             clueList.appendChild(newClue);

//             break
//         case selectedCategory === 'Character':
//             newClue.textContent = `The name of the character is ${people[0].name}`
//             clueList.appendChild(newClue);

//             break
//         case selectedCategory === 'Planet':
//             newClue.textContent = `The name of the planet is ${planets[0].name}`
//             clueList.appendChild(newClue);

//             break
//         case selectedCategory === 'Specie':
//             newClue.textContent = `The name of the specie is ${species[0].name}`
//             clueList.appendChild(newClue);

//             break
//         case selectedCategory === 'Starship':
//             newClue.textContent = `The name of the starship is ${starships[0].name}`
//             clueList.appendChild(newClue);

//             break
//         case selectedCategory === 'Vehicle':
//             newClue.textContent = `The name of the vehicle is ${vehicles[0].name}`
//             clueList.appendChild(newClue);

//             break
//         default:
//             console.error('SOMETHING WAS WRONG')
//     }

// }

// generateClue()
