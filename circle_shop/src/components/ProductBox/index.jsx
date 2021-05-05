import React from 'react';
import { Link } from 'react-router-dom';
import Category from "../Category"
import { Box, Title, Cat, Price, Vat } from './style';

const ProductBox = ({ title, category, price,id }) => {
 

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <Box>
        <Title>{title}</Title>
        <Cat >
          <Category  category={category} />
        </Cat>
        <Price>{price} €</Price>
        <Vat >{(price * 1.2).toFixed(2)} €</Vat>
      </Box>
    </Link>
  );
};

export default ProductBox;
