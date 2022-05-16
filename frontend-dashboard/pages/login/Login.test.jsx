import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './index';

it('button should be rendered', () => {
  render(<Login />);
  userEvent.click(screen.getByRole('button', { name: /login/i }));
});