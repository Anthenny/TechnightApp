import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './index';

it('button should be rendered', () => {
  render(<Login />);
  userEvent.click(screen.getByRole('button', { name: /login/i }));
});

it('Email input should be rendered', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    expect(emailInput).toBeInTheDocument();
  });

  it('Password input should be rendered', () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/wachtwoord/i);
    expect(passwordInput).toBeInTheDocument();
  });

  it('Email input should be empy the first time the page loads.', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    expect(emailInput.value).toBe("")
  });

  it('Password input should be empy the first time the page loads.', () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText(/wachtwoord/i);
    expect(passwordInput.value).toBe("")
  });