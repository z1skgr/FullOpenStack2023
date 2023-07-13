import axios from 'axios'; 
import { Diary, NewDiary } from '../types';
const baseUrl = 'http://localhost:3001/api/diaries';

const getDiaries = async () => {return await axios.get(baseUrl).then(response => response.data);}


// eslint-disable-next-line
const addDiary = async (diary: NewDiary, setMessage: any) => {
    try{
        const result = await axios.post<Diary>(baseUrl, diary).then(response => response.data)
        setMessage(`Successfully added diary`)
        return result
    }catch(error){
        if(axios.isAxiosError(error)) {
            setMessage(error.response?.data)
            throw new Error(error.response?.data)
        }else {
            setMessage(error)
        }
    }
      
}

export default{
    getDiaries,
    addDiary
}