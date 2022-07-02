import React, { useEffect} from 'react';
import './App.css';
import { AppBar, Container, Grid, Typography, Grow, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {Route, Link, Routes } from 'react-router-dom';

import { getGoods } from './actions/goods';
import { getShops } from './actions/shops';

import Goods from './components/Goods/goods';
import Shops from './components/Shops/shops';
import ShoppingCart from './components/ShoppingCart/shoppingCart';
import useStyles from './styles';
import { useSelector } from "react-redux";


const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

   const shops = useSelector((state) => state.shops);

    useEffect(() => { 
      dispatch(getShops());
    }, [dispatch])
  

  useEffect(() => { 
    // const defaultShop = shops[0].market;
    console.log('shops[0]', shops[0])

    dispatch(getGoods('62c0534221f6056ea339aa71'));
  }, [dispatch, shops])

  return (
    <> 
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Box>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
               <Typography className={ classes.heading} variant='h5' align='center'>Shops</Typography>
            </Link>
          </Box>
          <Box>
            <Link to={'/shopping'} style={{ textDecoration: 'none' }}>
               <Typography className={classes.heading} variant='h5' align='center'>Shopping Cart</Typography>
            </Link>
          </Box>
        </AppBar>
      
      <Routes>
        <Route path='/' element={  <Grow in>
          <Container>
           <Grid container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={3}>
                <Shops />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Goods />
              </Grid>
            </Grid>
          </Container>
        </Grow>} />
        <Route path='/shopping' element={<ShoppingCart/>} />
      </Routes> 
      </Container>
</>
  );
}

export default App;
