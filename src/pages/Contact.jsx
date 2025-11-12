import contact from "../assets/images/img/market3.png"

export const Contact = () => {
    return (
        <>

            <div className="flex   items-center m-9 flex-col w-full  ">
                <section className="about-us-section pr-10 py-20">
                    <div className="container mx-auto px-12 lg:px-24">
                        <div className="about-content grid lg:grid-cols-2 gap-16 items-center">

                           
                            <div className="about-text">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                    Let’s Build the Future of <span className="text-yellow-500">Trading</span> Together
                                </h2>

                                <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-5">
                                    Whether you're a retail trader, a professional investor, or a partner exploring fintech opportunities —
                                    we’re here to support your journey.
                                </p>

                                <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                                    Connect with our team to discuss your goals, request a demo, or explore partnership opportunities.
                                </p>
                            </div>

                       
                            <div className="about-image flex justify-center">
                                <img
                                    src={contact}
                                    alt="About Crown Capital Trading Platform"
                                    className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-section  py-20">
                    <div className="container mx-auto px-12 lg:px-24">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* LEFT: Timeline */}
                            <div>
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
                                    HOW <span className="text-yellow-500">Can We Help You?</span>
                                </h2>

                                <div className="relative border-l-4 border-yellow-500 pl-14 space-y-12">
                                    {/* Step 1 */}
                                    <div className="relative">
                                        <div className="absolute -left-[42px] top-1 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full w-10 h-10 shadow-md">
                                            1
                                        </div>
                                        <h3 className="text-xl  font-semibold text-gray-900 m-2">
                                            Account Opening & Onboarding
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed m-2">
                                            Get step-by-step guidance to set up your account and start trading smoothly.
                                        </p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative">
                                        <div className="absolute -left-[42px] top-1 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full w-10 h-10 shadow-md">
                                            2
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 m-2">
                                            Product Demos & Pricing
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed m-2">
                                            Explore our platform features with live demos and transparent pricing plans.
                                        </p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative">
                                        <div className="absolute -left-[42px] top-1 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full w-10 h-10 shadow-md">
                                            3
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 m-2">
                                            Partnership & Collaboration Opportunities
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed m-2">
                                            Connect with us to build mutually beneficial business relationships.
                                        </p>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="relative">
                                        <div className="absolute -left-[42px] top-1 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full w-10 h-10 shadow-md">
                                            4
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 m-2">
                                            Trading Support & Technical Assistance
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed m-2">
                                            Get expert help for trading queries, technical issues, and platform support.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Contact Form */}
                            <form
                                className="bg-white shadow-lg rounded-2xl p-8 lg:p-10"
                                action="#"
                                method="POST"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Quick Contact Form
                                </h2>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Company"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                    <textarea
                                        name="message"
                                        rows="6"
                                        placeholder="Your Message/Enquiry"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-6 bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-md"
                                >
                                    Let’s Talk
                                </button>
                            </form>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}