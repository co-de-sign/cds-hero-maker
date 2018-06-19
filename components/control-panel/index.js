import './style.css'

function formatCode(current, replacements) {
  const regex = /\.co-de-sign__(\d+) {\n((?:.|\n)*)\n}/.exec(current)
  const number = regex[1]
  const body = regex[2]

  const formattedBody = (replacements.body || body).replace(/\n/g, '\n\t')

  return PR.prettyPrintOne(`.co-de-sign__${replacements.number || number} {\n${formattedBody}\n}`, 'css')
}

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

    code.innerHTML = formatCode(currentValue, { number })
  }
  }
}
