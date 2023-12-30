/* src/app/_components/_pages/_shared/_/header/Header.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Navbar from '@/_components/_pages/_shared/_header/_navbar/Navbar';

export default function Header() {
  return (
    <div>
      <SectionXContainer>
        <header className="h-svh">
          <Navbar />
          <div className="flex justify-center items-center h-full">
            <h1>Header</h1>
          </div>
        </header>
        <div className="sticky bottom-0  w-full text-2xl text-start pb-5">
          <div>
            <h1 className=" border-b border-white font-serif italic">header</h1>
          </div>
        </div>
      </SectionXContainer>
    </div>
  );
}
