// import React from 'react'

// const Hero = () => {
//     return (
//         <div>Hero</div>
//     )
// }

// export default Hero
// pages/index.js
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
//  import  img1 = ""
export default function Hom() {
    const [text, setText] = useState('');
    const fullText = "A  Passionate Web Developer";
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText((prev) => prev + fullText[index]);
            index++;
            if (index === fullText.length) clearInterval(timer);
        }, typingSpeed);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Auto-write Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Hello, I'm <span className="text-blue-500">Mashood Ali</span>
                </h1>
                <h2 className="text-2xl md:text-4xl text-gray-700 mt-2">
                    {text}
                    <span className="animate-blink">|</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    I craft modern, responsive, and user-friendly web applications that deliver seamless digital experiences.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src="/public/images/123.jpg"
                    alt="Profile Picture"
                    width={400}
                    height={400}
                    className="rounded-full shadow-lg object-cover"
                />
            </div>

            <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}

