import { BackgroundBeamsWithCollisionDemo } from "../components/tradingBackground"
import contact from "../assets/images/forex.png"
import forex from "../assets/images/img/forex1.png";
import shares from "../assets/images/img/forex2.png";
import indices from "../assets/images/img/forex3.png";
import metals from "../assets/images/img/forex4.png";
import wheat from "../assets/images/img/forex5.png";
import broker from "../assets/images/img/forex6.png";
import fast from "../assets/images/img/forex7.png";
import spread from "../assets/images/img/forex8.png";
import global from "../assets/images/img/forex9.png";
import suite from "../assets/images/img/forex10.png";
import { CTA } from "../components/Risk";


export const ForeignExchange = () => {
    const head2 = "Foreign Exchange Pairs";
    const head3 = "Trade Foreign Exchange Pairs with Crown Capital";
    const text = "Leverage the power of Foreign Exchange Pairs trading with tight spreads, advanced platforms, and 24/7 market access."
    return (

        <>

            <div className="flex   items-center  flex-col w-full">

                <BackgroundBeamsWithCollisionDemo head2={head2} head3={head3} text={text} />
            </div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Introduction to Foreign Exchange Pairs Trading
                        </h2>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            Foreign Exchange Pairs is the world’s largest financial market, where
                            global currencies are exchanged 24/7. With high liquidity, competitive
                            spreads, and endless opportunities, Foreign Exchange Pair Trading lets
                            you take advantage of market movements anytime, anywhere.
                        </p>

                        <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                            At <strong>Crown Capital</strong>, we make Foreign Exchange Pairs simple, fast, and
                            secure — so you can focus on growing your trading edge.
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <img
                            src={contact}
                            alt="About Crown Capital Trading Platform"
                            className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500"
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
                                title: "Major Foreign Exchange Pair",
                                text: "Access the world’s largest financial market with over 60+ currency pairs.",
                            },
                            {
                                img: shares,
                                title: "Cross & Exotic Pairs",
                                text: "Trade CFDs on leading global companies without owning the underlying stock.",
                            },
                            {
                                img: indices,
                                title: "24/7 Market Access",
                                text: "Capture global market trends through major international indices.",
                            },
                            {
                                img: metals,
                                title: "Leverage & Flexibility",
                                text: "Trade gold, silver, and platinum with high-liquidity conditions.",
                            },
                            {
                                img: wheat,
                                title: "Cutting-edge Platforms",
                                text: "Diversify with energies, agriculture, and raw materials.",
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
                        Why Trade Foreign Exchange Pairs with Crown Capital?
                    </h2>

                    <div className="flex flex-wrap max-w-7xl mx-auto justify-center gap-14">
                        {[
                            {
                                img: broker,
                                title: "Regulated Broker",
                                text: "Access the world’s largest financial market with over 60+ currency pairs.",
                            },
                            {
                                img: fast,
                                title: "Fast Execution",
                                text: "Trade CFDs on leading global companies without owning the underlying stock.",
                            },
                            {
                                img: spread,
                                title: "Tight Spreads",
                                text: "Capture global market trends through major international indices.",
                            },
                            {
                                img: global,
                                title: "Global Market Access",
                                text: "Trade gold, silver, and platinum with high-liquidity conditions.",
                            },
                            {
                                img: suite,
                                title: "Trading Suite",
                                text: "Diversify with energies, agriculture, and raw materials.",
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