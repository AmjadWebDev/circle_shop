import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner';
import { listProducts } from '../../Redux/actions/ListProductsActions';
import ProductBox from '../ProductBox';
import { Table } from './style';
import { Title, Cat, Price, Vat, Head } from '../ProductBox/style';

const ProductList = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Table>
      <Head>
        <Title>Product name</Title>
        <Cat>Category</Cat>
        <Price>Price</Price>
        <Vat>Price(including VAT)</Vat>
      </Head>
      {loading ? <Spinner /> : error ? <h3>{error} </h3> : products.map((p) => <ProductBox {...p} />)}
    </Table>
  );
};

export default ProductList;
