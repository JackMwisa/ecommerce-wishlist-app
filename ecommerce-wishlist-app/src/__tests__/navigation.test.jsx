import { render, screen } from '../test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('renders different views on navigation', async () => {
    render(<App />);

    // Test home view
    expect(screen.getByText(/Welcome to MyStore/i)).toBeInTheDocument();

    // Test navigation to products
    userEvent.click(screen.getByText(/Products/i));
    expect(await screen.findByText(/Our Products/i)).toBeInTheDocument();

    // Test navigation to about
    userEvent.click(screen.getByText(/About/i));
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});