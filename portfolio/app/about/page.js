
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img from '@/public/images/about3.jpg';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger fade-in animation on component mount
    }, []);

    const data = {
        skills: (
            <ul className='text-indigo-800 list-disc list-inside lg:ml-6 text-left space-y-2 animate-fade-in'>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>Git & GitHub</li>
            </ul>
        ),
        Education: (
            <ul className='text-indigo-800 list-disc list-inside lg:ml-6 text-left space-y-2 animate-fade-in'>
                <li>Student of Computer Science</li>
                <li>Full Stack Developer</li>
            </ul>
        ),
    };

    return (
        <div id='about' className={`items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-20 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>

            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mx-auto transform hover:scale-105 transition-transform duration-500">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt="about"
                    className="rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-500"
                />
            </div>

            <div className="text-center animate-slide-up">
                <h1 className="text-yellow-600 text-4xl font-bold md:m-4 transition-transform duration-500 hover:scale-110">About Me</h1>
                <h2 className="text-gray-900 font-bold md:m-2 animate-fade-in">Hello! I’m Mashood, a passionate Full Stack Developer.</h2>
                <p className="text-gray-800 animate-fade-in delay-200">
                    I specialize in building modern, scalable, and user-friendly web applications using cutting-edge technologies. With experience in Next.js for frontend development, Tailwind CSS for clean and responsive UI design, and Firebase & MongoDB for backend services and database management, I bridge the gap between design and functionality seamlessly.
                    <br /><br />
                    I love transforming ideas into reality through clean and efficient code.
                </p>

                <div className="mt-6">
                    <div className="flex justify-center gap-4 mb-4">
                        <button
                            onClick={() => setActiveTab('skills')}
                            className={`px-4 py-2 rounded-md text-white transition-transform duration-300 hover:scale-105 ${activeTab === 'skills' ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-md' : 'bg-gray-500 hover:bg-gray-600'}`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => setActiveTab('Education')}
                            className={`px-4 py-2 rounded-md text-white transition-transform duration-300 hover:scale-105 ${activeTab === 'Education' ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-md' : 'bg-gray-500 hover:bg-gray-600'}`}
                        >
                            Education
                        </button>
                    </div>

                    <div className="text-gray-800 p-4 rounded-md shadow-md transition-transform duration-500 hover:scale-105 animate-fade-in">
                        {data[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 
