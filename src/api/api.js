import axios from 'axios';
//const { REACT_APP_API_URL: url, REACT_APP_API_KEY: key } = process.env;
export default axios.create({
  baseURL: 'http://localhost:3000',
});
