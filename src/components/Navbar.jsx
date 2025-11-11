
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/crownLogo.png"
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [tradeOpen, setTradeOpen] = useState(false);
    return (
        <nav className="h-20  bg-linear-to-r from-[#242640] to-[#232652] flex items-center px-4 shadow-2xl z-20">
            <div className="max-w-7xl w-full flex items-center mx-auto relative">


                <div className="flex items-center">
                    <img src={logo} className="h-[85px] w-[85px]" alt="Logo" />
                </div>


                <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-white font-medium">
                    <li><a href="#" className="hover:text-[#B89043]">About</a></li>
                    <li className="relative group">
                        <button className="hover:text-[#B89043] flex items-center gap-1">
                            Trading
                            <span>▾</span>
                        </button>


                        <div className="absolute left-0 top-8 hidden group-hover:block bg-[#1f2035] shadow-lg rounded-lg py-3 w-44">
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20" >Foreign Exchange</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Metals</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Shares</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Indices</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Commodities</a>
                        </div>
                    </li>
                    <li><a href="#" className="hover:text-[#B89043]">Platform</a></li>
                    <li><a href="#" className="hover:text-[#B89043]">Contact</a></li>
                </ul>


                <button
                    className="md:hidden text-white text-3xl ml-auto"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>
            </div>


            {open && (
                <div className="absolute top-20 left-0 w-full bg-[#242640] py-4 shadow-xl md:hidden">
                    <ul className="flex flex-col items-center space-y-4 text-white font-medium">
                        <li><a href="#" className="hover:text-[#B89043]">About</a></li>
                        <li className="w-full text-center">
                            <button
                                className="hover:text-[#B89043] flex items-center justify-center gap-1 w-full"
                                onClick={() => setTradeOpen(!tradeOpen)}
                            >
                                Trading <span>{tradeOpen ? "▴" : "▾"}</span>
                            </button>

                            {tradeOpen && (
                                <ul className="mt-2 space-y-2">
                                    <li><a href="#" className="block text-white hover:text-[#B89043]">Forex</a></li>
                                    <li><a href="#" className="block text-white hover:text-[#B89043]">Commodities</a></li>
                                    <li><a href="#" className="block text-white hover:text-[#B89043]">Indices</a></li>
                                    <li><a href="#" className="block text-white hover:text-[#B89043]">Cryptos</a></li>
                                </ul>
                            )}
                        </li>

                        <li><a href="#" className="hover:text-[#B89043]">Platform</a></li>
                        <li><a href="#" className="hover:text-[#B89043]">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>


    );


};
