/* src/app/_components/_containers/SectionXContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionXContainer({ children }: Props) {
  return <div className="container mx-auto px-4 xl:px-20 2xl:px-40">{children}</div>;
}
