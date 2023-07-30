import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartsData: [],
  couponCodeArray: ["#code1", "#code2"],
  couponCode: "",
  subtotal: 0,
  isPopup: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCart: (state, action) => {
      state.cartsData = state.cartsData.filter(
        (item) => item.id !== action.payload
      );
    },
    setCartsData: (state, action) => {
      state.cartsData = action.payload;
    },
    inputChange: (state, action) => {
      state.cartsData.map((item) => {
        if (item.id == action.payload.id) {
          item.quantity = action.payload.value;
        }
      });
    },
    clearAll: (state) => {
      state.cartsData = [];
      state.subtotal = 0;
    },
    getCoupon: (state, action) => {
      state.couponCode = action.payload;
    },
    checkCoupon: (state, action) => {
      if (state.couponCodeArray.includes(action.payload)) {
        state.subtotal =
          state.cartsData.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          ) * 0.9;
      }
    },
    calSubtotal: (state) => {
      state.subtotal = state.cartsData.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    addToCart: (state, action) => {
      const existingItem = state.cartsData.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartsData.push({
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          price: action.payload.price,
          thumbnail: action.payload.thumbnail,
        });
      }
    },
    handlePopupOpenClick: (state) => {
      state.isPopup = true;
    },
    handlePopupCloseClick: (state) => {
      state.isPopup = false;
    },
  },
});

export const {
  addToCart,
  checkCoupon,
  calSubtotal,
  setCartsData,
  getCoupon,
  clearAll,
  handlePopupOpenClick,
  handlePopupCloseClick,
  inputChange,
  deleteCart,
} = cartSlice.actions;
export default cartSlice.reducer;
