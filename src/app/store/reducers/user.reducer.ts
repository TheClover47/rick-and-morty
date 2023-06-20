import { UserItem } from "../models/userItem.model";
import { UserAction, UserActionType } from "../actions/user.action";
//create a dummy initial state
const initialState: Array<UserItem> = [
    {
      name: 'Gunārs',
      email: 'a@a.aa',
      password: '123456Aa!',
      lastLogin: 'NOW'
    },
    {
      name: 'Janis',
      email: 'a@a.ab',
      password: '123456Aa!',
      lastLogin: 'NOW'
    },
  ];
  export function userReducer(
    state: Array<UserItem> = initialState,
    action: any,
  ) {
    switch (action.type) {
      case UserActionType.ADD_ITEM:
        return [...state, action.payload];
      case UserActionType.REMOVE_ITEM:
        return state.filter(user => {return user == action.payload})
      default:
        return state;
    }
  }