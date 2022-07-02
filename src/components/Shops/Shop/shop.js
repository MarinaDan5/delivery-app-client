import React from "react";
import useStyles from './styles';
import { Button, Typography } from '@mui/material';


const Shop = ({ shop }) => {
    const classes = useStyles()
    return (
        <Button size="small" color="primary" > {shop.name}</Button> 
    )
}
 
export default Shop;