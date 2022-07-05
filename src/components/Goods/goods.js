import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@mui/material';

import Good from './Good/good';

const Goods = () => {
  const goods = useSelector((state) => state.goods);

  return (
  !goods.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {goods.map((good, index) => (
          <Grid key={index} item xs={12} sm={6} md={6}>
            <Good good={good} type={'shop'} />
          </Grid>
        ))}
      </Grid>
    )
    )
}
 
export default Goods;