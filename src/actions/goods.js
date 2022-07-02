import * as api from '../api';

export const getGoods = (shopId) => async (dispatch) => {
    try {
        const { data } = await api.fetchGoods(shopId);
        dispatch({ type: 'FETCH_GOODS_BY_MARKET', payload: data });
    } catch (error) {
        console.log(error.message);
    }
 }