import { useState, useEffect } from 'react';
import { Diary } from './types';
import  diary from './services/diary';

function App() {
  const [diaries, setDiaries] = useState<Diary []>([]);
  const style = {
    marginTop: '10px',
  };

  useEffect(() => { 
    diary.getDiaries().then(data => setDiaries(data))}, []);
  {console.log(diaries)}
  return (
    <div>
      
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