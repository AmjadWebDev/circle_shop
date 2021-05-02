import React, { useState, useEffect } from 'react';
import ProductBox from '../ProductBox';
import { Table } from './style';
import { Title, Cat, Price, Vat,Head } from '../ProductBox/style';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    allProducts();
  }, []);

  return (
    <Table>
      <Head>
        <Title>Product name</Title>
        <Cat>Category</Cat>
        <Price>Price</Price>
        <Vat>Price(including VAT)</Vat>
      </Head>
      {products.map((p) => (
        <ProductBox {...p} />
      ))}
    </Table>
  );
};

export default ProductList;
