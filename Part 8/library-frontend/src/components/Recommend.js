import { useQuery, useLazyQuery } from "@apollo/client"
import { USER, ALL_BOOKS_BY_GENRE } from "../queries"
import { useState, useEffect } from "react";

const Recommend = (props) => {
  const user = useQuery(USER);
  const [getBooks, result] = useLazyQuery(ALL_BOOKS_BY_GENRE, {
    fetchPolicy: "no-cache",
  });
  const [favoriteGenre, setFavoriteGenre] = useState(null);
  const [books, setBooks] = useState([])
 

  useEffect(() => {
    if (user.data) {
      setFavoriteGenre(user?.data?.me?.favoriteGenre);
      getBooks({ variables: { genre: favoriteGenre } })
    }
  }, [user.data, favoriteGenre, getBooks])

  useEffect(() => {
    if (result.data) {
      setBooks(result.data.allBooks)
    }
  }, [result])


  if (!props.show) {
    return null
  }

  if (user.loading || books.loading) {
    return <p>Loading...</p>
  }

  if (user.error || books.error) {
    return <p>Something went wrong</p>
  }

  return (
    <div>
      <h2>Recommendations</h2>
      {user.data.me === null || !books.data  ? (<p>Something went wrong</p>) :
      books.data.allBooks.filter((b) => b.genres.includes(user.data.me.favoriteGenre)).length >0 ? (
        <div>
          <p>
            Books in your favorite genre <strong>{user.data.me.favoriteGenre}</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>author</th>
                <th>published</th>
              </tr>
              {books.data.allBooks.filter((b) => b.genres.includes(user.data.me.favoriteGenre)).map((book) => (
                <tr key={book.title}>
                  <td>{book.title}</td>
                  <td>{book.author.name}</td>
                  <td>{book.published}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      : (
        <p>
          No books on user's favorite genre{" "}
          <strong>{user.data.me.favoriteGenre}</strong>
        </p>
      )
       }
    </div>
  )
}

export default Recommend
