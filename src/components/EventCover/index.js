import { h } from 'preact'
import Logo from '../Logo'

const silverRatio = 1 + Math.sqrt(2)
const width = 1920
const height = 1188
const xDiff = Math.round(width / silverRatio)
const logoSize = 31 * 8
const margin = 12 * 8

const getForeground = bg => parseInt(bg[2], 16) > 10 ? '#000' : '#fff'

const style = {
	wrapper: {
		maxHeight: '66vh',
		minHeight: '16rem',
		fontFamily: '"Source Code Pro", monospace',
	},
	code: {
		color: '#fff',
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		font: '34px/1.214 "Source Code Pro", monospace',
		whiteSpace: 'pre',
	},
}

const EventCover = ({children, background, innerRef}) => (
	<svg
		externalResourcesRequired={true}
		viewBox={`0 0 ${width} ${height}`}
		style={style.wrapper}
		preserveAspectRatio='xMidYMid slice'
		fontFamily='"Source Code Pro", monospace'
		ref={innerRef}
	>
		<rect x={0} y={0} height={height} width={width} fill={background}/>
		<Logo
			color={getForeground(background)}
			width={logoSize}
			height={logoSize}
			x={xDiff - logoSize - margin}
			y={(height - logoSize) / 2}
		/>
		<rect x={xDiff} y={0} height={height} width={width-xDiff} fill='#000'/>
		<foreignObject x={xDiff + margin} y={0} width={width-xDiff} height={height}>
			<div style={style.code}>{children}</div>
		</foreignObject>
	</svg>
)

export default EventCover
