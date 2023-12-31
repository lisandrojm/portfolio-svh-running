// src/app/_components/_shared/LinkButton.tsx
import React from 'react';

interface StickyFooterProps {
  customText: string;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ customText }) => {
  return (
    <div className="sticky bottom-0 w-full text-start pb-10">
      <div>
        <p className="border-b border-white font-serif italic text-2xl md:text-3xl">{customText}</p>
      </div>
    </div>
  );
};

export default StickyFooter;
