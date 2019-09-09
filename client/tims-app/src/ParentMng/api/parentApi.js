import { API_PATH } from "../../Constants";
import axios from "axios";

const API = `${API_PATH}/parents`;

export const createParent = parent => {
  return axios.post(`${API}`, parent);
};

export const getParents = () => {
  return axios.get(`${API}`);
};

export const updateParent = parent => {
  return axios.post(`${API}/update`, parent);
};

export const deleteParent = parentId => {
  return axios.post(`${API}/delete`, { idToDelete: parentId });
};
