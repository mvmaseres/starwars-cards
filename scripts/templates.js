async function addHeaderAndFooter() {
    const response = await fetch('templates.html')

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
}

addHeaderAndFooter()