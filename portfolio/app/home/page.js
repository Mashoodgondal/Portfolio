
'use client';

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import img3 from '@/public/images/in2.jpg'
export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen  p-4 lg:p-10">

            <div className="w-full md:w-1/2  text-center md:text-left mb-8 md:mb-0">

                <h1 className="text-4xl md:text-6xl font-bold text-indigo-600">
                    <Typewriter
                        options={{
                            strings: [
                                'Hello,👋 I\'m Mashood',

                                'I build awesome websites',
                                'Let\'s create something great together'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 50,
                        }}
                    />
                </h1>

                <h2 className="text-2xl md:text-4xl text-yellow-700 mt-2">

                    A Passionate Web Developer
                </h2>
                <p className="mt-4 lg:mt-6 text-lg font-semibold  text-gray-700">
                    I craft modern, responsive, and user-friendly web applications that deliver seamless digital experiences.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">

                {/* <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <Image
                        src={img3}
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-2xl border-[4px] border-blue-800"
                    />
                </div> */}
                {/* <div className="relative w-64 h-64 md:w-96 md:h-96">

                    <Image
                        src={img3}
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-2xl border-[4px] border-blue-800"
                    />
                </div> */}
                <div className="relative w-64 h-64 md:w-96 md:h-96">

                    <div className="w-full h-full bg-white rounded-full">
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

        </div>
    );
}
