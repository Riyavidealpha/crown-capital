import { BackgroundBeamsWithCollisionDemo } from "../components/tradingBackground"
import contact from "../assets/images/img/commodity.png"
import forex from "../assets/images/img/comm1.png";
import shares from "../assets/images/img/comm2.png";
import indices from "../assets/images/img/comm3.png";
import hedging from "../assets/images/img/comm4.png"
import wheat from "../assets/images/img/comm5.png";
import metal from "../assets/images/img/comm6.png";
import safe from "../assets/images/img/comm7.png";
import liqui from "../assets/images/img/comm8.png";
import global from "../assets/images/img/comm9.png";
import margin from "../assets/images/img/comm10.png";
import { CTA } from "../components/Risk";


export const Commodities = () => {
    const head2 = "Commodities Trading";
    const head3 = "Trade Global Commodities with Crown Capital";
    const text = "Diversify your portfolio with oil, energy, and agricultural markets."
    return (

        <>

            <div className="flex   items-center  flex-col w-full">

                <BackgroundBeamsWithCollisionDemo head2={head2} head3={head3} text={text} />
            </div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Introduction to Commodities Trading
                        </h2>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            Commodities like crude oil, natural gas, and agricultural products are the backbone of global trade. Trading commodities lets you capitalize on supply-demand imbalances, global events, and market cycles.
                        </p>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            At <strong>Crown Capital</strong> ,we deliver competitive pricing, reliable platforms, and real-time access to global commodity markets.

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
                                title: "Energy Commodities",
                                text: "Crude oil, natural gas, and more."

                            },
                            {
                                img: shares,
                                title: "Agricultural Products",
                                text: "Trade soft commodities like coffee, wheat, and sugar.",
                            },
                            {
                                img: indices,
                                title: "24/7  Access",
                                text: "Stay connected to global commodity price movements.",
                            },
                            {
                                img: hedging,
                                title: "Leverage Options",
                                text: "Enhance your exposure with flexible leverage.",
                            },
                            {
                                img: wheat,
                                title: "Tech-Driven Platforms",
                                text: "Analyze and trade efficiently.",
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
                        Why Trade Commodities with Crown Capital?

                    </h2>

                    <div className="flex flex-wrap max-w-7xl mx-auto justify-center gap-14">


                        {[
                            {
                                img: metal,
                                title: "Multiple Sectors",
                                text: " Access energy, agriculture, and soft commodities in one platform.",
                            },
                            {
                                img: safe,
                                title: "Inflation Hedge",
                                text: "Commodities often retain value during inflationary periods.",
                            },
                            {
                                img: liqui,
                                title: "Global Reach",
                                text: "Trade commodities influenced by real-world supply and demand.",
                            },
                            {
                                img: global,
                                title: "Smart Risk Tools",
                                text: "Control exposure with stop-loss and hedging strategies.",
                            },
                            {
                                img: margin,
                                title: "Leverage Flexibility",
                                text: "Choose from dynamic leverage options for better capital efficiency.",
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