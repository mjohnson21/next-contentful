# Quality and Experienc

## ESLINT

Better to start with code quality early than later. I'm going with the AirBnB presets, but will relax some of the rules a bit for the sake of my own sanity.

```
yarn add -D eslint 
            eslint-config-airbnb 
            eslint-plugin-import 
            eslint-plugin-jsx-a11y 
            eslint-plugin-react
```

Now we just need a `.eslintrc.js` file to set up our initial rules. I'll leave that to you. 

## @components directory

I'm a big fan of component based devleopment, so let's start that here, since babel and eslint are going to be handing a lot of that lifting. After creating a `.babelrc` 

```
yarn add -D babel-eslint
            babel-plugin-module-resolver
            eslint-import-resolver-babel-module
```

Once we have a `.babelrc`, we tell it where to find our components directory. I'm placing it inside of a `/src` directory. On the client project, I found that that the root directory got cluttered pretty quickly because of some of the various dependencies, such as serverless. Therefore, I put all application concerns in `src`, with the obvious exception of `pages`. 

```
// .babelrc
{
  "presets": [
    "next/babel",
  ],
  "plugins": [
    ["module-resolver", {
      "alias": {
        "@components": "./src/components",
      }
    }]
  ]
}

// .eslintrc.js
settings: {
  "import/resolver": {
    "babel-module": {}
  }
}
```

However, at this point VSCode still doesn't understand how to resolve the paths. However, we can fix this by adding a `jsconfig.json` file. 

```
{
  "compilerOptions": {
    "target": "es2017",
    "allowSyntheticDefaultImports": false,
    "baseUrl": "./",
    "paths": {
      "@components/*": ["./src/components/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

## Testing with Jest

```baseh
yarn add -D jest
```

Then we'll need to set up a script to run it in `package.json`. 

```
scripts: {
 "test": "jest",
}
```

Jest will look for any files that have the `.test.js` or `.spec.js` suffix, or any `.js` file in a `__tests__` directory. We'll also want to let ESLint know how to read these files without squiggling us to death.

```
// .eslintrc.js
env: {
  browser: true,
  'es6': true,
  'jest': true,
},
plugins: ["jest"],
```


