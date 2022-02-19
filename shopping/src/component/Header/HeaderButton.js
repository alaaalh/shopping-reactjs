import ShoppingCart from "../../assets/shopping-cart.png"
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button className={classes.button}>
        <img src={ShoppingCart} alt="this is shopping cart" className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
