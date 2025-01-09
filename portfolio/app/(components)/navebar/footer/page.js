export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 rounded-md py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">Mashood</h2>
                        <p className="mt-2 text-gray-400">
                            Building solutions with creativity, passion, and code.
                        </p>
                    </div>


                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-10">
                        <a href="#about" className="hover:text-white transition">
                            About
                        </a>
                        <a href="#projects" className="hover:text-white transition">
                            Projects
                        </a>
                        <a href="#services" className="hover:text-white transition">
                            Services
                        </a>
                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>
                    </div>


                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>


                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Mashood. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
