// src/Pages/ChatPage.test.js
import { render, screen } from '@testing-library/react';
import ChatPage from './ChatPage';

test('debe renderizar la página ChatPage', () => {
  render(<ChatPage />);
  expect(screen.getByText('Texto esperado en la página ChatPage')).toBeInTheDocument();
});
