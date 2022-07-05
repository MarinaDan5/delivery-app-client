export const setCurrentShop = (shopId) => async (dispatch) => {
    try {
        if (shopId) {
           dispatch({ type: 'SET_CURRENT_SHOP', payload: shopId }); 
        }   
    } catch (error) {
        console.log(error.message);
    }
 }
