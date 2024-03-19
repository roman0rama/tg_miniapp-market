import { ReviewState } from './interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null
};

export const fetchReviewsAsync = createAsyncThunk('reviews/fetchReviewsAsync', async () => {
  const { data } = await axios.get('reviews');
  return data;
});

const reviewSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchReviews: (state) => {
      state.reviews = [""];
      state.loading = true;
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviewsAsync.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      });
  }
});

export const { fetchReviews, addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
