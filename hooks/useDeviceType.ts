import { useState, useEffect } from 'react';

// Custom hook to detect if the user is on a mobile device or desktop
const useDeviceType = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    if (typeof window !== 'undefined') {
      //set initial state
      setIsMobile(window.innerWidth <= 767);
      //event listener
      window.addEventListener('resize', handleResize);
      //cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
};

export default useDeviceType;
