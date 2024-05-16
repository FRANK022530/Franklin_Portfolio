import React from 'react'

const Navigation = () => {
  return (
    <div className='p-10 mb-10 fixed  w-screen top-0 right-0 '>
        <ul className='flex justify-end'>
            <li className='mx-5'><a href="#about"><span>About Me</span></a></li>
            <li className='mx-5'><a href="#skills"><span>Skills</span></a></li>
            <li className='mx-5'><a href="#education"><span>Education</span></a></li>
            <li className='mx-5'>Awards</li>
            <li className='mx-5'>Projects</li>
        </ul>
    </div>
  )
}

export default Navigation