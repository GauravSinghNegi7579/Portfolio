import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function CursorFollowBox() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [opacity , setOpacity] = useState(false);
    const [text, setText] = useState("default");
    const boxRef = useRef(null);

    const handleMouseMove = (e) => {
        const x = e.clientX - 700;
        const y = e.clientY -250;
        setMousePosition({ x, y });
    };
    
    const handleMouseEnter = ()=>{
        setOpacity(true);
    }

    const handleMouseLeave = () => {
        setOpacity(false);
    };
    
    const TextEnter = ()=>{
          setText("Text")
    }

    const TextLeave = ()=>{
           setText("default")
    }
    
    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
        },
        text: {
            backgroundColor: "black"
        }
        
    };

    return (
        <div className="project-container w-full h-screen flex items-center justify-center bg-white px-12">
            <div
                className="w-full h-full  rounded-3xl relative overflow-hidden bg-black flex items-center justify-center"
                onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                ref={boxRef}
            >
                <h1 onMouseEnter={TextEnter} onMouseLeave={TextLeave} 
                className="project text-[12vw] text-white">Project</h1>
                <motion.div
                    className="w-[120px] h-[120px] rounded-full bg-white absolute flex items-center justify-center"
                    variants={variants}
                    initial={{ x: 0, y: 0 }}
                    animate="default"> <h1 className="text-3xl click">Click</h1>
                </motion.div>
                
            </div>
        </div>
    );
}

export default CursorFollowBox;
