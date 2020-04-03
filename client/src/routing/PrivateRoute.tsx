import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../Layout";

type Props = {
  auth?: any;
  component?: any;
  rest?: any;
  exact?: any;
  path?: any;
};
const PrivateRoute = (props: Props): any => {
  const { auth, component: Component } = props;

  const routeHandler = () => {
    return !auth.isAuthenticated && auth.loading ? (
      <Redirect to="/" />
    ) : (
      <Route {...props.rest}>
        {" "}
        <Layout>
          <Component {...props} />
        </Layout>
      </Route>
    );
  };
  return routeHandler();
};

const mapStateToProps = (state: any) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, null)(PrivateRoute);
