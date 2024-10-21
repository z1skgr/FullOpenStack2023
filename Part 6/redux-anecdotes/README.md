# Getting Started with init


This project was bootstrapped with [git clone](https://www.git-scm.com/docs/git-clone).

[unicafe-redux simplified](https://github.com/fullstack-hy2020/unicafe-redux) 

[redux-anecdotes simplified](https://github.com/fullstack-hy2020/redux-anecdotes) 

[query-anecdotes simplified](https://github.com/fullstack-hy2020/query-anecdotes)

The whole concept of this exercise is implement application focusing on managing states using React libraries (Redux and React Query). 

* [Flux](https://opensource.fb.com/) architecture for state management of React apps.
* [Redux](https://redux.js.org/) works with the same principle as FLUX but with ease.
* [React Query](https://react-query-v3.tanstack.com/)library to store and manage data retrieved from the server.
* [json-server](https://fullstackopen.com/en/part2/getting_data_from_server) communicates wuth data for transaction with backend

For more details, read Redux docs [page](https://redux.js.org/introduction/why-rtk-is-redux-today)

## Setup


* [Redux](https://react-redux.js.org/)
* [Redux thunk](https://github.com/reduxjs/redux-thunk)
* [React Query](https://tanstack.com/query/v3/)


On terminal
```
npm install
npm install redux
npm install react-redux
npm install @reduxjs/toolkit
npm install json-server --save-dev
npm install axios
npm install react-query
npm start

```
On separate terminal
```
npm run server
```

For tests
```
npm install --save-dev deep-freeze
```



### Package
Inside `package.json`, add to `scripts`
* "server": "json-server -p3001 --watch anecdotes.json",
  






## Backend

Addresses for each application. Guide for [REST client VS](https://coderethinked.com/rest-client-for-visual-studio-2022/)

------------
* http://localhost:3001/anecdotes
* http://localhost:3000
------------

## Test
------------
* No test for this module
------------


## Available Scripts

In the project directory, you can run:

Runs the json-server in the development mode.

### `npm run server`

Open [http://localhost:3001/anecdotes](http://localhost:3001/anecdotes) to backend in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to frontend  in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run dev`

Runs the server in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view frontend in your browser. If you have an opened tab, you can refresh the page.

Open [http://localhost:3001/anecdotes](http://localhost:3001/anecdotes)  to view backend in your browser. If you have an opened tab, you can refresh the page.



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



