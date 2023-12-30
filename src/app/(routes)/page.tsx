/* src/app/(routes)/page.tsx */

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/_styles/page.module.css';
import SectionXContainer from '@/_components/_containers/SectionXContainer';

/* export default async function Home() { */
/* loading testing */
/*   await new Promise((resolve) => setTimeout(resolve, 1000)); */

export default function Home() {
  return (
    <SectionXContainer>
      <div className="px-3 flex justify-center items-center h-full bg-blue">
        <h1>Header</h1>
      </div>
    </SectionXContainer>
  );
}
