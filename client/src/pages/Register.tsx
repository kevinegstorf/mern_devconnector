import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { Store } from "../store/types";

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

type Props = {
  setAlert: (msg: string, alertType: string) => void;
  registerUser: ({}) => void;
};

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

function RegisterPage(props: any): any {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.password !== state.password2) {
      props.setAlert("passwords are not matching", "danger");
    } else {
      props.registerUser({ ...state });
      props.setAlert("registration completed", "success");

      // ADD HISTORY push
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

const mapStateToProps = (state: Store) => {
  return { alert: state.alert };
};

export default connect(mapStateToProps, actions)(RegisterPage);
