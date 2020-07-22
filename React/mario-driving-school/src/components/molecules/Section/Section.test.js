import React from 'react'
import { render } from 'utils/test-utils';

import Section from './Section';

test('should match with snapshot', () => {
  const { asFragment } = render(<Section></Section>);
  expect(asFragment()).toMatchSnapshot();
})
