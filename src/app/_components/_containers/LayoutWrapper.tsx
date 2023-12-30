/* src/app/_components/LayoutWrapper.tsx */

import Footer from '@/_components/_pages/_home/_footer/Footer';
import { ReactNode } from 'react';
import Navbar from '@/_components/_pages/_home/_navbar/Navbar';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
