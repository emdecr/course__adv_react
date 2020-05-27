import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});

it("doesn't break when it gets an action with another type", () => {
  const action = {
    type: "ANOTHER_TYPE",
    payload: "Totally other thing"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([]);
});
