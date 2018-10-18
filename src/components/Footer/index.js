import {h} from 'preact'
import {homepage} from '../../../package.json'
import Container from '../Container'
import styles from './index.styl'

const Footer = () => (
	<Container class={styles.wrapper}>
		<hr class={styles.hr}/>
		<div style={{flex: 1}}>
			<a href={homepage}>Contribua</a>
		</div>
		<a href='https://github.com/co-de-sign'>GitHub</a>
		<a href='https://join-co-de-sign.herokuapp.com'>Slack</a>
		<a href='https://fb.com/codesigncommunity'>Facebook</a>
	</Container>
)

export default Footer
