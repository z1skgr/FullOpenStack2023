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
    }, setMessage).then(data => {
      if(data) {
        setDiaries(diaries.concat(data))
        setDate('')
        setVisibility('')
        setWeather('')
        setComments('')
      }
    }).catch(error => setMessage('Error: ' + error.message))
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
            <input type='date' value={date} onChange={(event) => setDate(event.target.value) }/>
          </div>
          <div> 
            visibility
            <input type='radio' id='visib_one' value='great' onChange={(event) => setVisibility(event.target.value)}/>
              <label htmlFor="_great">great</label>
            <input type='radio' id='visib_two' value='good' onChange={(event) => setVisibility(event.target.value)}/>
              <label htmlFor="_good">good</label>
            <input type='radio' id='visib_three' value='ok' onChange={(event) => setVisibility(event.target.value)}/>
              <label htmlFor="_ok">ok</label>
           <input type='radio' id='visib_four' value='poor' onChange={(event) => setVisibility(event.target.value)}/>
              <label htmlFor="_poor">poor</label>
          </div>
          <div>
            weather
           <input type='radio' id='weather_one' value='sunny' onChange={(event) => setWeather(event.target.value)}/>
              <label htmlFor="_sunny">sunny</label>
           <input type='radio' id='weather_two' value='rainy' onChange={(event) => setWeather(event.target.value)}/>
              <label htmlFor="_rainy">rainy</label>
           <input type='radio' id='weather_three' value='cloudy' onChange={(event) => setWeather(event.target.value)}/>
              <label htmlFor="_cloudy">cloudy</label>
            <input type='radio' id='weather_four' value='stormy' onChange={(event) => setWeather(event.target.value)}/>
              <label htmlFor="_stormy">stormy</label>
           <input type='radio' id='weather_five ' value='windy' onChange={(event) => setWeather(event.target.value)}/>
              <label htmlFor="_windy">windy</label>
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