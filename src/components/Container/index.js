import {h} from 'preact'
import styles from './index.styl'

const Container = ({children, ...props}) => {
	const WrapperComponent = props.as || 'div'
	const className = [styles.wrapper, props.class || ''].join(' ')
	return (
		<WrapperComponent {...props} class={className}>
			<div class={styles.row}>{children}</div>
		</WrapperComponent>
	)
}


export default Container
