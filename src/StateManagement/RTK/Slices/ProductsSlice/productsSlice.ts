import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { I_ProductItemsResponse } from "../../../../Models/interfaces";
import { getProductsService } from "../../../../Services/Products/Get/getProducrsService";

const initialState: I_ProductItemsResponse & {
  //   added By Developer
  isPending: boolean;
  isError: boolean;
  currPage: number;
  //   added By Developer
} = {
  list: [],
  page: 1,
  pagecount: 1,
  totalcount: 1,

  //   added By Developer
  isPending: true,
  isError: true,
  currPage: 1,
  //   added By Developer
};

export const getAsyncProductsByCategory = createAsyncThunk(
  "products/getProductsBySelectedCategory",
  async (_data: { productCategoryId: string | number; currPage: number }) => {
    try {
      const { data } = await getProductsService(_data);
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("error in getting products");
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.isPending = true;
      state.list = [];
      state.page = 1;
      state.pagecount = 1;
      state.totalcount = 1;
    },
    setCurrPage: (state, action) => {
      state.currPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncProductsByCategory.pending, (state, action) => {
      state.isPending = true;
      state.isError = false;
    });
    builder.addCase(getAsyncProductsByCategory.fulfilled, (state, action) => {
      state.isPending = false;

      if (!action.payload) {
        state.isError = true;
        return;
      }

      state.isError = false;

      state.list = action.payload.list;
      state.page = action.payload.page;
      state.pagecount = action.payload.pagecount;
      state.totalcount = action.payload.totalcount;
    });
    builder.addCase(getAsyncProductsByCategory.rejected, (state, action) => {
      state.isPending = false;
      state.isError = true;
    });
  },
});
