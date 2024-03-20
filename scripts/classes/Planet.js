export default class Planet {
    constructor(data) {
        console.log(data);
        this.name = `The planet was ${data.name}`
        this.rotation_period = `The rotation period is ${data.rotation_period}`
        this.orbital_period = `The orbital period is ${data.orbital_period}`
        this.diameter = `Its diameter is ${data.diameter}`
        this.climate = `The climate is ${data.climate}`
        this.gravity = `The gravity is ${data.gravity}`
        this.terrain = `Its terrain is ${data.terrain}`
        this.surface_water = `Its surface water is ${data.surface_water}`
        this.population = `The population is ${data.population}`
    }
}