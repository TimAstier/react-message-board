/* eslint-disable implicit-arrow-linebreak */

import axios from 'axios';
import { API_BASE_URL } from '../constants';

const get = endpoint =>
  axios.get(`${API_BASE_URL}${endpoint}`);

const post = (endpoint, data) =>
  axios.post(`${API_BASE_URL}${endpoint}`, data);

const put = (endpoint, data) =>
  axios.put(`${API_BASE_URL}${endpoint}`, data);

const myDelete = (endpoint, id) =>
  axios.delete(`${API_BASE_URL}${endpoint}/${id}`);

const Api = { get, post, put, delete: myDelete };

export default Api;
