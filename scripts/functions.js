                            /* GAME SCREEN */

let difficultyClicked = false
let categoryClicked = false

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
            difficultyClicked = true
            NavegationtoGamePlayScreen()
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


                            /* SEND YOUR COMMENTS */
let rating = 0

export function puntuation () {
    const starsContainer = document.querySelector('#suggest-page .star-container')
    //add event to the container
    starsContainer.addEventListener('click', (event) => clickOnStar(event))
}

function clickOnStar(event) {
    //if the star is clicked
   if (event.target === event.currentTarget) return
    
   const stars = [...document.querySelectorAll('.star')]
   //remove every star-like img
   stars.forEach((star) => star.classList.remove('star-like'))

   //update the rating to the number of stars clicked
   rating = stars.indexOf(event.target) + 1

   //add the star-like img to the number of stars (from the rating result)
   for ( let i = 0; i < rating; i++) {
    stars[i].classList.add('star-like')
   }
}

                            /* LOG IN / SIGN UP */
export function passwordEye() {
    const pwShowHide = document.querySelectorAll('.eye-icon')

    pwShowHide.forEach(eyeIcon => {
        //if the eyeicon is clicked
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")

            pwFields.forEach(password => {
                //if the field is in mode password show the text
                if(password.type === "password") {
                    password.type = "text"
                    eyeIcon.classList.replace("bx-hidde", "bx-show")
                    return
                }
                //if it is not selected, change to password mode
                password.type = "password"
                eyeIcon.classList.replace("bx-show", "bx-hidde")
            })
        })
    })
}