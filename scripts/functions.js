function authenticate() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    // Verifica el usuario y la contraseña (para demostración, solo un usuario válido)
    if (username === 'demo1' && password === 'demo100') {
        document.getElementById('message').innerText = 'Inicio de sesión exitoso'
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos'
    }
}