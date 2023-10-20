import { useState, useEffect } from 'react';

type UseResizeType = (breakpoint: number) => boolean;
type UseImageDimensionType = () => string;

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

export const useImageDimension: UseImageDimensionType = () => {
  const [imageDimension, setImageDimension] = useState('mobile');

  useEffect(() => {
    const chooseImageDimension = () => {
      window.innerWidth > 1024 
        ? setImageDimension('desktop')
        : window.innerWidth > 699
            ? setImageDimension('tablet')
            : setImageDimension('mobile');
    };

    window.addEventListener('resize', chooseImageDimension);
    chooseImageDimension();

    return () => {
      window.removeEventListener('resize', chooseImageDimension)
    };
  }, []);

  return imageDimension;
};
