
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";


export const Home = () => {

    return (
        <>
            <Navbar />
           <div className="min-w-screen min-h-screen overflow-x-hidden
                sccrollbar-hide
                   overflow-y-auto  ">

                <Outlet />

            </div>
            <Footer />
            <div className="fixed bottom-0 left-0 w-full bg-[#B89043] text-white py-0.3 overflow-hidden z-50">
                <div className=" whitespace-nowrap animate-marquee">
                    <p className="inline-block text-sm font-medium tracking-wide px-2">
                        Trading CFDs involves substantial risk, invest only what you can afford to lose.
                    </p>
                </div>
            </div>
        </>
    );
};
