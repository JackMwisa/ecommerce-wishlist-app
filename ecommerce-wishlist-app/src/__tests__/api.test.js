import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';
import { render, screen } from '../test-utils';
import Products from '../pages/Products';

// MSW server setup
const server = setupServer(...handlers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders API data correctly', async () => {
  render(<Products />);
  
  expect(await screen.findByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/\$10.99/i)).toBeInTheDocument();
});