import React, { useEffect } from "react";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOM_DETAILS_RESET } from "../../redux/constants/roomConstants";
import Loader from "../Loader";

const RoomDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const roomDetailsStore = useSelector((state) => state.roomDetails);
  const { loading, error, roomDetails } = roomDetailsStore;
  console.log(roomDetails);

  useEffect(() => {
    dispatch(getRoomDetails(slug));
    return () => {
      dispatch({ type: ROOM_DETAILS_RESET });
    };
  }, [dispatch, slug]);

  // toast.success("Congratulations, your room reservation was successful");
  //  const bookRoom = async (id) => {
  //    try {
  //      const response = await axios.put(
  //        `http://localhost:5000/api/rooms/${id}`
  //      );
  //      rooms = response.data.message;
  //    } catch (error) {
  //      console.error(error);
  //    }
  //    toast.success("Congratulations, your room reservation was successful");
  //  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-6 my-2">
              <div className="roomdetail-image">
                <img
                  className="img-fluid"
                  src={roomDetails.image}
                  alt={roomDetails.name}
                />
              </div>
            </div>
            <div className="col-lg-6 my-2">
              <div className="roomdetail-text">
                <h3 className="text-primary font-weight-bolder">
                  {roomDetails.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomDetails;
