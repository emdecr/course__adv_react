import { CHANGE_AUTH } from "actions/types";
const initialState = false;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_AUTH:
      return payload;

    default:
      return state;
  }
};
