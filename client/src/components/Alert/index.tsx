import React from "react";

interface Props {
  alert?: any;
}
export function Alert(props: any = []): any {
  return props.alert.length > 0
    ? props.alert.map((alert: any) => {
        return (
          <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
          </div>
        );
      })
    : null;
}
