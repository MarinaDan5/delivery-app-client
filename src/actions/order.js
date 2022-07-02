import * as api from '../api';

export const addToCart = (goodId) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_TO_CART', payload: goodId });
    } catch (error) {
        console.log(error.message);
    }
 }