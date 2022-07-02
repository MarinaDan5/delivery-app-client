// eslint-disable-next-line import/no-anonymous-default-export
export default (orderGoods = [], action) => { 
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...orderGoods, action.payload];
        default:
            return orderGoods;
    }
}