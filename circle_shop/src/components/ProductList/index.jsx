import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner';
import { listProducts } from '../../Redux/actions/ListProductsActions';
import ProductBox from '../ProductBox';
import { Table } from './style';
import { Title, Cat, Price, Vat, Head } from '../ProductBox/style';

const ProductList = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const dispatch = useDispatch();

  // get list of products from redux state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Table>
      <Head>
        <Title>Product name</Title>
        <Cat>
          <h5>Category</h5>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="All">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </Cat>
        <Price>Price</Price>
        <Vat>
          Price <br />
          <span>(including VAT)</span>
        </Vat>
      </Head>
      {loading ? <Spinner /> : error ? <h3>{error} </h3> : selectedOption === 'All' ? products.map((p) => <ProductBox {...p} />) : products.filter((p) => p.category === selectedOption).map((p) => <ProductBox {...p} />)}
    </Table>
  );
};

export default ProductList;
