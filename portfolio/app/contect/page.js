export default function ContactUs() {
    return (
        <section className="relative bg-gradient-to-br from-[#9d9ea0] to-[#2e2edb54]  text-gray-800 md:mb-10 md:mx-2 rounded-xl shadow-lg py-20">
            <div className="container mx-auto px-5">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-purple-700">
                        Get in Touch
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                        I'll love to hear from you! Fill out the form below, and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-blue-700 text-sm ">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-900 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 py-2 px-3 outline-none transition-all duration-200"
                                />
                            </div>
                        </div>


                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 font-bold text-blue-700 text-sm ">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-900 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 py-2 px-3 outline-none transition-all duration-200"
                                />
                            </div>
                        </div>


                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-blue-700 text-sm ">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gradient-to-br from-yellow-100 to-orange-100 text-gray-900 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 h-32 py-2 px-3 outline-none resize-none transition-all duration-200"
                                ></textarea>
                            </div>
                        </div>


                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded-lg text-lg transition-all duration-200">
                                Send Message
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
