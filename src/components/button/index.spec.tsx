import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Button from './';

describe('Button', () => {
  test('render button with text', () => {
    render(<Button>test</Button>);

    const button = screen.getByText('test')
 
    expect(button).toBeInTheDocument()
  });
});
