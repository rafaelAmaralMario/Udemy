import React from "react";

import { render } from "utils/test-utils";
import Grid from "./Grid";

test("Should match snapshot with no params", () => {
  const { asFragment } = render(<Grid></Grid>)
  expect(asFragment()).toMatchSnapshot();
});

test("Should match snapshot with params", () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>)
  expect(asFragment()).toMatchSnapshot();
});

test("Should match snapshot with sm and lg", () => {
  const { asFragment } = render(<Grid sm={2} lg={4}></Grid>)
  expect(asFragment()).toMatchSnapshot();
});

test("Should match snapshot with md and xl", () => {
  const { asFragment } = render(<Grid md={3} xl={5}></Grid>)
  expect(asFragment()).toMatchSnapshot();
});
