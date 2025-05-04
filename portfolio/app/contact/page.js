"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactUs() {
    const router = useRouter();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const messageHandeler = async () => {
        if (!name || !email || !message) {
            alert("All feilds are required")
            return;
        }
        else {
            router.push("/successpage");
            try {
                const res = await fetch('http://localhost:3000/api/contact', { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ name, email, message }) })
            } catch (error) {
                console.log("Error in posting");

            }
        }
    }
    return (
        <section id="contact" className="relative bg-transparent  text-gray-800 md:mb-10 md:mx-2 rounded-xl shadow-lg py-20">
            <div className="container mx-auto px-5">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-indigo-500">
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
                                <label htmlFor="name" className="leading-7 text-blue-700 font-bold text-sm ">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setname(e.target.value)}
                                    value={name}
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 py-2 px-3 outline-none transition-all duration-200"
                                />
                            </div>
                        </div>


                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 font-bold text-blue-700 text-sm ">
                                    Email
                                </label>
                                <input
                                    onChange={(e) => setemail(e.target.value)}
                                    value={email}
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 py-2 px-3 outline-none transition-all duration-200"
                                />
                            </div>
                        </div>


                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-blue-700 font-bold text-sm ">
                                    Message
                                </label>
                                <textarea
                                    onChange={(e) => setmessage(e.target.value)}
                                    value={message}
                                    id="message"
                                    name="message"
                                    className="w-full bg-100 to-orange-200 text-gray-900 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 h-32 py-2 px-3 outline-none resize-none transition-all duration-200"
                                ></textarea>
                            </div>
                        </div>


                        <div className="p-2 w-full">

                            <button onClick={messageHandeler} className="flex mx-auto text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded-lg text-lg transition-all duration-200">
                                Send Message
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

