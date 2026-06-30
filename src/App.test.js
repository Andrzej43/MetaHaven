// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaHaven title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaHaven/i);
    expect(titleElement).toBeInTheDocument();
});
