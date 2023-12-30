/* src/app/(routes)/page.tsx */

import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Background from '@/_components/_pages/_layout/Background';
import ScrollUp from '@/_components/_pages/_layout/ScrollUp';
import Works from '@/_components/_pages/_home/_sections/Works';
import Skills from '@/_components/_pages/_home/_sections/Skills';
import About from '@/_components/_pages/_home/_sections/About';
import Contact from '@/_components/_pages/_home/_sections/Contact';
import Form from '@/_components/_pages/_home/_sections/Form';
import Header from '@/_components/_pages/_shared/_header/Header';
import Footer from '@/_components/_pages/_shared/_footer/Footer';

/* export default async function Home() { */
/* loading testing */
/*   await new Promise((resolve) => setTimeout(resolve, 1000)); */

export default function Home() {
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
          <Form />
        </SectionXContainer>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
