import { Action } from "@ngrx/store";
import { UserItem } from "../models/userItem.model";

export enum UserActionType {
    ADD_ITEM = '[USER] Add User',
  }
  export class AddItemAction implements Action {
    readonly type = UserActionType.ADD_ITEM;
    //add an optional payload
    constructor(public payload: UserItem) {}
  }
  export type UserAction = AddItemAction;