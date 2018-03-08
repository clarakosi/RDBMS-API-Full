import {GETTINGPOSTS, ALLPOSTS, ERROR} from '../Actions/index';

const initialState = {
  gettingPosts: false,
  receivedPosts: false,
  posts: [],
  error: null
}


const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTINGPOSTS:
      return {...state, gettingPosts: true}
    case ALLPOSTS:
      return {...state, gettingPosts: false, receivedPosts: true, posts: action.payload};
    case ERROR:
      return {...state, gettingPosts: false, receivedPosts: false, error: action.payload};
    default: 
      return state;
  }
}

export default usersReducer;