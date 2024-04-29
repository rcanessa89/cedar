import './global.css';

export const metadata = {
  title: 'Sign in',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex p-4 justify-center items-center">
          <div className="w-[325px] max-w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
