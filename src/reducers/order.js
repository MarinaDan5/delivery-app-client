// eslint-disable-next-line import/no-anonymous-default-export
export default (orderGoods = [], action) => { 
    switch (action.type) {

        case 'ADD_TO_CART':
            return [...orderGoods, action.payload];
        
        case 'DELETE_FROM_CART':
            return orderGoods.filter((good) => good._id !== action.payload);
        
        case 'UPDATE_QUANTITY':
            return orderGoods.map(orderGood => {
                if (orderGood._id === action.payload._id) {
                    orderGood.quantityInOrder = action.payload.quantityInOrder;
                    return { ...orderGood, quantityInOrder: action.payload.quantityInOrder };
                } else {
                    return orderGood;
                } 
            });
        
         case 'CLEAR_CART':
            return [];
          
        default:
            return orderGoods;
    }
}

