import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

const selectedCategory = localStorage.getItem('selectedCategory')
const selectedDifficulty = localStorage.getItem('selectedDifficulty')