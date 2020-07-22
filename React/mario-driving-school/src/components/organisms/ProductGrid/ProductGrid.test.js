import React from "react";

import { render, fireEvent, screen } from "utils/test-utils";
import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push({ title: `Title ${i}` });
  }
  return result;
}

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
])("With %i items  ", (size, showOnly) => {
  test(`Should render ${showOnly}`, () => {
    const { getAllByRole } = render(<ProductGrid products={buildProducts(size)} />)

    expect(getAllByRole("heading").length).toBe(showOnly);
  });


  test("Should render all items when the button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);
    const showMoreButton = screen.getByText(/More Services/i);
    await fireEvent.click(showMoreButton);
    expect(screen.getAllByRole("heading").length).toBe(size);
  });

})
