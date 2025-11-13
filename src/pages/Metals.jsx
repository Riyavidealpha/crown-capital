import { BackgroundBeamsWithCollisionDemo } from "../components/tradingBackground"
import contact from "../assets/images/metals.png"
import forex from "../assets/images/img/metals6.png";
import shares from "../assets/images/img/metals7.png";
import indices from "../assets/images/img/metals8.png";
import metals from "../assets/images/img/metals9.png";
import wheat from "../assets/images/img/metals10.png";
import metal from "../assets/images/img/metals1.png";
import safe from "../assets/images/img/metals2.png";
import liqui from "../assets/images/img/metals3.png";
import global from "../assets/images/img/metals4.png";
import margin from "../assets/images/img/metals5.png";
import { CTA } from "../components/Risk";


export const Metals = () => {
    const head2 = "Metals Trading";
    const head3 = "Trade Precious Metals with Crown Capital";
    const text = "Hedge against uncertainty and trade global demand for gold, silver, and more."
    return (

        <>

            <div className="flex   items-center  flex-col w-full">

                <BackgroundBeamsWithCollisionDemo head2={head2} head3={head3} text={text} />
            </div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Introduction to Metals Trading
                        </h2>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            Precious metals like gold and silver are traditional safe-haven assets, offering stability during economic uncertainty. With global demand fluctuating, metals present valuable trading opportunities for both long-term investors and short-term traders.
                        </p>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            At <strong>Crown Capital</strong> , we provide direct access to global metals markets with competitive spreads and advanced platforms.

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
                                title: "Gold & Silver",
                                text: "Trade the most popular safe-haven assets."

                            },
                            {
                                img: shares,
                                title: "Industrial Metals",
                                text: "Access markets like copper and platinum.",
                            },
                            {
                                img: indices,
                                title: "Hedging & Security",
                                text: "Use metals to protect your portfolio during volatility.",
                            },
                            {
                                img: metals,
                                title: "24/7 Trading",
                                text: "Seize opportunities as they arise in global markets.",
                            },
                            {
                                img: wheat,
                                title: "Advanced Analysis",
                                text: "Trade smarter with powerful charting tools.",
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
                                title: "Metal Diversify",
                                text: "Trade global blue-chip and tech stocks with ease.",
                            },
                            {
                                img: safe,
                                title: "  Direct Access to Leading Companies",
                                text: "Start small and own a portion of high-value stocks.",
                            },
                            {
                                img: liqui,
                                title: "Dividend Opportunities",
                                text: "Benefit from payouts on eligible shares.",
                            },
                            {
                                img: global,
                                title: "Real-Time Research Tools",
                                text: "Make informed decisions with live data and analytics.",
                            },
                            {
                                img: margin,
                                title: "User-Friendly Platforms ",
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
            <CTA/>

        </>
    )
}