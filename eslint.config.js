// based on eslint-config-synacor

module.exports = {
	parser: 'babel-eslint',
	extends: ['eslint:recommended'],
	plugins: ['react'],
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	settings: {
		react: {version: '16.5'},
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 7,
		ecmaFeatures: {jsx: true, modules: true},
	},
	rules: {
		// === security ===
		'no-eval': 2,
		'no-implied-eval': 2,
		'no-new-func': 2,
		// === style ===
		'max-len': [2, {code: 80, tabWidth: 2}],
		quotes: [2, 'single', {avoidEscape: true}],
		semi: [2, 'never'],
		'comma-dangle': [2, 'only-multiline'],
		// === react ===
		'no-unused-vars': [2, {varsIgnorePattern: '^h$'}],
		'react/display-name': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-target-blank': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-pascal-case': 2,
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/no-danger': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-string-refs': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 1,
		'react/require-render-return': 2,
		'react/self-closing-comp': 2,
	},
}
