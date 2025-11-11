import homeBanner from "../assets/images/banner.png"
import about from "../assets/images/homeBanner.png"
export const HomeBanner = () => {
    return (
        <>
            <div className="flex flex-col px-10 pt-10">

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 ">

                    <div className="text-white p-3 max-w-xl">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-snug mb-4">
                            Crown Capital <br />
                            <span className="text-yellow-300">Your Gateway to Global CFD Trading</span>
                        </h1>

                        <p className="text-lg leading-relaxed mb-6">
                            Your trusted partner in CFD trading. <br />
                            Empowering traders with access to global
                            markets, advanced platforms, and real-time insights.
                        </p>

                        <button
                            className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300"
                        >
                            Learn More
                        </button>
                    </div>


                    <div className="flex justify-center z-10">
                        <img
                            src={homeBanner}
                            alt="banner"
                            className="w-[80%] lg:w-[70%] h-auto"
                        />
                    </div>



                </div>

                <div className="w-full py-20">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col lg:flex-row items-center gap-14">

                            <div className="flex justify-center w-full lg:w-1/2">
                                <img
                                    src={about}
                                    alt="Trading Platform"
                                    className="w-[85%] lg:w-[75%] rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                                    About <span className="text-yellow-500">Crown Capital</span>
                                </h2>

                                <p className="text-xl font-semibold text-yellow-600 tracking-wide mb-6">
                                    A Trusted Name in Global CFD Trading
                                </p>

                                <p className="text-black text-lg leading-relaxed mb-5">
                                    At <strong>Crown Capital</strong>, we empower traders to access global financial
                                    markets with confidence. From forex to commodities, indices, metals, and shares —
                                    we bring everything together under one secure trading ecosystem.
                                </p>

                                <p className="text-black text-lg leading-relaxed mb-8">
                                    Our mission is to blend cutting-edge technology with unmatched client support,
                                    ensuring your trading experience is smooth, intelligent, and profitable.
                                </p>

                                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    className="w-full py-20 bg-cover bg-center bg-no-repeat"

                >
                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-14">
                            Why Choose <span className="text-yellow-400">Crown Capital</span>
                        </h2>


                        <div className="  max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
    gap-10 place-items-center justify-between
   ">


                            {

                                [
                                    {
                                        img: "assets/img/home1.png",
                                        title: "Access to Global Markets",
                                        text: "All markets in one platform for your ease.",
                                    },
                                    {
                                        img: "assets/img/home2.png",
                                        title: "Advanced Trading Platforms",
                                        text: "Trade via web, mobile & desktop seamlessly.",
                                    },
                                    {
                                        img: "assets/img/home3.png",
                                        title: "Competitive Spreads",
                                        text: "Enjoy fast execution and tight spreads.",
                                    },
                                    {
                                        img: "assets/img/home4.png",
                                        title: "Secure & Regulated",
                                        text: "Trusted environment for your funds.",
                                    },
                                    {
                                        img: "assets/img/home5.png",
                                        title: "24/7 Dedicated",
                                        text: "Client Support",
                                    },
                                    {
                                        img: "assets/img/home5.png",
                                        title: "Ultra-Fast Execution",
                                        text: "Lightning-quick order execution for pro traders."
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
                                    text-center hover:scale-105 transition-all duration-300 
                                    w-full max-w-xs h-full flex flex-col justify-between"
                                    >
                                        <img src={about} alt="" className="w-20 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
                                        <p className="text-black">{item.text}</p>
                                    </div>
                                ))}

                        </div>

                    </div>
                </div>

                <div className="py-20 bg-cover bg-center" >

                    <h2 className="text-center text-3xl lg:text-5xl font-bold text-white mb-4">
                        Your Access to Global Markets
                    </h2>

                    <p className="text-center text-gray-200 max-w-3xl mx-auto mb-14">
                        Institutional-grade pricing, transparent execution, and endless opportunities in every trade.
                    </p>

                    <div className="flex flex-wrap justify-center gap-10 px-4">


                        <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center max-w-xs w-full">
                            <img src="assets/svgs/forex.svg" className="w-14 mx-auto mb-4" />
                            <h3 className="text-yellow-400 text-xl font-semibold">Foreign Exchange</h3>
                            <p className="text-black mt-2 mb-4">Access the world’s largest financial market with over 60+ currency pairs.</p>
                            <button className="bg-yellow-400 px-5 py-2 rounded-full text-black font-semibold">Learn More</button>
                        </div>


                        <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center max-w-xs w-full">
                            <img src="assets/img/shares.jpg" className="w-14 mx-auto mb-4" />
                            <h3 className="text-yellow-400 text-xl font-semibold">Shares</h3>
                            <p className="text-black mt-2 mb-4">Trade CFDs on leading global companies without owning the underlying stock.</p>
                            <button className="bg-yellow-400 px-5 py-2 rounded-full text-black font-semibold">Learn More</button>
                        </div>


                        <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center max-w-xs w-full">
                            <img src="assets/svgs/indices.svg" className="w-14 mx-auto mb-4" />
                            <h3 className="text-white text-xl font-semibold">Indices</h3>
                            <p className="text-black mt-2 mb-4">Capture global market trends through major international indices.</p>
                            <button className="bg-yellow-400 px-5 py-2 rounded-full text-black font-semibold">Learn More</button>
                        </div>


                        <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center max-w-xs w-full">
                            <img src="assets/svgs/metals.svg" className="w-14 mx-auto mb-4" />
                            <h3 className="text-yellow-400 text-xl font-semibold">Metals</h3>
                            <p className="text-black mt-2 mb-4">Trade gold, silver, and platinum with high-liquidity conditions.</p>
                            <button className="bg-yellow-400 px-5 py-2 rounded-full text-black font-semibold">Learn More</button>
                        </div>

                        <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center max-w-xs w-full">
                            <img src="assets/svgs/wheat.svg" className="w-14 mx-auto mb-4" />
                            <h3 className="text-yellow-400 text-xl font-semibold">Commodities</h3>
                            <p className="text-black mt-2 mb-4">Diversify with energies, agriculture, and raw materials.</p>
                            <button className="bg-yellow-400 px-5 py-2 rounded-full text-black font-semibold">Learn More</button>
                        </div>

                    </div>
                </div>




                <div
                    className="py-20 bg-cover bg-center"

                >
                    <h2 className="text-center text-3xl lg:text-5xl font-bold text-yellow-300 mb-3">
                        Trade the Most Well-Liked Assets
                    </h2>

                    <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
                        Experience superior trading conditions and swift market execution.
                    </p>
                    <div className="flex flex-wrap justify-center gap-10 px-4">
                      
                            <div className="flex items-center gap-3"><img src="assets/svgs/check-circle.svg" /><span>Various Order Types</span></div>
                            <div className="flex items-center gap-3"><img src="assets/svgs/check-circle.svg" /><span>Super-Tight Spreads</span></div>
                            <div className="flex items-center gap-3"><img src="assets/svgs/check-circle.svg" /><span>Hedging Allowed</span></div>
                            <div className="flex items-center gap-3"><img src="assets/svgs/check-circle.svg" /><span>Maximum Fund Security</span></div>
                            <div className="flex items-center gap-3"><img src="assets/svgs/check-circle.svg" /><span>Many Payment Methods</span></div>
                        </div>
                   
                </div>


                <div className="py-20 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto px-6">

                    <div className="flex-1">
                        <h2 className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-5">
                            Your Trading Future Begins Here
                        </h2>

                        <p className="text-white leading-relaxed mb-6">
                            At <strong>Crown Capital</strong>, we combine cutting-edge platforms, institutional-grade pricing,
                            and transparent execution to give you an edge in global markets.
                        </p>

                        <button
                            className="bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-full text-black font-semibold transition"
                        >
                            Start Trading
                        </button>
                    </div>

                    <div className="flex-1">
                        <img src={about} className="w-full rounded-xl shadow-lg" />
                    </div>
                </div>
                <div className="py-3 text-center">
                    <p className="text-gray-300 text-4xl">
                        Trading CFDs involves substantial risk. Invest only what you can afford to lose.
                    </p>
                </div>


            </div>








        </>
    )
}
