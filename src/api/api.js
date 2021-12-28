/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL,
  headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  },
  transformRequest: [function (data, headers) {
    if(data instanceof FormData){
      headers['Content-Type']='multipart/form-data';
    }else {
      headers['Content-Type']='application/json';
    }
    if(localStorage.getItem('token'))
      headers['Authorization'] = `${localStorage.getItem('token')}`
    // Do not change data
    if(data instanceof FormData){
      return data;
    }
    return JSON.stringify(data);
  }],
});