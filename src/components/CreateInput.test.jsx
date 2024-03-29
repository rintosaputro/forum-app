/**
 * skenario testing
 *
 * - CreateInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call onRegister function when register button is clicked
 */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateInput from './CreateInput';

expect.extend(matchers);

describe('CreateInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    render(
      <MemoryRouter>
        <CreateInput onPostThread={() => {}} />
      </MemoryRouter>,
    );

    const titleInput = await screen.getByPlaceholderText('Title');

    await userEvent.type(titleInput, 'titletest');

    expect(titleInput).toHaveValue('titletest');
  });

  it('should handle category typing correctly', async () => {
    render(
      <MemoryRouter>
        <CreateInput onPostThread={() => {}} />
      </MemoryRouter>,
    );

    const categoryInput = await screen.getByPlaceholderText('Category');

    await userEvent.type(categoryInput, 'categorytest');

    expect(categoryInput).toHaveValue('categorytest');
  });

  it('should handle body typing correctly', async () => {
    render(
      <MemoryRouter>
        <CreateInput onPostThread={() => {}} />
      </MemoryRouter>,
    );
    const bodyInput = await screen.getByRole('body-input');

    await userEvent.type(bodyInput, 'bodyinputtest');

    expect(bodyInput.textContent).toBe('bodyinputtest');
  });

  it('should call onPostThread function when register button is clicked', async () => {
    const mockOnPostThread = vi.fn();

    render(
      <MemoryRouter>
        <CreateInput onPostThread={mockOnPostThread} />
      </MemoryRouter>,
    );

    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'titletest');

    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'categorytest');

    const bodyInput = await screen.getByRole('body-input');
    await userEvent.type(bodyInput, 'bodyinputtest');

    const buttonPostThread = await screen.getByRole('button', { name: 'Post Thread' });
    await userEvent.click(buttonPostThread);

    expect(mockOnPostThread).toBeCalledWith({
      title: 'titletest',
      category: 'categorytest',
      body: 'bodyinputtest',
    });
  });
});
