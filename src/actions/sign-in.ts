import { z } from 'zod';
import { redirect } from 'next/navigation';

const signInFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(1, { message: 'Password is required' }).trim(),
});

export async function signIn(state: SignInFormState, formData: FormData) {
  const { errors } = validateData(formData);

  if (errors) {
    return { errors };
  }

  redirect('/welcome');
}

function validateData(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const validatedFields = signInFormSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const credsValidation = validateCreds(email, password);

  if (credsValidation.email || credsValidation.password) {
    return { errors: credsValidation };
  }

  return { errors: null };
}

// FAKE authorization
function validateCreds(
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) {
  const fakeEmail = 'user1@cedar.com';
  const fakePass = 'password123';

  return {
    email: email !== fakeEmail ? 'Email is incorrect' : null,
    password: password !== fakePass ? 'Password is incorrect' : null,
  };
}

type SignInFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | unknown;
