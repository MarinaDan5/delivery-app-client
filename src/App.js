import React, { useEffect, useState} from 'react';
import { AppBar, Container, Grid, Typography, Grow, Toolbar } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { Route, Link, Routes } from 'react-router-dom';
import useStyles from './styles';

import { getShops } from './actions/shops';
import { setCurrentShop } from './actions/currentShop';
import Goods from './components/Goods/goods';
import Shops from './components/Shops/shops';
import ShoppingCart from './Pages/ShoppingCart/shoppingCart';
  
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const shops = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(setCurrentShop(shops[0]?.market))
  }, [dispatch, shops]);

  return (
    <> 
    <Container fixed={ true} >
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Toolbar>        
            <Link className={classes.link} to={'/'} style={{ textDecoration: 'none'}} color={active ? 'primary' : 'secondary'}  component='button' onClick={(() => { }) }>
               <Typography underline="hover" className={ classes.heading} variant='h5' align='center'>Shops</Typography>
              </Link>
            <Link to={'/shopping'} style={{ textDecoration: 'none' }}>
               <Typography className={classes.heading} variant='h5' align='center'>Shopping Cart</Typography>
            </Link>
         </Toolbar>
      </AppBar>
    </Container>
      
      
      <Container maxWidth="lg" >
     
      
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
