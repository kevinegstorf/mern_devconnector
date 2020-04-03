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
const initialState = {};

const store: any = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default ({ children, initialState }: Props) => {
  React.useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
