export const addToCart = (good) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_TO_CART', payload: good });
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteFromCart = (goodId) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_FROM_CART', payload: goodId });
    } catch (error) {
        console.log(error.message);
    }
}
 export const updateQuantity = (good) => async (dispatch) => {
    try {
        dispatch({ type: 'UPDATE_QUANTITY', payload: good });
    } catch (error) {
        console.log(error.message);
    }
}
 
 export const clearCart = () => async (dispatch) => {
    try {
        dispatch({ type: 'CLEAR_CART', payload: [] });
    } catch (error) {
        console.log(error.message);
    }
 }