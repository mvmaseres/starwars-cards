import { addHeaderAndFooter } from './templates.js'
addHeaderAndFooter()
puntuation()

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