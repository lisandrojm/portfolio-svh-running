/* src/app/_components/_pages/_layout/ScrollDown.tsx */

'use client';

import React, { useEffect, useState } from 'react';

const ScrollDown: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
        // window.removeEventListener('scroll', handleScroll); // Elimina el listener después de ocultar la flecha
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // window.removeEventListener('scroll', handleScroll); // Limpia el listener cuando el componente se desmonta
    };
  }, []);

  const scrollToSection = () => {
    const sectionId = 'works';
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed h-12 w-8 pb-1 flex justify-center items-center bottom-10 right-0 cursor-pointer transition-all ease-out duration-500 z-1 border-solid ${showButton ? 'right-10 md:right-40' : 'translate-x-full'}`} onClick={scrollToSection}>
      <button className="text-xl font-bold pb-2 animate-bounce">↓</button>
    </div>
  );
};

export default ScrollDown;
