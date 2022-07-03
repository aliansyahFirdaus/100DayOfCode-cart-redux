import { useDispatch } from "react-redux";
import { counterAction } from "../../store/slice/counter-slice";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description } = props;

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(counterAction.addItem(props));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
