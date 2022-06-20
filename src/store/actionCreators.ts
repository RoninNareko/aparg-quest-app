import * as actionTypes from "./actionTypes"
import { ThunkDispatch } from "redux-thunk";
import {AppDispatch, RootState } from "./";
import axios from "axios";

export function getStoryList(language:string| null):any {
  return (dispatch:ThunkDispatch<RootState,AppDispatch, any>) => {

  dispatch({
      type: actionTypes.listActionTypes.LOADING,
      payload: true,
  });

  axios.get(`https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=20&languages=${language || null},fr&order=top&page_token=98807224-712f-4658-9d31-98f77773333`)
  .then(function ({data}) {
    dispatch({
      type: actionTypes.listActionTypes.GET_STORY_LIST,
      payload: data.stories
    });
    dispatch({
      type: actionTypes.listActionTypes.LOADING,
      payload: false,
  });
  })
  .catch(function (error) {
    dispatch({
      type: actionTypes.listActionTypes.SET_ERROR,
      payload: error
    });
    dispatch({
      type: actionTypes.listActionTypes.LOADING,
      payload: false,
  });
  })
 }
}

