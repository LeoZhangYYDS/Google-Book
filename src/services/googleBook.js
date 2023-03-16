import axios from "axios";
import config from "../config.json";
//google book api
const googleBook = (query) => {
  return axios.get(
    `${config.googleBookURL}?q=${query}&key=${config.key}&maxResults=12`
  );
};

export default googleBook;
