import {h} from 'preact'
import style from './index.styl'

export const colors = ['#0FC', '#9CF', '#96C', '#F69', '#F96', '#FF6']

const ControlPanel = ({
	color, onColorChange,
	number, onNumberChange,
	body, onBodyChange,
	onSubmit,
}) => (
	<form class={style.wrapper} onSubmit={e => (e.preventDefault(), onSubmit())}>

		<div>
			<label class={style.label}>
				<h4>cor de fundo</h4>
				<select value={color} onInput={onColorChange}>
					{colors.map(color => (
						<option value={color} key={color}>{color}</option>
					))}
				</select>
			</label>

			<label class={style.label}>
				<h4>n&ordm; da edição</h4>
				<input required value={number} onInput={onNumberChange}/>
			</label>
		</div>

		<label class={style.body}>
			<h4>descrição</h4>
			<textarea required value={body} onInput={onBodyChange}/>
			<button class={style.button} style={{color}} type='submit'>🤘</button>
		</label>

	</form>
)

export default ControlPanel
