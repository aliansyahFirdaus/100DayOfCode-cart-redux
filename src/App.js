import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiAction } from "./store/slice/ui-slice";

let initial = true;

function App() {
  const { toggle } = useSelector((store) => store.uiToggle);
  const { notificationDetail } = useSelector((store) => store.uiToggle);

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const postCart = async () => {
      dispatch(
        uiAction.notificationHandler({
          title: "Process",
          status: "pending",
          message: "Please wait! Item add to cart procesed...",
        })
      );

      const response = await fetch(
        "https://react-cart-redux-1cf8a-default-rtdb.firebaseio.com/cart.json",
        { method: "POST", body: JSON.stringify(cart) }
      );

      if (!response.ok)
        throw new Error("Opsss.. Failed added item to cart. Please try again");

      dispatch(
        uiAction.notificationHandler({
          title: "Success",
          status: "success",
          message: "Success added item to cart! Cart is updated!",
        })
      );
    };

    if (initial) {
      initial = false;
      return;
    }

    postCart().catch((err) => {
      dispatch(
        uiAction.notificationHandler({
          title: "Failed",
          status: "error",
          message: err.message,
        })
      );
    });

    setTimeout(() => {
      dispatch(uiAction.notificationHandler(null));
    }, 2000);
    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notificationDetail && (
        <Notification
          title={notificationDetail.title}
          message={notificationDetail.message}
          status={notificationDetail.status}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
