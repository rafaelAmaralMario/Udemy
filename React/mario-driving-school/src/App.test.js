import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders CTA button", () => {

  const { getByText } = render(<App />);

  expect(getByText(/Apply Now/i)).toBeInTheDocument();

});
