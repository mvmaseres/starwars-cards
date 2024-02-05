/* Bring the API */
const apiUrl = 'https://swapi.dev/api/'
const filmsUrl = 'films/'
const peopleUrl = 'people/'
const planetsUrl = 'planets/'
const speciesUrl = 'species/'
const starshipsUrl = 'starships/'
const vechiclesUrl = 'vehicles/'

//get values of the api
async function fetchApi(apiType) {
    const response = await fetch(apiUrl + apiType)
    const data = await response.json()
    return data.results
}

//get de values of one element of the api
//const item = await fetchElement(link)
export async function fetchElement(link) {
    const response = await fetch(apiUrl + apiType)
    const data = await response.json()
    return data.results
}



export const films = await fetchApi(filmsUrl)
export const people = await fetchApi(peopleUrl)
export const planets = await fetchApi(planetsUrl)
export const species = await fetchApi(speciesUrl)
export const starships = await fetchApi(starshipsUrl)
export const vehicles = await fetchApi(vechiclesUrl)