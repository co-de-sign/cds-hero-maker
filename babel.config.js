// eslint-disable-next-line import/no-extraneous-dependencies
const preactBabel = require('preact-cli/babel')
const preactPresets = preactBabel(null, {modules: 'commonjs'})
// FIXES: https://github.com/developit/preact-cli/pull/599
delete preactPresets.babelrc
module.exports = function babelConfig(api){
	api.cache(true)
	return {presets: [preactPresets]}
}
