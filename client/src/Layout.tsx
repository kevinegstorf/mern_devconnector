import React from "react";
import { NavBar, Alert } from "./components";
import { connect } from "react-redux";
function Layout(props: any) {
  return (
    <div>
      <NavBar auth={props.auth} />
      <div>
        {props.alert ? <Alert alert={props.alert} /> : null}
        {props.children}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { alert: state.alert, auth: state.auth };
};

export default connect(mapStateToProps, null)(Layout);
