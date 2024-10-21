# Getting Started with init


This project was created with [git](https://git-scm.com/docs/git-clone).

The concept of exercise touches different themes
* [graphQL](https://reactrouter.com/en/main). 


## Setup
### graphQL
On terminal
```
npm install
npm install react-router-dom
npm start
```

#### query

------------
* 8.1 The number of books and authors
```
query {
  bookCount
  authorCount
} 
```
------------
* 8.2 All books
```
query {
  allBooks { 
    title 
    author
    published 
    genres
  }
}
```
------------
* 8.3 All authors
```
query {
  allAuthors {
    name
    bookCount
  }
}
```
------------
* 8.4 Books of an author
```
query {
  allBooks(author: "Robert Martin") {
    title
  }
}
```
------------
* 8.5 Books by genre
```
query {
  allBooks(genre: "refactoring") {
    title
    author
  }
} 
```
------------
* 8.6 Adding a book
```
mutation {
  addBook(
    title: "NoSQL Distilled",
    author: "Martin Fowler",
    published: 2012,
    genres: ["database", "nosql"]
  ) {
    title,
    author
  }
}
```
------------
* 8.7 Updating the birth year of an author
```
mutation {
  addBook(
    title: "NoSQL Distilled",
    author: "Martin Fowler",
    published: 2012,
    genres: ["database", "nosql"]
  ) {
    title,
    author
  }
}
```
------------





### Library
On tab with backend path
```
npm start
```

On terminal with frontend path`
```
npm install
npm start
```




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode as `localhost`

Open [http://localhost:4000](http://localhost:3000) to view it in your browser.


The page will reload when you make changes.
You may also see any lint errors in the console.





