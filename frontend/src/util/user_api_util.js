import axios from "axios";


export const getUser = user_id => {
  return axios.get(`/api/users/${user_id}`);
};

export const getUsers = () => {
         return axios.get("/api/users");
       };