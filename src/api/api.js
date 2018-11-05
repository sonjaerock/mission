import axios from "axios/index";

//const API_PATH = process.env.ROOT_API;
const API_PATH = "http://localhost:3000/";

export function fetchProblem(body){
  return axios.get(API_PATH + 'api/fetchProblem');
}

export function logout(token){
  return axios.post(API_PATH + 'user/logout/?token='+token);
}
