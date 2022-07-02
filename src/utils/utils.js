import axios from "axios";

const defaultOptions = {
    baseURL: "https://danylchuk-m.herokuapp.com/api/",
    headers: {
      'Content-Type': 'application/json',
    },
  };

let instance = axios.create(defaultOptions);
  
export default instance;