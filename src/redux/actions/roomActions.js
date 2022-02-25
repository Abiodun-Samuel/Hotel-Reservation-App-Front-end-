import axios from "axios";
import {
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_REQUEST,
  //   ROOM_LIST_RESET,
} from "../constants/roomConstants";

export const getRoomList = () => async (dispatch) => {
  try {
    dispatch({ type: ROOM_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/rooms");
    const rooms = data.message;

    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: rooms,
    });
  } catch (error) {
    dispatch({
      type: ROOM_LIST_FAIL,
      payload: error,
    });
  }
};

export const getRoomDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: ROOM_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/api/rooms/${slug}`);
    const [message] = data;

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: message,
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error,
    });
  }
};
