import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, { type, payload }) {
  console.log(`itemReducer: ${type}`);
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case ADD_ITEM:
      break;
    case DELETE_ITEM:
      break;
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
