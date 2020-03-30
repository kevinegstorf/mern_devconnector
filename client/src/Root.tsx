import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../src/store/reducers";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./store/actions/";

interface Props {
  children: ReactNode;
  initialState?: {};
}

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default ({ children, initialState = {} }: Props) => {
  React.useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return <Provider store={store}>{children}</Provider>;
};
