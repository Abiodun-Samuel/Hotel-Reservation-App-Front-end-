import React from "react";
import img from "../images/loading.svg";

const Loader = () => {
  return (
    <div className="container fade show">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 d-flex justify-content-center">
          <img className="img-fluid mt-5 p-2" src={img} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
