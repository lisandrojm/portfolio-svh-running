// src/app/_components/_pages/_layout/Provider.tsx
'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Provider: React.FC<Props> = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={false} attribute="data-theme" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
