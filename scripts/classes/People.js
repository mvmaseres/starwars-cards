export default class People {
    constructor(data) {
        this.name = `The name was ${data.name}`
        this.height = `The character height is ${data.height}`
        this.mass = `The character weighs is ${data.mass}`
        this.hair_color = `Hair color: ${data.hair_color}`
        this.skin_color = `Skin color: ${data.skin_color}`
        this.eye_color = `The eye color of the character is ${data.eye_color}`
        this.birth_year = `Birth year: ${data.birth_year}`
        this.gender = `Gender: ${data.gender}`
        this.homeworld = `This character comes from ${data.homeworld}`
        this.films = Array.isArray(data.films) ? data.films.map(film => `This character appears in the film ${film}`) : []
        this.species = Array.isArray(data.species) ? data.species.map(specie => `The specie of the character is ${specie}`) : []
        this.vehicles = Array.isArray(data.vehicles) ? data.vehicles.map(vehicle => `The character drives the ${vehicle}`) : []
        this.starships = Array.isArray(data.starships) ? data.starships.map(starship => `The character drives the ${starship}`) : []
    }
}
