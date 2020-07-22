import React from "react";

import { render, screen, fireEvent } from "utils/test-utils";
import AccordionGroup from "./AccordionGroup";
import { Accordion } from 'components/atoms'

const title = "Accordion Title";

const renderAccordionGroup = (n) => {
  const accordionArr = [];
  for (let i = 0; i < n; i++) {
    accordionArr.push(<Accordion key={i} title={`Title ${i}`}> Child {i} </Accordion>)
  }

  return (
    <AccordionGroup>
      {accordionArr}
    </AccordionGroup>
  )

}


test("Should renders with one child", () => {
  render(<AccordionGroup>
    <Accordion title={title} />
  </AccordionGroup>)

  expect(screen.getByText(title)).toBeInTheDocument()
});

test("Should renders with 3 children", () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getAllByText(title)).toHaveLength(3)
});

test("Should render all accordions with closed state", () => {
  render(renderAccordionGroup(3));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
})

test("Should opens accordion on click", async () => {
  render(renderAccordionGroup(3));
  await fireEvent.click(screen.getByText("Title 0"));
  expect(screen.queryByText("Child 0")).toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
})

test("Should close accordion on click", async () => {
  render(renderAccordionGroup(3));
  await fireEvent.click(screen.getByText("Title 0"));
  expect(screen.queryByText("Child 0")).toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();

  //Closing accordion
  await fireEvent.click(screen.getByText("Title 0"));
  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
})
