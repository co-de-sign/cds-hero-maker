import {h} from 'preact'
import styles from './index.styl'

const Container = ({children, ...props}) => {
	const WrapperComponent = props.as || 'div'
	return (
		<WrapperComponent {...props} class={`${styles.wrapper} ${props.class}`}>
			<div class={styles.row}>{children}</div>
		</WrapperComponent>
	)
}


export default Container
