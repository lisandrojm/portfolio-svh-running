/* src/app/(routes)/page.tsx */

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/_styles/page.module.css';
import SectionXContainer from '@/_components/_containers/SectionXContainer';
import Works from '@/_components/_pages/_home/_sections/Works';
import Skills from '@/_components/_pages/_home/_sections/Skills';

/* export default async function Home() { */
/* loading testing */
/*   await new Promise((resolve) => setTimeout(resolve, 1000)); */

export default function Home() {
  return (
    <SectionXContainer>
      <div className="mt-30 bg-blue h-screen flex items-cente justify-center">
        <h1>header</h1>
      </div>
      <Works />
      <Skills />
    </SectionXContainer>
  );
}
