import {
  createTutionClass,
  getTutionClass,
  getGrades,
  getTutionClassTypes,
  getTeachers
} from "../api/tutionClassApi";
import { async } from "q";

export const TutionClassActionTypes = {
  ADD_TUTION_CLASS: "ADD_TUTION_CLASS",
  UPDATE_TUTION_CLASS: "UPDATE_TUTION_CLASS",
  DELETE_TUTION_CLASS: "DELETE_TUTION_CLASS",
  GRADES_LOADED: "GRADES_LOADED",
  TYPES_LOADED: "TYPES_LOADED",
  TUTION_CLASS_LOADED: "TUTION_CLASS_LOADED",
  TEACHERS_LOADED: "TEACHERS_LOADED"
};

// action creators

const tutionClassAdded = tutionClass => ({
  type: TutionClassActionTypes.ADD_TUTION_CLASS,
  payload: tutionClass
});

const tutionClassUpdated = updatedtutionClass => ({
  type: TutionClassActionTypes.UPDATE_TUTION_CLASS,
  payload: updatedtutionClass
});

const tutionClassDeleted = tutionClassId => ({
  type: TutionClassActionTypes.DELETE_TUTION_CLASS,
  payload: tutionClassId
});

const gradesLoaded = grades => ({
  type: TutionClassActionTypes.GRADES_LOADED,
  payload: grades
});

const tutionClassTypeLoaded = types => ({
  type: TutionClassActionTypes.TYPES_LOADED,
  payload: types
});

const teachersLoaded = teachers => ({
  type: TutionClassActionTypes.TEACHERS_LOADED,
  payload: teachers
});

// asyc actions
export const addTutionClassAsync = tutionClass => {
  return async function(dispatch, getState) {
    try {
      const result = await createTutionClass(tutionClass);
      dispatch(tutionClassAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getTutionClasssAsync = () => {
  return async function(dispatch, getState) {
    try {
      const tutionClass = await getTutionClass();
      dispatch(tutionClassAdded(tutionClass.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getGradesAsync = () => {
  return async function(dispatch, getState) {
    try {
      const grades = await getGrades();
      dispatch(gradesLoaded(grades.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getTutionClassTypesAsync = () => {
  return async function(dispatch, getState) {
    try {
      const types = await getTutionClassTypes();
      dispatch(tutionClassTypeLoaded(types.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getTeachersAsync = () => {
  return async function(dispatch, getState) {
    try {
      const teachers = await getTeachers();
      dispatch(teachersLoaded(teachers.data));
    } catch (error) {
      // TODO : error
    }
  };
};

export const updatetutionClassAsync = () => {
  return async function(dispatch, getState) {
    try {
    } catch (err) {}
  };
};

export const deletetutionClassAsync = () => {
  return async function(dispatch, getState) {
    try {
    } catch (err) {}
  };
};
