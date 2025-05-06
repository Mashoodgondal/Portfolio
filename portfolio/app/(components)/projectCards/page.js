import Image from "next/image";
export default function ProjectsCard(proops) {
    return (
        <div className="shadow-md hover:shadow-purple-900 hover:shadow-md transition-shadow duration-500 group transform hover:rotate-x-6 hover:rotate-y-6 hover:duration-300">
            <div className="relative group rounded-xl overflow-hidden shadow-lg">

                <Image
                    src={proops.img}
                    width={300}
                    height={300}
                    alt="Sample Image"
                    className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-50"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition-colors duration-300">
                            {proops.gitlink && (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>)}
                        </button>
                        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                            {proops.prelink && (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>)}
                        </button>
                    </div>
                </div>

                <div className="bg-indigo-400 py-4 text-center">
                    <h2 className="text-lg font-bold text-gray-700">{proops.title}</h2>
                </div>
            </div>
        </div>
    );
}
