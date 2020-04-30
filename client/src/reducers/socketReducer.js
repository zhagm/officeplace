import {
  SOCKET_MESSAGE_RECEIVED,
  SOCKET_ADD_USER,
  SOCKET_REMOVE_USER,
  SOCKET_USERS_RECEIVED,
} from "../actions/types";

const initialState = {
  onlineUsers: [],
  messages: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SOCKET_MESSAGE_RECEIVED:
      let messages = [...state.messages, payload].slice(-10);
      return {
        ...state,
        messages,
      };
    case SOCKET_ADD_USER:
      let onlineUsers = state.onlineUsers.filter((u) => u.id !== payload.id);
      onlineUsers.push(payload);
      return {
        ...state,
        onlineUsers,
      };
    case SOCKET_REMOVE_USER:
      return {
        ...state,
        onlineUsers: state.onlineUsers.filter((user) => user.id !== payload),
      };
    case SOCKET_USERS_RECEIVED:
      return {
        ...state,
        onlineUsers: payload,
      };
    default:
      return state;
  }
}