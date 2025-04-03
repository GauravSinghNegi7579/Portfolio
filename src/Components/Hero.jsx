import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Nav from "./Nav"

function Hero() {

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        scrollContainer.innerHTML += scrollContainer.innerHTML;

        gsap.to(scrollContainer, {
            x: '-50%',
            duration: 50,
            ease: 'linear',
            repeat: -1,
        });
    }, []);

    return (
        <div className="w-full h-screen ">
            <div className="w-full h-screen fixed z-[-1]">
                <div className="w-full h-screen relative bg-[url('src/Images/grid.png')] bg-center bg-no-repeat bg-cover ">
                    <div className="w-full h-full  bg-[rgba(0,0,0,.1)] relative ">
        <Nav />

                        <div className="textContainer overflow-hidden flex items-center py-[5%]">
                            <div ref={scrollRef} className="flex whitespace-nowrap text-[25vw] font-smibold">
                                <span className="backText text mx-4 uppercase tighter "><i>Stunning Animations and Super Cool designs</i></span>
                            </div>
                        </div>

                        <img className="avtar h-full absolute absolute bottom-0 left-1/2 -translate-x-1/2 z-8" src="src/Images/hero.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;