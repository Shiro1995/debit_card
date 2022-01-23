module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 'error',
    'no-use-before-define': 'error',
    'no-param-reassign': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'prefer-spread': 'warn',
    'no-unused-vars': 'error',
    'eol-last': ['error', 'always'],
    'prettier/prettier': 0,
    'max-len': ['error', { code: 100, ignoreStrings: true }],
  },
};
