import axios from "axios"

const request = axios.create({
    baseURL: "http://mp3.zing.vn/"
}
)

export default request