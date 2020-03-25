import React from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: ""
};

interface State {
  name: string;
  email: string;
  password: string;
  password2: string;
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

export default function RegisterPage() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.password !== state.password2) {
      console.log("passwords are not matching");
    } else {
      console.log(state);

      try {
        const newUser = {
          name: state.name,
          email: state.email,
          password: state.password
        };
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        const body = JSON.stringify(newUser);

        const res = await axios.post(
          "http://localhost:5000/api/users",
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form onSubmit={onSubmit} className="form" action="create-profile.html">
        <div className="form-group">
          <input
            onChange={onChange}
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={onChange}
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={onChange}
            type="password"
            placeholder="Password"
            name="password"
            minLength={6}
          />
        </div>
        <div className="form-group">
          <input
            onChange={onChange}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength={6}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
  );
}
