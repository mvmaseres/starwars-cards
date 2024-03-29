export async function addHeaderAndFooter() {
    const response = await fetch('../html/templates.html')

    if (!response.ok) {
        console.log('Error fetching header and footer')
        return
    }

    const templates = document.createElement('template')
    templates.innerHTML = await response.text()

    const headerTemplate = templates.content.querySelector('#template-header').content
    document.querySelector('.header').appendChild(headerTemplate)

    const footerTemplate = templates.content.querySelector('#template-footer').content
    document.querySelector('.footer').appendChild(footerTemplate)

    localStorage.setItem("logged", "false")
}

export async function addHeaderAndFooterLogout() {
    const response = await fetch('../html/templates.html')

    if (!response.ok) {
        console.log('Error fetching header and footer')
        return
    }

    const templates = document.createElement('template')
    templates.innerHTML = await response.text()

    const headerTemplate = templates.content.querySelector('#header-logged').content
    document.querySelector('.header').appendChild(headerTemplate)

    const footerTemplate = templates.content.querySelector('#template-footer').content
    document.querySelector('.footer').appendChild(footerTemplate)

    //check if we click to Log out
    document.getElementById('logout-link').addEventListener('click', () => {
    localStorage.setItem("logged", "false")
})
}

export async function createDivCard(id ,src, alt) {
    const response = await fetch('templates.html')

    if (!response.ok) {
        console.log('Error fetching header and footer')
        return
    }

    const templates = document.createElement('template')
    templates.innerHTML = await response.text()

    const divCard = templates.content.querySelector('#collection-cards').content
    const img = divCard.querySelector('img')
    img.src = `${src}`
    img.alt = `${alt}`
    document.querySelector(`#${id} .card-container`).appendChild(divCard)
}