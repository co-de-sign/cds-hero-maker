import './style.css'

const refColor = {
  '#00ffcc': 'black',
  '#99ccff': 'black',
  '#ffff66': 'black',
  '#9966cc': 'white',
  '#ff6699': 'white',
  '#ff9966': 'white'
}

export default () => {
  const panel = document.querySelector('.control-panel')
  const select = panel.querySelector('select')
  const logo = document.querySelector('.logo')
  const edition = panel.querySelector('.number > input')
  const description = panel.querySelector('.body > textarea')

  select.onchange = (event) => {
    const newColor = event.currentTarget.value

    const square = document.querySelector('.brand')

    logo.setAttribute('fill', refColor[newColor])

    square.style.backgroundColor = newColor
  }

  edition.onkeyup = (event) => {
    const value = event.currentTarget.value

    const code = document.querySelector('.event-cover > .info > code')


    code.innerHTML = PR.prettyPrintOne(`.co-de-sign__${value} {
  ${description.value}
}`)
  }

  description.onkeyup = (event) => {
    const value = event.currentTarget.value

    const code = document.querySelector('.event-cover > .info > code')

    code.innerHTML = PR.prettyPrintOne(
`.co-de-sign__${edition.value} {
  ${value}
}`)
  }
}
