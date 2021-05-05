import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productDetails, productUpdate } from '../../Redux/actions/ProductActions';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { Main, Title, Details, Left, Mid, Right, SmTitle, MidUp, MidDown, MidDownR, MidDownL, PriceBox } from './style';
import Category from '../../components/Category';

const Product = ({ match }) => {
  const dispatch = useDispatch();
  // fetch data from product state
  const fullProductDetails = useSelector((state) => state.fullProductDetails);
  const { loading, error, product } = fullProductDetails;

  // fetch data from product updated state
  const UpdateProduct = useSelector((state) => state.UpdateProduct);

  const { product: productUpdated } = UpdateProduct;

  const [newPrice, setNewPrice] = useState();
  const [oldPrice, setOldPrice] = useState(true);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    //verify if there is a price value in local storage
    if (localStorage.getItem(`newPrice_${match.params.id}`) !== null) {
      setNewPrice(localStorage.getItem(`newPrice_${match.params.id}`));
      setOldPrice(false);
      setBlock(true);
    }
  }, [match.params.id]);

  useEffect(() => {
    dispatch(productDetails(match.params.id));
  }, [dispatch, match, newPrice]);

  const handleChange = (e) => {
    setOldPrice(false);
    setNewPrice(product.price);
    setNewPrice(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // update the product updated state
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
    setNewPrice(productUpdated.price);
    localStorage.setItem(`newPrice_${match.params.id}`, newPrice);

    setBlock(true);
  };

  const onBack = () => {
    setBlock(false);
    setOldPrice(true);
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
              <img alt="arrow" src="/arrow-left.svg" />
            </Link>
            <h1>{title} </h1>
          </Title>
          <Details>
            <Left>
              <img alt="product" src={image} />
            </Left>
            <Mid>
              <MidUp>
                <div id="mobile">
                  <div id="mobileCat">
                    <Category category={category} />
                  </div>
                  <SmTitle>Description</SmTitle>
                </div>

                <p>{description} </p>
              </MidUp>
              <MidDown>
                <MidDownR>
                  <p>
                    <span>Price</span>(including VAT): {localStorage.getItem(`newPrice_${match.params.id}`) !== null ? (localStorage.getItem(`newPrice_${match.params.id}`) * 1.2).toFixed(2) : (price * 1.2).toFixed(2)} €
                  </p>
                </MidDownR>
                <MidDownL>
                  <SmTitle>Price</SmTitle>
                  <form onSubmit={submitHandler}>
                    <PriceBox disabled={block} type="text" value={oldPrice ? price + '        €' : newPrice} onChange={handleChange} />
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
