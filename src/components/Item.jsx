import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "../features/cart.slice";
export default function Items({ thumbnail, title, id, price, onClick }) {
  const dispatch = useDispatch();

  const cartsDataArray = useSelector((state) => state.cartsData);
  const handleQuantityChange = (event) => {
    let value = event.target.value;
    dispatch(inputChange({ id, value }));
  };
  return (
    <>
      <div className="items col-12 my-4">
        <div className="row ">
          <div className="col-6">
            <div className="product">
              <div className="row">
                <div className="col-3">
                  <div className="img">
                    <img src={thumbnail} className="img-fluid sub-img" alt="" />
                  </div>
                </div>
                <div className="col-9  d-flex  align-items-center">
                  <div className="info">
                    <div className="title fw-medium fs-5">Name: {title}</div>
                    <div className="price">Price $ {price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6   ">
            <div className="row h-100">
              <div className="col-3  d-flex  align-items-center">
                <div className="quantity-box">
                  <input
                    type="number"
                    defaultValue="1"
                    min={1}
                    className="input-quantity"
                    onChange={handleQuantityChange}
                  />
                </div>
              </div>
              <div className="col-3  d-flex  align-items-center">
                <div className="subtotal-box">
                  <span>$ </span> <span>{price}</span>
                </div>
              </div>

              <div className="col-3  d-flex  align-items-center">
                <Button
                  children={<i className="bi bi-trash-fill"></i>}
                  className={"red"}
                  onClick={onClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
