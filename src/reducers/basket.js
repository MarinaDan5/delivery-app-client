// eslint-disable-next-line import/no-anonymous-default-export
export default (order = [], action) => { 
    switch (action.type) {
        case 'CREATE_ORDER':
            return [...order, action.payload];
        default:
            return order;
    }
}