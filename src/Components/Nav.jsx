import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="NavWrapper w-full h-[10%] px-12 flex items-center justify-center gap-8 absolute z-10">
            <div className="w-full h-[75%] bg-white rounded-md flex items-center justify-between px-10">
                <div>
                    <h1 className="portfolio text-[1.4vw] font-bold uppercase">Portfolio</h1>
                </div>
                <div className="items-center justify-center hidden md:flex gap-8">
                    <h1 className="text-[1vw] font-medium capitalize navElem">Home</h1>
                    <h1 className="text-[1vw] font-medium capitalize navElem">Resume</h1>
                    <h1 className="text-[1vw] font-medium capitalize navElem">Certificate</h1>
                </div>
                <IoMenu className="text-2xl md:hidden cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Side Menu */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 w-[70%] sm:w-[30%] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <h1 className="text-xl font-bold">Menu</h1>
                    <IoClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
                </div>
                <div className="flex flex-col p-4 gap-6">
                    <h1 className="text-lg font-medium capitalize">Home</h1>
                    <h1 className="text-lg font-medium capitalize">Resume</h1>
                    <h1 className="text-lg font-medium capitalize">Certificate</h1>
                </div>
            </div>
        </div>
    );
}

export default Nav;
