import { API_PATH } from "../../Constants";
import axios from "axios";

const API = `${API_PATH}/subject`;

export const createSubject = subject => {
  return axios.post(`${API}`, subject);
};

export const getSubjects = () => {
  return axios.get(`${API}`);
};

export const updateSubject = subject => {
  return axios.post(`${API}/update`, subject);
};

export const deleteSubject = subjectId => {
  return axios.post(`${API}/delete`, { idToDelete: subjectId });
};
