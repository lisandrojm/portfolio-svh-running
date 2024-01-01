/* src/app/_components/_containers/LayoutWrapper.tsx */

import { ReactNode } from 'react';

import Provider from '@/_components/_contexts/Provider';
import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Background from '@/_components/_shared/Background';
import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import Footer from '@/_components/_pages/_shared-pages/_footer/Footer';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <Provider>
      <Background />
      <SectionXContainer>
        <div className="flex h-svh flex-col justify-between">
          <Navbar />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionXContainer>
    </Provider>
  );
};

export default LayoutWrapper;
