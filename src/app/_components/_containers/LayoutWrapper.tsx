import { ReactNode } from 'react';
import Navbar from '@/_components/_pages/_shared/_header/_navbar/Navbar';
import Footer from '@/_components/_pages/_shared/_footer/Footer';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-svh flex-col justify-between">
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
