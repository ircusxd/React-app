import { render, screen } from '@testing-library/react';
import Chat from './Chat'; // Ajusta la ruta según sea necesario

test('debe renderizar el componente Chat', () => {
  render(<Chat />);
  expect(screen.getByText('Texto esperado en el componente Chat')).toBeInTheDocument();
});
