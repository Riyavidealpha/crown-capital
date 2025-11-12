
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/crownLogo.png"
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [tradeOpen, setTradeOpen] = useState(false);
    const nav = useNavigate();

    const handleLogoClick = () => {
        nav('/')
    }


    return (
        <nav className="fixed top-0 left-0 w-full h-24 bg-linear-to-r from-[#242640] to-[#232652] flex items-center px-8 shadow-2xl z-50">
            <div className="w-full flex items-center justify-between relative">


                <div className="flex items-center pl-14">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-[100px] w-[100px] cursor-pointer"
                        onClick={handleLogoClick}
                    />
                </div>


                <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-white font-medium">
                    <Link to="/about" className="hover:text-[#B89043]">About</Link>

                    <li className="relative group">
                        <button className="hover:text-[#B89043] flex items-center gap-1">
                            Trading <span>▾</span>
                        </button>
                        <div
                            className="absolute left-0 top-full hidden group-hover:block bg-[#1f2035] shadow-lg rounded-lg py-3 w-44 mt-1"
                        >
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Foreign Exchange</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Metals</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Shares</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Indices</a>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-[#B89043]/20">Commodities</a>
                        </div>
                    </li>

                    <Link to="/platform" className="hover:text-[#B89043]">Platform</Link>
                    <Link to="/contact" className="hover:text-[#B89043]">Contact</Link>
                </ul>


                <div className="flex items-center space-x-3 pr-9">
                    <button
                        type="button"
                        className="text-black bg-yellow-400 hover:bg-amber-500  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Signup
                    </button>


                    <button
                        className="md:hidden text-white text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <IoMdClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>


            {open && (
                <div className="absolute top-24 left-0 w-full bg-[#242640] py-4 shadow-xl md:hidden">
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
