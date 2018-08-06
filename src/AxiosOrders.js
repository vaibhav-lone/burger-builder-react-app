import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-project-5b4ab.firebaseio.com/"
});

export default instance;
