import { cn } from '../cn';

describe('cn', () => {
  test('concat class names', () => {
    const expected = 'block m-1';
    const result = cn('block', 'm-1');

    expect(result).toBe(expected);
  });

  test('confitional class names', () => {
    const expected = 'block';
    const result = cn({ block: true, 'm-1': false });

    expect(result).toBe(expected);
  });

  test('respect order', () => {
    const expected = 'inline';
    const result = cn({ block: true, inline: true });

    expect(result).toBe(expected);
  });
});