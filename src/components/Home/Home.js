import React, { useEffect } from "react";
import "./home.css";
import Loader from "../Loader";
import Rooms from "../Rooms/Rooms";
import { useDispatch, useSelector } from "react-redux";
import { getRoomList } from "../../redux/actions/roomActions";

const Home = () => {
  const token = "";

  const dispatch = useDispatch();
  const roomsList = useSelector((state) => state.roomList);
  const { loading, error, rooms } = roomsList;

  console.log(roomsList);

  useEffect(() => {
    dispatch(getRoomList());
  }, [dispatch]);

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 p-5">
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem,
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                dolor, nobis explicabo quaerat suscipit ipsa eius a saepe enim
                quis? Assumenda nulla rem quos repellendus culpa optio nihil ut
                consectetur!
              </p>
              {/* <div className="mt-5">
                {token ? (
                  <Link className="home-register" to="/dashboard">
                    Get Started
                  </Link>
                ) : (
                  <Link className="home-register" to="/register">
                    Register
                  </Link>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="room">
        {loading ? <Loader /> : <Rooms rooms={rooms} />}
      </section>
    </>
  );
};

export default Home;
