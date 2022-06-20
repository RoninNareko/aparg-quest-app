import { IFilter } from './types';

export enum listActionTypes {
    GET_STORY_LIST = 'GET_STORY_LIST',
    SET_ERROR = 'SET_ERROR',
    LOADING = 'LOADING',
};


export enum filterActionTypes {
    CHANGE_SELECT_LANGUAGE = 'CHANGE_SELECT_LANGUAGE',
};


export type GetStoryListActionDataType = {
    type: string,
    payload: [] | null | Error,
}


export type FilterDataType = IFilter;