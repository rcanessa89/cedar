import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Title from './';

describe('Title', () => {
  test('render title with text', () => {
    render(<Title>test</Title>);

    const title = screen.getByText('test')
 
    expect(title).toBeInTheDocument()
  });
});
