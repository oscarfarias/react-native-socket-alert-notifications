module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      node: {
        paths: [`src`],
      },
    },
  },
  extends: [
    `@react-native-community`,
    `plugin:react-hooks/recommended`,
    `plugin:react/jsx-runtime`,
    `plugin:prettier/recommended`,
  ],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`, `react-hooks`],
  rules: {
    semi: [`error`, `never`],
    'object-curly-newline': `off`,
    '@typescript-eslint/no-shadow': `off`,
    'no-shadow': `off`,
    'no-undef': `off`,
    'react-hooks/rules-of-hooks': `error`,
    'react-hooks/exhaustive-deps': `warn`,
    'max-len': [
      `error`,
      80,
      2,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': `warn`,
    radix: 1,
    'prefer-destructuring': `off`,
    'no-useless-concat': `error`,
    'no-negated-condition': 0,
    quotes: [`error`, `backtick`],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      `error`,
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-irregular-whitespace': 2,
    camelcase: [
      2,
      {
        properties: `always`,
      },
    ],
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true,
      },
    ],
    'prettier/prettier': [`error`, { semi: false }],
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: [`**/*.ts`, `**/*.tsx`],
      parser: `@typescript-eslint/parser`,
      extends: [
        `plugin:@typescript-eslint/recommended`, // TypeScript rules
      ],
      plugins: [`@typescript-eslint`],
      rules: {
        'prettier/prettier': [`error`, { semi: false }],
        '@typescript-eslint/no-unused-vars': [`error`],
        '@typescript-eslint/explicit-function-return-type': [
          `warn`,
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
}
