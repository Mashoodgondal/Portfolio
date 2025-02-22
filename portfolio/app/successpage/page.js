

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Link from "next/link";

export default function SuccessPage() {
    const router = useRouter();
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white p-6">
            {showConfetti && <Confetti width={width} height={height} />}

            {/* ✅ Success Animation */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-full max-w-lg animate-fade-in">
                <div className="flex justify-center">
                    {/* Animated Success Icon */}
                    <div className="w-24 h-24 bg-green-500 text-white flex items-center justify-center rounded-full text-5xl shadow-lg">
                        ✅
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-green-600 mt-4 animate-slide-in">
                    Form Submitted Successfully!
                </h1>
                <p className="text-lg text-gray-700 mt-3 animate-slide-in delay-200">
                    Thank you for reaching out! We'll get back to you soon.
                </p>

                {/* ✅ Buttons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <Link href="/">
                        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200">
                            Go Back Home
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                            Submit Another Message
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
