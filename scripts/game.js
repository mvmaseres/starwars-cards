/* if we do click to elements from choose-difficulty, it will be selected */
export function clickOnDifficulty() {
    const liDifficulty = document.querySelectorAll('#category-difficulty li')

    liDifficulty.forEach(item => {
        //check if there is a click event in the element
        item.addEventListener('click', function() {

            liDifficulty.forEach(elem => {
                const radio = elem.querySelector('input[type="radio"]')
                //if it is checked, change border color
                elem.style.borderColor = radio.checked ? '#fff' : 'black'
            })

            // select the element
            this.querySelector('input[type="radio"]').click()
        })
    })
}

/* if we do click to elements from choose-category, it will be selected */
export function clickOnCategory() {
    const liCategory = document.querySelectorAll('#category-accordion li')

    liCategory.forEach(item => {
        //check if there is a click event in the element
        item.addEventListener('click', function() {
            
            liCategory.forEach(elem => {
                const radio = elem.querySelector('input[type="radio"]')
                //if it is checked, some width
                elem.style.width = radio.checked ? '40%' : '15%'
                elem.style.borderColor = radio.checked ? '#fff' : 'black'
            })
            
            // select the element
            this.querySelector('input[type="radio"]').click()

        })
    })
}

//BUTTON TO GAME PLAY
export function navegationToGamePlayScreen() {
    const gamePlayButton = document.getElementById('gameplay-button')

    gamePlayButton.addEventListener('click', () => {
        window.location.href = 'gameplay.html'
    })
}