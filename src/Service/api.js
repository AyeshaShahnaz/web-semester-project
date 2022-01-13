import axios from "axios";

const url = "http://localhost:5000";

export const adduser = async (userdata) => {
  return await axios.post(`${url}/Signup`, userdata);
};
export const getuser = async (userdata) => {
  return await axios.get(`${url}/ViewUser`, userdata);
};
export const deleteuser = async (id) => {
  return await axios.delete(`${url}/deleteData/` + id);
  
};
export const updateuser = async (userdata) => {
  return await axios.update(`${url}/updateData`, userdata);
};
