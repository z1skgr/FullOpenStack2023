import { useState, useEffect } from 'react';
import { Diary } from './types';
import  diary from './services/diary';
import Notify from './Notify'

const style = {
  marginTop: '10px',
};

function App() {
  const [diaries, setDiaries] = useState<Diary []>([]);

  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState('')
  const [weather, setWeather] = useState('')
  const [comment, setComments] = useState('')
  const [Message, setMessage] = useState('')

  const submit =  (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    diary.addDiary({
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment
    })
    setMessage(`Successfully added diary`)
    setDate('')
    setVisibility('')
    setWeather('')
    setComments('')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [Message])

  useEffect(() => { 
    diary.getDiaries().then(data => setDiaries(data))}, []);
  return (
    <div>
      <h1>Add new entry</h1>   
      <Notify errorMessage={Message} />
        <form onSubmit={submit}>
          <div>
            date
            <input value={date} onChange={(event) => setDate(event.target.value) }/>
          </div>
          <div> 
            visibility
            <input value={visibility} onChange={(event) => setVisibility(event.target.value)}/>
          </div>
          <div>
            weather
            <input value={weather} onChange={( event) => setWeather(event.target.value)} />
          </div>
          <div>
          <div>
            comment
            <input value={comment} onChange={(event) => setComments(event.target.value)} />
          </div>
          </div>
          <button type="submit">Add diary</button>
        </form>
      
      <h1>Diary entries</h1>        
      {diaries.map(diary => 
         <div key={diary.id} style={ style }>
          <h3>{diary.date}</h3>
          <div>Visibility: {diary.visibility}</div>
          <div>Weather: {diary.weather}</div>
          <div>Comment: {diary.comment}</div>
         </div>
      )}

    </div>




    
  );

}

export default App;