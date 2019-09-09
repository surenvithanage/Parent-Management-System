import { SubjectActionTypes } from "../ClassMng/actions/subjectActions";

const defaultState = {
  subjectList: []
};

export const subjects = (state = defaultState, action) => {
  switch (action.type) {
    case SubjectActionTypes.ADD_SUBJECT:
      return {
        subjectList: [...state.subjectList, action.payload]
      };

    case SubjectActionTypes.DELETE_SUBJECT:
      const newSubjectList = state.subjectList.slice();
      const indexToDelete = newSubjectList.findIndex(
        s => s.id === action.payload
      );
      newSubjectList.splice(indexToDelete, 1);
      return {
        subjectList: [...newSubjectList]
      };

    case SubjectActionTypes.SUBJECTS_LOADED:
      return {
        subjectList: [...action.payload]
      };

    case SubjectActionTypes.UPDATE_SUBJECT:
      const newUpdatedSubjectList = state.subjectList.slice();
      const indexToUpdate = newUpdatedSubjectList.findIndex(
        s => s.id === action.payload.id
      );
      newUpdatedSubjectList[indexToUpdate] = action.payload;
      console.log("====================================");
      console.log("updated state", newUpdatedSubjectList);
      console.log("====================================");
      return {
        subjectList: [...newUpdatedSubjectList]
      };
    default:
      return state;
  }
};
