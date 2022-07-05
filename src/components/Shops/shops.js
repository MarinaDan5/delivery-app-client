import React from "react";
import { useSelector } from "react-redux";
import { Typography, Paper, Grid,CircularProgress } from '@mui/material';

import Shop from './Shop/shop'

import useStyles from './styles';
  
const Shops = () => {
    const classes = useStyles();
    const shops = useSelector((state) => state.shops);
    
    return (
        <Paper className={classes.header} >
            <Typography variant='h5' align='center'>Shops</Typography>
            <Grid  className={ classes.container }>
                {!shops.length ? <CircularProgress /> : shops.map((shop, index) => (< Shop shop={shop} key={index} />))}
            </Grid>      
        </Paper>
    )
}
 
export default Shops;