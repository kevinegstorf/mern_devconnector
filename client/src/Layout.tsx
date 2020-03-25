import React from "react";
import { NavBar, Alert } from "./components";
import { connect } from "react-redux";
function Layout(props: any) {
  console.log(props.alert);
  return (
    <div>
      <NavBar />
      <div className="container">
        {props.alert ? <Alert alert={props.alert} /> : null}
        {props.children}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { alert: state.alert };
};

export default connect(mapStateToProps, null)(Layout);
