import { cn } from '../../utils';

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const titleClass =
  'font-bold text-2xl leading-7 text-center mb-6 text-darkblue';

export default function Title({ children, className }: TitleProps) {
  return <h1 className={cn(titleClass, className)}>{children}</h1>;
}
