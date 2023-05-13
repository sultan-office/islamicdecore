import { configureStore } from '@reduxjs/toolkit';
import quickViewSlice from './QuickView/quickViewSlice';
import cartSlice from './Cart/cartSlice';


export default configureStore({
  reducer: {
    cart : cartSlice,
    quickView: quickViewSlice,

  }
});