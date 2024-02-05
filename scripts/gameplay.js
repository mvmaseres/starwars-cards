import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'
import { showCategoryDifficulty, resetGame, blockButtons } from './functions.js'
// import { films, people, planets, species, starships, vehicles, fetchElement} from './api.js'
import Film from './classes/Film.js'
import People from './classes/People.js'
import Planet from './classes/Planet.js'
import Specie from './classes/Specie.js'
import Starship from './classes/Starship.js'
import Vehicle from './classes/Vehicle.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

showCategoryDifficulty()
resetGame()
blockButtons()

const selectedCategory = localStorage.getItem('selectedCategory')

function showClues() {
    const listClues = document.querySelector('#clues ul')

    const liElement = document.createElement('li')


    switch (true) {
        case selectedCategory === 'Film':
            const storedFilms = Object.values(new Film (JSON.parse(localStorage.getItem('categoryObject'))))
            liElement.textContent = storedFilms[randomClues(storedFilms)]
            break
        case selectedCategory === 'Character':
            const storedPeople = Object.values(new People (JSON.parse(localStorage.getItem('categoryObject'))))
            liElement.textContent = storedPeople[randomClues(storedPeople)]
            break
        case selectedCategory === 'Planet':
            const storedPlanet = Object.values(new Planet (JSON.parse(localStorage.getItem('categoryObject'))))
            liElement.textContent = storedPlanet[randomClues(storedPlanet)]
            break
        case selectedCategory === 'Specie':
            const storedSpecie = Object.values(new Specie (JSON.parse(localStorage.getItem('categoryObject'))))
            liElement.textContent = storedSpecie[randomClues(storedSpecie)]
            break
        case selectedCategory === 'Starship':
            const storedStarship = Object.values(new Starship (JSON.parse(localStorage.getItem('categoryObject'))))
            liElement.textContent = storedStarship[randomClues(storedStarship)]
            break
        case selectedCategory === 'Vehicle':
            const storedVehicle = Object.values(new Vehicle (JSON.parse(localStorage.getItem('categoryObject'))))
            liElement.textContent = storedVehicle[randomClues(storedVehicle)]
            break
    }

    listClues.appendChild(liElement)
}

showClues()

function randomClues(type) {
    return Math.floor(Math.random() * type.length + 1)
}

