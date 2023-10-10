import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  cartData: {
    image: string;
    count: number;
    price: number;
    name: string;
    id: string;
  }[];
} = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (state.cartData.map((item) => item.id).includes(action.payload.id)) {
        const _state = [...state.cartData];
        const selectedItemIndex = state.cartData.findIndex(
          (item) => item.id === action.payload.id
        );
        _state[selectedItemIndex].count += 1;
        state.cartData = _state;
        return;
      }
      state.cartData.push(action.payload);
    },
    removeOneCountFromItem: (state, action) => {
      if (state.cartData.map((item) => item.id).includes(action.payload.id)) {
        const selectedItemIndex = state.cartData.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartData[selectedItemIndex].count -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
    changeCountByInput: (state, action) => {
      const _state = [...state.cartData];
      const selectedItemIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      _state[selectedItemIndex].count = Number(action.payload.count);
      state.cartData = _state;
      return;
    },
  },
});
