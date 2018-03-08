import {GETTINGUSERS, ALLUSERS, ERROR} from '../Actions/index';

const initialState = {
  gettingUsers: false,
  receivedUsers: false,
  users: [],
  error: null
}


const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTINGUSERS:
      return {...state, gettingUsers: true}
    case ALLUSERS:
      return {...state, gettingUsers: false, receivedUsers: true, users: action.payload};
    case ERROR:
      return {...state, gettingUsers: false, receivedUsers: false, error: action.payload};
    default: 
      return state;
  }
}

export default usersReducer;