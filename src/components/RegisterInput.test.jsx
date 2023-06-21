/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call onRegister function when register button is clicked
 */

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    await userEvent.type(nameInput, 'nametest');
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'emailtest');
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call onRegister function when register button is clicked', async () => {
    const mockOnRegister = vi.fn();
    render(<RegisterInput onRegister={mockOnRegister} />);

    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');

    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');

    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const registerButton = await screen.getByRole('button', { name: 'Register' });

    await userEvent.click(registerButton);

    expect(mockOnRegister).toHaveBeenCalledTimes(1);
    expect(mockOnRegister).toHaveBeenCalledWith({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
