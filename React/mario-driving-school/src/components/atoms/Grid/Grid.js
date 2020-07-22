import styled, { css } from 'styled-components';
import PropTypes from "prop-types";

import { breakAt, breakPointsSize } from 'styles/BreakPoints';

const breakColumnAt = (size) => (props) => props => props[size] && css`
  ${breakAt(breakPointsSize[size])} {
    grid-template-columns: repeat(${props => props[size]}, 1fr);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt('sm')};
  ${breakColumnAt('md')};
  ${breakColumnAt('lg')};
  ${breakColumnAt('xl')};

`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
}

Grid.propTypes = {
  /**
   * Number of the Columns that the grid will have in sm 
   */
  sm: PropTypes.number,
  /**
   * Number of the Columns that the grid will have in md 
   */
  md: PropTypes.number,
  /**
   * Number of the Columns that the grid will have in lg 
   */
  lg: PropTypes.number,
  /**
   * Number of the Columns that the grid will have in xl 
   */
  xl: PropTypes.number,
}

export default Grid;
