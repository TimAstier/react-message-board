# React Message Board

## Description
A web-based message board built with React and Redux.  

## Motivation

This is a coding exercise to practice front-end development.

## Features

- [ ] a client can create a message in the service
- [ ] a client can create a child-message in the service
- [ ] the same client can modify their message
- [ ] the same client can delete their message
- [ ] a client can view any message available
- [ ] add test to critical places of the code (OPTIONAL)

## Install and run

```
$ https://github.com/TimAstier/react-message-board
$ cd react-message-board
$ npm install
$ npm start
```

Then navigate to *http://localhost:3000/*

## Build

This command creates an optimized production build in a */build* folder:

```
$ npm run build
```

## Built with
- [react](https://reactjs.org/) - a JavaScript library for building user interfaces
- [redux](https://redux.js.org/) - a predictable state container for JavaScript apps  
- [immutable](https://facebook.github.io/immutable-js/) - immutable JavaScript objects
- [styled-components](https://www.styled-components.com/) - a convenient way to style components with CSS
- [storybook](https://storybook.js.org/) - an UI development environment

## Testing

### Storybook
```
$ npm run storybook
```
Then visit http://localhost:9009/

### Jest tests
```
$ npm run test
```

### ESLint (eslint-config-react-app)
```
$ npm run lint
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
