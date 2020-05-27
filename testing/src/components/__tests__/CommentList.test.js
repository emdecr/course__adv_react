import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;
// NTS: can I give this an alias? ie. let/declare wrapper: component; or only in Typescript?

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("shows one <li> per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text of each comment", () => {
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
