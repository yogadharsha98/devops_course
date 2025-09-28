export default [
  {
    files: ['**/*.js'], // only check .js fles in server directory
    rules: {
      semi: 'error', //force semicolons
      'no-unused-vars': 'warn', // warn if variables are unused
    },
  },
];
