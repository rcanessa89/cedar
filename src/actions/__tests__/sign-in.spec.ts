import * as Navigation from 'next/navigation'
import { signIn } from '../sign-in';

const mockRedirect = jest.fn();

jest.mock('next/navigation', () => ({
  redirect: jest.fn()
}));

describe('signIn', () => {
  test('data is valid', () => {
    const formData = new FormData();

    formData.append('email', 'user1@cedar.com');
    formData.append('password', 'password123');
    signIn(undefined, formData);

    jest.spyOn(Navigation, 'redirect')

    expect(Navigation.redirect).toHaveBeenCalled();
  });

  test('data is invalid', async () => {
    const formData = new FormData();

    formData.append('email', 'user1cedarcom');
    formData.append('password', 'password123');
    
    const res = await signIn(undefined, formData);

    expect(res.errors).toBeTruthy();
  });

  test('creds is invalid', async () => {
    const formData = new FormData();

    formData.append('email', 'user1cedarcom');
    formData.append('password', 'password123123123');
    
    const res = await signIn(undefined, formData);

    expect(res.errors).toBeTruthy();
  });
});
