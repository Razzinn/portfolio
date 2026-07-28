import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the navigation with all sections', () => {
    render(<App />);
    expect(screen.getAllByText(/Chi Sono/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Competenze/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Progetti/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contatti/i).length).toBeGreaterThan(0);
  });

  it('renders the footer with current year', () => {
    render(<App />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
