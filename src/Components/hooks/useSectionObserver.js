import { useState, useEffect } from 'react';

const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in the viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
};

export default useSectionObserver;
