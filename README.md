# Getting Started with init


This project was bootstrapped with [git](https://git-scm.com/docs/git-clone).

The whole concept of this exercise is implement functionality on the client side. 

* [http Service](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) using [axios API](https://www.npmjs.com/package/axios)


## Setup
* Config initial repository from [full stack open part 5](https://github.com/fullstack-hy2020/bloglist-frontend) 

On terminal
```
git clone https://github.com/fullstack-hy2020/bloglist-frontend
cd bloglist-frontend   // go to cloned repository
rm -rf .git
```

* Start backend from [part 4](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%204)
[part 5](https://github.com/z1skgr/FullOpenStack2023/tree/main/Part%205) in separate terminal tab along with [initial repository](https://github.com/fullstack-hy2020/bloglist-frontend) 

On terminal
```
npm start
```

On terminal
```
npm install prop-types
npm install --save-dev eslint-plugin-jest
```
On terminal
```
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```
On terminal
```
npm install --save-dev cypress
npm install eslint-plugin-cypress --save-dev
```



On Windows

1. Install [Cypress](https://www.cypress.io). Cypress is a next generation front end testing tool built for the modern web.
When both the backend and frontend are running, we can start Cypress. To get Cypress working with WSL2 one might need to do some additional configuring first. These two [links](https://docs.cypress.io/guides/getting-started/installing-cypress#Windows-Subsystem-for-Linux) are great places to [start](https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress).



### Package

Inside backend `package.json`, add to `scripts`
* "start:test": "NODE_ENV=test node index.js"

Inside frontend `package.json`, add to `scripts`
* "cypress:open": "cypress open"



## MongoDB
To store our data  indefinitely, we exploit some data storage services. To fulfil the requirements of these project, we select [MongoDB](https://www.mongodb.com) as database provider due to his lower complexity compared to a relational database and more specifically [MongoDB Atlas](https://www.mongodb.com/atlas/database). Link [here](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#mongo-db) to follow guide.

## CyPress
 [Cypress](https://www.cypress.io) is built specifically for JavaScript frontend developers, and you can use it to start writing tests quickly without needing to add third-party dependencies or packages. This is a benefit missing from other tools like [Selenium](https://www.selenium.dev). 

## Front-end

Addresses for each application. 
Front End
------------
* http://localhost:3000
------------
Backend End
------------
* http://localhost:3003
------------

## Tests
[Integrated tests](https://fullstackopen.com/en/part5/testing_react_apps#exercises-5-13-5-16)
------------
* 5.13 Title/author render
------------
* 5.14 Blog details 
------------
* 5.15 Update likes
------------
* 5.16 New blog
------------

[Cypress tests](https://fullstackopen.com/en/part5/end_to_end_testing#exercises-5-17-5-23)
------------
* 5.17 Display login
------------
* 5.18 Login attempts 
------------
* 5.19 New blog
------------
* 5.20 Update blog
------------
* 5.21 Delete blog
------------
* 5.22 Proper user delete blog
------------
* 5.23 Order blogs
------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode as `localhost`\
Open [http://localhost:3003](http://localhost:3003) to view it in your browser.
Open [http://localhost:3003/api/blogs](http://localhost:3003/api/blogs) to view it in your browser.\ 
Open [http://localhost:3003/api/blogs:ID](http://localhost:3003/api/blogs) to view it in your browser. \

`ID` is a number specifying the blog for displaying.\
For instance [link](http://localhost:3003/api/persons/6467b285831318a4124eb21e) If you have an opened tab, you can refresh the page.  \

Open [http://localhost:3003/api/users](http://localhost:3003/api/users) to view it in your browser. \
Open [http://localhost:3003/api/users:ID](http://localhost:3003/api/users) to view it in your browser. \
`ID` is a number specifying the blog for displaying.\


The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run dev`

Runs the server in the development mode as `localhost.\
Open [http://localhost:3003](http://localhost:3003) to view it in your browser. If you have an opened tab, you can refresh the page.\
Open [http://localhost:3003/api/blogs](http://localhost:3003/api/blogs) to view it in your browser. \
Open [http://localhost:3003/api/blogs:ID](http://localhost:3003/api/blogs) to view it in your browser. \
`ID` is a number specifying the blog for displaying.\
Open [http://localhost:3003/api/users](http://localhost:3003/api/users) to view it in your browser. \
Open [http://localhost:3003/api/users:ID](http://localhost:3003/api/users) to view it in your browser. \
`ID` is a number specifying the blog for displaying.

If you have an opened tab, you can refresh the page.


### `npm run cypress:open`
Prerequisites, you launch backend and frontend in test mode (you modify backend to be executed in test-environment).
Launches cypress in the interactive watch mode. See [Package](#Package) \
See the section about [cypress tests](https://www.cypress.io/app/#browser_testing) for more information.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Except `npm test` command, we can run commands to test what we need.

Runs the tests found in the `tests/Blog.test.js` file:
```
npm test -- -t tests/Blog.test.js
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



