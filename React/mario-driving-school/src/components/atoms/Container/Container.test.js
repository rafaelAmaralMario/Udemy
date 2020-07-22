import React from 'react'
import { render } from 'utils/test-utils';

import Container from './Container';

test('should match with snapshot', () => {
  const { asFragment } = render(<Container></Container>);
  expect(asFragment()).toMatchSnapshot();
})
