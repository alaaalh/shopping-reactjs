import { useSelector } from "react-redux";
import classes from "./Books.module.css";
import StarRatings from "react-star-ratings";
import ButtonUI from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";

const Books = (props) => {
  const selector = useSelector((state) => state.data);
  const quantite = useSelector((state) => state.data.totalQuantita);

  return (
    <section className={classes.continer}>
      {selector.data !== "loading" &&
        selector.data.response.map((books) => {
          return (
            <Card key={books._id}>
              <div className={classes.image}>
                <input
                  type="image"
                  src={`http://localhost:8080/api/books/${books._id}/avatar`}
                  alt="book photo"
                />
              </div>
              <div>{books.title}</div>
              <div className={classes.__author}>''{books.author}''</div>
              <StarRatings
                rating={books.rate}
                starRatedColor="red"
                numberOfStars={4}
                name="rating"
                starDimension="30px"
                starSpacing="10px"
              />
              <div style={{ fontSize: "30px" }}>{books.price}$</div>
              <div className={classes.__amount}>
                <div style={{ fontSize: "20px" }}>{quantite}</div>
                <div style={{ width: "20px" }}>
                  <button className={classes.amountButton}>+</button>
                  <button className={classes.amountButton}>-</button>
                </div>
              </div>
              <button className={classes.__buy}>buy</button>
            </Card>
          );
        })}
    </section>
  );
};

export default Books;
