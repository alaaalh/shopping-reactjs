import { useSelector } from "react-redux";

import Card from "../../UI/Card/Card";


const Books = () => {
  const selector = useSelector((state) => state.data);
  
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
    {selector.data.map((selector) => {
      
        return (
          <Card>
            <div>
              <input type="image" alt="book photo" />
            </div>
            <div>{selector.title}</div>
            <div>{selector.author}</div>
            <div>{selector.rate}</div>
            <div>{selector.price}</div>
            <div>
              {selector.amount}
              <button>+</button>
              <button>-</button>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default Books;
