
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import img from '@/public/images/about3.jpg';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills'); // Manage active tab state


    const data = {
        skills: (

            <ul className='text-indigo-800 list-disc list-inside lg:ml-6 text-left'>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li> Tailwind CSS</li>
                <li>Firebase</li>
                <li> MongoDB</li>
                <li> Git & GitHub</li>

            </ul>
        ),

        Education: (

            <ul className='text-indigo-800 list-disc list-inside lg:ml-6 text-left'>
                <li>Stodent of Computer Scince</li>
                <li>FullStack Developer</li>
            </ul>
        ),

    };

    return (
        <div className="flex items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-20">

            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mx-auto">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt="about"
                    className="rounded-md"
                />
            </div>


            <div className="text-center">
                <h1 className="text-yellow-600 text-4xl font-bold md:m-4">About Me</h1>
                <h2 className="text-gray-900 font-bold md:m-2">Hello! I’m Mashood, a passionate Full Stack Developer.</h2>
                <p className="text-gray-800">
                    I specialize in building modern, scalable, and user-friendly web applications using cutting-edge technologies. With experience in Next.js for frontend development, Tailwind CSS for clean and responsive UI design, and Firebase & MongoDB for backend services and database management, I bridge the gap between design and functionality seamlessly.
                    <br /><br />
                    I love transforming ideas into reality through clean and efficient code

                </p>


                <div className="mt-6">
                    <div className="flex justify-center gap-4 mb-4">
                        <button
                            onClick={() => setActiveTab('skills')}
                            className={`px-4 py-2 rounded-md text-white ${activeTab === 'skills' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-500 hover:bg-gray-600'
                                }`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => setActiveTab('Education')}
                            className={`px-4 py-2 rounded-md text-white ${activeTab === 'Education' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-500 hover:bg-gray-600'
                                }`}
                        >
                            Education
                        </button>

                    </div>
                    <div className="text-gray-800  p-4 rounded-md shadow-md">
                        {data[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
