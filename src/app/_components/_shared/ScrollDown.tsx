/* src/app/_components/_pages/_layout/ScrollDown.tsx */

'use client';

import React, { useEffect, useState } from 'react';

const ScrollDown: React.FC<{ targetId: string }> = ({ targetId }) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY === 0);
    };

    // Llama a handleScroll una vez después de que el componente se ha montado
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToId = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed h-12 w-8 pb-1 flex justify-center items-center bottom-10 right-0 cursor-pointer transition-all ease-out duration-500 z-1 border-solid ${showButton ? 'right-10 md:right-40 opacity-100' : 'translate-x-full opacity-0'}`} onClick={scrollToId}>
      <button className="animate-bounce p-1 bg-black_a text-xl font-bold text-white">↓</button>
    </div>
  );
};

export default ScrollDown;
