import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Title, Cat, Price, Vat } from './style';

const ProductBox = ({ title, category, price,id }) => {
  const colorSwitch = (x) => {
    switch (x) {
      case "men's clothing":
        return '#ffa03b';
      case 'jewelery':
        return '#1cc93e';
      case 'electronics':
        return '#f03c42';
      case "women's clothing":
        return '#1089e6';
      default:
        return 'gray';
    }
  };

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <Box>
        <Title>{title}</Title>
        <Cat>
          <span style={{ backgroundColor: colorSwitch(category), color: 'white', padding: '6px', borderRadius: '25px' }}>{category}</span>
        </Cat>
        <Price>{price} €</Price>
        <Vat>{(price * 1.2).toFixed(2)} €</Vat>
      </Box>
    </Link>
  );
};

export default ProductBox;
