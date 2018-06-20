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

  select.onchange = (event) => {
    const newColor = event.currentTarget.value

    const square = document.querySelector('.brand')

    logo.setAttribute('fill', refColor[newColor])

    square.style.backgroundColor = newColor
  }
}
