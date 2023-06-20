import { userReducer } from './user.reducer';
import { characterReducer } from './character.reducer';
import { UserItem } from '../models/userItem.model';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../models/state.model';


export const rootReducer = {};


export const reducers: ActionReducerMap<AppState, any> = {
    users: userReducer,
    characters: characterReducer,
};