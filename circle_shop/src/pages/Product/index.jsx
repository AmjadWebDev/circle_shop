import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productDetails } from '../../Redux/actions/ProductActions';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { Main, Title, Details, Left, Mid, Right, SmTitle, MidUp, MidDown, MidDownR, MidDownL, PriceBox } from './style';

//import Category from "../../components/Category"

const Product = ({ match }) => {
  const dispatch = useDispatch();
  const fullProductDetails = useSelector((state) => state.fullProductDetails);
  const { loading, error, product } = fullProductDetails;
  useEffect(() => {
    dispatch(productDetails(match.params.id));
  }, [dispatch,match]);

  const { title, image, description, price, category } = product;

  return (
    <Main>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h3>{error} </h3>
      ) : (
        <>
          <Title>
            <Link to="/">
              <img alt="arrow" src="/arrow-left.png" />
            </Link>
            <h1>{title} </h1>
          </Title>
          <Details>
            <Left>
              <img alt="product" src={image} />
            </Left>
            <Mid>
              <MidUp>
                <SmTitle>Description</SmTitle>
                <p>{description} </p>
              </MidUp>
              <MidDown>
                <MidDownR>
                  <p>
                    <span>Price</span>(including VAT): {(price * 1.2).toFixed(2)} €
                  </p>
                </MidDownR>
                <MidDownL>
                  <SmTitle>Price</SmTitle>
                  <PriceBox>
                    <p>{price} </p>
                    <p>€</p>
                  </PriceBox>
                  <button>Update Product</button>
                </MidDownL>
              </MidDown>
            </Mid>
            <Right>
              <SmTitle>Category</SmTitle>
              <p>{category} </p>
            </Right>
          </Details>
        </>
      )}
    </Main>
  );
};

export default Product;
