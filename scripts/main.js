import { addHeaderAndFooter } from './templates.js'

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
