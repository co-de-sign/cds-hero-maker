import './control-panel.css'

export default function ControlPanel() {
  const graphics = document.querySelector('.event-cover > .brand > svg > g')
  const panel = document.querySelector('.control-panel')

  panel.querySelector('select').onchange = function(event) {
    graphics.style.fill = event.currentTarget.value
  }
}
