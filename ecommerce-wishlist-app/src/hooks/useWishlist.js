import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { removeProduct } from '../redux/actions/wishlistActions';
import { useSnackbar } from 'notistack';

export function useWishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    enqueueSnackbar(`${product.title} added to wishlist`, { 
      variant: 'success',
      autoHideDuration: 2000
    });
  };

  const handleRemoveFromWishlist = async (productId) => {
    await dispatch(removeProduct(productId));
    enqueueSnackbar('Product removed', { 
      variant: 'info',
      autoHideDuration: 2000
    });
  };

  return { 
    wishlist, 
    addToWishlist: handleAddToWishlist, 
    removeFromWishlist: handleRemoveFromWishlist 
  };
}