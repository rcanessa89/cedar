'use client';

import { useFormState } from 'react-dom';
import Image from 'next/image';
import cedarLogo from './cedar-logo.svg';
import TextField from '../../components/text-field';
import Button from '../../components/button';
import Title from '../../components/title';
import { signIn } from '../../actions/sign-in';

export default function SignIn() {
  const [state, action] = useFormState(signIn, undefined);

  return (
    <form action={action}>
      <div className="flex justify-center mb-7">
        <Image src={cedarLogo} alt="Cedar" width={126} />
      </div>
      <Title>Sign in to your account</Title>
      <TextField
        id="email"
        className="mb-4"
        name="email"
        label="Email address"
        error={state?.errors?.email}
      />
      <TextField
        id="password"
        className="mb-6"
        name="password"
        label="Password"
        type="password"
        error={state?.errors?.password}
      />
      <Button full type="submit" id="sign-in">
        Sign in
      </Button>
    </form>
  );
}
