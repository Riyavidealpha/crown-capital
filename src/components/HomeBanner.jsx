import homeBanner from "../assets/images/banner.png"
import about from "../assets/images/homeBanner.png";
import home1 from "../assets/images/img/home1.png";
import home2 from "../assets/images/img/home2.png";
import home3 from "../assets/images/img/home3.png";
import home4 from "../assets/images/img/home4.png";
import home5 from "../assets/images/img/home5.png";
import forex from "../assets/images/svgs/forex.svg";
import shares from "../assets/images/img/shares.jpg";
import indices from "../assets/images/svgs/indices.svg";
import metals from "../assets/images/svgs/metals.svg";
import wheat from "../assets/images/svgs/wheat.svg"
import { BsCheckCircle } from "react-icons/bs";
export const HomeBanner = () => {
    return (
        <>
            <div className="flex px-6  items-center justify-center bg-linear-to-r from-[#232652] to-[#B89043] flex-col w-full overflow-x-hidden">

                <section className="relative pt-5 mx-10 bg-cover bg-center">
                    <div className="container mx-auto px-6 lg:px-16 h-[70vh] sm:min-h-[90vh] flex items-center">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
                            <div className="flex-1 text-center lg:text-left aos-init aos-animate" data-aos="fade-right">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-snug" style={{ lineHeight: '1.15' }}>
                                    Crown Capital <br />
                                    <span className="text-yellow-400">Your Gateway to Global CFD Trading.</span>
                                </h1>


                                <p className="mt-6 text-gray-200 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                                    Your trusted partner in CFD trading.<br />
                                    <span>
                                        Empowering traders with access to global
                                        markets, advanced platforms, and real-time insights.</span></p>
                            </div>
                            <div className=" flex-1 sm:flex justify-center lg:justify-end aos-init aos-animate"
                                data-aos="fade-left">
                                <img alt="Hero" src={homeBanner}
                                    className="object-contain w-[80%] sm:w-[70%] lg:w-full h-auto" style={{ color: "transparent" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full py-20 bg-cover bg-center bg-no-repeat">
                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-14">
                            Why Choose <span className="text-yellow-400">Crown Capital</span>
                        </h2>

                        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-between">
                            {[
                                {
                                    img: home1,
                                    title: "Access to Global Markets",
                                    text: "All markets in one platform for your ease.",
                                },
                                {
                                    img: home2,
                                    title: "Advanced Trading Platforms",
                                    text: "Trade via web, mobile & desktop seamlessly.",
                                },
                                {
                                    img: home3,
                                    title: "Competitive Spreads",
                                    text: "Enjoy fast execution and tight spreads.",
                                },
                                {
                                    img: home4,
                                    title: "Secure & Regulated",
                                    text: "Trusted environment for your funds.",
                                },
                                {
                                    img: home5,
                                    title: "24/7 Dedicated",
                                    text: "Client Support",
                                },
                                {
                                    img: home3,
                                    title: "Ultra-Fast Execution",
                                    text: "Lightning-quick order execution for pro traders.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
            text-center hover:scale-105 transition-all duration-300 
            w-full max-w-xs h-full flex flex-col justify-between"
                                >
                                    <img src={item.img} alt="" className="w-20 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-[#232652] mb-2">{item.title}</h3>
                                    <p className="text-black">{item.text}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                <section className="py-20 bg-cover bg-center">
                    <h2 className="text-center text-3xl lg:text-5xl font-bold text-yellow-400 mb-4">
                        Your Access to Global Markets
                    </h2>

                    <p className="text-center text-gray-200 max-w-3xl mx-auto mb-14">
                        Institutional-grade pricing, transparent execution, and endless opportunities in every trade.
                    </p>

                    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
                        {[
                            { img: forex, title: "Foreign Exchange", text: "Access the world’s largest financial market with over 60+ currency pairs." },
                            { img: shares, title: "Shares", text: "Trade CFDs on leading global companies without owning the underlying stock." },
                            { img: indices, title: "Indices", text: "Capture global market trends through major international indices." },
                            { img: metals, title: "Metals", text: "Trade gold, silver, and platinum with high-liquidity conditions." },
                            { img: wheat, title: "Commodities", text: "Diversify with energies, agriculture, and raw materials." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/30 backdrop-blur p-6 rounded-xl text-center max-w-xs w-full">
                                <img src={item.img} className="w-14 mx-auto mb-4" />
                                <h3 className="text-yellow-400 text-2xl font-bold">{item.title}</h3>
                                <p className="text-black mt-2 mb-4">{item.text}</p>
                                <button className="bg-yellow-400 px-5 py-2 rounded-full text-black font-semibold">Learn More</button>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="py-20 bg-cover bg-center">
                    <h2 className="text-center text-3xl lg:text-5xl font-bold text-yellow-300 mb-3">
                        Trade the Most Well-Liked Assets
                    </h2>
                    <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
                        Experience superior trading conditions and swift market execution.
                    </p>

                    <div className="flex flex-wrap justify-center gap-10 px-4">
                        {[
                            "Various Order Types",
                            "Super-Tight Spreads",
                            "Hedging Allowed",
                            "Maximum Fund Security",
                            "Many Payment Methods",
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <BsCheckCircle className="h-5 w-5 text-yellow-400" />
                                <span className="text-xl text-white">{text}</span>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="py-20 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto px-6">
                    <div className="flex-1">
                        <h2 className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-5">
                            Your Trading Future Begins Here
                        </h2>

                        <p className="text-white leading-relaxed mb-6">
                            At <strong>Crown Capital</strong>, we combine cutting-edge platforms, institutional-grade pricing,
                            and transparent execution to give you an edge in global markets.
                        </p>

                        <button className="bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-full text-black font-semibold transition">
                            Start Trading
                        </button>
                    </div>

                    <div className="flex-1">
                        <img src={about} className="w-full rounded-xl shadow-lg" />
                    </div>
                </section>
            </div>


        </>
    )
}
