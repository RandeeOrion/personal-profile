import {GET_PROJECTS} from './types.js';

export default (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_PROJECTS:
      return{
        ...state,
        projects: payload,
      }
    default: 
       return state;
  }
};