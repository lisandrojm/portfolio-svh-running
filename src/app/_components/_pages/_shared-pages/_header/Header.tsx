/* src/app/_components/_pages/_shared/_/header/Header.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import ScrollDown from '@/_components/_shared/ScrollDown';
import StickyFooter from '@/_components/_shared/StickerFooter';

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
        <StickyFooter customTextLeft="header" customTextRight="All Killer, No filler." />
        <ScrollDown />
      </SectionXContainer>
    </div>
  );
}
