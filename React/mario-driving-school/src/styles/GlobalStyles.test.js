import React from 'react'
import { render } from 'utils/test-utils';

import GlobalStyles from './GlobalStyles';

test('should match with snapshot', () => {
  render(<GlobalStyles />);

  expect(document.head).toMatchSnapshot();
})
