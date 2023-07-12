import axios from 'axios'; 
const baseUrl = 'http://localhost:3001/api/diaries';

const getDiaries = () => {return axios.get(baseUrl).then(response => response.data);}

export default{
    getDiaries
}