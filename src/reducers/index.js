import { combineReducers } from "redux";

import goods from './goods';
import basket from './basket';
import shops from './shops';
import orderGoods from './order';
import totalPrice from './totalprice';
import isCreatedOrder from './basket';
import currentShop from './currentShop';

export default combineReducers({
    goods,
    basket,
    shops,
    orderGoods,
    totalPrice,
    isCreatedOrder,
    currentShop
})