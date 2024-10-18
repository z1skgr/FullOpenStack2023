# Getting Started with init




## .env
To store our saved notes indefinitely, we need a database. 

Create the `.env` file in the root of your directory and place URI:

For more information check [Saving data on MongoDB](https://fullstackopen.com/en/part3/saving_data_to_mongo_db)

* Create Project Database (shared Free tier)
* Select Cloud Provider (Free tier)
* Authenticate with username and password
* Wait till cluster to be ready
* Press 'Connect'
* Copy connection string to your `env`


The address looks like 
`mongodb+srv://cziskas:thepasswordishere@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

Your `.env` file should be like this
```

MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.1ncz1v3.mongodb.net/"
PORT=3003

TEST_MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.1ncz1v3.mongodb.net/"


SECRET= "secret"
TEST_SECRET= "secret"
```


## Available Scripts

In the project directory, you can run:


### `npm run cypress:open`
Using one of the following commands, depending on the package manager (npm). After a moment, the Cypress Launchpad will open.
If this is your first time using [Cypress](https://docs.cypress.io/guides/getting-started/opening-the-app) it will take you through the following steps in order. 

### `npm run test:e2e`
If this is your first time using [Cypress](https://docs.cypress.io/guides/end-to-end-testing/testing-your-app) it will take you through the following steps in order. 

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3003/api/persons:ID](http://localhost:3003/api/persons) to view it in your browser. 
`ID` is a number specifying the person for displaying.\
For instance [link](http://localhost:3001/api/persons/6426ed27e805657478dcebc8) If you have an opened tab, you can refresh the page.


The page will reload when you make changes.\
You may also see any lint errors in the console.




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

### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:3003](http://localhost:3001) to view it in your browser. If you have an opened tab, you can refresh the page.

Open [http://localhost:3003/api/persons:ID](http://localhost:3003/api/persons) to view it in your browser. `ID` is a number specifying the person for displaying.\
For instance [link](http://localhost:3003/api/persons/6426ed27e805657478dcebc8) for displaying a person in the list. 
If you have an opened tab, you can refresh the page.


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


