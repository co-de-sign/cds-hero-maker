import './style.css'

export default function ControlPanel() {
  const panel = document.querySelector('.control-panel')
  const cover = document.querySelector('.event-cover')

  const brand = cover.querySelector('.brand')
  const graphics = brand.querySelector('svg > g')

  panel.querySelector('select').onchange = function(event) {
    const selectedColor = event.currentTarget.value
    const green = parseInt(selectedColor.slice(3, 5), 16)

    graphics.style.fill = green > 0xA0 ? '#000' : '#fff'
    brand.style.backgroundColor = selectedColor
  }

  const code = cover.querySelector('code')

  panel.querySelector('.number > input').onkeyup = function(event) {
    const currentValue = code.innerText
    const number = event.currentTarget.value

    code.innerHTML = PR.prettyPrintOne(`.co-de-sign__${number} {
  date: '18/06; /* terça-feira /*'
}`, 'css')
  }
}
