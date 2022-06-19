import { listActionTypes } from './actionTypes';
import { actionsTypes } from './index';
import { IFilter } from './types';


const listInitialState = {
  loading: false,
  error: null,
  list: [],
}

export const listReducer = (state = listInitialState, action:any) => {
  switch (action.type) {
    case listActionTypes.GET_STORY_LIST:{
      return {...state , list: action.payload};
    }
    case listActionTypes.SET_ERROR:{
      return {...state , error: action.payload};
    }
    case listActionTypes.LOADING:{
      return {...state , loading: action.payload};
    }
  }
    return state;
  }
  

const filterInitialState = {
  languages: [],
  order: [],
  autorefresh: [],
}

export const filterReducer = (InitialState = filterInitialState, action:actionsTypes):IFilter => {
    return InitialState;
  }
  