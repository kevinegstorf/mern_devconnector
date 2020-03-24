import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageWrapper} />
          <Route exact path="/login" component={LoginPageWrapper} />
          <Route exact path="/register" component={RegisterPageWrapper} />
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
const RegisterPageWrapper = () => {
  return (
    <Layout>
      <RegisterPage />
    </Layout>
  );
};

export default App;
