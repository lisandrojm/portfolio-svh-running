/* src/app/_components/_shared/ScrollUp.tsx */

'use client';

import React, { useEffect, useState } from 'react';

const ScrollUp: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <span className={`z-1 fixed  bottom-10 right-0 flex cursor-pointer items-center justify-center border-solid pb-1 transition-all duration-500 ease-out ${showButton ? 'right-10 md:right-40' : 'translate-x-full'}`} onClick={scrollToTop}>
      <button className="animate-bounce bg-black_a p-1 text-2xl font-bold text-white">↑</button>
    </span>
  );
};

export default ScrollUp;
