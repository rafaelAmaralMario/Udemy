import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Container } from 'components/atoms'

const HeroContainer = styled.div`
  color: #fff;
  padding: 100px;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  display: inline-block;
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li::before {
    color: ${ props => props.theme.colors.primary.main};
    content: "\\2713\\0020";
  }
`;

const HeroBanner = ({ image, children }) => (
  <HeroContainer image={image} data-testid="hero-container">
    <Container>
      <Content>{children}</Content>
    </Container>
  </HeroContainer>
);

HeroBanner.propTypes = {
  /**
   * Hero Banner Background Image
   */
  image: PropTypes.string,
  /**
   * Hero Banner Elements
   */
  children: PropTypes.node,
};

HeroBanner.defaultProps = {
  title: "Hero Banner Default Title",
};

export default HeroBanner;
