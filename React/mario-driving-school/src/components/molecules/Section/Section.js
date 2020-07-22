import React from "react";
import PropTypes from "prop-types";
import styled, { css } from 'styled-components';

import { Container } from 'components/atoms';

export const Content = styled.div`
  padding: 40px 0;
  ${props => props.inverted && css`
      background-color: #f7f7f7;
    `
  }
  h2 {
    margin-top: 0;
  }
`;

const Section = ({ inverted, children }) => (
  <Content inverted={inverted}>
    <Container>
      {children}
    </Container>
  </Content>
);

Section.defaultProps = {
  children: undefined,
  inverted: false
}

Section.propTypes = {
  children: PropTypes.node,
  inverted: PropTypes.bool

}

export default Section;
