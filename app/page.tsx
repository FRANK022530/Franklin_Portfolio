'use client'
import React, { useState, useEffect } from 'react';
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import '@fortawesome/fontawesome-svg-core/styles.css';
import LoadingPage from '@/components/LoadingPage';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? ( // Conditionally render the Loading component while loading
        <LoadingPage />
      ) : (
        <div className="bg-white">
          <div className='mb-[230px]'><Navigation /></div>
          
          <AboutMe />
          <Skills />
          <Education />
        </div>
      )}
    </>
  );
}
