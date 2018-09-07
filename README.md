# React Message Board

## \** 🔨 WORK IN PROGRESS 🔨 \**

## Description
Prototype of a web-based message board built with React and Redux.  
This is a coding exercise to practice front-end development.

## Requirements

- [x] a client can create a message in the service
- [ ] a client can create a child-message in the service
- [ ] the same client can modify their message
- [ ] the same client can delete their message
- [x] a client can view any message available
- [ ] add test to critical places of the code (OPTIONAL)

## Running the app

```sh
# Clone the repository
$ https://github.com/TimAstier/react-message-board

# Install dependencies
$ cd react-message-board
$ npm install

# Start the client app
$ npm start

# Opens a browser tab at http://localhost:3000/
```

## Running the mock api

This prototype app has been developed with a mock api powered by [json-server](https://github.com/typicode/json-server).  
You need to run the mock api in parallel with the app in order to get some data.

```sh
# Run the mock api
$ npm run mock-api

# The mock server should be running on http://localhost:3004
# You can use tools such as Postman to send requests to the mock api
```

## Mock api

The mock api is very basic. It handles the following http requests:

### GET /messages  
```
Response:
{
  result: [{
  	id: (number),
  	message: (string),
  	parentId: (number),
  	author: (number),
  }]
}
```

### POST /messages
```
Request:
{
  message: (string),
  parentId: (number),
  author: (number)
}

Response: 204
```

### PUT /messages/{id}
```
Request:
{
	message: (string)
}

Response: 204
```

### DELETE /messages/{id}
```
Response: 204
```

### Mock Api Configuration

You can change the mock api port or delay by making changes to the ```json-server.json``` file:

```json
{
  "port": 3004,
  "delay": 2500,
  "watch": true
}
```

## Storybook
React components are developed in isolation using [Storybook](https://storybook.js.org/).

```sh
# Run storybook
$ npm run storybook

# Then visit http://localhost:9009/
```

## Build

```sh
# Create an optimized production build in a build folder
$ npm run build
```

## Testing

### Jest tests
```
$ npm run test
```

### ESLint (eslint-config-react-app)
```sh
$ npm run lint

# OR in watch mode:
$ npm run lint:watch
```

## Built with
- [react](https://reactjs.org/) - a JavaScript library for building user interfaces
- [redux](https://redux.js.org/) - a predictable state container for JavaScript apps 
- [redux-saga](https://github.com/redux-saga/redux-saga) - an alternative side effect model for Redux apps 
- [reselect](https://github.com/reduxjs/reselect) - selector library for Redux
- [immutable](https://facebook.github.io/immutable-js/) - immutable JavaScript objects
- [styled-components](https://www.styled-components.com/) - a convenient way to style components with CSS
- [json-server](https://github.com/typicode/json-server) - a basic way to fake a REST API
- [axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js
- [storybook](https://storybook.js.org/) - an UI development environment  
- [jest](https://jestjs.io/) - zero configuration testing platform for JavaScript

## Copyrights

svg file for spinners from [loading.io](loading.io) (licence: CC0)  
avatar images from [avatars.adorable.io](http://avatars.adorable.io/)  

## License

This project is licensed under the MIT License.  
See the LICENSE.md file for details.
