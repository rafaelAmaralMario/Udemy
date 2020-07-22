import React from 'react'
import { render } from 'utils/test-utils';

import Heading from './Heading';

test('should match with snapshot', () => {
  const { asFragment } = render(<Heading>Mario Driving School</Heading>);

  expect(asFragment()).toMatchSnapshot();
})
