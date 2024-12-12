import { useCallback } from 'react';

const useScrollTo = () => {
  const scrollTo = useCallback((ref, offset = 80, manualUpdateActive = null) => {
    if (ref?.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });

      if (manualUpdateActive) {
        manualUpdateActive(ref.current.id);
      }
    } else {
      console.log("NO CURRENT REF");
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;
