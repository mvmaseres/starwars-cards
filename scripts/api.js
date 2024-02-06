/* Bring the API */
export const apiUrl = 'https://swapi.dev/api/'
export const filmsUrl = 'films/'
export const peopleUrl = 'people/'
export const planetsUrl = 'planets/'
export const speciesUrl = 'species/'
export const starshipsUrl = 'starships/'
export const vechiclesUrl = 'vehicles/'

// get values of the api
export async function fetchApi(apiType) {
    const response = await fetch(apiUrl + apiType)
    const data = await response.json()
    return data.results
}

export async function regularFetch(link) {
    const response = await fetch(link)
    const data = await response.json()
    return data
}