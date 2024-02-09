import { addHeaderAndFooter, addHeaderAndFooterLogout } from './templates.js'

if(localStorage.getItem("logged") === "true") {
    addHeaderAndFooterLogout()
}  else {
    addHeaderAndFooter()
}