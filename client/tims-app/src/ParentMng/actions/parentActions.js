import {
    createParent,
    getParents,
    deleteParent,
    updateParent
  } from "../api/parentApi";
  
  export const SubjectActionTypes = {
    ADD_PARENT: "ADD_PARENT",
    UPDATE_PARENT: "UPDATE_PARENT",
    DELETE_PARENT: "DELETE_PARENT",
    PARENT_LOADED: "PARENTS_LOADED"
  };
  
  // action creators
  
  const parentAdded = parent => ({
    type: ParentActionTypes.ADD_PARENT,
    payload: parent
  });
  
  const parentLoaded = parents => ({
    type: ParentActionTypes.PARENTS_LOADED,
    payload: parents
  });
  
  const parentUpdated = updatedParent => ({
    type: ParentActionTypes.UPDATE_PARENT,
    payload: updatedSubject
  });
  
  const parentDeleted = parentId => ({
    type: ParentActionTypes.DELETE_PARENT,
    payload: subjectId
  });
  
  // asyc actions
  export const addParentAsync = parent => {
    return async function(dispatch, getState) {
      try {
        const result = await createParent(parent);
        dispatch(parentAdded(result.data));
      } catch (err) {
        // TODO : error
      }
    };
  };
  
  export const getSubjectsAsync = () => {
    return async function(dispatch, getState) {
      try {
        const parents = await getParents();
        dispatch(subjectLoaded(parents.data));
      } catch (err) {
        // TODO : error
      }
    };
  };
  
  export const updateParentAsync = parent => {
    return async function(dispatch, getState) {
      try {
        const updatedParent = await updateParent(parent);
        dispatch(parentUpdated(updatedParent.data));
      } catch (err) {}
    };
  };
  
  export const deleteParentAsync = subjectId => {
    return async function(dispatch, getState) {
      try {
        const result = await deleteParent(parentId);
        if (result.data) {
          dispatch(parentDeleted(parentId));
        } else {
          console.log("ERROR DELETING PARENT.");
        }
      } catch (err) {
        console.log("ERROR DELETING PARENT.");
      }
    };
  };
  