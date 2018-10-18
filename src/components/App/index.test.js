import {h} from 'preact'
import App from '.'
import {shallow} from 'preact-render-spy'

it('renders without crashing', () => {
  const context = shallow(<App/>)
	expect(context.find('div').length).toBe(1)
})
