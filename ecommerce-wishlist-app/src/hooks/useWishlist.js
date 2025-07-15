import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

export function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const saveWishlist = (items) => {
    localStorage.setItem('wishlist', JSON.stringify(items));
    setWishlist(items);
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      const newWishlist = [...wishlist, product];
      saveWishlist(newWishlist);
      enqueueSnackbar(`${product.title} added to wishlist`, { variant: 'success' });
    } else {
      enqueueSnackbar('Product already in wishlist', { variant: 'info' });
    }
  };

  const removeFromWishlist = (productId) => {
    const newWishlist = wishlist.filter((item) => item.id !== productId);
    saveWishlist(newWishlist);
    enqueueSnackbar('Product removed from wishlist', { variant: 'info' });
  };

  return { wishlist, addToWishlist, removeFromWishlist };
}