import React from "react";
import styled from 'styled-components';
import { FaPhone, FaBuilding, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { Container, Grid, Heading } from 'components/atoms';

export const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

export const IconContainer = styled.span`
  margin-right: 8px;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  color: ${prop => prop.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${prop => prop.theme.colors.primary.dark};
  }  
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3} >
        <div>
          <Heading>
            <h6>Mario Driving School</h6>
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos adipisci consequatur, maiores maxime mollitia amet animi necessitatibus illum iusto voluptas numquam nam quisquam quis. Assumenda soluta laboriosam excepturi omnis?</p>
        </div>
        <div>
          <Heading>
            <h6>Contact</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (12) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos adipisci consequatur, maiores maxime mollitia amet animi necessitatibus illum iusto voluptas numquam nam quisquam quis.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Social Medias</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="https://www.facebook.com">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://twitter.com">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="https://linkedin.com">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
