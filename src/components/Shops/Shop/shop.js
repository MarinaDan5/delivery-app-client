import React, { useEffect, useState} from "react";
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getGoods } from '../../../actions/goods'
import { setCurrentShop } from "../../../actions/currentShop";

import useStyles from './styles';

const Shop = ({ shop }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [isSelected, setIsSelected] = useState(false);
    const currentShop = useSelector((state) => state.currentShop);

    useEffect(() => {
        currentShop === shop.market ? setIsSelected(true) : setIsSelected(false);
    }, [currentShop]);

    useEffect(() => {
        if (isSelected) {
            dispatch(getGoods(shop.market));
        }
    }, [isSelected, dispatch]);
   
    const handleClick = (e) => { 
        e.preventDefault();
        dispatch(setCurrentShop(shop.market));
    }

    return (
        <Grid className={classes.details}>
            <Button size="small" variant="contained" onClick={handleClick} color={isSelected ? 'primary' : 'secondary'} > {shop.name}   </Button> 
        </Grid>
    )
}

export default Shop;