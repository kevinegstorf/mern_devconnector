import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../src/store/reducers";

interface Props {
  children: ReactNode;
  initialState?: {};
}

export default ({ children, initialState = {} }: Props) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return <Provider store={store}>{children}</Provider>;
};
