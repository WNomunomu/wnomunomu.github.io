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

export const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(!!mediaQueryList.matches)
    listener()
    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [mediaQueryString])

  return matches
}
