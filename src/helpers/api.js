import axios from 'axios';
import { API_BASE_URL } from '../constants';

const get = endpoint =>
  axios.get(API_BASE_URL + endpoint);

const post = (endpoint, data) =>
  axios.post(API_BASE_URL + endpoint, data);

const put = (endpoint, data) =>
  axios.put(API_BASE_URL + endpoint, data);

const myDelete = (endpoint, data) =>
  axios.delete(API_BASE_URL + endpoint, data);

const Api = { get,post, put, delete: myDelete };

export default Api;
