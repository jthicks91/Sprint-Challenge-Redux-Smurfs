/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADDING_SMURF_START,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  DELETING_SMURF_START,
  UPDATING_SMURF_START,
  DELETING_SMURF_SUCCESS,
  UPDATING_SMURF_FAILURE,
  DELETING_SMURF_FAILURE
} from "../actions";
import { REFUSED } from "dns";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case ADDING_DATA_START:
      return {
        ...state,
        error: null,
        addingSmurf: true
      };
    case DELETING_SMURF_START:
      return {
        ...state,
        error: null,
        deletingSmurf: true
      };
    case FETCH_SMURF_SUCCESS ||
      ADDING_SMURF_SUCCESS ||
      UPDATING_SMURF_START ||
      DELETING_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case UPDATING_SMURF_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      };
    case DELETING_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
