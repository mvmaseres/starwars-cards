export function authenticate() {

    const btn = document.querySelector('button')
    btn.addEventListener("click", (event) => {

        event.preventDefault()
        
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const messageContainer = document.getElementById('message-container')
        const wrongMessage = document.getElementById('wrong-container')
        const loginDiv = document.getElementById('login-page')
        const main = document.querySelector('main')

        // Verifica el usuario y la contraseña (para demostración, solo un usuario válido)
        if (username === 'demo1' && password === 'demo100') {
            messageContainer.classList.remove('hide')
            loginDiv.classList.add('hide')
            main.style.display = 'flex'
            main.style.justifyContent = 'center'
            main.style.marginTop = '2rem'
            wrongMessage.classList.add('hide')

        } else {
            wrongMessage.classList.remove('hide')
        }
})
    
}