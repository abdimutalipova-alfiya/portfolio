"use client";
import { useState, useEffect, useCallback } from "react";
import { SectionId } from "@/types";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const sections: SectionId[] = ["home", "about", "internship", "projects"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [isScrolling]);

  useEffect(() => {
    const scrollListener = () => {
      setIsScrolling(true);
      handleScroll();
      const timer = setTimeout(() => setIsScrolling(false), 100);
      return () => clearTimeout(timer);
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  return activeSection;
}