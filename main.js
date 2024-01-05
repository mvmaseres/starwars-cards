const apiUrl = 'https://swapi.dev/api/'
const filmsUrl = 'films/'
const peopleUrl = 'people/'
const planetsUrl = 'planets/'
const speciesUrl = 'species/'
const starshipsUrl = 'starships/'
const vechiclesUrl = 'vehicles/'

async function fetchAPI() {

    const responseFilms = await fetch(apiUrl + filmsUrl)
    const data = await responseFilms.json()
    const films = data.results
    console.log(films)

}

fetchAPI()