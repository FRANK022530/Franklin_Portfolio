'use client'
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Card } from 'primereact/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
        

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);



    const items = [
        { label: 'Front-End', className: 'm-10' },
        { label: 'Back-End', className: 'm-10' },
        { label: 'Other Technology', className: 'm-10' },
    ];
    
    return (
        <section id="skills">
            <div className="mt-48 h-screen bg-[#F7F5F5]">
            <section className="w-8/12 mt-5 mx-auto ">
                <h1 className="font-bold p-10 text-5xl  mb-5">
                    <span className="text-[#36569C]">Skills&nbsp;/</span>&nbsp;Technologies
                </h1>

                <TabMenu
                    model={items}
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                    className='py-2  tab-menu'
                />

                <div className=" p-5">
                    {activeIndex === 0 &&
                     <div className=' flex flex-wrap ' > 
                       <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                        <h1 className='text-4xl p-3 text-center'> <FontAwesomeIcon icon={faHtml5} /> HTML 5</h1> 
                 
                        </Card>

                        <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                        <h1 className='text-4xl p-3 text-center'> <FontAwesomeIcon icon={faCss3} /> CSS 3</h1> 
                    
                        </Card>
                        <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                        <h1 className='text-3xl p-3 text-center'> <FontAwesomeIcon icon={faJs} /> JAVASCRIPT</h1> 
                   
                        </Card>
                        <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                        <h1 className='text-4xl p-3 text-center'> <FontAwesomeIcon icon={faReact} /> REACT</h1> 
                        </Card>
                        <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                        <h1 className='text-4xl p-3 text-center'>  TAILWIND</h1> 
                      
                        </Card>
                        <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                        <h1 className='text-4xl p-3 text-center'>  NEXT JS</h1> 
                      
                        </Card>
                    </div>}
                    {activeIndex === 1 && 
                                         <div className=' flex flex-wrap ' > 
                                         <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                                          <h1 className='text-4xl p-3 text-center'>  DJANGO</h1> 
                                   
                                          </Card>
                  
                                          <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                                          <h1 className='text-4xl p-3 text-center'> </h1> 
                                      
                                          </Card>
                                          <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                                          <h1 className='text-3xl p-3 text-center'> <FontAwesomeIcon icon={faJs} /> JAVASCRIPT</h1> 
                                     
                                          </Card>
                                          <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                                          <h1 className='text-4xl p-3 text-center'> <FontAwesomeIcon icon={faReact} /> REACT</h1> 
                                        
                                          </Card>
                                          <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                                          <h1 className='text-4xl p-3 text-center'>  TAILWIND</h1> 
                                        
                                          </Card>
                                          <Card  className='bg-white min-w-72 max-w-72 min-h-40 max-h-40 p-2 rounded-lg border-2 m-5 flex justify-center items-center' >
                                          <h1 className='text-4xl p-3 text-center'>  NEXT JS</h1> 
                                        
                                          </Card>
                    </div>}
                    {activeIndex === 2 && <div>Other Technology Content</div>}
                </div>

    
                <style>
                    {`
                        .tab-menu .p-tabmenu-nav .p-tabmenuitem.p-highlight 
                        {
                            border-bottom: 2px solid #36569C;
                          
                        }
                        .tab-menu .p-tabmenu-nav .p-tabmenuitem
                        {
                            padding-bottom:10px; 
                        }
              
              
                    `}
                </style>
            </section>
        </div>
        </section>
    );
}

export default Skills;

