// src/app/_components/_shared/LinkButton.tsx
import React from 'react';

interface StickyFooterProps {
  customTextLeft?: string; // Haz que customTextLeft sea opcional con "?"
  customTextRight?: string; // Haz que customTextRight sea opcional con "?"
}

const StickyFooter: React.FC<StickyFooterProps> = ({ customTextLeft, customTextRight }) => {
  return (
    <div className="sticky bottom-0 w-full text-start pb-5">
      <div className="flex flex-col justify-between place-items-stretch">
        <div>{customTextLeft && <p className="border-b border-white font-serif italic text-2xl md:text-3xl">{customTextLeft}</p>}</div>
        <div className="text-end">
          {/* Verifica si customTextRight está definido antes de renderizar */}
          {customTextRight && <p className="font-serif italic text-sm text-orange pt-1">{customTextRight}</p>}
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
