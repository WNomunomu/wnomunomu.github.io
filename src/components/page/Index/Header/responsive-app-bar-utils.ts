import { useState, useEffect } from "react";

export const useHeaderScroll = () => {

  const [isHeaderDefault, setIsHeaderDefault] = useState(true);

  useEffect(() => {
    const headerScrollHandler = () => {
      const scroll = window.scrollY;
      const triggerPosition = window.innerHeight;
    
      if (scroll >= triggerPosition) {
        setIsHeaderDefault(false);
      }
      else {
        setIsHeaderDefault(true);
      }
    };

    window.addEventListener('scroll', headerScrollHandler);

    return () => {
      window.removeEventListener('scroll', headerScrollHandler);
    };
  }, [])

  return isHeaderDefault;
}