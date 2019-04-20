/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

export const UPDATING_SMURF_START = "UPDATING_SMURF_START";
export const UPDATING_SMURF_SUCCESS = "UPDATING_SMURF_SUCCESS";
export const UPDATING_SMURF_FAILURE = "UPDATING_SMURF_FAILURE";

export const DELETING_SMURF_START = "DELETING_SMURF_START";
export const DELETING_SMURF_SUCCESS = "DELETING_SMURF_SUCCESS";
export const DELETING_SMURF_FAILURE = "DELETING_SMURF_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const url = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get(url)
    .then(res => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
    });
};

export const addSmurf = (smurf = dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  return axios
    .post(url, smurf)
    .then(res => {
      dispatch({
        type: ADDING_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADDING_SMURF_FAILURE, payload: err.response });
    });
});

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF_START });
  return axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: DELETING_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETING_SMURF_FAILURE, payload: err.response });
    });
};

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: UPDATING_SMURF_START });
  return axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      dispatch({
        type: UPDATING_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: UPDATING_SMURF_SUCCESS, payload: err.response });
    });
};
