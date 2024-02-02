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
        const loadingSpinner = document.getElementById('loading-spinner');

        //Check the user and password. Just a one valid option
        if (username === 'demo1' && password === 'demo100') {
            
            //remove the login form
            loginDiv.classList.add('hide')

            //aply some styles
            main.style.display = 'flex'
            main.style.justifyContent = 'center'
            main.style.marginTop = '2rem'
            wrongMessage.classList.add('hide')

            //show the message to redirect and spinner to redirect to other page
            messageContainer.classList.remove('hide')
            loadingSpinner.classList.remove('hide');
            setTimeout(() => {
                window.location.href = 'game.html';
            }, 3000);

            //logged is true
            localStorage.setItem("logged", "true")

        } else {
            //show a message to wrong user o password
            wrongMessage.classList.remove('hide')
        }
})
    
}