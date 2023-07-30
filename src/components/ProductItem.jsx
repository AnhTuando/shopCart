import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../features/cart.slice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductItem({ img, title, price, item }) {
  const dispatch = useDispatch();

  const notifySuccess = () => toast.success("Adding to cart successfully !");
  const handleAddToCart = (item) => {
    notifySuccess();
    dispatch(addToCart(item));
  };
  return (
    <div className="col-6 col-lg-4 my-2">
      <ToastContainer
        theme="light"
        position="top-left"
        draggable="true"
        closeOnClick="true"
        type="success"
      />
      
      <div className="product-item h-100 d-flex flex-column justify-content-between border rounded-3 shadow-lg p-3 mb-5 bg-body-tertiary">
        <div className="img d-flex justify-content-center align-items-center">
          <img src={img} className="img-fluid img-product" alt="" />
        </div>
        <div className="wrap-sub-items d-flex justify-content-around ">
          <div className="wrap-info text-center">
            <div className="title">{title}</div>
            <div className="price">$ {price}</div>
          </div>
          <div className="add-to-cart-btn-wrap">
            <Button
              className={"blue add-to-cart-btn"}
              onClick={() => handleAddToCart(item)}
            >
              {"Add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
