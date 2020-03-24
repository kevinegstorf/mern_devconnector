import React from "react";
import { NavBar } from "./components";

export default function Layout(props: any) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}
