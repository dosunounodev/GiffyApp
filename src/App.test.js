import { render, screen } from '@testing-library/react';
import App from './App';

test('renders w/o crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Last Search/i);
  expect(title).toBeInTheDocument();
});