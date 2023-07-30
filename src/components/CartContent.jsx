import Items from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, calSubtotal } from "../features/cart.slice";
import ShoppingCartCharge from "./ShoppingCartCharge";

export default function CartContext() {
  const dispatch = useDispatch();

  const cartsDataArray = useSelector((state) => state.cartsData);

  return (
    <div className="cart-content">
      <div className="row cart-items">
        {cartsDataArray.map((item) => (
          <Items
            key={item.id}
            item={item}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onClick={() => dispatch(deleteCart(item.id))}
          />
        ))}
      </div>
      <div className="row">
        <ShoppingCartCharge />
      </div>
    </div>
  );
}
