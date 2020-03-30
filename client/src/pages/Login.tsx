import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { Redirect } from "react-router-dom";

const initialState = {
  email: "",
  password: ""
};

interface State {
  email: string;
  password: string;
}

interface InputKeyValue {
  field: string;
  value: string;
}

function reducer(state: State, { field, value }: InputKeyValue) {
  return {
    ...state,
    [field]: value
  };
}

function LoginPage(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.login(state.email, state.password);
  };

  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" action="dashboard.html" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            onChange={onChange}
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={onChange}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, actions)(LoginPage);
