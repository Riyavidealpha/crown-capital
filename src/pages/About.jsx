import company_overview from "../assets/images/img/company_overview.png";
export const About = () => {
    return (
        <>


            <div className="flex   items-center mt-7 flex-col w-full  ">

                <div className="gap-6  items-center justify-center   m-14 p-34   lg:grid lg:grid-cols-2 ">
                    <div className="font-light     text-gray-500 sm:text-lg m-8">
                        <h2 className="text-4xl lg:text-5xl  font-extrabold text-gray-900 mb-4 leading-tight">
                            About <span className="text-yellow-500">Crown Capital</span>
                        </h2>

                        <p className="text-xl  font-semibold text-yellow-600 tracking-wide mb-6">
                            A Trusted Name in Global CFD Trading
                        </p>

                        <p className="text-black text-lg  font-semibold leading-relaxed mb-5">
                            At <strong>Crown Capital</strong>, we empower traders to access global financial
                            markets with confidence. From forex to commodities, indices, metals, and shares —
                            we bring everything together under one secure trading ecosystem.
                        </p>

                        <p className="text-black text-lg font-semibold leading-relaxed mb-8">
                            Our mission is to blend cutting-edge technology with unmatched client support,
                            ensuring your trading experience is smooth, intelligent, and profitable.
                        </p>

                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300">
                            Learn More
                        </button>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8 m-8">
                        <img
                            className="w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            alt="office content 1"
                        />
                        <img
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                            alt="office content 2"
                        />
                    </div>
                </div>

                <section className="w-full min-h-[500px] px-6 md:px-12 lg:px-20 py-16 bg-gray-900 text-white">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center lg:justify-start">
                            <img src={company_overview} alt="Company Overview" loading="lazy" width="600" height="500" decoding="async" data-nimg="1"
                                className="rounded-xl shadow-lg object-contain" />
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold mb-4">Company Overview</h2>
                            <p className="text-base md:text-lg leading-relaxed text-justify">At <strong>Crown Capital</strong>, we are redefining online CFD trading by combining technology, transparency, and trust. Our platform provides traders with seamless access to global financial markets, covering Foreign Exchange Pairs, metals, shares, indices, and commodities.</p>
                            <p className=" leading-relaxed text-base md:text-lg text-justify">With competitive spreads, lightning-fast execution, and world-class support, Crown Capital empowers traders of all levels — from beginners to professionals — to seize opportunities and trade with confidence.</p>
                            <p className=" text-base md:text-lg font-medium">We don't just connect clients to markets — we help them compete with confidence.</p>
                        </div>

                    </div>
                </section>
                <section className="mv-section py-20">
                    <div className="mv-header text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 tracking-wide">
                            Mission <span className="text-yellow-500">& Vision</span>
                        </h2>
                    </div>

                    <div className="mv-container container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10">


                        <div className="mv-card bg-white shadow-lg text-center hover:shadow-2xl rounded-2xl p-10 border border-gray-100 border-t-4 border-t-[#202577] border-solid transition-all duration-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 font-semibold leading-relaxed">
                                At <span className="text-[#202577] font-bold">Crown Capital</span>, our mission is to empower traders around the globe
                                by providing a transparent, secure, and technologically advanced trading environment.
                                We strive to make financial markets accessible to everyone—regardless of experience—by offering
                                cutting-edge tools, real-time insights, and educational resources.
                            </p>
                            <p className="text-gray-600 font-semibold leading-relaxed mt-4">
                                Our focus is on building trust through innovation, ensuring every trader feels confident,
                                supported, and equipped to achieve sustainable long-term success in the ever-evolving world of trading.
                            </p>
                        </div>



                        <div className="mv-card bg-white shadow-lg text-center hover:shadow-2xl rounded-2xl p-10 border border-gray-100 border-t-4 border-t-[#202577] border-solid transition-all duration-500">
                            <h3 className="text-2xl font-bold  text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 font-semibold leading-relaxed">
                                Our vision is to become the world’s most trusted CFD and forex broker—recognized for
                                integrity, innovation, and customer-centric values. We aspire to redefine how traders
                                connect with global markets by delivering a seamless, intelligent, and rewarding trading experience.
                            </p>
                            <p className="text-gray-600 font-semibold leading-relaxed mt-4">
                                By continuously evolving with technology and market trends, we envision a future where every trader,
                                investor, and partner thrives within a unified ecosystem built on transparency, knowledge, and opportunity.
                            </p>
                        </div>

                    </div>
                </section>

            </div>



        </>
    )
}





