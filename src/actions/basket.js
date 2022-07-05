import * as api from '../api';

export const createOrder = (order) => async (dispatch) => {
    try {
        const code = await api.createOrder(order);

        if (code === 201) {
            dispatch({ type: 'CREATE_ORDER', payload: true });
        }    

    } catch (error) {
        console.log(error.message);
    }
 }