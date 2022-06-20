import { listActionTypes, filterActionTypes } from './actionTypes';
import { IFilter, IList } from './types';


const listInitialState:IList = {
  loading: false,
  error: null,
  list: [],
}

export const listReducer = (state = listInitialState, action:any) => {
  switch (action.type) {
    case listActionTypes.GET_STORY_LIST:{
      const newArray = [...state.list, ...action.payload];
      console.log(newArray)
      return {...state , list: newArray};
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
  

const filterInitialState:IFilter = {
    languages: {
        selectAll: false,
        list: [{
            id:1,
            name:"English",
            selected:true,
            prefix:"en",
        },{
            id:2,
            name:"German",
            selected:false,
            prefix:"de",
        },{
            id:3,
            name:"Chinese",
            selected:false,
            prefix:"zh",
        },{
            id:4,
            name:"Italian",
            selected:false,
            prefix:"it",
        }
    ]},
    order: {
        popular: false,
        latest: false,
        mostRead: false,
        top: false,
    },
    autorefresh: [],
}

export const filterReducer = (state = filterInitialState, action:any):IFilter => {
  switch (action.type) {
    case filterActionTypes.CHANGE_SELECT_LANGUAGE:{
      const {id, checked} = action.payload;
      const sortingState:any = state.languages.list.map((item:any) => {
        if(item.id === id){
          return {...item, selected: checked};
        } 
        return item;
      })
      return {...state, languages: {...state.languages, list: sortingState}};
    }
  }
    return state;
  }
  
  