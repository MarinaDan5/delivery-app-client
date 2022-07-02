import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@mui/material';
import Good from './Good/good';

import useStyles from './styles';

const Goods = () => {
    const goods = useSelector((state) => state.goods);
    const classes = useStyles();

    console.log(goods)

    return (
  !goods.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {goods.map((good, index) => (
          <Grid key={index} item xs={12} sm={6} md={6}>
            <Good good={good}  />
          </Grid>
        ))}
      </Grid>
    )
    )

}
 
export default Goods;