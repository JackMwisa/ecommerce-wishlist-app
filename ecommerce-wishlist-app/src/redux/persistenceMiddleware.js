export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith('wishlist/')) {
    const { wishlist } = store.getState();
    localStorage.setItem('wishlist', JSON.stringify(wishlist.items));
  }
  return result;
};