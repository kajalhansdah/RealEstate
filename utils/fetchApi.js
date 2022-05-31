import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"
export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'aeafa44286mshda6e7eca7cd6340p1de671jsn2b5ca0a0d29b'
  }
    });

    return data;
}