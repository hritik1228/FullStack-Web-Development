import React from "react";
import CardIcon from "../Cart/CartIcon.jsx";
import classes from './HeaderCardButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CardIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
