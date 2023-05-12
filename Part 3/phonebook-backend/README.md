# Getting Started with init


This project was bootstrapped with [npm init](https://docs.npmjs.com/cli/v8/commands/npm-init/).

The whole concept of this exercise is implement functionality on the server side. 

* [REST API](https://expressjs.com) in Node.js.
* [MongoDB](https://www.mongodb.com) provides the services for storage depended on REST API calls.
* [PostMAN](https://www.postman.com) or [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)  REST call tester.


## Setup
* Express offers pleasing interface for built-in `http` module. Nodemon watch the files in the directory in which nodemon was started. It will automatically restart your node application when any file changes. 

* Morgan is [middleware](https://fullstackopen.com/en/part3/node_js_and_express#middleware) for logging.

* CORS ([Cross-origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. 

* [Mongoose](https://mongoosejs.com/index.html) is library that offers a higher-level API. 

* [Dotenv](https://www.npmjs.com/package/dotenv)  defines values environment variables.
To use the library, we create a .env file at the root of the project. The environment variables are defined inside of the file.
* [Lint](https://eslint.org) is tool that detects and flags errors. 

On terminal
```
npm install express
npm update
npm install --save-dev nodemon
npm install morgan
npm install cors
npm install mongoose
npm install dotenv
npm install eslint --save-dev
npx eslint --init
```

On Windows
1. Install [Postman](https://www.postman.com) (or [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). You save your requests in directory files with extension `.rest`. You can learn more about it in this [guide](https://www.jetbrains.com/help/webstorm/http-client-in-product-code-editor.html) )

2. Install [Railway](https://railway.app) as our hosting tool.

3. Install [MongoDB](https://www.mongodb.com) as database provider.

4. Install [ESLint](https://eslint.org) as tool for identifying parsing issues.


### Package
Inside `package.json`, add to `scripts`
* "start": "node index.js",
* "dev": "nodemon index.js",
* "lint": "eslint ."

and 

* "proxy": "http://localhost:3001" to link server with client side.



## Deploy on the Internet
Some other free options hosting options that work well

* [Fly.io](https://fly.io)

* [Cyclic](https://www.cyclic.sh)

* [Replit](https://replit.com)

* [CodeSandBox](https://codesandbox.io)


There is guide for deploying application on [fly.io](https://fullstackopen.com/en/part3/deploying_app_to_internet#application-to-the-internet) (default provider of [FullStackOpen](https://fullstackopen.com/en/)).
In our implementation, we decide to go with [Railway](https://railway.app) as our hosting tool. [Here](https://docs.railway.app/develop/projects), you can start exploring Railway.

## MongoDB
To store our data  indefinitely, we exploit some data storage services. To fulfil the requirements of these project, we select [MongoDB](https://www.mongodb.com) as database provider due to his lower complexity compared to a relational database and more specifically [MongoDB Atlas](https://www.mongodb.com/atlas/database). Link [here](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#mongo-db) to follow guide.

## EsLint
[ESLint](https://eslint.org) analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. You can find esl config [here](https://fullstackopen.com/en/part3/validation_and_es_lint#lint).

## Backend

Addresses for each application. Guide for [REST client VS](https://coderethinked.com/rest-client-for-visual-studio-2022/)

------------
* 3.1 http://localhost:3001/api/persons
------------
* 3.2 http://localhost:3001/api/info
------------
* 3.3 
http://localhost:3001/api/persons/1 \
http://localhost:3001/api/persons/2 \
http://localhost:3001/api/persons/3 \
http://localhost:3001/api/persons/4 

------------
* 3.4
HTTP call [delete](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%203/phonebook/requests)

------------
* 3.5
HTTP call [post](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%203/phonebook/requests)

------------
* 3.6
invalid HTTP call [post](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%203/phonebook/requests)

------------
* 3.15 - 18
HTTP call [delete](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%203/phonebook/requests)

[http://localhost:3001/api/persons/id](http://localhost:3001/api/persons/642333558c9b82b26e52ea8f) \

invalid HTTP [call](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%203/phonebook/requests)

[http://localhost:3001/api/persons/12345](http://localhost:3001/api/persons/12345)

* 3.22
[Deploy on Railway](https://fullopenstack2023-production.up.railway.app/)

------------



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
Open [http://localhost:3001/api/persons](http://localhost:3001/api/persons) to view it in your browser.
Open [http://localhost:3001/api/info](http://localhost:3001/api/info) to view it in your browser.

Open [http://localhost:3001/api/persons:ID](http://localhost:3001/api/persons) to view it in your browser. 
`ID` is a number specifying the person for displaying.\
For instance [link](http://localhost:3001/api/persons/6426ed27e805657478dcebc8) If you have an opened tab, you can refresh the page.


The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser. If you have an opened tab, you can refresh the page.

Open [http://localhost:3001/api/persons](http://localhost:3001/api/persons) to view it in your browser. 
If you have an opened tab, you can refresh the page.

Open [http://localhost:3001/api/info](http://localhost:3001/api/info) to view it in your browser.
If you have an opened tab, you can refresh the page.

Open [http://localhost:3001/api/persons:ID](http://localhost:3001/api/persons) to view it in your browser. `ID` is a number specifying the person for displaying.\
For instance [link](http://localhost:3001/api/persons/6426ed27e805657478dcebc8) for displaying a person in the list. 
If you have an opened tab, you can refresh the page.



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




