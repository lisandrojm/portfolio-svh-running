import { ReactNode } from 'react';
import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import Footer from '@/_components/_pages/_shared-pages/_footer/Footer';
import SectionXContainer from '@/_components/_containers/SectionXContainer';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-svh flex-col justify-between">
      <SectionXContainer>
        <Navbar />
      </SectionXContainer>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
