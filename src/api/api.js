/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
// eslint-disable-next-line prefer-const
let headers = {};

if (localStorage.getItem('token')) {
  headers.Authorization = `${localStorage.getItem('token')}`;
}

export default axios.create({
  baseURL,
  headers,
});