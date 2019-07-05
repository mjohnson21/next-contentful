module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    'es6': true,
    'jest': true,
  },
  plugins: ["jest"],
  parser: 'babel-eslint',
  rules: {
    indent: 0,
    semi: [2, "never"],
    'arrow-body-style': 0,
    'no-tabs': 0,
    'eol-last': ['error', 'always'],
    'import/prefer-default-export': 0,
    'max-len': 1,
    'no-underscore-dangle': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'stories/**'
        ]
      }
    ]
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
