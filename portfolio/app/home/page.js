

'use client';

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import img3 from '@/public/images/in2.jpg';

export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 lg:p-10 animate-bounce-in">

            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-indigo-600 animate-bounce-in delay-100">

                    <div className="inline-block w-[350px] h-[80px] md:w-[500px] md:h-[110px] overflow-hidden">
                        <Typewriter
                            options={{
                                strings: [
                                    "Hello,👋 I'm Mashood",
                                    "I build awesome websites",
                                    "Let's create something great together",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                </h1>

                <h2 className="text-2xl md:text-4xl text-yellow-700 mt-2 animate-bounce-in delay-300">
                    A Passionate Web Developer
                </h2>

                <p className="mt-4 lg:mt-6 text-lg font-semibold text-gray-700 animate-bounce-in delay-500">
                    I craft modern, responsive, and user-friendly web applications that deliver seamless digital experiences.
                </p>


                <div className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center">
                    <button className="w-1/2  md:w-full mx-auto px-6 py-3 text-lg font-semibold border-2 border-blue-500 text-blue-500 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white animate-pulse-glow">
                        Click Me
                    </button>
                    <button className="w-1/2 md:w-full mx-auto relative px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 animate-pulse-glow delay-200">
                        Download CV
                    </button>
                </div>

            </div>



            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl transition-transform duration-500 hover:rotate-12">
                    <Image
                        src={img3}
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
