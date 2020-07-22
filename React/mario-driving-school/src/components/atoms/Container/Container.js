import PropTypes from "prop-types";
import styled from 'styled-components';

import { breakAt, breakPointsSize } from "styles/BreakPoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(breakPointsSize.xs)} {
    padding: 0 16px;
  }

  ${breakAt(breakPointsSize.lg)} {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
`;


Container.defaultProps = {
  children: undefined
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container;
