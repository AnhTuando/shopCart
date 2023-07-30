import Button from "./Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoupon, calSubtotal, checkCoupon } from "../features/cart.slice";
import Coupon from "./Coupon";

export default function ShoppingCartCharge({ subtotalValue }) {
  const dispatch = useDispatch();
  const couponCode = useSelector((state) => state.couponCode);
  const subtotal = useSelector((state) => state.subtotal);
  const cartsDataArray = useSelector((state) => state.cartsData);

  const hanldeInputChange = (event) => {
    dispatch(getCoupon(event.target.value));
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(checkCoupon(couponCode));
  };
  useEffect(() => {
    dispatch(calSubtotal());
  }, [cartsDataArray]);
  return (
    <div className="shopping-cart-charge">
      <div className="row">
        <div className="col-8 d-flex  ">
          <div className="coupon">
            <form className="form d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Coupon code"
                className="h-100 input-coupon px-2 "
                onChange={hanldeInputChange}
              />
              <Button
                className={"blue "}
                onClick={handleClick}
                children={"Apply Coupon"}
              />
            </form>
            <Coupon />
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-between">
          <div className="subtotal">Subtotal: $ {subtotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
