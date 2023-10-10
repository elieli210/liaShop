// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Redux

// Services
import { getAllCategoriesService } from "../../../../Services/Categories/Get/getAllCategoriesService";
import { I_Category } from "../../../../Models/interfaces";
// Services

const initialState: {
  categories: I_Category[];

  // added by Developer
  isPending: boolean;
  // added by Developer
} = {
  categories: [],
  isPending: true,
};

export const getAsyncAllCategories = createAsyncThunk(
  "categories/getAll",
  async () => {
    try {
      const { data } = await getAllCategoriesService();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("error in receiving data from categoriesApi");
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    ///////////////////////////
    ///////////////////////////
    ///////////////////////////
    ///////////////////////////
    builder.addCase(getAsyncAllCategories.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(getAsyncAllCategories.fulfilled, (state, action) => {
      state.isPending = false;

      if (!action.payload) return;

      state.categories = action.payload;
    });
    builder.addCase(getAsyncAllCategories.rejected, (state, action) => {
      state.isPending = false;
    });
    ///////////////////////////
    ///////////////////////////
    ///////////////////////////
    ///////////////////////////
  },
});
