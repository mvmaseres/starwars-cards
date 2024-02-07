import { regularFetch } from '../api.js'
import Film from '../classes/Film.js'
import People from '../classes/People.js'
import Planet from '../classes/Planet.js'
import Specie from '../classes/Specie.js'
import Starship from '../classes/Starship.js'
import Vehicle from '../classes/Vehicle.js'


// export default async function showClues() {
//     const listClues = document.querySelector('#clues ul')

//     const liElement = document.createElement('li')

//     switch (true) {
//         case selectedCategory === 'Film':
//             //es una array de objetos
//             const storedFilms = JSON.parse(localStorage.getItem('categoryObject'))
//             let randomFilm = new Film (randomElement(storedFilms))
//             liElement.textContent = await obtainClue(randomFilm)
//             break
//         case selectedCategory === 'Character':
//             const storedPeople = JSON.parse(localStorage.getItem('categoryObject'))
//             let randomPeople = new People (randomElement(storedPeople))
//             liElement.textContent = await obtainClue(randomPeople)
//             break
//         case selectedCategory === 'Planet':
//             const storedPlanet = JSON.parse(localStorage.getItem('categoryObject'))
//             let randomPlanet = new Planet (randomElement(storedPlanet))
//             liElement.textContent = await obtainClue(randomPlanet)
//             break
//         case selectedCategory === 'Specie':
//             const storedSpecie = JSON.parse(localStorage.getItem('categoryObject'))
//             let randomSpecie = new Specie (randomElement(storedSpecie))
//             liElement.textContent = await obtainClue(randomSpecie)
//             break
//         case selectedCategory === 'Starship':
//             const storedStarship = JSON.parse(localStorage.getItem('categoryObject'))
//             let randomStarship = new Starship (randomElement(storedStarship))
//             liElement.textContent = await obtainClue(randomStarship)
//             break
//         case selectedCategory === 'Vehicle':
//             const storedVehicle = JSON.parse(localStorage.getItem('categoryObject'))
//             let randomVehicle = new Vehicle (randomElement(storedVehicle))
//             liElement.textContent = await obtainClue(randomVehicle)
//             break
//     }

//     listClues.appendChild(liElement);

// }

const selectedCategory = localStorage.getItem('selectedCategory')


let selectedElement = true; // Variable para almacenar el elemento seleccionado
let aux = []

export default async function showClues() {
    const listClues = document.querySelector('#clues ul');
    const liElement = document.createElement('li');

    if (selectedElement) {
        selectedElement = await selectRandomElement();
    }

    const clue = await obtainClue(selectedElement);
    
    //if the clue
    if (aux.includes(clue) || clue === 0) {
        selectedElement = await selectRandomElement();
        return showClues();
    } else {
        aux.push(clue)
        liElement.textContent = clue;
        listClues.appendChild(liElement);
    }
}

async function selectRandomElement() {
    let storedCategory = JSON.parse(localStorage.getItem('categoryObject'));
    let randomElem;

    switch (selectedCategory) {
        case 'Film':
            randomElem = new Film(randomElement(storedCategory));
            break;
        case 'Character':
            randomElem = new People(randomElement(storedCategory));
            break;
        case 'Planet':
            randomElem = new Planet(randomElement(storedCategory));
            break;
        case 'Specie':
            randomElem = new Specie(randomElement(storedCategory));
            break;
        case 'Starship':
            randomElem = new Starship(randomElement(storedCategory));
            break;
        case 'Vehicle':
            randomElem = new Vehicle(randomElement(storedCategory));
            break;
    }

    return randomElem;
}

//elemento random de la array de objetos
function randomElement(type) {
    let randomIndex = Math.floor(Math.random() * type.length)
    return type[randomIndex]
}

//elemento random, excepto el titulo o el name del array
function randomClue(type) {
debugger
     let vari = Math.floor(Math.random() * type.length)
    console.log(vari)
     return !vari ? vari + 1 : vari
}

async function obtainClue(elem) {

    //devuelve array
    const elementArray = Object.values({...elem})
    console.log(elementArray)
    const randomValue = elementArray[randomClue(elementArray)]
debugger
    console.log(randomValue)

    if (randomValue instanceof Array && randomValue.length === 0){
        return 0

    } else if (randomValue instanceof Array && randomValue.length === 1) {
        //get the link and find the value in the api
        const sentence = randomValue[0]
        const extractUrl = sentence.match(/https:\/\/\S+/)[0] // Obtener solo la URL coincidente
        const newElem = await regularFetch(extractUrl)
        const values = Object.values(newElem)
        const firstValue = values[0]

        //update sentence
        const updatedElem = sentence.replace(/https:\/\/\S+/, firstValue)
        console.log("I AM IN AN ARRAY OF 1 VALUE")
        return updatedElem
        
    } else if (randomValue instanceof Array && randomValue.length > 1) {
        const selectedElement = randomValue[randomClue(randomValue)]

        const extractUrl = selectedElement.split(' ').find(element => element.startsWith('https://'))
        const newElem = await regularFetch(extractUrl)
        const values = Object.values(newElem)
        const firstValue = values[0]

        // update sentence
        const updatedElem = selectedElement.replace(/https:\/\/\S+/, firstValue)
        console.log("I AM IN AN ARRAY OF MULTUPLY VALUES")
        return updatedElem

    } else {
debugger
        if (randomValue.length > 200) {
debugger
            console.log("I HAVE MORE THAN 200CHARACTERS")
            return randomValue.substring(0, 50) + '...';

        } else if (randomValue.includes('https://')) {
            const extractUrl = randomValue.split(' ').find(element => element.startsWith('https://'))
            const newElem = await regularFetch(extractUrl)
            const values = Object.values(newElem)
            const firstValue = values[0]

            // update sentence
            const updatedElem = selectedElement.replace(/https:\/\/\S+/, firstValue)
            console.log("I AM NOT IN AN ARRAY BUT I HAVE A LINK")
            return updatedElem
        } else {
            console.log("I AM THE DEFALUT OPTION")
            return randomValue
        }
    }
}