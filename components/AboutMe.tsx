'use client'
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from "react-typed";

const AboutMe = () => {
  return (
    <section id="about">
    <div className='flex justify-center flex-wrap '>
      <div className="flex justify-center flex-wrap-reverse">
        <div className="p-10 lg:flex-col gap-3 flex">
          <button  className="p-3 text-4xl border border-solid rounded-lg hover:scale-110 duration-150 "  style={{ border: '2px solid #36569C' }}>
            <a href='https://github.com/FRANK022530'>
            <FontAwesomeIcon icon={faGithub} /></a>
          </button>
          <button className="p-3 text-4xl border border-solid rounded-lg hover:scale-110 duration-150" style={{ border: '2px solid #36569C' }}>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="p-3 text-4xl border border-solid rounded-lg hover:scale-110 duration-150" style={{ border: '2px solid #36569C' }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>

        <div className="overflow-hidden">
          <Image className="hover:scale-110 duration-200" src="/solo.jpg" alt="Profile Picture" width={300} height={300} />
        </div>
      </div>

      <div className="p-10 flex flex-col justify-center">
        <h1 className="font-bold p-2 text-5xl">Franklin M. Delos Reyes Jr.</h1>



        <ReactTyped
        className="font-bold p-2 text-4xl"
        style={{ color: "#36569C" }}
      strings={[
        "Front-End Developer",
        "Back-End Developer",
        "FullStack Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
    
      loop
    >
   

    </ReactTyped>
   
        <p className="w-96 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi ex laboriosam quas odit nisi doloribus incidunt voluptatem, sapiente omnis cumque iste fuga perspiciatis? Libero sed ipsa nisi tempora quibusdam.
        </p>
      </div>
    </div>
    </section>
  );
}


export default AboutMe;
