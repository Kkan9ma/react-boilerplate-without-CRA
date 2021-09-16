module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['prettier', 'react', 'react-hooks', 'import', 'jsx-a11y'],
  ignorePatterns: ['node_modules', '*.config.js'],
};
