import React from "react";

import { render, screen, fireEvent } from "utils/test-utils";
import Accordion from "./Accordion";

const title = "Accordion Title";
const text = "Accordion Text";



test("Should render with title ", () => {
  render(<Accordion title={title}></Accordion>)

  expect(screen.getByText(title)).toBeInTheDocument();

});


describe("With Accordion Actions", () => {

  describe("When Starts Opened ", () => {
    test("Should renders with children", async () => {
      render(<Accordion open>{text}</Accordion>)
      expect(screen.queryByText(text)).toBeInTheDocument();
    })

    test("Should hide children", () => {

      const { rerender } = render(<Accordion open title={title} >{text}</Accordion>)
      rerender(<Accordion open={false} title={title}>{text}</Accordion>)
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });


    test("Should trigger onChange when component is controlled", async () => {
      const handleChange = jest.fn();
      render(<Accordion title={title} onChange={handleChange} />)
      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalled();
    })

    test("Should trigger onChange when component isn't controlled", async () => {
      render(<Accordion title={title} open />)
      await fireEvent.click(screen.getByText(title));
    })

  })

  describe("When Starts Opened ", () => {
    test("Should renders without children", async () => {
      render(<Accordion>{text}</Accordion>)

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    })
  })

})
