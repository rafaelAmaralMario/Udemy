import React, { useState } from "react";
import PropTypes from "prop-types";

import { Grid, Heading, Button } from 'components/atoms';
import { Card, CardMedia, CardBody } from 'components/molecules';

import styled from 'styled-components';

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filteredProducts = isOpen ? products : products.slice(0, 3)
  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product, idx) => (
          <Card key={idx}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.description}</p>
              <div>
                <Button variant="link" color="primary">More Information</Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      <Toolbar>
        <Button variant="outlined" onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? "Hide Services" : "More Services"}  </Button>
      </Toolbar>
    </>
  )
};

ProductGrid.defaultProps = {
  products: []
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  )
}

export default ProductGrid;
