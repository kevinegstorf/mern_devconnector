import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

export default function LoginPage() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loginUser = {
        email: state.email,
        password: state.password
      };
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(loginUser);

      const res = await axios.post(
        "http://localhost:5000/api/auth",
        body,
        config
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="container">
      <div className="alert alert-danger">Invalid credentials</div>
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
