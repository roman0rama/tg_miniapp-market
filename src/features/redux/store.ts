import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './category/categorySlice'
import reviewsReducer from './reviews/reviewsSlice'
import productReducer from './product/productSlie'

const store = configureStore({
  reducer: {
    category: categoryReducer,
    reviews: reviewsReducer,
    products: productReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch