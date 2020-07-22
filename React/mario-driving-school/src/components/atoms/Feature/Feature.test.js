import React from "react";

import { render } from "utils/test-utils";
import Feature from "./Feature";

test("Should render with title", () => {
  const { getByText } = render(<Feature title="Feature Title" />)

  expect(getByText("Feature Title")).toBeInTheDocument();

});

test("Should render with text", () => {
  const { getByText } = render(<Feature>Feature Children</Feature>)

  expect(getByText("Feature Children")).toBeInTheDocument();

});
