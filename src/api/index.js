import instance from "../utils/utils";

export const fetchGoods = (marketId) => instance.get(`products/${marketId}`);
export const fechShops = () => instance.get('shops');

export const createOrder = (newOrder) => instance.post('basket', newOrder);

