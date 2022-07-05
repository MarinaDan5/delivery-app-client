import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography,Box } from '@mui/material';

import { setTotalPrice } from "../../actions/totalprise";

import useStyles from './styles';

const TotalPrice = () => {
    const orderGoods = useSelector((state) => state.orderGoods);
    const totalPrice = useSelector((state) => state.totalPrice);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        let _totalPrice = orderGoods.reduce((sum, orderGood) => {
            return (sum + (orderGood.quantityInOrder * orderGood.price));
        }, 0);
        dispatch(setTotalPrice(_totalPrice));
    }, [orderGoods, dispatch]);

    return (
        <Box m={1} pt={2}>
            
            <Typography className={classes.heading} variant='h5' align='center'>Total price:</Typography>
            <Typography className={classes.heading} variant='h5' align='center'>{ totalPrice }</Typography>
        </Box>
    )
}
 
export default TotalPrice;