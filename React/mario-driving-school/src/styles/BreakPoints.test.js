import { breakAt, breakPointsSize } from './BreakPoints';

// @media (min-width: ${size}px)

test.each([
  [breakPointsSize.sm],
  [breakPointsSize.md],
  [breakPointsSize.lg],
  [breakPointsSize.xl]
])('should break at %ipx', (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
})
