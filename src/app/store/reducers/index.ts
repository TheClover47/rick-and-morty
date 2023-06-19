import { userReducer } from './user.reducer';
import { UserItem } from '../models/userItem.model';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    users: Array<UserItem>;
};


export const reducers: ActionReducerMap<AppState, any> = {
    users: userReducer
};