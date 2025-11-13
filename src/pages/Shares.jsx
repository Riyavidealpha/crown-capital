import { BackgroundBeamsWithCollisionDemo } from "../components/tradingBackground"
import contact from "../assets/images/shares.png"
import forex from "../assets/images/img/share1.png";
import shares from "../assets/images/img/share2.png";
import indices from "../assets/images/img/share3.png";
import metals from "../assets/images/img/share4.png";
import wheat from "../assets/images/img/share5.png";
import metal from "../assets/images/img/share6.png";
import safe from "../assets/images/img/share7.png";
import liqui from "../assets/images/img/share8.png";
import global from "../assets/images/img/share9.png";
import margin from "../assets/images/img/metals10.png";
import { CTA } from "../components/Risk";

export const Shares = () => {
    const head2 = "Shares";
    const head3 = "Trade Global Shares with Crown Capital";
    const text = "Gain access to leading global companies and diversify your investment portfolio with confidence."
    return (

        <>

            <div className="flex   items-center  flex-col w-full">

                <BackgroundBeamsWithCollisionDemo head2={head2} head3={head3} text={text} />
            </div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Introduction to Shares Trading
                        </h2>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            Shares represent ownership in some of the world’s biggest corporations. By trading shares, you can benefit from price movements, dividends, and global market opportunities.
                        </p>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            At <strong>Crown Capital</strong> ,we make share trading simple, transparent, and accessible — giving you the tools and platforms to stay ahead in dynamic markets.

                        </p>
                    </div>


                    <div className="flex justify-center">
                        <img
                            src={contact}
                            alt="About Crown Capital Trading Platform"
                            className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto  px-6 lg:px-14 text-center">
                    <h2 className="text-3xl lg:text-5xl mb-10 font-bold text-yellow-400 ">
                        Trading Opportunities with Crown Capital
                    </h2>

                    <div className="flex flex-wrap max-w-7xl mx-auto justify-center gap-14">
                        {[
                            {
                                img: forex,
                                title: "Global Companies",
                                text: "Trade shares of leading US, European, and Asian companies."

                            },
                            {
                                img: shares,
                                title: "Portfolio Diversification",
                                text: "Balance risk with exposure across multiple sectors.",
                            },
                            {
                                img: indices,
                                title: "24/7 Market Access ",
                                text: "Connect with global equity markets when opportunities arise.",
                            },
                            {
                                img: metals,
                                title: " Smart Leverage",
                                text: "Optimize returns with flexible leverage options.",
                            },
                            {
                                img: wheat,
                                title: " Advanced Platforms",
                                text: "Real-time charts, indicators, and seamless execution.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:scale-105 transition-all duration-300 text-center max-w-xs w-full"
                            >
                                <img src={item.img} className="w-14 mx-auto mb-4" />
                                <h3 className="text-yellow-400 text-2xl font-bold">{item.title}</h3>
                                <p className="text-gray-200 mt-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 ">

                <div className="max-w-7xl mx-auto  px-6 lg:px-14 text-center">
                    <h2 className="text-3xl lg:text-5xl mb-10 font-bold text-yellow-400 ">
                        Why Trade Shares with Crown Capital?

                    </h2>

                    <div className="flex flex-wrap max-w-7xl mx-auto justify-center gap-14">
                        {[
                            {
                                img: metal,
                                title: "Market Giants",
                                text: "Trade global blue-chip and tech stocks with ease.",
                            },
                            {
                                img: safe,
                                title: "Fractional Shares",
                                text: "Start small and own a portion of high-value stocks.",
                            },
                            {
                                img: liqui,
                                title: "Dividends",
                                text: "Benefit from payouts on eligible shares.",
                            },
                            {
                                img: global,
                                title: "Real-Time Research Tools",
                                text: "Make informed decisions with live data and analytics.",
                            },
                            {
                                img: margin,
                                title: "User-Friendly Platforms",
                                text: "Trade seamlessly across web, desktop, and mobile devices.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
                    text-center hover:scale-105 transition-all border border-gray-100 border-t-4 border-t-[#202577] border-solid duration-300 
                    w-full max-w-xs h-full flex flex-col justify-between"
                            >
                                <img src={item.img} className="w-14 mx-auto mb-4" />
                                <h3 className="text-[#202577] text-2xl font-bold">{item.title}</h3>
                                <p className="text-gray-800 mt-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </>


    )
}