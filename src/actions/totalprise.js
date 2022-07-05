export const setTotalPrice = (totalPrice) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_TOTAL_PRICE', payload: totalPrice });
    } catch (error) {
        console.log(error.message);
    }
 }