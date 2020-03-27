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
      <section className="container">
        <Alert />
        {props.children}
      </section>
    </div>
  );
}

const mapStateToProps = (state: Store) => {
  return { alert: state.alert };
};

export default connect(mapStateToProps, null)(Layout);
