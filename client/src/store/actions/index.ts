export { setAlert } from "./setAlert";
export { registerUser } from "./registerUser";
export { loadUser, login } from "./authUser";

export const testAction = () => (dispatch: any) => {
  return {
    type: "TEST_ACTION",
    payload: {
      msg: "TEST"
    }
  };
};
