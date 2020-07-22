import React from "react";

import { render } from "utils/test-utils";
import Footer from "./Footer";

test("Should render with text", () => {
  const { asFragment } = render(<Footer></Footer>)

  expect(asFragment()).toMatchSnapshot();

});
