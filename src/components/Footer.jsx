import Button from "./Button";
import { NavLink, generatePath } from "react-router-dom";
import { handlePopupOpenClick } from "../features/cart.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <div className="col-12 footer position-fixed bottom-0  pb-4">
      <div className="row">
        <div className="col-4">
          <NavLink to={generatePath(`/shop/`)}>
            <Button className={"gray"} children={"Back to shop"} />
          </NavLink>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="wrap-btns d-flex justify-content-end gap-4">
              <Button
                className={"green px-4"}
                children={"Checkout"}
                onClick={() => dispatch(handlePopupOpenClick())}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
