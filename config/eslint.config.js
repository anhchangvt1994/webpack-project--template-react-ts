module.exports = {
	root: true,
	ignorePatterns: ['webpack.config.js', 'env/**/*', 'config/**/*', 'dist/**/*'],
	extends: [
		'.eslintrc-auto-import.json',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		// 'plugin:jest/recommended',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:import/errors',
		'plugin:import/warnings',
		'prettier',
	],
	plugins: [
		'react',
		'@typescript-eslint',
		// 'jest'
	],
	env: {
		browser: true,
		es6: true,
		node: true,
		// jest: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'@typescript-eslint/naming-convention': 'off',
		'no-unused-vars': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		// NOTE - This options settup for stop linting alias
		// "import/no-unresolved": [0, { }]
	},
	settings: {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias: {
					'': './src',
				},
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
}
