// eslint-disable-next-line import/no-anonymous-default-export
export default (isCreatedOrder = false, action) => { 
    switch (action.type) {
        case 'CREATE_ORDER':
            return action.payload;
        
        default:
            return isCreatedOrder;
    }
}