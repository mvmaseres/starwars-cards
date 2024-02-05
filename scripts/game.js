import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'
import { films, people, planets, species, starships, vehicles, fetchElement} from './api.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

/* GAME - SCREEN */
clickOnDifficulty()
clickOnCategory()

                            /* GAME SCREEN */

let categoryClicked = false
let difficultyClicked = false

NavegationtoGamePlayScreen()

let selectedCategory
let selectedDifficulty

/* if we do click to elements from choose-difficulty, it will be selected */
function clickOnDifficulty() {
    
    const liDifficulty = document.querySelectorAll('#category-difficulty li')

    liDifficulty.forEach(item => {
        //check if there is a click event in the element
        item.addEventListener('click', function() {

            liDifficulty.forEach(elem => {
                const radio = elem.querySelector('input[type="radio"]')
                elem.style.borderColor = 'black'
                //if it is checked, change border color
                if (radio.checked) {
                    elem.style.borderColor = '#fff'
                    selectedDifficulty = elem.id
                }
            })

            // select the element
            this.querySelector('input[type="radio"]').click()
            difficultyClicked = true
            NavegationtoGamePlayScreen()
        })
    })
}

/* if we do click to elements from choose-category, it will be selected */
function clickOnCategory() {
    
    const liCategory = document.querySelectorAll('#category-accordion li')

    liCategory.forEach(item => {
        //check if there is a click event in the element
        item.addEventListener('click', function() {
            
            liCategory.forEach(elem => {
                const radio = elem.querySelector('input[type="radio"]')
                elem.style.width = '15%'
                elem.style.borderColor = 'black'
                //if it is checked, some width
                if (radio.checked) {
                    elem.style.width = '40%'
                    elem.style.borderColor = '#fff'
                    selectedCategory = elem.id
                }
            })
            
            // select the element
            this.querySelector('input[type="radio"]').click()
            categoryClicked = true
            NavegationtoGamePlayScreen()
        })
    })
}

function randomClues(type) {
    return Math.floor(Math.random() * type.length + 1)
}


//BUTTON TO GAME PLAY
function NavegationtoGamePlayScreen() {

    const twoUnchosen = document.getElementById('unchosen')
    const catUnchosen = document.getElementById('unchosenCategory')
    const diffUnchosen = document.getElementById('unchosenDifficulty')

    const gamePlayButton = document.getElementById('gameplay-button')
    gamePlayButton.addEventListener('click', () => {

        if(difficultyClicked && categoryClicked) {
        localStorage.setItem('selectedCategory', selectedCategory)
        localStorage.setItem('selectedDifficulty', selectedDifficulty)
        
        switch (true) {
            case selectedCategory === 'Film':
                localStorage.setItem('categoryObject', JSON.stringify(films[randomClues(films)]))
                break
            case selectedCategory === 'Character':
                localStorage.setItem('categoryObject', JSON.stringify(people[randomClues(people)]))
                break
            case selectedCategory === 'Planet':
                localStorage.setItem('categoryObject', JSON.stringify(planets[randomClues(planets)]))
                break
            case selectedCategory === 'Specie':
                localStorage.setItem('categoryObject', JSON.stringify(species[randomClues(species)]))
                break
            case selectedCategory === 'Starship':
                localStorage.setItem('categoryObject', JSON.stringify(starships[randomClues(starships)]))
                break
            case selectedCategory === 'Vehicle':
                localStorage.setItem('categoryObject',  JSON.stringify(vehicles[randomClues(vehicles)]))
                break
        }

        window.location.href = 'gameplay.html'

        } else if (difficultyClicked === false && categoryClicked === false ) {
            twoUnchosen.classList.remove('hide')
            catUnchosen.classList.add('hide')
            diffUnchosen.classList.add('hide')
        } else if (difficultyClicked && categoryClicked === false ) {
            catUnchosen.classList.remove('hide')
            twoUnchosen.classList.add('hide')
            diffUnchosen.classList.add('hide')
        } else {
            diffUnchosen.classList.remove('hide')
            twoUnchosen.classList.add('hide')
            catUnchosen.classList.add('hide') 
        }
    })
}



