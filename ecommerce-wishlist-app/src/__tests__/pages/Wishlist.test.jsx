import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import Wishlist from '../pages/Wishlist';

test('shows empty wishlist message when no items', () => {
  render(<Wishlist />, {
    initialRoutes: ['/wishlist']
  });
  
  expect(screen.getByText(/Your Wishlist/i)).toBeInTheDocument();
  expect(screen.getByText(/Your wishlist is empty/i)).toBeInTheDocument();
});

test('shows items when wishlist has products', () => {
  const initialState = {
    wishlist: {
      items: [{
        id: 1,
        title: 'Test Product',
        price: 10.99,
        description: 'Test description',
        image: 'test.jpg'
      }]
    }
  };
  
  render(<Wishlist />, {
    initialState,
    initialRoutes: ['/wishlist']
  });
  
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
});