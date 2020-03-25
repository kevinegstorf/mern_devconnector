import React from "react";

interface Props {
  alert?: any;
}
export function Alert(props: any): any {
  console.log(props.alert[0].msg);
  return (
    <div className={`alert alert-${props.alert[0].alertType}`}>
      {props.alert[0].msg}
    </div>
  );
}
