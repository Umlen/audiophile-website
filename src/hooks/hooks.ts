import { useState, useEffect } from 'react';

type UseResizeType = (breakpoint: number) => boolean;

export const useResize: UseResizeType = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const windowResizeHandler = () => {
      window.innerWidth < breakpoint 
        ? setIsMobile(true) 
        : setIsMobile(false);
    };

    window.addEventListener('resize', windowResizeHandler);

    windowResizeHandler();

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, [breakpoint]);

  return isMobile;
};
