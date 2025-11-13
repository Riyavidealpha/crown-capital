
import React from "react";
import { ShootingStars } from "../components/ui/shootingStars";
import { StarsBackground } from "../components/ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
    return (
        <div
            className=" h-[350px]  rounded-md bg-neutral-900 flex flex-col items-center justify-center relative ">
            <h2
                className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
               Our Platforms   </h2>

            <div className="relative flex-col mb-5  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                <h3>One Platform. Endless Possibilities. </h3>



            </div>
            <p className="relative flex-col  z-10 text-xl md:text-2xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-white flex items-center gap-2 md:gap-8">
                Seamless trading across Web, Mobile, and CRM—designed to keep you connected, informed, and in control, wherever you are.
            </p>

            <ShootingStars />
            <StarsBackground />
        </div>
    );
}
