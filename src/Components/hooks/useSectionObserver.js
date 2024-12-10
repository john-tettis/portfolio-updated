import { useState, useEffect, useCallback } from 'react';

const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.intersectionRatio)
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section
        }
      });
    },
    []
  );

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is in the viewport
    });

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return activeSection;
};

export default useSectionObserver;