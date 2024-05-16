'use client'
import React from 'react'
import { Card } from 'primereact/card';
import Image from 'next/image';


const Education = () => {





  return (
    <section id="skills">
    <div className=" h-screen bg-white">
    <section className="w-8/12 mt-5 mx-auto ">
        <h1 className="font-bold p-10 text-5xl  mb-5">
            <span className="text-[#36569C]">Education</span>
        </h1>

        <div className="flex ">
          
        <Card  className='bg-white w-full min-h-40 max-h-72 p-2 rounded-lg border-2 m-5 ' >
          <div className="flex flex-col  items-center ">
        <Image className="hover:scale-110 duration-200 -mt-16 mb-5" src="/college.jpg" alt="Profile Picture" width={100} height={100} />
          <h1 className="text-2xl">Cavite State University Bacoor Campus</h1>
          </div>            
                    
         </Card>
         <Card   className='bg-white w-full min-h-40 max-h-72 p-2 rounded-lg border-2 m-5 ' >
         <div className="flex flex-col  items-center ">
         <Image className="hover:scale-110 duration-200 -mt-16 mb-5" src="/shs.jpg" alt="Profile Picture"  width={100} height={100}  />
         <h1 className="text-2xl">SHS in San Nicolas III, Bacoor City</h1>
         </div>            
                             
                       </Card>
        </div>
   



       
    </section>
</div>
</section>
  )
}

export default Education