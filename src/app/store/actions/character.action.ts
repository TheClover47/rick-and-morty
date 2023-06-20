import { Action } from "@ngrx/store";
import { Character } from "src/app/models/character";

export enum CharacterActionType {
    ADD_ITEM = '[Character] Add Character',
    REMOVE_ITEM = '[Character] Remove Character'
  }
  export class AddCharacterAction implements Action {
    readonly type = CharacterActionType.ADD_ITEM;
    //add an optional payload
    constructor(public payload: Character) {}
  }
  export class RemoveCharacterAction implements Action {
    readonly type = CharacterActionType.REMOVE_ITEM;
    //add an optional payload
    constructor(public payload: Character) {}
  }
  export type UserAction = AddCharacterAction;