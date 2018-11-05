import axios from "axios/index";

//const API_PATH = process.env.ROOT_API;
const API_PATH = "http://localhost:3000/";

export function fetchProblem(body){
  return axios.get(API_PATH + 'api/fetchProblem');
}

export function submit(body){
  return axios.post(API_PATH + 'api/submit',{
    headers: {
      'content-type': 'x-www-form-url-urlencoded'
    }, body
  });
}
