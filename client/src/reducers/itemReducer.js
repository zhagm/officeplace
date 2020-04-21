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
    case GET_ITEMS: // payload is array of items
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case ADD_ITEM: // payload is new item
      return {
        ...state,
        items: [...(state.items || []), payload],
        loading: false,
      };
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