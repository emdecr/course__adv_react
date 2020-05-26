import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("Textarea-focused", () => {
  beforeEach(() => {
    const eventObject = {
      target: {
        value: "Hey there!"
      }
    };
    wrapped.find("textarea").simulate("change", eventObject);
    wrapped.update();
  });
  it("has a textarea users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("Hey there!");
  });

  it("clears the textarea when the form is submitted", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
