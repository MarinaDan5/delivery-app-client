import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAl';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from "react-redux";
import {addToCart} from '../../../actions/order';



import useStyles from './styles';

const Good = ({ good}) => {
  const classes = useStyles();
  
  const dispatch = useDispatch();

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('id',good._id);
        if (true) { 
          dispatch(addToCart(good._id));
        }       
     }

    return (
<Card className={classes.card}>
      <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={good.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{good.name}</Typography>
      </div>
      <div className={classes.overlay2}>
        {/* <Button style={{ color: 'white' }} size="small"><MoreHorizIcon fontSize="default" /></Button> */}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{good.price}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{good.market}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{good.quantity}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" onClick={() => dispatch(likePost(good._id))}><ThumbUpAltIcon fontSize="small" /> Like {good.likeCount} </Button> */}
        <Button size="small" color="primary" onClick={(e) => handleSubmit(e)}><DeleteIcon fontSize="small" /> Add to cart</Button>
      </CardActions>
    </Card>
    )

}
 
export default Good;