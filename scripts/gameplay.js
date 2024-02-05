import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else if (localStorage.getItem("logged") === "false") {
    addHeaderAndFooter()
}

const selectedCategory = localStorage.getItem('selectedCategory')
const selectedDifficulty = localStorage.getItem('selectedDifficulty')

function showCategoryDifficulty() {
    const spanCategory = document.getElementById('cat-playing')
    const spanDifficulty = document.getElementById('mode-playing')

    spanCategory.textContent = selectedCategory
    spanDifficulty.textContent = selectedDifficulty
}

showCategoryDifficulty()