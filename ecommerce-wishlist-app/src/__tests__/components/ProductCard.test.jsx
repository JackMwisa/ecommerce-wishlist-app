import { render, screen } from '../test-utils';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 10.99,
  description: 'Test description',
  image: 'test.jpg'
};

test('renders product information', () => {
  render(<ProductCard product={mockProduct} />);
  
  expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
});

test('calls addToWishlist when button clicked', () => {
  const mockAdd = jest.fn();
  
  render(
    <ProductCard 
      product={mockProduct}
      onWishlist={false}
      addToWishlist={mockAdd}
    />
  );
  
  userEvent.click(screen.getByText(/Add to Wishlist/i));
  expect(mockAdd).toHaveBeenCalledWith(mockProduct);
});