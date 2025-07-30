import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cartReducer';
import { wishlistReducer } from './wishlist/wishlistReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer
});