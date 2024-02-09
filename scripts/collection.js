import { addHeaderAndFooter, addHeaderAndFooterLogout} from './templates.js'
import {showCardsCollection, unlockWonCards, blockAllCards, navegationToGame, updatePSpan } from './CollectionLoginFunctions/cardsCollection.js'

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("principal").style.display = "block";
    }, 400);
});


if(localStorage.getItem("logged") === "true") {
    await showCardsCollection()
    addHeaderAndFooterLogout()
    updatePSpan()
    blockAllCards()
    unlockWonCards()
}  else {
    await showCardsCollection()
    addHeaderAndFooter()
    blockAllCards()
}

navegationToGame()