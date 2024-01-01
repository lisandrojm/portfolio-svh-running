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
    <div className={`fixed pb-1  flex justify-center items-center bottom-10 right-0 cursor-pointer transition-all ease-out duration-500 z-1 border-solid ${showButton ? 'right-10 md:right-40' : 'translate-x-full'}`} onClick={scrollToTop}>
      <button className="animate-bounce p-1 bg-black_a text-xl font-bold text-white">↑</button>
    </div>
  );
};

export default ScrollUp;
