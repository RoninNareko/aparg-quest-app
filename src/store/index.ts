import { FilterDataType, GetStoryListActionDataType } from './actionTypes';
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import { IFilter } from "./types";


export const store  = createStore(combineReducers(rootReducer),{},composeWithDevTools(applyMiddleware(thunk)));

export interface Store {
    listReducer:{
        loading: false,
        error: null,
        list: [],
    }
    filterReducer:IFilter
}

export type actionsTypes = GetStoryListActionDataType | FilterDataType;

export type RootState = Store;
export type AppDispatch = typeof store.dispatch;