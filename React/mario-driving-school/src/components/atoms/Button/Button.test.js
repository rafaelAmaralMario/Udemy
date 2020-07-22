import React from 'react'
import { render, fireEvent } from 'utils/test-utils';

import Button, { ButtonColors, ButtonsVariants } from './Button';


test('Should Render a text', () => {
  const { getByText } = render(
    <Button>Click Here</Button>
  );
  expect(getByText('Click Here')).toBeInTheDocument();
});

test('Should Trigger click event', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(
    <Button onClick={handleClick} />
  );
  fireEvent.click(getByRole('button'));
  expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map(color => [color]))("should render with color %s", (color) => {
  const { asFragment } = render(
    <Button color={color} />
  );

  expect(asFragment()).toMatchSnapshot();
});

test.each(Object.values(ButtonsVariants).map(variant => [variant]))("should render with variant %s", (variant) => {
  const { asFragment } = render(
    <Button variant={variant} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("should render with variant outlined and color primary", () => {
  const { asFragment } = render(
    <Button variant="outlined" color="primary">Click Here</Button>
  );

  expect(asFragment()).toMatchSnapshot();
});

test("should render with variant link and color primary", () => {
  const { asFragment } = render(
    <Button variant="link" color="primary">Click Here</Button>
  );

  expect(asFragment()).toMatchSnapshot();
});
