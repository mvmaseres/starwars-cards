import { addHeaderAndFooter, addHeaderAndFooterLogout} from './templates.js'
import {showCardsCollection} from './otherFunctions/cardsCollection.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

showCardsCollection()