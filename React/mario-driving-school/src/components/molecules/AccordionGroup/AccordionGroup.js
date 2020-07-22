import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);

  return React.Children.map(children, (child, idx) =>
    React.cloneElement(child, {
      open: index === idx, onChange: () => {
        if (index === idx) {
          setIndex(-1);
        } else {
          setIndex(idx);
        }
      }
    })
  )
}

AccordionGroup.defaultProps = {
  children: undefined
}

AccordionGroup.propTypes = {
  children: PropTypes.node
}

export default AccordionGroup;
