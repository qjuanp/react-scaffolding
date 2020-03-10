# Dependencies

## Dev Dependencies

### Babel

Babel is the one in charge of transform the code

- `@babel/core`
    Base package for Babel

- `@babel/cli`
    Allow us to transpile the code from the command line

- `@babel/preset-env`
    Allow us to trasnpile ES6+ into more traditional javascript

- `@babel/preset-react`
    Allow us to transpile JSX into more traditional javascript

### Webpack

- `webpack`
    Module bundler

- `webpack-cli`
    Tool to interact with webpack from the cli

- `webpack-dev-server`
    Creates a development server to expose our app locally

- `style-loader`
    Webpack loader for styles, it is in charge of load correctly styles into html from an import in .js/.jsx files

- `css-loader`
    Webpack loader for css, it can be used to define rules to transform css rules

- `babel-loader`
    Webpack loader for babel, it's the way Weback can transpile .js/.jsx with babel

### Reacjs

- `react`
    Base React library

- `react-dom`
    Implementation that brings react into webbrowser app with all required interaction with the browser DOM

# Steps
1. Create application folders
    - `public`
    - `src`
2. Crete `index.hmtl` entry point of the reactjs application
3. Initialize npm
4. Added initial rulos to .gitignore
5. Install babel
    > `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
6. Configure babel
7. Install Webpack
    > `npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader`
8. Install Reactjs
    > `npm install react react-dom`


# Next Steps

- [ ] Hot Realod for CSS Only
- [ ] Sass loader
- [ ] production bundle
- [ ] optimizations over production bundle