/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_UL;

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [function (data, headers) {
    
    if(localStorage.getItem('token'))
      headers['Authorization'] = `${localStorage.getItem('token')}`
    // Do not change data

    return JSON.stringify(data);;
  }],
});