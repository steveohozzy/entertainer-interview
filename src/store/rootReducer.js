import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cartReducer';

export const rootReducer = combineReducers({
  cart: cartReducer
});