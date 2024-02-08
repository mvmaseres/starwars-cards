import { createDivCard } from '../templates.js'
import { photosGame } from '../data/photos.js'

export async function showCardsCollection() {

    const promises = [];


    photosGame.film.forEach(elem => promises.push(createDivCard('film', elem.url, elem.name)))
    
    photosGame.planet.forEach(elem => promises.push(createDivCard('planet', elem.url, elem.name)))
    
    photosGame.specie.forEach(elem => promises.push(createDivCard('specie', elem.url, elem.name)))

    photosGame.starship.forEach(elem => promises.push(createDivCard('starship', elem.url, elem.name)))
    
    photosGame.vehicle.forEach(elem => promises.push(createDivCard('vehicle', elem.url, elem.name)))
    
    photosGame.character.forEach(elem => promises.push(createDivCard('people', elem.url, elem.name)))

    await Promise.all(promises);

}

export function unlockWonCards() {
    const wonCards = JSON.parse(localStorage.getItem("wonCards"))
    const divCards = document.querySelectorAll('div.card')
    
    divCards.forEach(card => {
        const img = card.querySelector('img');
        if (wonCards.includes(img.alt)) {
            card.style.filter = "none"
        }
    })

}

export function blockAllCards() {
    const divCards = document.querySelectorAll('div.card')

    divCards.forEach(divCard => divCard.style.filter = "grayscale(100%)")
} 

export function navegationToGame() {
    document.getElementById('navegationToGame').addEventListener('click', () => {
    window.location.href="game.html"
})
}

export function updatePSpan() {
    const span = document.querySelector('#principal span')
    span.textContent = "Play to win more cards"
}

