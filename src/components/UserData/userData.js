import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Paper, Typography } from '@mui/material';

import { createOrder } from '../../actions/basket';
import useStyles from './styles';

const UserData = () => {
    const classes = useStyles();
    const [userData, setUserData] = useState({ name: '', email: '', phone: '', address: '', order: [], totalPrice:''});
    const [orderGoods, setOrderGoods] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
 
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorAddres, setErrorAddres] = useState('');

    const dispatch = useDispatch();

    const totalPriceRedux = useSelector((state) => state.totalPrice);
    const orderGoodsRedux = useSelector((state) => state.orderGoods);

    useEffect(() => {
        let _orderGoods = [];

        orderGoodsRedux && orderGoodsRedux.map((good) => {
                let temp = { market: good.market, name: good.name, price: good.price.toString(), quantity: good.quantityInOrder.toString(), id: good._id };
                _orderGoods.push(temp);
        });

        setOrderGoods(_orderGoods);

    }, [orderGoodsRedux]);

    useEffect(() => {
        setTotalPrice(totalPriceRedux);
    }, [totalPriceRedux]);

    function handleSubmit(e) {
        e.preventDefault();
          if (orderGoods.length > 0) {
              const basket = { name: userData.name, email: userData.email, phone: userData.phone, address: userData.address, order: orderGoods, totalPrice: totalPriceRedux.toString() };
              dispatch(createOrder(basket));
        }     
    };

    const phoneRegexp = /^[0-9]{10,}$/;
    const emaliRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleChangeName = (e) => {
        setUserData({ ...userData, name: e.target.value })
        e.target.value.length < 3 ? setErrorName('length must be at least 3 characters') : setErrorName('');
    };

    const handleChangeEmail = (e) => {
        setUserData({ ...userData, email: e.target.value })
        if (e.target.value.match(emaliRegex)) {
            setErrorEmail('');
        } else {
            setErrorEmail('not valid email');
        }
    };

    const handleChangePhone = (e) => {
        setUserData({ ...userData, phone: e.target.value })
        e.target.value.match(phoneRegexp) ? setErrorPhone('') : setErrorPhone('length must be at least 10 characters (only numbers)');
    };

    const handleChangeAddres = (e) => {
        setUserData({ ...userData, address: e.target.value })
        e.target.value.length < 3 ? setErrorAddres('length must be at least 3 characters') : setErrorAddres('');
    };

    return (
        <Paper className={classes.paper} elevation={3} style={{ padding: "8px 8px 8px 8px" }}>
            <form className={classes.root} autoComplete="off"  onSubmit={handleSubmit}> 
                <Typography variant="h6" align="center">User Data</Typography>
                <TextField className={classes.formField } error={!errorName.length ? false: true}  helperText={errorName} name='name' variant="outlined" label='Name' fullWidth value={userData.name}  onChange={handleChangeName}/>
                <TextField className={classes.formField} error={!errorEmail.length ? false: true} helperText={errorEmail}  name='email' variant="outlined" label='Email' fullWidth value={userData.email} onChange={handleChangeEmail} />
                <TextField className={classes.formField} error={!errorPhone.length ? false: true} helperText={errorPhone} name='phone' variant="outlined" label='Phone' fullWidth value={userData.phone} onChange={handleChangePhone} />
                <TextField className={classes.formField} error={!errorAddres.length ? false : true} helperText={errorAddres} name='address' variant="outlined" label='Address' fullWidth value={userData.address} onChange={handleChangeAddres} />
                <Button variant='contained' color='primary' size='large' type="submit" fullWidth sx={{mt: 3}} >Submit</Button> 
            </form>
        </Paper>
    )
}
 
export default UserData;