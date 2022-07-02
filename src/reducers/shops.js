// eslint-disable-next-line import/no-anonymous-default-export
export default (shops = [], action) => { 
    switch (action.type) {
        case 'FETCH_SHOPS':
            return action.payload;
        default:
            return shops;
    }
}