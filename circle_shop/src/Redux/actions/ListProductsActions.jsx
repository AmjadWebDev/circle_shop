import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../types';
import axios from 'axios';

// fetch list products from API
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('https://fakestoreapi.com/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.message ? error.response.data.message : error.message,
    });
  }
};
