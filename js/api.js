const text = document.querySelector('.about-content p')
const api = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

const dataFetch = async () => {
    const data = await (await fetch(api)).json()
    const mainText = data.source[0].annotations.source_description
    text.innerHTML = mainText
}

dataFetch()