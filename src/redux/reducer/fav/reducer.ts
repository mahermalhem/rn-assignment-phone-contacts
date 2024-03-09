import { ADD_TO_FAV_LIST, REMOVE_FROM_FAV_LIST, SET_FAV_LIST } from "./actions";

const initialState = {
  favList: [],
};

export default function favReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FAV_LIST:
      return {
        ...state,
        favList: action.favList,
      };
    case ADD_TO_FAV_LIST:
      return {
        ...state,
        favList: action.favList,
      };
    case REMOVE_FROM_FAV_LIST:
      return {
        ...state,
        favList: action.favList,
      };
    default:
      return state;
  }
}
