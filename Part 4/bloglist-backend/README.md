# Getting Started with init


This project was bootstrapped with [npm init](https://docs.npmjs.com/cli/v8/commands/npm-init/).

The whole concept of this exercise is implement extended functionality on the server side. In this part, we familirize with unit and integration tests for the backend, as well as implementing user authentication and authorization.

* [Token](https://www.npmjs.com/package/jsonwebtoken) 
* [Authentication and Authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization) 
* [Automated integration Test](https://en.wikipedia.org/wiki/Integration_testing)



## Setup
For http web server and [express](https://fullstackopen.com/en/part3/node_js_and_express#express), we talked in [part 3](https://fullstackopen.com/en/part3), (using [Postman](https://fullstackopen.com/en/part3/node_js_and_express#postman) or [RESTClient](https://fullstackopen.com/en/part3/node_js_and_express#the-visual-studio-code-rest-client)). [MongoDB]((https://www.mongodb.com)) still handles database services.
* [Jest](https://jestjs.io) works well for testing backends. When it comes to React applications, is essential kit for testing. Other tools for JavaScript testing libraries is [Mocha](https://mochajs.org).

* [Supertest](https://www.npmjs.com/package/supertest) is a high-level API for testing HTTP, allowing you to drop down to the lower-level API provided by [superagent](https://www.npmjs.com/package/superagent).

* [Express-async-error](https://github.com/davidbanham/express-async-errors)  handle async. It allows elimination of the try-catch blocks completely.

* [Lodash](https://lodash.com)
Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

* [Mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator) is a library for field uniqueness.

* [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) generates json web tokens, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

On terminal[^1]
```
npm install --save-dev jest 
npm install --save-dev cross-env 
npm install cross-env
npm install --save-dev supertest
npm install express-async-errors
npm install bcrypt
npm install mongoose-unique-validator
npm install jsonwebtoken

```

## Tests

[Intro Tests](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-3-4-7) for familiarity with testing.

------------
* 4.3 dummy 
------------
* 4.4 TotalLikes 
------------
* 4.5 favoriteBlog 
------------
* 4.6 mostBlogs 
------------
* 4.7 mostLikes  
------------


[Backend Tests](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-8-4-12) for backend utilities    .

------------
* 4.8 JSON blogs 
------------
* 4.9 Unique ID 
------------
* 4.10 Successful blog 
------------
* 4.11 Missing `likes` property
------------
* 4.12 Missing `titles` or `url` property
------------

[Adv Backend Tests](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-13-4-14) for backend utilities    .

------------
* 4.13 Delete single blog
------------
* 4.14 Update single blog
------------

[Authorization Tests](https://fullstackopen.com/en/part4/token_authentication) for adding token-based authentication to posts.

------------
* 4.23 Authorize token
------------





### Package
Inside `eslintrc.js`, add to `env`
* "jest": "true .",


and 

in `package.json` add to `scripts`
* "start": "NODE_ENV=production node index.js",
* "dev": "NODE_ENV=development nodemon index.
*   "test": "cross-env NODE_ENV=test jest --verbose --runInBand"

add to `jest`
* "testEnvironment": "node",
* "globalTeardown": "./tests/teardown.js"

We use .env to config `MONGODB_URI`,`PORT`,`TEST_MONGODB_URI`



## Deploy on the Internet
In our implementation, we decide to go with [Railway](https://railway.app) as our hosting tool. We follow the same direction for deployemnt as we did in part 3
 [Here](https://docs.railway.app/develop/projects), you can start exploring Railway.

## MongoDB
To store our data  indefinitely, we exploit some data storage services. To fulfil the requirements of these project, we select [MongoDB](https://www.mongodb.com) as database provider due to his lower complexity compared to a relational database and more specifically [MongoDB Atlas](https://www.mongodb.com/atlas/database). Link [here](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#mongo-db) to follow guide.


## Backend

Addresses used in this part. Guide for [REST client VS](https://coderethinked.com/rest-client-for-visual-studio-2022/)

------------
* 3.1 http://localhost:3003
------------
* 3.1 http://localhost:3003/api/blogs
------------
* http://localhost:3003/api/blogs/:id
------------
* http://localhost:3003/api/blogs/:id
------------
* http://localhost:3003/api/users
------------
* http://localhost:3003/api/users/:id



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3001/api/persons:ID](http://localhost:3001/api/persons) to view it in your browser. 
`ID` is a number specifying the person for displaying.\
For instance [link](http://localhost:3001/api/persons/6426ed27e805657478dcebc8) If you have an opened tab, you can refresh the page.


The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser. If you have an opened tab, you can refresh the page.

Open [http://localhost:3001/api/persons:ID](http://localhost:3001/api/persons) to view it in your browser. `ID` is a number specifying the person for displaying.\
For instance [link](http://localhost:3001/api/persons/6426ed27e805657478dcebc8) for displaying a person in the list. 
If you have an opened tab, you can refresh the page.



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Except `npm test` command, we can run commands to test what we need.

Runs the tests found in the `tests/blog_api.test.js` file:
```
npm test -- -t tests/blog_api.test.js
```

The -t option can be used for running tests with a specific name:
```
npm test -- -t "the_name_of_the_test"
```

Run all of the tests that contain blogs in their name:
```
npm test -- -t 'blogs'
```
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


[^1]: If you are deploying this application to Fly.io/Render, keep in mind that if cross-env is saved as a development dependency, it would cause an application error on your web server. To fix this, change cross-env to a production dependency by running this in the command line


