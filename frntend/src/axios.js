import axios from "axios";

// base url deployed on heroku
const instance = axios.create({
  baseURL: "https://tiktokclone12.herokuapp.com/",
});

export default instance;
