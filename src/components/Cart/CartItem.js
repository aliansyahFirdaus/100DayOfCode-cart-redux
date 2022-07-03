import { useDispatch } from "react-redux";
import { counterAction } from "../../store/slice/counter-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(counterAction.addItem({ title, quantity, totalPrice, price, id }));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(counterAction.deleteItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
