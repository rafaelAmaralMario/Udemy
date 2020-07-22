import React from 'react'
import { render } from 'utils/test-utils';

import HeroBanner from './heroBanner';

test('render herobanner with children ', () => {
  const { getByText } = render(
    <HeroBanner image="">Mario Driving School</HeroBanner>
  )

  expect(getByText("Mario Driving School")).toBeInTheDocument();
})

test("should render with an image", () => {
  const image = "http://test.com/image.jpg"
  const { asFragment } = render(
    <HeroBanner image={image}>Mario Driving School</HeroBanner>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('should render herobanner with children and Image ', () => {
  const image = "http://test.com/image.jpg"

  const { getByTestId } = render(
    <HeroBanner image={image}>Mario Driving School</HeroBanner>
  )

  expect(getByTestId("hero-container")).toHaveStyleRule({
    backgroundImage: image
  });
})


