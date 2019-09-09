import {
  createSubject,
  getSubjects,
  deleteSubject,
  updateSubject
} from "../api/subjectApi";

export const SubjectActionTypes = {
  ADD_SUBJECT: "ADD_SUBJECT",
  UPDATE_SUBJECT: "UPDATE_SUBJECT",
  DELETE_SUBJECT: "DELETE_SUBJECT",
  SUBJECTS_LOADED: "SUBJECTS_LOADED"
};

// action creators

const subjectAdded = subject => ({
  type: SubjectActionTypes.ADD_SUBJECT,
  payload: subject
});

const subjectLoaded = subjects => ({
  type: SubjectActionTypes.SUBJECTS_LOADED,
  payload: subjects
});

const subjectUpdated = updatedSubject => ({
  type: SubjectActionTypes.UPDATE_SUBJECT,
  payload: updatedSubject
});

const subjectDeleted = subjectId => ({
  type: SubjectActionTypes.DELETE_SUBJECT,
  payload: subjectId
});

// asyc actions
export const addSubjectAsync = subject => {
  return async function(dispatch, getState) {
    try {
      const result = await createSubject(subject);
      dispatch(subjectAdded(result.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const getSubjectsAsync = () => {
  return async function(dispatch, getState) {
    try {
      const subjects = await getSubjects();
      dispatch(subjectLoaded(subjects.data));
    } catch (err) {
      // TODO : error
    }
  };
};

export const updateSubjectAsync = subject => {
  return async function(dispatch, getState) {
    try {
      const updatedSubject = await updateSubject(subject);
      dispatch(subjectUpdated(updatedSubject.data));
    } catch (err) {}
  };
};

export const deleteSubjectAsync = subjectId => {
  return async function(dispatch, getState) {
    try {
      const result = await deleteSubject(subjectId);
      if (result.data) {
        dispatch(subjectDeleted(subjectId));
      } else {
        console.log("ERROR DELETING SUBJECT.");
      }
    } catch (err) {
      console.log("ERROR DELETING SUBJECT.");
    }
  };
};
