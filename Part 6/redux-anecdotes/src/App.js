import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/VisibilityFilter'
const App = () => {
    return (
    <div>
      <h2>Anecdotes</h2>
      <VisibilityFilter />
     <AnecdoteList/>
      <h2>create new</h2>
        <AnecdoteForm />
       
    </div>
  )
}

export default App