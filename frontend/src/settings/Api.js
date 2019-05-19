import axios from 'axios';
/*
var myApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Authorization': '',
    'Content-type' : 'application/json; charset=utf-8'
  }
});
*/
export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000',
  })
}
