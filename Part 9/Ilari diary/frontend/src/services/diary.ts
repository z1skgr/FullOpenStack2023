import axios from 'axios'; 
import { Diary, NewDiary } from '../types';
const baseUrl = 'http://localhost:3001/api/diaries';

const getDiaries = async () => {return await axios.get(baseUrl).then(response => response.data);}

const addDiary = async (diary: NewDiary) => {
      return await axios.post<Diary>(baseUrl, diary).then(response => response.data)
}

export default{
    getDiaries,
    addDiary
}