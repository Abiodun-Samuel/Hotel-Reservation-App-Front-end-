import React from "react";
import { Link } from "react-router-dom";

const Rooms = ({ rooms }) => {
  return (
    <div className="container fade show">
      <div className="row my-4">
        {rooms.map((room) => (
          <div className="col-lg-4" key={room._id}>
            <div className="card room shadow my-2">
              <img
                src={room.image}
                className="img-fluid"
                alt={room.name}
                style={{ height: "200px", width: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  {room.name.toUpperCase()}
                </h5>
                <p className="card-text">
                  {room.description.substring(0, 97) + " ..."}
                </p>
                <Link
                  to={`/room/${room.slug}`}
                  className="btn btn-primary py-0"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
