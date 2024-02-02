import { addHeaderAndFooter } from './templates.js'

addHeaderAndFooter()

/* LOG IN / SIGN UP */
const pwShowHide = document.querySelectorAll('.eye-icon')

pwShowHide.forEach(eyeIcon => {
    //if the eyeicon is clicked
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")

        pwFields.forEach(password => {
            //if the field is in mode password show the text
            if(password.type === "password") {
                password.type = "text"
                eyeIcon.classList.replace("bx-hidde", "bx-show")
                return
            }
            //if it is not selected, change to password mode
            password.type = "password"
            eyeIcon.classList.replace("bx-show", "bx-hidde")
        })
    })
})
