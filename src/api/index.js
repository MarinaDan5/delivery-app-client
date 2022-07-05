import instance from "../utils/utils";

export const fetchGoods = (marketId) => instance.get(`products/${marketId}`);
export const fechShops = () => instance.get('shops');

export const createOrder = async (newOrder) => {
    try {
        const res = await instance.post('basket', newOrder); 
        const code = await res.status;
        return code;
    } catch (e) {
        throw new Error(e)
    }
};

