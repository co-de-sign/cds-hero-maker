import { h, Component } from 'preact'
import save from '../../utils/save'
import EventCover from '../EventCover'
import ControlPanel, {colors} from '../ControlPanel'

const FormatCSS = ({number, children: txt}) => (
	`.co-de-sign__${number} {\n  ${txt.join('').trim().replace(/\n/g, '\n  ')}\n}`
)

const sample = array => array[Math.floor(Math.random() * array.length)]

export default class App extends Component {
	state = {
		color: sample(colors),
		number: '31',
		body: "date: '18/06'; /* terça-feira */",
	}
	handleSubmit = async () => {
		try{
			await save(this.svg)
		}catch(e){
			console.error(e) // eslint-disable-line no-console
			alert(e.message || 'eita, rolou um erro.\nolha o console!')
		}
	}
	render(_, state) {
		return (
			<div>
				<EventCover background={state.color} innerRef={ref => this.svg = ref}>
					<FormatCSS number={state.number}>{state.body}</FormatCSS>
				</EventCover>
				<ControlPanel
					color={state.color} onColorChange={this.linkState('color')}
					number={state.number} onNumberChange={this.linkState('number')}
					body={state.body} onBodyChange={this.linkState('body')}
					onSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}
