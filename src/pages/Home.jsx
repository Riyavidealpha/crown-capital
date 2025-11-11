
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";


export const Home = () => {

    return (
        <>
            <Navbar />
            <div className=" min-w-screen min-h-[calc(100vh-100px)] overflow-hidden pt-10   bg-linear-to-r from-[#232652]   to-[#B89043]">

                <Outlet />

            </div>

        </>
    );
};
