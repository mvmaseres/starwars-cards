/* GAME - SCREEN */
/* if we do click to elements from choose-category, it will be selected */
const liCategory = document.querySelectorAll('#category-accordion li')

liCategory.forEach(item =>{
    item.addEventListener('click', function() {
        
        liCategory.forEach(elem => {
            const radio = elem.querySelector('input[type="radio"]')
            elem.style.width = radio.checked ? '40%' : '15%' // Si está marcado, 20%, sino 10%
            elem.style.borderColor = radio.checked ? '#fff' : 'black'
        })
        
        // select the element
        this.querySelector('input[type="radio"]').click()
    })
})

/* if we do click to elements from choose-difficulty, it will be selected */
const liDifficulty = document.querySelectorAll('#category-difficulty li')
console.log(liDifficulty)

liDifficulty.forEach(item => {
    item.addEventListener('click', function() {

        liDifficulty.forEach(elem => {
            const radio = elem.querySelector('input[type="radio"]')
            elem.style.borderColor = radio.checked ? '#fff' : 'black'
        })

        // select the element
        this.querySelector('input[type="radio"]').click()
    })
})

/* Bring the API */
const apiUrl = 'https://swapi.dev/api/'
const filmsUrl = 'films/'
const peopleUrl = 'people/'
const planetsUrl = 'planets/'
const speciesUrl = 'species/'
const starshipsUrl = 'starships/'
const vechiclesUrl = 'vehicles/'

async function fetchApi(apiType) {
    const response = await fetch('https://swapi.dev/api/' + apiType)
    const data = await response.json()
    return data.results
}

const films = await fetchApi(filmsUrl)
const people = await fetchApi(peopleUrl)
const planets = await fetchApi(planetsUrl)
const species = await fetchApi(speciesUrl)
const starships = await fetchApi(starshipsUrl)
const vehicles = await fetchApi(vechiclesUrl)