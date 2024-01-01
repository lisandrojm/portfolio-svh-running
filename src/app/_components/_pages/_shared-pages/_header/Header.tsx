/* src/app/_components/_pages/_shared/_/header/Header.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import LinkButton from '@/_components/_shared/LinkButton';

export default function Header() {
  return (
    <div>
      <SectionXContainer>
        <Navbar />
        <header className="h-svh-header text-end">
          <div className="flex flex-col justify-center items-end h-full pb-4">
            <div className="mb-4 font-regular uppercase text-7xl font-bold italic text-orange  pe-2">
              <h2>Works</h2>
              <h2>Skills</h2>
            </div>
            <div className="font-serif italic">
              <p className=" text-xl">
                Hi. My name is Lisandro. <br /> I am a Full Stack developer <br />
                based in Argentina.
              </p>
              <div className="pt-2">
                <p className="text-sm text-orange">I love the challenges</p>
              </div>
            </div>
            <div className="py-4">
              <LinkButton href="/form" size="xxl" font="mono">
                Contact Me
              </LinkButton>
            </div>
          </div>
        </header>
      </SectionXContainer>
    </div>
  );
}
