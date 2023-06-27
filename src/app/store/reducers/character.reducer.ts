import { Character } from 'src/app/models/character';
import { CharacterActionType } from '../actions/character.action';
//create a dummy initial state
const initialState: Array<Character> = [];
export function characterReducer(
  state: Array<Character> = initialState,
  action: any
) {
  switch (action.type) {
    case CharacterActionType.ADD_ITEM:
      const user = state.filter(
        (character) => character.id == action.payload.id
      );
      if (user.length) {
        return [...state];
      } else {
        return [...state, action.payload];
      }
    /* return [...state, action.payload]; */
    case CharacterActionType.REMOVE_ITEM:
      return state.filter((character) => {
        return character == action.payload;
      });
    default:
      return state;
  }
}
