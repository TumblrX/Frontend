/* eslint-disable no-unused-vars */
import axios from 'axios';

// const { REACT_APP_API_URL: url, REACT_APP_API_KEY: key } = process.env;
export default axios.create({
  // baseURL: `${url}`,
  baseURL: 'http://localhost:3500',
});
