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
    action: UserAction
  ) {
    console.log('help')
    console.log(state)
    switch (action.type) {
      case UserActionType.ADD_ITEM:
        console.log('here')
        console.log(...state)
        return [...state, action.payload];
      default:
        console.log('BEAR')
        console.log(...state)
        return state;
    }
  }