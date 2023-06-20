import { UserItem } from "./userItem.model";
import { Character } from "src/app/models/character";

export interface AppState {
  users: Array<UserItem>;
  characters: Array<Character>;
}