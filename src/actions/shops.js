import * as api from '../api';

export const getShops = () => async (dispatch) => {
    try {
        const { data } = await api.fechShops();
        dispatch({ type: 'FETCH_SHOPS', payload: data });
    } catch (error) {
        console.log(error.message);
    }
 }