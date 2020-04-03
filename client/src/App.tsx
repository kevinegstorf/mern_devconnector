import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Layout from "./Layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./routing/PrivateRoute";
import CreateProfile from "./pages/Profile/CreateProfile";

function App(props: any) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageWrapper} />
          <Route exact path="/login" component={LoginPageWrapper} />
          <Route exact path="/register" component={RegisterPageWrapper} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const HomePageWrapper = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};
const LoginPageWrapper = () => {
  return (
    <Layout>
      <LoginPage />
    </Layout>
  );
};
const RegisterPageWrapper = (): any => {
  return (
    <Layout>
      <RegisterPage />
    </Layout>
  );
};
const mapStateToProps = (state: any) => {
  return { isAuth: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, null)(App);
