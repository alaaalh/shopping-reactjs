import { useState } from "react";

import classes from "./SideBar.module.css";
import ButtonUI from "./../../UI/Button/Button";

const SideBar = (props) => {

  const [rangeBar , setRangeBar] = useState()

  const handleRangeValue = (e) => {
      setRangeBar(e.target.value)
      console.log(rangeBar)
  }

  const handleSearchInput = (e) => {
      console.log(e.target.value)
  }

  return (
      <aside className={classes["side-bar"]}>
        <h2>Searching books</h2>
        <div>
          <input type="text" onChange={handleSearchInput}/>
          <ButtonUI>Search</ButtonUI>
        </div>
        <br />
        <h2>Fillter by price</h2>
        <span>{rangeBar ? rangeBar : '100$'}</span>
        <div>
          <input
            className={classes.slider}
            type="range"
            min="20"
            max="200"
            onChange={handleRangeValue}
          />
          <ButtonUI>Fillter</ButtonUI>
        </div>
        <br/>
        <h2>Books department</h2>
        <ul className={classes.list}>
            <li>Economic Home</li>
            <li>Economics and management</li>
            <li>Sociology</li>
            <li>Literature and human sciences</li>
            <li>management and economy</li>
            <li>Private education</li>
        </ul>
      </aside>
  );
};

export default SideBar;
