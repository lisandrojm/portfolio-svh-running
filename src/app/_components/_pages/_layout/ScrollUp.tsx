/* src/app/_components/_pages/_layout/ScrollUp.tsx */

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
    <div className={`fixed h-12 w-8 pb-1  flex justify-center items-center bottom-10 right-0 cursor-pointer transition-all ease-out duration-500 z-1 border-solid ${showButton ? 'right-10 md:right-40' : 'translate-x-full'}`} onClick={scrollToTop}>
      <button className="p-1 bg-black_a text-xl font-bold border-b border-orange pb-2 text-white">↑</button>
    </div>
  );
};

export default ScrollUp;
