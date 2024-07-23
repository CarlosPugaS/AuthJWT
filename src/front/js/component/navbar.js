import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-danger">
      <div className="container">
        <Link to="/">
          <span className="btn btn-secondary">Home</span>
        </Link>
        <div className="ml-auto">
          {store.token ? (
            <button
              className="btn btn-secondary me-2"
              onClick={() => {
                actions.logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <span className="btn btn-success me-2">Login</span>
            </Link>
          )}
          <Link to="/signup">
            <button className="btn btn-success">Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
