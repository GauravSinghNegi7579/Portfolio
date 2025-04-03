import React from "react";

function About() {

    return (
        <div className="w-full h-[60%] bg-black flex justify-between px-12 rounded-t-3xl z-[9] about">
            <div className="w-[30%] h-full flex justify-center py-10 ">
                <h1 className="text-white font-semibold text-6xl about">About</h1>
            </div>
            <div className="infoHeading w-[50%] h-full py-12">
                <p className="info text-white text-[1.3vw]">I am a frontend web developer with a focus on crafting seamless, responsive, and visually engaging web applications using React and Tailwind CSS. Currently pursuing a BTech degree, I am passionate about leveraging modern web technologies to create user-centric, efficient, and scalable solutions.
                    My experience includes developing interactive and dynamic interfaces, emphasizing clean code practices, and delivering high-quality user experiences. I’m driven by a love for continuous learning, staying up-to-date with industry trends, and refining my skills to adapt to emerging technologies.
                    I’m eager to collaborate on innovative projects that challenge me to think creatively and push the boundaries of web development.</p>
            </div>
        </div>
    )
}

export default About;