/* src/app/_components/_pages/_shared/_/header/Header.tsx */

import Navbar from '@/_components/_pages/_shared-pages/_header/_navbar/Navbar';
import LinkButton from '@/_components/_shared/LinkButton';

export default function Header() {
  return (
    <div>
      <header className="h-svh">
        <Navbar />
        <div className="flex h-full flex-col items-end justify-center bg-green text-end">
          <div className="font-regular xs--title mb-4 pe-2 text-7xl font-bold uppercase italic text-orange">
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
    </div>
  );
}
