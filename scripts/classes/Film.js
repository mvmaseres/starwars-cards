export default class Film {
    constructor(data) {
        console.log(data)
        this.title = `The title was ${data.title}`
        this.episode_id = `Episode ${data.episode_id}`
        this.opening_crawl = data.opening_crawl
        this.director = `Directors: ${data.director}`
        this.producer = `Producers: ${data.producer}`
        this.release_date  = `It was first realased in the USA on ${data.release_date}`
        this.characters = Array.isArray(data.characters) ? data.characters.map(character => `${character} appears in the film`) : []
        this.planets = Array.isArray(data.planets) ? data.planets.map(planet => `In the film appears the planet ${planet}`) : []
        this.starships = Array.isArray(data.starships) ? data.starships.map(starship => `${starship} appears in the film`) : []
        this.vehicles = Array.isArray(data.vehicles) ? data.vehicles.map(vehicle => `${vehicle} appears in the film`) : []
        this.species = Array.isArray(data.species) ? data.species.map(specie => `${specie} species appears`) : []
    }
}