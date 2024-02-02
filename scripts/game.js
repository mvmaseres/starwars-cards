import { addHeaderAndFooter } from './templates.js'

addHeaderAndFooter()

/* GAME - SCREEN */
clickOnDifficulty()
clickOnCategory()

                            /* GAME SCREEN */

let categoryClicked = false
let difficultyClicked = false

export let selectedCategory
export let selectedDifficulty

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

//BUTTON TO GAME PLAY
function NavegationtoGamePlayScreen() {
    if(difficultyClicked && categoryClicked) {
        const gamePlayButton = document.getElementById('gameplay-button')

        gamePlayButton.addEventListener('click', () => {
            window.location.href = 'gameplay.html'
        })
}}