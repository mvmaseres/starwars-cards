/* GAME - SCREEN */
/* if we do click to game-category, it will be selected */
const li = document.querySelectorAll('#category-accordion li')

li.forEach(item =>{
    item.addEventListener('click', function() {
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