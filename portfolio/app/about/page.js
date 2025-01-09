import React from 'react'
import Image from 'next/image'
import img from '@/public/images/about3.jpg'
const About = () => {
    return (
        <div className='flex  item-center justify-center grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-20'>

            <div className='relative w-[300px] h-[400px]  md:w-[400px] md:h-[500px] mx-auto'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    alt='about'
                    className='rounded-md'
                />



            </div>
            <div className='text-center' >
                <h1 className='text-yellow-600 text-4xl  font-bold md:m-4 '>About Me</h1>
                <h2 className='text-gray-900 font-bold  md:m-2'>Hello! I’m Mashood, a passionate Full Stack Developer.</h2>
                <p className='text-gray-800'>I specialize in building modern, scalable, and user-friendly web applications using cutting-edge technologies. With experience in Next.js for frontend development, Tailwind CSS for clean and responsive UI design, and Firebase & MongoDB for backend services and database management, I bridge the gap between design and functionality seamlessly.

                    I love transforming ideas into reality through clean and efficient code, ensuring exceptional user experience and performance.
                    When I'm not coding, you'll probably find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.

                    Let’s connect and build something amazing together! 🚀
                </p>

            </div>


        </div>
    )
}

export default About