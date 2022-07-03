import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/slice/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const { totalQuantity } = useSelector((store) => store.cart);

  const hideShowCart = (e) => {
    e.preventDefault();
    dispatch(uiAction.changeToggle());
  };

  return (
    <button className={classes.button} onClick={hideShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
