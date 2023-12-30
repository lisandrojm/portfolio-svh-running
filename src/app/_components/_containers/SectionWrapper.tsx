/* src/app/_components/_containers/SectionWrapper.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return (
    <section className="flex h-screen flex-col justify-between">
      <div className="mb-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
