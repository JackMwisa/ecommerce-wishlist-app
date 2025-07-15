import { removeFromWishlist } from '../slices/wishlistSlice';

export const removeProduct = (productId) => (dispatch) => {
  dispatch(removeFromWishlist(productId));
  return Promise.resolve(); // For immediate feedback
};