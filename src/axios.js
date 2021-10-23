import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000", // Enter Your backend server url
});

export default instance
