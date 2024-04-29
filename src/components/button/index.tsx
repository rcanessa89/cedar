import { type DetailedHTMLProps, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
}

const inputClass =
  'rounded-xl py-3 px-4 bg-blue font-bold text-base leading-6 text-white hover:brightness-[110%] active:brightness-[80%]';

export default function Button({
  children,
  className,
  full = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(inputClass, { 'w-full': full }, className)}
      {...props}
    >
      {children}
    </button>
  );
}
