import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa jest-dom para toBeInTheDocument
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../src/AppRoutes';
import Navbar from '../Components/Navbar';

// Test 1: Verifica que la Navbar se renderiza correctamente
test('renders the Navbar component', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument(); // Aquí se debería funcionar
});

// Test 2: Verifica que la ruta "/" carga la página de inicio
test('renders Homepage on default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppRoutes />
    </MemoryRouter>
  );
  // Cambié "Welcome" por un texto que esté presente en el HTML
  expect(screen.getByText(/Nieuws en updates/i)).toBeInTheDocument();
});