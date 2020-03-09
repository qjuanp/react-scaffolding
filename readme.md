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