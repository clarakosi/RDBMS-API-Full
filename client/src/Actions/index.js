import axios from 'axios';

const url = 'http://localhost:5000'

export const GETTINGUSERS = 'GETTINGUSERS';
export const ALLUSERS = 'ALLUSERS';

export const GETTINGPOSTS = 'GETTINGPOSTS';
export const ALLPOSTS = 'ALLPOSTS';


export const ERROR = 'ERROR';

export const getUsers = () => {
  return dispatch => {
    dispatch({ type: GETTINGUSERS })
    axios.get(`${url}/users`)
      .then(response => {
        dispatch({type: ALLUSERS, payload: response.data});
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error});
      })
    } 
};


export const getPosts = () => {
  return dispatch => {
    dispatch({type: GETTINGPOSTS});
    axios.get(`${url}/posts`)
      .then(response => {
        dispatch({type: ALLPOSTS, payload: response.data});
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error});
      })
  }
};
