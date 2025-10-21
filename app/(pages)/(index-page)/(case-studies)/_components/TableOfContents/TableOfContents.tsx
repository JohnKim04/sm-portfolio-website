'use client';

import { useEffect, useState } from 'react';

export type TableOfContentsProps = {
  sections: SectionHeading[];
};

type SectionHeading = {
  sectionName: string;
  level: number;
};

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [currentSection, setCurrentSection] = useState('Overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    // Use setTimeout to ensure DOM is fully rendered
    const setupObserver = () => {
      const sections = document.querySelectorAll('section[id]');
      console.log('Found sections:', Array.from(sections).map(s => s.id));
      sections?.forEach((section) => observer.observe(section));
    };

    // Try immediately and also after a short delay
    setupObserver();
    const timeoutId = setTimeout(setupObserver, 100);

    // Cleanup observer on unmount
    return () => {
      clearTimeout(timeoutId);
      const sections = document.querySelectorAll('section[id]');
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 60; // 60px padding above content
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed mt-20 pl-10 z-50 -mx-[18%]`}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-col w-max gap-3 p-4 absolute ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 z-10`}
        onMouseEnter={() => setIsHovered(true)}
      >
        {sections.map((section, index) => (
          <div
            className={`h-[2px] w-4 bg-black transition-opacity ${currentSection === section.sectionName ? 'opacity-100' : 'opacity-25'}`}
            key={index}
          ></div>
        ))}
      </div>
      <div
        className={`flex flex-col absolute w-max bg-white rounded-lg shadow-toc p-4 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 z-0`}
      >
        {sections.map((section, index) => (
          <p
            onClick={() =>
              isHovered ? scrollToSection(section.sectionName) : null
            }
            key={index}
            style={{ paddingLeft: `${(section.level + 1) * 12}px` }}
            className={`hover:bg-[#f1f1f1] p-1 pr-3 ${currentSection === section.sectionName ? 'text-[#4185F4]' : ''}`}
          >
            {section.sectionName}
          </p>
        ))}
      </div>
    </div>
  );
}
