import { render, screen } from '@testing-library/react';
import ReactDebug from './ReactDebug';

test('renders prime number for default input 10', () => {
  render(<ReactDebug />);
  const textElement = screen.getByText(/There are 4 prime between 1 and 10/i);
  expect(textElement).toBeInTheDocument();
});