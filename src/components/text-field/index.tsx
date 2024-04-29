import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils';

export interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  type?: 'text' | 'password';
  inputClassName?: string;
  label?: string;
  error?: string | string[] | null;
}

const labelTextClass = 'font-normal text-sm leading-[1.3125rem]';
const inputClass =
  'h-12 rounded-lg border border-darkgray w-full font-normal text-base text-blacktext py-3 px-4';

export default function TextField({
  type = 'text',
  className,
  inputClassName,
  label,
  id,
  error,
  ...props
}: TextFieldProps) {
  return (
    <div className={className ? cn(className) : undefined}>
      {label && (
        <label
          className={cn(labelTextClass, 'mb-2 text-gray block')}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        type={type}
        data-testid={id}
        className={cn(inputClass, inputClassName, {
          'border-error': Boolean(error),
        })}
      />
      {error && (
        <p className={cn(labelTextClass, 'mt-2 text-error')}>{error}</p>
      )}
    </div>
  );
}
