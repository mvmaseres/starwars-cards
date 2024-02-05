export default class Starship {
    constructor(data) {
        this.name = `The name of the starship was ${data.name}`
        this.model = `Model: ${data.model}`
        this.manufacturer = `${data.manufacturer} is its manufacturer`
        this.cost_in_credits = `Its cost in credits is ${data.cost_in_credits}`
        this.length = `Its length is ${data.length}`
        this.max_atmosphering_speed = `Max atmosphering speed: ${data.max_atmosphering_speed}`
        this.passengers = `Passengers capacity: ${data.passengers}`
        this.cargo_capacity = `The cargo capacity is ${data.cargo_capacity}`
        this.starship_class = `Starship class: ${data.starship_class}`
        this.pilots = Array.isArray(data.pilots) ? data.pilots.map(pilot => `${pilot} drives this starships`) : []
        this.films = Array.isArray(data.films) ? data.films.map(film => `This starship appears in the film ${film}`) : []
    }
}