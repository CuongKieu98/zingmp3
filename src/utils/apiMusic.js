import { makeApiCall } from "./apiUtils";

const URL = "https://spotify81.p.rapidapi.com/";

 const getTopChart ={

    method: "GET",
    url: "https://spotify81.p.rapidapi.com/top_200_tracks",
    params: { country: "VN", period: "daily" },
    headers: {
      "X-RapidAPI-Key": "ea115fc80emsh0f4dcb5a0c1f73bp164456jsne7eb6e1a4c37",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },

}
export default getTopChart
