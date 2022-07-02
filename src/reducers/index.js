import { combineReducers } from "redux";

import goods from './goods';
import basket from './basket';
import shops from './shops';
import orderGoods from './order'


export default combineReducers({
    goods,
    basket,
    shops,
    orderGoods
})