import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders list of events', async () => {
  render(<App />);
  const component = await screen.findByRole('list');
  expect(component).toHaveClass('event-list');
});
