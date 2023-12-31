/* src/app/_components/_pages/_shared/_/header/Header.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import StickyFooter from '@/_components/_shared/StickerFooter';
import LinkButton from '@/_components/_shared/LinkButton';

export default function Header() {
  return (
    <div>
      <SectionXContainer>
        <Navbar />
        <header className="h-svh-minus">
          <div className="flex flex-col justify-end items-end h-full pb-4">
            <h2 className="font-mono uppercase text-7xl font-bold italic text-border text-black">Works</h2>
            <h2 className="font-mono uppercase text-7xl font-bold italic text-border text-black">Skills</h2>
            <div>
              <p className="font-serif italic text-end text-2xl">
                Hi. My name is Lisandro. <br /> I am a Full Stack developer <br />
                based in Argentina.
              </p>
            </div>
            <div className="py-6">
              <LinkButton href="/form" size="xxl" font="mono">
                Contact Me
              </LinkButton>
            </div>
            <div className="w-full text-start">
              <div className="flex flex-col justify-between place-items-stretch">
                <div>
                  <span className="border-b border-white block"></span>
                </div>
                <div className="text-end">
                  <p className="font-serif italic text-sm text-orange pt-2">I love the challenges</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </SectionXContainer>
    </div>
  );
}
