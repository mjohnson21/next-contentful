module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/index.js',
        templateFile: 'component-index.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.jsx',
        templateFile: 'component.jsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.styles.js',
        templateFile: 'component.styles.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.test.js',
        templateFile: 'component.test.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'component.stories.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/README.md',
        templateFile: 'README.md.hbs',
      },
    ],
  })

  plop.setGenerator('query', {
    description: 'generate query file for component for Apollo',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'queryName',
        message: 'What is the query name?',
      },
      {
        type: 'confirm',
        name: 'queryId',
        message: 'Does this query take an ID?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase componentName}}/{{dashCase componentName}}.query.js',
        templateFile: 'component.query.hbs',
      },
    ],
  })
}
