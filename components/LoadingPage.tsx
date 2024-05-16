import React from 'react';
import { ReactTyped } from "react-typed";
const LoadingPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>

<ReactTyped
        className="font-bold p-2 text-[80px]"
        style={{ color: "#36569C" }}
      strings={[
        "Welcome",

      ]}
      typeSpeed={60}
      backSpeed={60}
    
loop
    >
   

    </ReactTyped>
    </div>
  );
};

export default LoadingPage;
