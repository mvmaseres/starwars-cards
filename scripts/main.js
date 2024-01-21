import { addHeaderAndFooter } from './templates.js'
import { clickOnCategory, clickOnDifficulty, toGamePlayScreen } from './game.js'

addHeaderAndFooter()

/*HOME SCREEN */
/*Transition scroll of explication divs*/
//add event when we observe the intersection of every OberverRight
const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //if the object is intersecting
        if (entry.isIntersecting) {
            entry.target.classList.add('fromLeft')
        } else {
            entry.target.classList.remove('fromLeft')
        }
    })
})

//add event when we observe the intersection of every OberverLeft
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
         //if the object is intersecting
        if (entry.isIntersecting) {
            entry.target.classList.add('fromRight')
        } else {
            entry.target.classList.remove('fromRight')
        }
    })
})

//if the object that need to go toRight is in the intersection => animation
const toRight = document.querySelectorAll('.toRight')
toRight.forEach((el) => observerRight.observe(el))

//if the object that need to go toLeft is in the intersection => animation
const toLeft = document.querySelectorAll('.toLeft')
toLeft.forEach((el) => observerLeft.observe(el))


/* GAME - SCREEN */


/* LOG IN / SIGN UP */
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


/* SEND YOUR COMMENTS */
// let rating = 0

// function puntuation () {
//     const starsContainer = document.querySelector('#suggest-page .star-container')
//     //add event to the container
//     starsContainer.addEventListener('click', (event) => clickOnStar(event))
// }

// function clickOnStar(event) {
//     //if the star is clicked
//    if (event.target === event.currentTarget) return
    
//    const stars = [...document.querySelectorAll('.star')]
//    //remove every star-like img
//    stars.forEach((star) => star.classList.remove('star-like'))

//    //update the rating to the number of stars clicked
//    rating = stars.indexOf(event.target) + 1

//    //add the star-like img to the number of stars (from the rating result)
//    for ( let i = 0; i < rating; i++) {
//     stars[i].classList.add('star-like')
//    }
// }

// puntuation()



/* Bring the API */
const apiUrl = 'https://swapi.dev/api/'
const filmsUrl = 'films/'
const peopleUrl = 'people/'
const planetsUrl = 'planets/'
const speciesUrl = 'species/'
const starshipsUrl = 'starships/'
const vechiclesUrl = 'vehicles/'

async function fetchApi(apiType) {
    const response = await fetch(apiUrl + apiType)
    const data = await response.json()
    return data.results
}

const films = await fetchApi(filmsUrl)
const people = await fetchApi(peopleUrl)
const planets = await fetchApi(planetsUrl)
const species = await fetchApi(speciesUrl)
const starships = await fetchApi(starshipsUrl)
const vehicles = await fetchApi(vechiclesUrl)