import {h} from 'preact'
import Container from '../Container'
import style from './index.styl'

export const colors = ['#0FC', '#9CF', '#96C', '#F69', '#F96', '#FF6']

const ControlPanel = ({
	color, onColorChange,
	number, onNumberChange,
	body, onBodyChange,
	onSubmit,
}) => (
	<Container as='form' onSubmit={e => (e.preventDefault(), onSubmit())}>
		<div class={style.controls}>
			<label class={style.label}>
				<h4>n&ordm; da edição</h4>
				<input required size={4} value={number} onInput={onNumberChange}/>
			</label>

			<label class={style.label}>
				<h4>cor de fundo</h4>
				<select value={color} onInput={onColorChange}>
					{colors.map(color => (
						<option value={color} key={color}>{color}</option>
					))}
				</select>
			</label>
		</div>

		<label class={style.body}>
			<h4>descrição</h4>
			<textarea required value={body} onInput={onBodyChange}/>
			<button class={style.button} style={{color}} type='submit'>🤘</button>
		</label>
	</Container>
)

export default ControlPanel
