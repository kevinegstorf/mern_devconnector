import React from "react";

type Alert = {
  id: string;
  msg: string;
  alertType: string;
};
type Props = {
  alert: any;
};
export function Alert(props: any = []) {
  return props.alert.length > 0
    ? props.alert.map((alert: any) => {
        return (
          <div className="container">
            <div key={alert.id} className={`alert alert-${alert.alertType}`}>
              {alert.msg}
            </div>
          </div>
        );
      })
    : null;
}
