import about from "../assets/images/platform.png";
import security from "../assets/images/svgs/security.svg";
import platform from "../assets/images/svgs/platforms.svg";
import competition from "../assets/images/svgs/competition.svg";
import globe from "../assets/images/svgs/globe.svg";
import background from "../assets/images/img/trading.png"
import { ShootingStarsAndStarsBackgroundDemo } from "../components/ShootingStars";
import { CTA } from "../components/Risk";

export const Platform = () => {
    return (
        <>


            <div className="flex   items-center  flex-col w-full  " >

                <section className="w-full    py-10  " >
                    <ShootingStarsAndStarsBackgroundDemo />
                </section>

                <section className="w-full  mx-auto  px-18  mb-8  md:px-20 lg:px-20 py-12  ">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center pt-5 lg:justify-center">
                            <img src={about} alt="Company Overview" loading="lazy" width="600" height="500" decoding="async" data-nimg="1"
                                className="rounded-xl shadow-lg object-contain" />
                        </div>
                        <div className="space-y-6 text-black">
                            <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold mb-4">Introduction to Platform</h2>
                            <p className="text-base md:text-lg leading-relaxed text-justify">At <strong>Crown Capital</strong>, we believe trading should be seamless, intuitive, and accessible—no matter where you are. That’s why we provide powerful, secure, and user-friendly platforms designed for every type of trader. Whether you prefer trading from your desktop, on the go with your mobile, or managing your clients and accounts through an integrated CRM, we have you covered.</p>
                        </div>

                    </div>
                </section>


                <section className=" bg-gray-900  w-full py-20">
                    <h2 className="text-center text-3xl lg:text-5xl pb-10 font-bold text-yellow-400 mb-2">Crown Capital Platforms</h2>
                    <div className="flex justify-center">
                        <p className="text-white text-center text-md font-medium mb-12 max-w-5xl px-4">
                            Crown Capital offers powerful, intuitive trading platforms designed for every trader’s lifestyle. Access markets seamlessly through the <strong className="font-bold text-yellow-400">Web Trading Platform</strong> — a browser-based solution for fast, secure, and insightful trading — or stay connected anywhere with <strong className="font-bold text-yellow-400">Mobile Trading </strong> on Android and iOS, featuring real-time alerts, synchronized data, and effortless navigation.
                        </p>
                    </div>

                    <div className=" container  mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">


                        <div className=" bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">Web Trading Platform</h3>
                            <p className="text-yellow-600 text-sm font-medium mb-2">Trade smarter, directly from your browser.</p>
                            <p className="text-gray-700 mb-6">
                                Perfect for traders who value speed, flexibility, and the convenience of a browser-based solution.
                            </p>

                            <ul className="features-list space-y-5 mb-6">
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">No Downloads Required</h4>
                                    <p className="text-gray-600">Access your trading account anytime, anywhere, with just an internet connection.</p>
                                </li>
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">Real-Time Market Data</h4>
                                    <p className="text-gray-600">Stay ahead with live prices, instant execution, and deep market insights.</p>
                                </li>
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">Advanced Charting Tools</h4>
                                    <p className="text-gray-600">Leverage technical indicators, drawing tools, and multi-chart views for in-depth analysis.</p>
                                </li>
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">Secure & Reliable</h4>
                                    <p className="text-gray-600">State-of-the-art encryption ensures your trades and funds remain protected.</p>
                                </li>
                            </ul>

                            <p className="text-yellow-600 text-sm mb-5">Trade smarter, directly from your browser.</p>
                            <a href="#" className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-yellow-600 transition-colors duration-300">
                                Start Trading on Web →
                            </a>
                        </div>


                        <div className="platform bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">Mobile Trading</h3>
                            <p className="text-yellow-600 text-sm font-medium mb-2">Trade on the move, never miss an opportunity.</p>
                            <p className="text-gray-700 mb-6">
                                Stay connected to the markets with full trading power in your pocket.
                            </p>

                            <ul className="features-list space-y-5 mb-6">
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">Cross-Device Accessibility</h4>
                                    <p className="text-gray-600">Available on both Android and iOS for smooth trading anywhere, anytime.</p>
                                </li>
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">User-Friendly Interface</h4>
                                    <p className="text-gray-600">Designed for quick navigation and one-tap trading.</p>
                                </li>
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">Instant Notifications</h4>
                                    <p className="text-gray-600">Receive price alerts, order updates, and market news directly on your phone.</p>
                                </li>
                                <li>
                                    <h4 className="text-lg font-semibold text-gray-900">Seamless Synchronization</h4>
                                    <p className="text-gray-600">Your watchlists, preferences, and trade history are synced across devices.</p>
                                </li>
                            </ul>

                            <p className="text-yellow-600 text-sm mb-5">Stay connected to the markets with full trading power in your pocket.</p>
                            <a href="#" className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-yellow-600 transition-colors duration-300">
                                Download App →
                            </a>
                        </div>

                    </div>
                </section>

                <section className="py-20">
                    <h2 className="text-center text-3xl lg:text-5xl pb-10 font-bold text-yellow-400 mb-4">
                        Why Crown Capital Platforms?
                    </h2>



                    <div className=" mx-auto  justify-center gap-12 grid lg:grid-cols-4">
                        {[
                            { img: security, title: "Foreign Exchange", text: "All-in-one access: Web, Mobile, and CRM." },
                            { img: platform, title: "Shares", text: "Seamless synchronization across devices" },
                            { img: competition, title: "Indices", text: "Enterprise-grade security & compliance." },
                            { img: globe, title: "Metals", text: "Designed for traders, brokers & partners alike" },

                        ].map((item, i) => (
                            <div key={i} className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
            text-center hover:scale-105 transition-all border border-gray-100 border-t-4 border-t-[#202577] border-solid duration-300 
            w-full max-w-xs h-full flex flex-col justify-between">
                                <img src={item.img} className="w-14 mx-auto mb-4" />

                                <p className="text-black mt-2 mb-4">{item.text}</p>

                            </div>
                        ))}
                    </div>
                </section>
            </div>
<CTA/>


        </>
    )
}

