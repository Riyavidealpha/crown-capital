import homeBanner from "../assets/images/banner.png"

export const HomeBanner = () => {
    return (
        <>

            <div className="flex gap-10  justify-center items-center ">

                <div className="pt-10 px-8 lg:p-23 text-white max-w-3xl">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-snug mb-4">
                        Crown Capital <br />
                        <span className="text-yellow-300">Your Gateway to Global CFD Trading</span>
                    </h1>

                    <p className="text-lg leading-relaxed mb-6">
                        Your trusted partner in CFD trading.
                        <br />
                        Empowering traders with access to global
                        markets, advanced platforms, and real-time insights.
                    </p>

                    <button
                        className=" bg-yellow-400  text-white  font-semibold   px-6  py-3   rounded-full  shadow-md  hover:bg-yellow-300  transition-all  duration-300"
                    >
                        Learn More
                    </button>
                </div>
                <div
                    className="flex  mt-2 justify-center    z-10  "
                >
                    <img src={homeBanner} alt="banner " style={{ height: "70%", width: "70%" }} />
                </div>
            </div>








        </>
    )
}
