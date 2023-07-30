import Title from "./Tittle";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../features/cart.slice";

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <div className=" col-12  navigation py-4 border-top border-bottom">
      <div className="row">
        <div className="col-6">
          <Title children={"Product Name"} />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <Title children={"Quantity"} />
            </div>
            <div className="col-3">
              <Title children={"Subtotal"} />
            </div>

            <div className="col-3">
              <Button
                onClick={() => dispatch(clearAll())}
                children={"Clear Cart"}
                className={"red"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
