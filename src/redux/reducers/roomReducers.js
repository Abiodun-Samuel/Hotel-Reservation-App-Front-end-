import {
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_LIST_RESET,
  ROOM_DETAILS_REQUEST,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_RESET,
} from "../constants/roomConstants";

export const roomListReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ROOM_LIST_REQUEST:
      return { loading: true, rooms: [] };
    case ROOM_LIST_SUCCESS:
      return { loading: false, rooms: action.payload };
    case ROOM_LIST_FAIL:
      return { loading: false, error: action.payload };
    case ROOM_LIST_RESET:
      return { rooms: [] };
    default:
      return state;
  }
};

export const roomDetailsReducer = (state = { roomDetails: {} }, action) => {
  switch (action.type) {
    case ROOM_DETAILS_REQUEST:
      return { loading: true, roomDetails: {} };
    case ROOM_DETAILS_SUCCESS:
      return { loading: false, roomDetails: action.payload };
    case ROOM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ROOM_DETAILS_RESET:
      return { roomDetails: {} };
    default:
      return state;
  }
};
