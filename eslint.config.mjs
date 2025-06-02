import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	...compat.extends('prettier'),
	{
		ignores: ['**/dist', '**/out', '**/.next', '**/node_modules'],
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			globals: {
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				// Node globals for config files
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
			},
		},
		rules: {
			// Code quality rules
			'no-redeclare': 'error',
			'eol-last': ['error', 'always'],
			'newline-before-return': 'error',
			camelcase: 'error',
			'no-var': 'error',
			'prefer-const': 'error',

			// Spacing and formatting (that don't conflict with Prettier)
			'space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always',
				},
			],
			'space-before-blocks': ['error', 'always'],
			'func-call-spacing': ['error', 'never'],
			'arrow-spacing': [
				'error',
				{
					before: true,
					after: true,
				},
			],

			// Error prevention
			'for-direction': 'error',
			'getter-return': 'error',
			'no-await-in-loop': 'error',
			'no-console': 'warn',
			'no-constant-condition': 'warn',
			'no-loss-of-precision': 'error',
			'no-promise-executor-return': 'error',
			'no-template-curly-in-string': 'error',
			'no-unreachable': 'warn',
			'no-unreachable-loop': 'error',

			// Best practices
			'class-methods-use-this': 'off',
			'consistent-return': 'off',
			curly: 'error',
			'default-param-last': 'error',
			'dot-notation': 'error',
			eqeqeq: 'error',
			'grouped-accessor-pairs': 'error',
			'no-caller': 'error',
			'no-alert': 'error',
			'no-constructor-return': 'error',
			'no-else-return': 'error',
			'no-empty-function': [
				'error',
				{
					allow: ['constructors'],
				},
			],
			'no-eq-null': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-loop-func': 'error',
			'no-multi-spaces': 'error',
			'no-return-assign': 'error',
			'no-return-await': 'error',
			'no-throw-literal': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-useless-concat': 'error',
			'no-useless-escape': 'error',
			'no-warning-comments': 'warn',
			'prefer-promise-reject-errors': 'error',
			'require-await': 'error',
			yoda: 'error',

			// Style rules (that don't conflict with Prettier)
			'block-spacing': 'error',
			'comma-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'comma-style': ['error', 'last'],
			'key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true,
				},
			],
			'linebreak-style': ['error', 'unix'],
			'lines-between-class-members': [
				'error',
				'always',
				{
					exceptAfterSingleLine: true,
				},
			],
			'new-cap': [
				'error',
				{
					newIsCap: true,
				},
			],
			'no-lonely-if': 'error',
			'no-multi-assign': 'error',
			'no-multiple-empty-lines': [
				'error',
				{
					max: 3,
					maxEOF: 0,
				},
			],
			'no-negated-condition': 'error',
			'no-unneeded-ternary': 'error',
			'no-whitespace-before-property': 'error',
			'one-var': ['error', 'never'],
			'one-var-declaration-per-line': ['error', 'always'],
			'prefer-object-spread': 'error',
			'semi-spacing': 'error',
			'semi-style': ['error', 'last'],
			'space-unary-ops': 'error',

			// ES6+ rules
			'arrow-parens': ['error', 'always'],
			'constructor-super': 'error',
			'no-class-assign': 'error',
			'no-confusing-arrow': 'error',
			'prefer-arrow-callback': [
				'warn',
				{
					allowNamedFunctions: true,
				},
			],
			'prefer-rest-params': 'warn',
			'prefer-spread': 'error',
			'prefer-template': 'warn',
			'rest-spread-spacing': ['error', 'never'],
			'template-curly-spacing': 'error',

			// Complexity rules
			'max-depth': ['warn', 4],
			'space-infix-ops': ['error'],

			// React/Next.js specific
			'react/jsx-key': 'error',
			'react/no-array-index-key': 'warn',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-undef': 'error',
			'react/no-direct-mutation-state': 'error',
			'react/no-typos': 'error',
			'react/require-render-return': 'error',
			'react/self-closing-comp': 'error',
			'react/jsx-wrap-multilines': 'off',

			// Next.js specific
			'@next/next/no-img-element': 'warn',
			'@next/next/no-html-link-for-pages': 'error',
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: (await import('@typescript-eslint/parser')).default,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			'@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
		},
		rules: {
			// TypeScript-specific rules
			'@typescript-eslint/no-var-requires': 'off',

			// Turn off base rules in favor of TypeScript versions
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: false,
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/no-empty-function': [
				'error',
				{
					allow: ['private-constructors'],
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					disallowTypeAnnotations: false,
				},
			],
		},
	},
	{
		files: ['**/*.config.{js,ts,mjs}', '**/next.config.{js,ts,mjs}'],
		rules: {
			'@typescript-eslint/no-var-requires': 'off',
			'no-console': 'off',
		},
	},
];

export default eslintConfig;
