// Redux
import { configureStore } from "@reduxjs/toolkit";
// Redux

// React_Redux_Connector
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// React_Redux_Connector

// Slices
import { categoriesSlice } from "./Slices/CategoriesSlice/CategoriesSlice";
import { productsSlice } from "./Slices/ProductsSlice/productsSlice";
import { cartSlice } from "./Slices/CartSlice/cartSlice";
// Slices

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
    cartItems: cartSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
