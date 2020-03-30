import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState: any = [];

export default function setAlert(state = initialState, action: any): any {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== action.payload);
    default:
      return state;
  }
}
