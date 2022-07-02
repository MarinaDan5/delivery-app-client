import * as api from '../api';

export const createOrder = (order) => async (dispatch) => {
    try {
         console.log('order', order)
        const { data } = await api.createOrder(order);
        console.log(data)
        dispatch({ type: 'CREATE_ORDER', payload: data });
    } catch (error) {
        console.log(error.message);
    }
 }