import React from "react";
import Shop from './Shop/shop'
import useStyles from './styles';
import { Typography, Box, AppBar,CircularProgress } from '@mui/material';
import { useSelector } from "react-redux";
  
const Shops = () => {
    const classes = useStyles();

    const shops = useSelector((state) => state.shops);
    
    return (
        <AppBar className={classes.conteiner} position='static' color='inherit'>
            <Box>
                <Typography className={ classes.heading} variant='h5' align='center'>
                    Shops
                </Typography>
                {!shops.length ? <CircularProgress /> : shops.map((shop, index) => (<Shop shop={shop} key={index} />))}
                    
            </Box>
        </AppBar>
    )
}
 
export default Shops;