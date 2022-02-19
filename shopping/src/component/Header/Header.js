import { Fragment } from "react";

import mainImage from '../../assets/bookStore.jpg'
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Book Store</h1>
        <h2>Main</h2>
        <h3>corses</h3>
        <h3>diplomatics</h3>
        <h3>high</h3>
        <h3>who are</h3>
        <h3>contact us</h3>
        <HeaderButton>{props.children}</HeaderButton>
      </header>
      <div className={classes["main-image"]}>
        
          <img src={mainImage} alt="a girl write in book" layout="fill" />
        
      </div>
    </Fragment>
  );
};

export default Header;

