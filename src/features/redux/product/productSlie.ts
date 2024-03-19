import { ProductState } from './interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

export const fetchProductsAsync = createAsyncThunk('products/fetchProductsAsync', async () => {
  const { data } = await axios.get('products');
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      });
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
