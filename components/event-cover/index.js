import d from './d'
import './style.css'

const code = `.co-de-sign__31 {
  date: '18/06'; /* terça-feira */
}`

export default function eventCover() {
  const cover = document.querySelector('.event-cover')

  cover.querySelector('path').setAttribute('d', d)
  cover.querySelector('code').innerText = code
}
