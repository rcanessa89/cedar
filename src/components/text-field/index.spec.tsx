import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TextField from './';

describe('TextField', () => {
  test('render with label', () => {
    render(<TextField name="test" label="label" />);

    const field = screen.getByText('label');
 
    expect(field).toBeInTheDocument();
  });

  test('render with name', () => {
    render(<TextField id="testField" name="test" label="label" />);

    const field = screen.getByTestId('testField');

    expect(field.getAttribute('name')).toEqual('test');
  });

  test('render with error', () => {
    render(<TextField name="test" error="test error" />);

    const error = screen.getByText('test error');
 
    expect(error).toBeInTheDocument();
  });
});
