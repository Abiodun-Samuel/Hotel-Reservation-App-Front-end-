import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = "useDispatch()";
  //   const auth = useSelector((state) => state);
  const auth = "useSelector((state) => state)";

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="header-logo"
              src="https://lassod.com/wp-content/uploads/2021/04/image-1.png"
              alt="company logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="ms-auto navbar-nav">
              <Link className="nav-link font-weight-bolder" to="/">
                Home
              </Link>
              {auth ? (
                <>
                  {/* <Link
                    className="nav-link get-started"
                    to="/dashboard"
                  >
                    Get started
                  </Link> */}
                  {/* <button onClick={logout} className="nav-link  btn my-2">
                    Logout
                  </button> */}
                </>
              ) : (
                <Link className="nav-link btn get-started" to="/register">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
