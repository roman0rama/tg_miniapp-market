import { CategoryState } from './interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCategoriesAsync = createAsyncThunk('categories/fetchCategoriesAsync', async () => {
  const { data } = await axios.get('category');
  return data;
});

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    temp: state => {
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      });
  }
});

export default categorySlice.reducer;
