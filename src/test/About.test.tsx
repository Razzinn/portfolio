import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  it('renders the section title', () => {
    render(<About />);
    expect(screen.getByText(/Chi Sono/i)).toBeInTheDocument();
  });

  it('renders the CV download link', () => {
    render(<About />);
    const cvLink = screen.getByText(/Scarica CV/i);
    expect(cvLink).toBeInTheDocument();
    expect(cvLink.closest('a')).toHaveAttribute('href', '/CV_Ignat_Razvan_Mihai.pdf');
  });

  it('renders highlight items', () => {
    render(<About />);
    expect(screen.getByText('Obiettivo')).toBeInTheDocument();
    expect(screen.getByText('Focus')).toBeInTheDocument();
  });
});
