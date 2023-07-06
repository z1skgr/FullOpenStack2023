# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The whole concept of this exercise is an introduction with query language [GraphQL](https://graphql.org). We bundle it with [database](https://www.mongodb.com) service and [apollo server](https://www.apollographql.com/docs/apollo-server/) which is the best tool to handle data from any source

* [GraphQl](https://graphql.org/learn/) using [npm](https://www.npmjs.com/package/@apollo/server)

* [MongoDb](https://www.mongodb.com/docs/)

## MongoDB
To store our data  indefinitely, we exploit some data storage services. To fulfil the requirements of these project, we select [MongoDB](https://www.mongodb.com) as database provider due to his lower complexity compared to a relational database and more specifically [MongoDB Atlas](https://www.mongodb.com/atlas/database). Link [here](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#mongo-db) to follow guide.


## Apollo server
We use graph query API to handle data manipulation in backend which is migrated to mongodb services

## Setup
* Config `.env` file. 
```
MONGODB_URI={YOUR-MONGO-PWD}
JWT_SECRET={YOUR-JWT-SECRET}
PASSWORD={YOUR-PASSWORD}          
PORT=4000 # All users have the same password, we focus here on GraphQL
```
* Start backend to load [apollo server](https://www.apollographql.com/docs/intro/platform) and [MongoDb](https://www.mongodb.com/docs/atlas/getting-started/)
* Start frontend to interact with the App

To start the application
```
# Install dependancies
$ npm install

# Start the application seperate for server and client 
$ npm start
``` 


## Application
Addresses for application. 

Front End
------------
* http://localhost:3000
------------
GraphQL - Back End
------------
* http://localhost:4000
------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
