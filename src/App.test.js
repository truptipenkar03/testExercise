import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text element', () => {
  render(<App />);
  const textElement = screen.getByText(/application content/i);
  expect(textElement).toBeInTheDocument();
});
