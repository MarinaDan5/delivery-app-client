import React, { useEffect } from "react";
import { Container, Grid, Grow, Alert, AlertTitle} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";

import UserData from '../../components/UserData/userData';
import Good from '../../components/Goods/Good/good';
import TotalPrice from "../../components/TotalPrice/totalPrice";
import { clearCart } from "../../actions/order";

const ShoppingCart = () => { 
  const orderGoods = useSelector((state) => state.orderGoods);
  const isCreatedOrder = useSelector((state) => state.isCreatedOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isCreatedOrder) {
      dispatch(clearCart());
    }
  }, [isCreatedOrder, dispatch]);

  const handleSuccess = () => {
    dispatch({ type: 'CREATE_ORDER', payload: false });
  };
    return (
        <>
        <Grow in>
          <Container>
           <Grid container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={5}>
                <UserData />
                <TotalPrice/>
              </Grid>
              <Grid item xs={12} sm={5}>
                {isCreatedOrder ? <Alert onClose={handleSuccess}>Order successfully sent!</Alert>: null}
                {!orderGoods.length && !isCreatedOrder ?
                  <Alert severity="info"><AlertTitle>Info</AlertTitle><strong>Please, add goog to cart.</strong> </Alert>
                  :
                  (
                  <Grid container alignItems="stretch" spacing={3}>
                    {orderGoods.map((good, index) => (
                      <Grid key={index} item xs={12} sm={6} md={6}>
                        <Good good={good} />
                      </Grid>
                    ))}
                  </Grid>
                )}
                </Grid>
            </Grid>
          </Container>
        </Grow>
        </>
    )
}

export default ShoppingCart;