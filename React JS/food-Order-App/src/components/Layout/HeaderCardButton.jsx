import React from "react";
import CardIcon from "../Cart/CartIcon.jsx";
import classes from './HeaderCardButton.module.css'
import { useContext } from "react";
import CartContext from "../../store/cart-context.jsx";


const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0)

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
