
import { HiOutlineMenuAlt2 } from "react-icons/hi";


import logo from "../assets/images/crownLogo.png"

export const Navbar = () => {

    return (
        <nav className="fixed top-0 z-50 w-full bg-linear-to-r from-[#232652] to-[#242640] ">
            <div className="h-[100px] flex items-center">
                <div className="w-64 h-full bg-sidebarBackground flex items-center justify-center">
                    <a href="#" className="flex">
                        <img src={logo} alt="logo" style={{ height: "100px" }} />
                    </a>
                </div>

            </div>
        </nav>
    );
};