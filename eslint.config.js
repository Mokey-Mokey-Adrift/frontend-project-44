import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/brace-style': ['error', '1tbs']
    }
  }
];
