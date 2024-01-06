import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import LandingPage from '../page';

// Test 
describe('LandingPage', () => {
  test('renders correct link for Get Started Button', () => {
    render(<LandingPage />);

    const getStartedLink = screen.getByText('Get Started');
    
    expect(getStartedLink).toBeInTheDocument();
    expect(getStartedLink).toHaveAttribute('href', '/auth/signup')
  });
});