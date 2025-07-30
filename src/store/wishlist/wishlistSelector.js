import { createSelector } from 'reselect';

const selectWishlistReducer = (state) => state.wishlist;

export const selectIsCartOpen = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.isCartOpen
);

export const selectWishlistItems = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.wishlistItems
);

export const selectWishlistTotal = createSelector([selectWishlistItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectWishlistItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);