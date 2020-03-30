import React, { ReactNode } from "react";
import { NavBar, Alert } from "../components";
import { connect } from "react-redux";
import { Store } from "../store/types";

type Props = {
  children: ReactNode;
};
function Layout(props: Props) {
  return (
    <div>
      <NavBar />
      <Alert />
      {props.children}
    </div>
  );
}

const mapStateToProps = (state: Store) => {
  return { alert: state.alert, auth: state.auth };
};

export default connect(mapStateToProps, null)(Layout);
