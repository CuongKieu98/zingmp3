import { makeApiCall } from "./apiUtils";

const URL = "https://spotify81.p.rapidapi.com/";

 const getTopChart ={

    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {locale: 'vi-VN', pageSize: '20', startFrom: '0'},
    headers: {
      'X-RapidAPI-Key': 'ea115fc80emsh0f4dcb5a0c1f73bp164456jsne7eb6e1a4c37',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
}
export default getTopChart
