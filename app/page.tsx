// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import Navigation from "@/components/Navigation";
// import About from "@/components/AboutMe";
// import Internship from "@/components/Internship";
// import type { SectionId } from "@/types";
// import Hero from "@/components/Hero";
// import Contact from "@/components/Contact";
// import Hobby from "@/components/Hobby";

// function Home() {
//   const [activeSection, setActiveSection] = useState<SectionId | undefined>(
//     undefined
//   );
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     // Handle initial hash navigation
//     const handleHashChange = () => {
//       const hash = window.location.hash.substring(1);
//       if (hash) {
//         const element = document.getElementById(hash);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//           setActiveSection(hash as SectionId);
//         }
//       }
//     };

//     // Run on initial load
//     handleHashChange();

//     const sections: SectionId[] = ["about", "internship"];
//     const observers: IntersectionObserver[] = [];

//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 setActiveSection(section);
//                 // Update URL without page reload
//                 window.history.pushState(null, "", `#${section}`);
//               }
//             });
//           },
//           { threshold: 0.5 }
//         );
//         observer.observe(element);
//         observers.push(observer);
//       }
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, [pathname, searchParams]);

//   return (
//     <div>
//       <Navigation activeSection={activeSection} />
//       <main>
//         <Hero />
//         <About />
//         <Hobby />
//         <Internship />
//         <Contact />
//       </main>
//     </div>
//   );
// }

// // Wrap Home in Suspense for useSearchParams compatibility with SSR
// export default function HomeWrapper() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Home />
//     </Suspense>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import About from "@/components/AboutMe";
import Internship from "@/components/Internship";
import type { SectionId } from "@/types";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Hobby from "@/components/Hobby";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | undefined>(
    undefined
  );
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(hash as SectionId);
        }
      }
    };

    // Run on initial load
    handleHashChange();

    const sections: SectionId[] = ["about", "internship"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section);
                // Update URL without page reload
                window.history.pushState(null, "", `#${section}`);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname]);

  return (
    <div>
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Hobby />
        <Internship />
        <Contact />
      </main>
    </div>
  );
}
