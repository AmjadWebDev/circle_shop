import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category';
import { Box, Title, Cat, Price, Vat } from './style';

// component to generate the box product infos
const ProductBox = ({ title, category, price, id }) => {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <Box>
        <Title>{title}</Title>
        <Cat>
          <Category category={category} />
        </Cat>
        <Price>{localStorage.getItem(`newPrice_${id}`) !== null ? localStorage.getItem(`newPrice_${id}`) : price} €</Price>
        <Vat>{localStorage.getItem(`newPrice_${id}`) !== null ? (localStorage.getItem(`newPrice_${id}`) * 1.2).toFixed(2) : (price * 1.2).toFixed(2)} €</Vat>
      </Box>
    </Link>
  );
};

export default ProductBox;
