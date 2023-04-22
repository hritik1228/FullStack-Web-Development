import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '99cd5336b0mshc916bf58ac02534p150ad9jsnf51a1925d639',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}