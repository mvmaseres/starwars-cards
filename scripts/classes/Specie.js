export default class Species {
    constructor(data) {
        this.name = `The name was ${data.name}`
        this.classification = `Type: ${data.classification}`
        this.designation = `It species is ${data.designation}`
        this.average_height = `The average height of this specie is ${data.average_height}`
        this.skin_colors = `The skin colors of this specie are ${data.skin_colors}`
        this.hair_colors = `The hair colors of this specie are ${data.hair_colors}`
        this.eye_colors = `The eye colors of this specie are ${data.eye_colors}`
        this.average_lifespan = `Lifespan: ${data.average_lifespan}`
        this.homeworld = `This species comes from ${data.homeworld}`
        this.language = `The language that they speak is ${data.language}`
        this.people = Array.isArray(data.people) ? data.people.map(character => `${character} is of this specie `) : []
        this.films = Array.isArray(data.films) ? data.films.map(film => `This specie appears in the film ${film}`) : []
    }
}