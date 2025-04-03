// import React from "react";

// function Project(){

//     return(
//         <div></div>
//     )
// }

// export default Project;
import React, { useRef } from 'react';
import { gsap } from 'gsap';

export default function HoverEffectComponent() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(boxRef.current, {
      backgroundColor: '#000',
      padding: '20px',
      duration: 0.5,
    });
    gsap.to(textRef.current, {
      color: '#fff',
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(boxRef.current, {
      backgroundColor: '#fff',
      padding: '10px',
      duration: 0.5,
    });
    gsap.to(textRef.current, {
      color: '#000',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={boxRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="rounded-lg shadow-md border-2 border-gray-300 text-center cursor-pointer"
    >
      <h1 ref={textRef} className="text-xl font-bold py-2">Hover Over Me</h1>
    </div>
  );
}
