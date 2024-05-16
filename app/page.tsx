import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';





export default function Home() {
  return (
<>
    <Navigation/>
    <AboutMe/>
    <Skills />
    <Education/>

    </>

  );
}
