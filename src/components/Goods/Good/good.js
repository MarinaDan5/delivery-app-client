import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Badge, ButtonGroup, Alert} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { addToCart, deleteFromCart, updateQuantity  } from '../../../actions/order';

import useStyles from './styles';

const Good = ({ good, type }) => {
  const orderGoods = useSelector((state) => state.orderGoods);
  const [showAlert, setShowAlert] = useState(false);
  const [disableIncrease, setDisableIncreasee] = useState(false);

  const classes = useStyles();
  
  const dispatch = useDispatch();

  const handleIncrease = () => {
    if (good.quantity > good["quantityInOrder"]) {
      good["quantityInOrder"] += 1;
      dispatch(updateQuantity(good))
    } else
    {
      setDisableIncreasee(true);    
     }
  }

  const handelDecrease = () => {
    if (good.quantity === good["quantityInOrder"]) {
      setDisableIncreasee(false);    
     }
    good["quantityInOrder"] = Math.max(good["quantityInOrder"] - 1, 1);
    dispatch(updateQuantity(good))
     
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     let idGood = orderGoods.map(item => item._id);
     if (!idGood.includes(good._id)) {
       good["quantityInOrder"] = 1;
       dispatch(addToCart(good))
     }
     else
     {
       setShowAlert(true);
     }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteFromCart(good._id))
  }

  return (
  <Card className={classes.card}>
      <CardMedia className={classes.media} image={good.imageUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={good.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{good.name}</Typography>
      </div>
      <div className={classes.overlay2}>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">Price: {good.price} ua</Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Available quantity: {good.quantity}</Typography>
        </CardContent>
        {
          type === 'shop' ? (
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={(e) => handleSubmit(e)} disabled={ showAlert }><AddShoppingCartIcon fontSize="small" /> Add to cart</Button>
          </CardActions>
        ):(
            <>
              <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={good.quantityInOrder}>
          <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={handelDecrease}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={handleIncrease}
            disabled={disableIncrease}     
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="secondary" variant="outlined" onClick={(e) => handleDelete(e)}><DeleteForeverIcon fontSize="small" /> Delete</Button>
          </CardActions>
       </div>
    </Box>
            </>
        )
        }
        {showAlert ? <Alert variant="filled" severity="warning">
          The product is already in the cart{good.name }
        </Alert> : null}      
    </Card>
    )
}
 
export default Good;