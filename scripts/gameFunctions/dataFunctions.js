import { regularFetch } from '../data/api.js'
import Film from '../classes/Film.js'
import People from '../classes/People.js'
import Planet from '../classes/Planet.js'
import Specie from '../classes/Specie.js'
import Starship from '../classes/Starship.js'
import Vehicle from '../classes/Vehicle.js'

const selectedCategory = localStorage.getItem('selectedCategory')
let aux = []

export async function showClues(selectedElement) {
    const listClues = document.querySelector('#clues ul')
    const liElement = document.createElement('li')

    let clue = await obtainClue(selectedElement)
    
    if (aux.includes(clue) || clue === 0) {
        return showClues(selectedElement);
    } else {
        aux.push(clue)
        liElement.textContent = clue
        listClues.appendChild(liElement)
    }
}

export async function selectRandomElement() {
    let storedCategory = JSON.parse(localStorage.getItem('categoryObject'));
    let randomElem;

    switch (selectedCategory) {
        case 'Film':
            randomElem = new Film(await randomFilmElement(storedCategory));
            break;
        case 'Character':
            randomElem = new People(await randomElement(storedCategory));
            break;
        case 'Planet':
            randomElem = new Planet(await randomElement(storedCategory));
            break;
        case 'Specie':
            randomElem = new Specie(await randomElement(storedCategory));
            break;
        case 'Starship':
            randomElem = new Starship(await randomElement(storedCategory));
            break;
        case 'Vehicle':
            randomElem = new Vehicle(await randomElement(storedCategory));
            break;
    }
    return randomElem;
}

//elemento random de la array de objetos
async function randomElement(type) {
    let randomIndex = Math.floor(Math.random() * type.length)
    let randomElementToGuess = await regularFetch(type[randomIndex].url)
    return randomElementToGuess.result.properties
}

async function randomFilmElement(type) {
    let randomIndex = Math.floor(Math.random() * type.length)
    let randomElementToGuess = type[randomIndex]
    return randomElementToGuess.properties
}

//elemento random, excepto el titulo o el name del array
function randomClue(type) {
     let vari = Math.floor(Math.random() * type.length)
     return !vari ? vari + 1 : vari
}

async function obtainClue(elem) {
    //returns array
    const elementArray = elem ? Object.keys(elem).map(key => elem[key]) : 0;

    //return randomElement of the array
    const randomValue = elementArray[randomClue(elementArray)]

    if ((randomValue instanceof Array && randomValue.length === 0) || randomValue === undefined){
        return 0

    } else if (randomValue instanceof Array && randomValue.length === 1) {
        //get the link and find the value in the api
        const sentence = randomValue[0]
        const extractUrl = sentence.match(/https:\/\/\S+/)[0] // Obtener solo la URL coincidente
        const newElem = await regularFetch(extractUrl)
        const values = Object.values(newElem.result)
        const nameValue = values[0].name

        //update sentence
        const updatedElem = sentence.replace(/https:\/\/\S+/, nameValue)
        return updatedElem
        
    } else if (randomValue instanceof Array && randomValue.length > 1) {
        const selectedElement = randomValue[randomClue(randomValue)]

        const extractUrl = selectedElement.split(' ').find(element => element.startsWith('https://'))
        const newElem = await regularFetch(extractUrl)
        const values = Object.values(newElem.result)
        const nameValue = values[0].name

        // update sentence
        const updatedElem = selectedElement.replace(/https:\/\/\S+/, nameValue)
        return updatedElem

    } else {
        if (randomValue.length > 200) {
            return randomValue.substring(0, 50) + '...';

        } else if (randomValue.includes('https://')) {
            const extractUrl = randomValue.split(' ').find(element => element.startsWith('https://'))
            const newElem = await regularFetch(extractUrl)
            const values = Object.values(newElem.result)
            const nameValue = values[0].name

            // update sentence
            const updatedElem = randomValue.replace(/https:\/\/\S+/, nameValue)
            return updatedElem
        } else {
            return randomValue
        }
    }
}