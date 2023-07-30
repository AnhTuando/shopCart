import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSlice from "./cart.slice";

const persistConfig = {
  key: "cart",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartSlice);
const store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store);
export { store, persistor };
