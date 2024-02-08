import { addHeaderAndFooter, addHeaderAndFooterLogout, addCardsToCollection } from './templates.js'
import { photosGame } from './data/photos.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

