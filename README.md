# unit-testing-vue

Vue CLI v3.0.3  
? Target directory D:\Jacob\github\unit-testing-vue already exists. Pick an action: `Merge`  


Vue CLI v3.0.3  
? Please pick a preset: `Manually select features`  
? Check the features needed for your project: `Babel, Router, Vuex, Linter, Unit`  
? Use history mode for router? (Requires proper server setup for index fallback in production) `Yes`  
? Pick a linter / formatter config: `Prettier`  
? Pick additional lint features: `Lint on save`  
? Pick a unit testing solution: `Jest`  
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? `In dedicated config files`  
? Save this as a preset for future projects? `No`  

[.prettierrc.js](https://prettier.io/docs/en/configuration.html)

```js
module.exports = {
    singleQuote: true,
    semi: false
}
```

`$ yarn test:unit`

https://www.vuemastery.com/courses/unit-testing/writing-a-unit-test-with-jest/
https://www.vuemastery.com/courses/unit-testing/Testing-Props-and-User-Interaction

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```
