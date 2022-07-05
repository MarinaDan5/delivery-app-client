// eslint-disable-next-line import/no-anonymous-default-export
export default (currentShop = null, action) => { 
    switch (action.type) {
        case 'SET_CURRENT_SHOP':
            return action.payload;
        default:
            return currentShop;
    }
}