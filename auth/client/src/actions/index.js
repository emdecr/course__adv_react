import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );
    const token = response.data.token;
    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem("token", token);
    cb();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use." });
  }
};

export const signin = (formProps, cb) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );
    const token = response.data.token;
    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem("token", token);
    cb();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login." });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};
