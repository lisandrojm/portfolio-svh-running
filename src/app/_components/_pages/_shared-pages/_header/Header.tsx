/* src/app/_components/_pages/_shared/_/header/Header.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import StickyFooter from '@/_components/_shared/StickerFooter';

export default function Header() {
  return (
    <div>
      <SectionXContainer>
        <Navbar />
        <header className="h-svh-minus">
          <div className="flex justify-center items-center h-full bg-green">
            <h1>Header</h1>
          </div>
        </header>
        <StickyFooter customTextLeft="header" customTextRight="I love the challenges" />
      </SectionXContainer>
    </div>
  );
}
