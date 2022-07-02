// eslint-disable-next-line import/no-anonymous-default-export
export default (goods = [], action) => { 
    switch (action.type) {
        case 'FETCH_GOODS_BY_MARKET':
            return action.payload;
        default:
            return goods;
    }
}