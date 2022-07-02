import React, { useState} from "react";
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch } from "react-redux";

import useStyles from './styles';
import {createOrder} from '../../actions/basket';

const ShoppingCart = () => {
    const [cartData, setCartData] = useState({ name: '', email: '', phone: '', address: '', order: [{idGood:'', quantity:''}], totalPrice:''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartData.order.length > 0) { 
            dispatch(createOrder(cartData))
        }       
     }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}> 
                <Typography variant="h6">Form  </Typography>
                <TextField name='name' variant="outlined" label='Name' fullWidth value={cartData.name} onChange={(e) => setCartData({...cartData, name: e.target.value})} />
                <TextField name='email' variant="outlined" label='Email' fullWidth value={cartData.email} onChange={(e) => setCartData({ ...cartData, email: e.target.value })} />
                <TextField name='phone' variant="outlined" label='Phone' fullWidth value={cartData.phone} onChange={(e) => setCartData({...cartData, phone: e.target.value})} />
                <TextField name='address' variant="outlined" label='Address' fullWidth value={cartData.address} onChange={(e) => setCartData({...cartData, address: e.target.value})} />
                <Button className={ classes.buttonSubmit} variant='container' color='primary' size='large' type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )

}
 
export default ShoppingCart;