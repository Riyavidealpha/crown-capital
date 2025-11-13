import contact from "../assets/images/cta.jpg"
export const CTA = () => {
    return (
        <>
            <section className="py-20 bg-linear-to-r from-gray-100 via-gray-200 to-gray-100">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">


                    <div className="flex-1">
                        <img
                            src={contact}
                            alt="Trading Illustration"
                            className="w-full rounded-2xl shadow-md"
                        />
                    </div>


                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-5">
                            Start Your <span className="text-[#B89043]">Trading Journey</span> Today
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            Experience institutional-grade trading with transparent pricing, deep
                            liquidity, and advanced risk management — built for both beginners and
                            professionals.
                        </p>

                        <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4">
                            <button className="bg-[#B89043] hover:bg-[#c89b4a] text-white px-8 py-3 rounded-md font-semibold transition duration-300 shadow-sm">
                                Start Trading
                            </button>
                            <button className="border border-[#B89043] text-[#B89043] hover:bg-[#faf6f0] px-8 py-3 rounded-md font-semibold transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}