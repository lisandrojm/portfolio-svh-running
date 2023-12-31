/* src/app/(routes)/page.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Background from '@/_components/_shared/Background';
import ScrollUp from '@/_components/_pages/_layout/ScrollUp';
import Works from '@/_components/_pages/_home/_sections/Works';
import Skills from '@/_components/_pages/_home/_sections/Skills';
import About from '@/_components/_pages/_home/_sections/About';
import Contact from '@/_components/_pages/_home/_sections/Contact';
import Header from '@/_components/_pages/_shared-pages/_header/Header';
import Footer from '@/_components/_pages/_shared-pages/_footer/Footer';

/* export default async function Home() { */
/* loading testing */
/*   await new Promise((resolve) => setTimeout(resolve, 1000)); */

export default function RootHome() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <SectionXContainer>
          <Works />
          <Skills />
          <About />
          <Contact />
        </SectionXContainer>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
