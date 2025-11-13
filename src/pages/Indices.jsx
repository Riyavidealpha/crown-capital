import { BackgroundBeamsWithCollisionDemo } from "../components/tradingBackground"
import contact from "../assets/images/img/indices.png"
import forex from "../assets/images/img/indi1.png";
import shares from "../assets/images/img/indi2.png";
import indices from "../assets/images/img/indi3.png";
import hedging from "../assets/images/img/indi4.png"
import wheat from "../assets/images/img/indi5.png";
import metal from "../assets/images/img/indi6.png";
import safe from "../assets/images/img/indi7.png";
import liqui from "../assets/images/img/indi8.png";
import global from "../assets/images/img/indi9.png";
import margin from "../assets/images/img/indi10.png";
import { CTA } from "../components/Risk";


export const Indices = () => {
    const head2 = "Indices Trading";
    const head3 = "Trade Global Indices with Crown Capital";
    const text = "Capture the performance of world-leading economies with powerful trading tools."
    return (

        <>

            <div className="flex   items-center  flex-col w-full">

                <BackgroundBeamsWithCollisionDemo head2={head2} head3={head3} text={text} />
            </div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Introduction to Indices Trading
                        </h2>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            Indices measure the performance of a group of stocks, providing broad exposure to entire markets or sectors. Trading indices allows you to speculate on overall market direction without focusing on individual companies.
                        </p>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            At <strong>Crown Capital</strong> , we offer access to leading global indices, fast execution, and competitive spreads to help you trade smarter.

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
                                title: "Major Global Indices",
                                text: "S&P 500, Dow Jones, FTSE, DAX, Nikkei, and more."

                            },
                            {
                                img: shares,
                                title: "Diversified Exposure",
                                text: "Gain access to broad market movements.",
                            },
                            {
                                img: indices,
                                title: "24/7 Market Access",
                                text: "Trade indices whenever global markets are active.",
                            },
                            {
                                img: hedging,
                                title: "Hedging Tool",
                                text: "Use indices to balance risks against your portfolio.",
                            },
                            {
                                img: wheat,
                                title: "Advanced Technology",
                                text: "Trade with precision using real-time analytics.",
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
                        Why Trade Indices with Crown Capital?

                    </h2>

                    <div className="flex flex-wrap max-w-7xl mx-auto justify-center gap-14">


                        {[
                            {
                                img: metal,
                                title: "Broad Access",
                                text: "Gain exposure to entire markets with a single trade.",
                            },
                            {
                                img: safe,
                                title: "Reduced Volatility",
                                text: "Reduce risk by trading diversified indices.",
                            },
                            {
                                img: liqui,
                                title: "24/7 Trading",
                                text: "Access global indices whenever markets are active.",
                            },
                            {
                                img: global,
                                title: "Low Transaction Costs",
                                text: "Trade leading indices with competitive spreads.",
                            },
                            {
                                img: margin,
                                title: "Leverage Power",
                                text: "Control large positions with smaller capital outlay.",
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