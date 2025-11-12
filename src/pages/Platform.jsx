import about from "../assets/images/img/market3.png";
export const Platform = () => {
    return (
        <>


            <div className="flex   items-center mt-12 flex-col w-full  ">


                <section className="w-full  mx-auto  px-20   md:px-20 lg:px-40 py-20  text-white">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center pt-5 lg:justify-start">
                            <img src={about} alt="Company Overview" loading="lazy" width="600" height="500" decoding="async" data-nimg="1"
                                className="rounded-xl shadow-lg object-contain" />
                        </div>
                        <div className="space-y-6 text-black">
                            <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold mb-4">Company Overview</h2>
                            <p className="text-base md:text-lg leading-relaxed text-justify">At <strong>Crown Capital</strong>, we are redefining online CFD trading by combining technology, transparency, and trust. Our platform provides traders with seamless access to global financial markets, covering Foreign Exchange Pairs, metals, shares, indices, and commodities.</p>
                            <p className=" leading-relaxed text-base md:text-lg text-justify">With competitive spreads, lightning-fast execution, and world-class support, Crown Capital empowers traders of all levels — from beginners to professionals — to seize opportunities and trade with confidence.</p>
                            <p className=" text-base md:text-lg font-medium">We don't just connect clients to markets — we help them compete with confidence.</p>
                        </div>

                    </div>
                </section>




                <section className=" bg-gray-900 w-full py-20">
                    <div className=" container  mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">


                        <div className=" bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
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


                        <div className="platform bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
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


            </div>



        </>
    )
}

