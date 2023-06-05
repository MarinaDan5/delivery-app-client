import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:3001/api/",
  headers: {
    "Content-Type": "application/json",
  },
};

let instance = axios.create(defaultOptions);

export default instance;
