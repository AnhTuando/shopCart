import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CartContext from "../components/CartContent";
import Popup from "../components/Popup";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const isPopup = useSelector((state) => state.isPopup);

  return (
    <>
      <Navigation />
      <CartContext />
      <Footer />
      {isPopup ? <Popup /> : ""}
    </>
  );
}
