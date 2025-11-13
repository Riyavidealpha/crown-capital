import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { useNavigate } from "react-router-dom";

export function BackgroundBeamsWithCollisionDemo({ head2, head3, text }) {
    const nav = useNavigate();

    const handleStarted = () => {
        nav("/contact");
    }

    return (
        <BackgroundBeamsWithCollision>
            <div className="flex flex-col items-center justify-center relative">
                <h2
                    className="relative flex-col mb-4 mt-10  z-10 text-4xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-linear-to-b from-[#B89043] to-[#FFD67A] flex items-center gap-2 md:gap-8">
                    {head2}   </h2>

                <div className="relative flex-col mb-5  z-10 text-2xl md:text-3xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-linear-to-b from-[#B89043] to-[#FFD67A] flex items-center gap-2 md:gap-8">
                    <h3>{head3} </h3>
                </div>
                <p className="relative flex-col mb-6 z-10 text-xl md:text-2xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-[#FFD67A] flex items-center gap-2 md:gap-8">
                    {text}
                </p>
                <button className="bg-yellow-400 text-black px-8 py-3  cursor-pointer rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300"
                    onClick={handleStarted}
                >
                    Get Started
                </button>
            </div>

        </BackgroundBeamsWithCollision>
    );
}
