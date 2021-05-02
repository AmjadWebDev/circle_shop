import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Main, Title, Details, Left, Mid, Right, SmTitle, MidUp, MidDown, MidDownR, MidDownL, PriceBox } from './style';
import axios from 'axios';
//import Category from "../../components/Category"

const Product = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${match.params.id}`);
      setProduct(data);
    };
    getProduct();
  }, []);

  const { title, image, description, price,category } = product;

  return (
    <Main>
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
    </Main>
  );
};

export default Product;
