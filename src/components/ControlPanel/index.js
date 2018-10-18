import { h } from 'preact'

export const colors = ['#0FC', '#9CF', '#96C', '#F69', '#F96', '#FF6']

const ControlPanel = ({
	color, onColorChange,
	number, onNumberChange,
	body, onBodyChange,
	onSubmit,
}) => (
	<form class='control-panel' onSubmit={e => (e.preventDefault(), onSubmit())}>

		<label class='color'>
			<h3>Cor de fundo</h3>
			<select class='input' value={color} onInput={onColorChange}>
				{colors.map(color => (
					<option value={color} key={color}>{color}</option>
				))}
			</select>
		</label>

		<label class='number'>
			<h3>Número da edição</h3>
			<input required class='input' value={number} onInput={onNumberChange}/>
		</label>

		<label class='body'>
			<h3>Conteúdo do evento</h3>
			<textarea required class='input' value={body} onInput={onBodyChange}/>
		</label>

		<button class='submit' type='submit'>Baixar imagem</button>

	</form>
)

export default ControlPanel
