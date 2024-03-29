import { useState, useEffect } from 'react'
import { useApolloClient } from "@apollo/client"
import { USER } from "./queries"
import { useQuery } from "@apollo/client";

import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Notify from './components/Notify'
import LoginForm from "./components/LoginForm"
import Recommend from "./components/Recommend"

const App = () => {
  const [page, setPage] = useState('authors')
  const [errorMessage, setErrorMessage] = useState(null)

  const [token, setToken] = useState(null)
  const client = useApolloClient()

  const user = useQuery(USER)

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
    return () => clearTimeout(timer)
  }, [errorMessage])

  const logout = () => {
    setToken(null);
    localStorage.clear()
    client.resetStore()
    setPage('authors')
  }

  return (
    <div>
      {user.data ? console.log(user.data.me ) : console.log(`App Nothing`)}
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token ? (
          <span>
            <button onClick={() => setPage("add")}>add book</button>
            <button onClick={() => setPage("recommend")}>recommend</button>
            <button onClick={logout}>logout</button>
          </span>
        ) : (
          <button onClick={() => setPage("login")}>login</button>
        )}
      </div>
      <Notify errorMessage={errorMessage} />
      <Authors show={page === 'authors'} setError={setErrorMessage}/>

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} setError={setErrorMessage} setPage={setPage} />

      <LoginForm show={page === "login"} setToken={setToken} setError={setErrorMessage} setPage={setPage}/>
      <Recommend show={page === "recommend"} />
    </div>
  )
}

export default App
