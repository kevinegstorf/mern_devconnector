import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

function NavBar(props: any) {
  const clickHandler = () => {
    props.logout();
  };
  return props.auth.isAuthenticated ? (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          |
          <Link to="/dashboard" title="Dashboard">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={clickHandler} to="/" title="Logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default connect(null, actions)(NavBar);
