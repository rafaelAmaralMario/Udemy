import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { Heading } from 'components/atoms';


//#region Accordion Head 
export const AccordionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor:pointer;
  & h6 {
    margin: 0;
    flex: 1;
  }
  & svg {
    font-size: 1.25rem;
  }
`;

//#endregion

//#region Accordion Body

export const AccordionBody = styled.div`
  padding: 0 16px 16px 16px;
`;

//#endregion


//#region Accordion
export const StyledAccordion = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${props => props.theme.colors.primary.main};
  background-color: #fff;
  ${ props => props.isOpen && css`
    margin: 16px 0;
  `}
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Accordion = ({ title, children, onChange, open }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isAccordionOpen = (open !== undefined) ? open : isOpen

  const handleClick = () => {
    if (open === undefined) {
      setIsOpen(!open)
    }
    onChange(!open)
  }

  return (
    <StyledAccordion isOpen={isAccordionOpen}>
      <AccordionHead role="button" onClick={handleClick}>
        <Heading>
          <h6>{title}</h6>
        </Heading>
        {isAccordionOpen ? <MdExpandLess /> : <MdExpandMore />}
      </AccordionHead>
      {isAccordionOpen && <AccordionBody>{children}</AccordionBody>}
    </StyledAccordion>)
};

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
  open: undefined,
  onChange: () => { }
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func
}

//#endregion

export default Accordion;
