import { useDispatch } from "react-redux";
import { uiAction } from "../../store/slice/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const hideShowCart = (e) => {
    e.preventDefault();
    dispatch(uiAction.changeToggle());
  };

  return (
    <button className={classes.button} onClick={hideShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
