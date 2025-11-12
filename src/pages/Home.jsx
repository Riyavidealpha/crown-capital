
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";


export const Home = () => {

    return (
        <>
            <Navbar />
            <div className="min-w-screen min-h-[calc(100vh-100px)] px-6 
                bg-linear-to-r from-[#232652] to-[#B89043]
                flex items-center justify-center overflow-y-auto ">

                <Outlet />

            </div>
            <Footer />
            <div class="fixed bottom-0 left-0 w-full bg-[#B89043] text-white py-2 overflow-hidden z-50">
                <div class="whitespace-nowrap animate-marquee">
                    <p class="inline-block text-sm font-medium tracking-wide px-4">
                        Trading CFDs involves substantial risk, invest only what you can afford to lose.
                    </p>
                </div>
            </div>
        </>
    );
};
