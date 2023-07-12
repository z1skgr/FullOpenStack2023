import { useState, useEffect } from 'react';
import { Diary } from './types';
import  diary from './services/diary';

function App() {
  const [diaries, setDiaries] = useState<Diary []>([]);

  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState('')
  const [weather, setWeather] = useState('')
  const [comment, setComments] = useState('')

  const submit =  (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    console.log('add diary...')
    diary.addDiary({
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment
    })
    setDate('')
    setVisibility('')
    setWeather('')
    setComments('')
  }


  const style = {
    marginTop: '10px',
  };

  useEffect(() => { 
    diary.getDiaries().then(data => setDiaries(data))}, []);
  return (
    <div>
      <h1>Add new entry</h1>   
        <form onSubmit={submit}>
          <div>
            date
            <input
              value={date}
              onChange={(event) => {setDate(event.target.value);
              console.log(event.target);} }
            />
          </div>
          <div>
            visibility
            <input
              value={visibility}
              onChange={(event) => {setVisibility(event.target.value)
              console.log(event.target)}}
            />
          </div>
          <div>
            weather
            <input
              
              value={weather}
              onChange={( event) => {setWeather(event.target.value)
                console.log(event.target)}}
            />
          </div>
          <div>
          <div>
            comment
            <input
              value={comment}
              onChange={(event) => {setComments(event.target.value)
                console.log(event.target)}}
            />
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