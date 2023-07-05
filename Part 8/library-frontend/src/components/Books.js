import React from 'react'
import { useQuery, useLazyQuery } from "@apollo/client"
import { ALL_BOOKS } from "../queries"
import { useState, useEffect } from "react"

const Books = (props) => {
  const result = useQuery(ALL_BOOKS)
  const [getBooksByGenre, genreResult] = useLazyQuery(ALL_BOOKS, {
    fetchPolicy: "no-cache"
  })
  
  const [genre, setGenre] = useState("all")
  const [books, setBooks] = useState([])

  useEffect(() => {
    if (result.data) {
      setBooks(result.data.allBooks)
    }
  }, [result.data])

  useEffect(() => {
    if (genreResult.data) {
      setBooks(genreResult.data.allBooks)
    }
  }, [genreResult.data])

  


  
  if (!props.show) {
    return null
  }

  if (result.loading || genreResult.loading) {
    return <div>loading...</div>
  }

  const handleGenre = (genre) => {
    setGenre(genre)
    getBooksByGenre({ variables: { genre: genre } })

    if (genre === "all") {
      setBooks(allBooks)
      return;
    }
  };



  const { allBooks } = result.data;
  

  const genres = [...new Set(allBooks.flatMap((b) => b.genres))].concat("all")
  return (
    <div>
      <h2>books</h2>
      <p>
        in genre <strong>{genre}</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.filter((b) => (genre !== "all" ? b.genres.includes(genre) : b))
            .map((b) => (
              <tr key={b.title}>
                <td>{b.title}</td>
                <td>{b.author.name}</td>
                <td>{b.published}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        {genres.map((genre) => (
          <button key={genre} onClick={() => handleGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Books
