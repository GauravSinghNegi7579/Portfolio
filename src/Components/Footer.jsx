import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoMdArrowForward } from "react-icons/io";

function Footer() {

    return (
        <div className="footer w-full h-screen bg-white flex flex-col  py-12 px-12">
            <div className="nameCon  w-full h-[28%] rounded-lg border flex items-center justify-center mt-3">
                <h1 className="name text-[10vw]"><i>Gaurav Singh Negi</i></h1>
            </div>
            <div className=" procontent w-full h-[72%] flex">
                <div className="w-1/2 h-full flex flex-col gap-10 items-start justify-start px-5 py-12">
                    <div className="w-[49%] h-[20%] footportcon rounded-lg border flex items-center justify-center">
                        <h1 className=" footPort text-[3.5vw]">PORTFOLIO</h1>
                    </div>
                    <div className="text-3xl w-full flex items-center justify-start">
                       <h1 className="text-[2vw] w-full flex items-center justify-left propara"> Made by React&nbsp; <FaReact />&nbsp; and tailwind&nbsp; <SiTailwindcss />&nbsp;</h1>
                        </div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-8">
                    <div className="w-full h-1/2 flex gap-3 items-end justify-center">
                        <div className="procon w-[49%] h-[35%] rounded-xl border flex items-center justify-between px-5 transition-all  hover:px-10 hover:bg-black hover:text-white ">
                            <h1 className="text-[1.1vw] proButton">Instagram</h1>
                            <IoMdArrowForward />
                            </div>
                        <div className="procon w-[49%] h-[35%] rounded-xl border flex items-center justify-between px-5 transition-all  hover:px-10 hover:bg-black hover:text-white">
                            <h1 className="text-[1.1vw] proButton">Linked in</h1>
                            <IoMdArrowForward />
                            </div>
                    </div>
                    <div className="w-full h-1/2 flex gap-3 items-start justify-center">
                        <div className="procon w-[49%] h-[35%] rounded-xl border flex items-center justify-between px-5 transition-all  hover:px-10 hover:bg-black hover:text-white">
                            <h1 className="text-[1.1vw] proButton">Git Hub</h1>
                            <IoMdArrowForward />
                            </div>
                        <div className="procon w-[49%] h-[35%] rounded-xl border flex items-center justify-between px-5 transition-all  hover:px-10 hover:bg-black hover:text-white">
                            <h1 className="text-[1.1vw] proButton">Twitter</h1>
                            <IoMdArrowForward />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;