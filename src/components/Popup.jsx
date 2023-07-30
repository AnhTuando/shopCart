import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { handlePopupCloseClick, calSubtotal } from "../features/cart.slice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Popup() {
  const dispatch = useDispatch();
  const notifySuccess = () => toast.success("Adding to cart successfully !");
  const cartsDataArray = useSelector((state) => state.cartsData);
  const subtotal = useSelector((state) => state.subtotal);
  useEffect(() => {
    dispatch(calSubtotal());
  }, [cartsDataArray]);
  const handlePay = () => {
    notifySuccess();
  };
  const handleClose = () => {
    dispatch(handlePopupCloseClick());
  };
  return (
    <div className="wrap-pop-up position-fixed start-0  w-100 h-100">
      <ToastContainer
        theme="light"
        position="top-left"
        draggable="true"
        closeOnClick="true"
        type="success"
      />
      <div className="pop-up shadow px-3 mb-5 bg-body-tertiary rounded">
        <div className="wrap-btn d-flex justify-content-end mb-5">
          <Button
            onClick={() => dispatch(handlePopupCloseClick())}
            className={"gray close end-0 fs-4"}
            children={<i className="bi bi-x-lg"></i>}
          />
        </div>
        <div className="row">
          <div className="popup-subtotal d-flex justify-content-center">
            <p className="fs-5 fw-medium">
              Total amount payable: $ {subtotal.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="accept d-flex justify-content-center gap-4">
            <Button className={"blue"} children={"Pay"} onClick={handlePay} />
            <Button
              className={"red"}
              children={"Close"}
              onClick={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
