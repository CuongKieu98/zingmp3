import axios from "axios";


const request = axios.create({
  baseURL: "https://spotify81.p.rapidapi.com/",
});

export default request;
