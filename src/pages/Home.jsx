
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

        </>
    );
};
