import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productDetails, productUpdate } from '../../Redux/actions/ProductActions';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { Main, Title, Details, Left, Mid, Right, SmTitle, MidUp, MidDown, MidDownR, MidDownL, PriceBox } from './style';
import Category from '../../components/Category';
import { PRODUCT_UPDATE_RESET } from '../../Redux/types';

const Product = ({ match }) => {
  const dispatch = useDispatch();
  const fullProductDetails = useSelector((state) => state.fullProductDetails);
  const { loading, error, product } = fullProductDetails;

  const UpdateProduct = useSelector((state) => state.UpdateProduct);

  const { loading: loadingUpdate, error: errorUpdate, success, product: productUpdated } = UpdateProduct;
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    const parsedCount = Number(localStorage.getItem("newPrice") || productUpdated.price )
    setNewPrice(parsedCount)
  }, []);

  useEffect(() => {
    dispatch(productDetails(match.params.id));
    localStorage.setItem("newPrice", newPrice)
  }, [dispatch, match,newPrice]);

  
  const [newPriceVAT, setNewPriceVAT] = useState((product.price * 1.2).toFixed(2));
  const [block, setBlock] = useState(false);
  const [oldPrice, setOldPrice] = useState();

  const handleChange = (e) => {
    setOldPrice(false);
    setNewPrice(product.price)
    setNewPrice(e.target.value);
    setOldPrice(false);
    setNewPriceVAT('');
  };
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      productUpdate({
        id: match.params.id,
        price: newPrice,
        title,
        image,
        description,
        category,
      })
    );
    const parsedCount = Number(localStorage.getItem("newPrice") || product.price)
    setNewPrice(parsedCount)
    //setNewPrice(productUpdated.price);
    setNewPriceVAT((newPrice * 1.2).toFixed(2));
    
    setBlock(true);
  };

  const onBack = () => {
    setBlock(false);
    setOldPrice(true);
    
    // setNewPrice(product.price);
    // setNewPriceVAT((product.price * 1.2).toFixed(2));
  };
  const { title, image, description, category, price } = product;

  return (
    <Main>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h3>{error} </h3>
      ) : (
        <>
          <Title>
            <Link onClick={onBack} to="/">
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
                  {oldPrice ? (
                    <p>
                      <span>Price</span>(including VAT): {(price * 1.2).toFixed(2)} €{' '}
                    </p>
                  ) : (
                    <p>
                      <span>Price</span>(including VAT): {newPriceVAT} €{' '}
                    </p>
                  )}
                </MidDownR>
                <MidDownL>
                  <SmTitle>Price</SmTitle>
                  <form onSubmit={submitHandler}>
                    <PriceBox type="text" value={oldPrice ? (price + " €") : newPrice} placeholder={price + '   €'} onChange={handleChange} />
                    <button disabled={block} type="submit">
                      Update Product
                    </button>
                  </form>
                </MidDownL>
              </MidDown>
            </Mid>
            <Right>
              <SmTitle>Category</SmTitle>
              <Category category={category} />
            </Right>
          </Details>
        </>
      )}
    </Main>
  );
};

export default Product;
