import { API_PATH } from "../../Constants";
import axios from "axios";

const API = `${API_PATH}/tution-class`;

export const createTutionClass = tutionClass => {
  return axios.post(`${API}`, tutionClass);
};

export const getTutionClass = () => {
  return axios.get(`${API}`);
};

export const getGrades = () => {
  return axios.get(`${API}/grade`);
};

export const getTutionClassTypes = () => {
  return axios.get(`${API}/type`);
};

export const getTeachers = () => {
  return axios.get(`${API}/teacher`);
};

export const updateTutionClass = tutionClass => {
  return axios.post(`${API}/update`, tutionClass);
};

export const deleteTutionClass = tutionClassId => {
  return axios.post(`${API}/delete`, { tutionClassId });
};
