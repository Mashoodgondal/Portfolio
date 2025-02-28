

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
    const router = useRouter();
    const [showConfetti, setShowConfetti] = useState(true);
    const [confettiPieces, setConfettiPieces] = useState([]);


    useEffect(() => {
        setTimeout(() => setShowConfetti(false), 3000);


        const newConfetti = Array.from({ length: 50 }).map(() => ({
            left: `${Math.random() * window.innerWidth}px`,
            delay: `${Math.random() * 2}s`,
            color: ["#ff0", "#f00", "#0f0", "#00f", "#ff8000"][Math.floor(Math.random() * 5)]
        }));

        setConfettiPieces(newConfetti);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white p-6 relative overflow-hidden">


            {showConfetti && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {confettiPieces.map((confetti, i) => (
                        <div
                            key={i}
                            className="confetti"
                            style={{ left: confetti.left, animationDelay: confetti.delay, backgroundColor: confetti.color }}
                        />
                    ))}
                </div>
            )}


            <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-full max-w-lg animate-fade-in">
                <div className="flex justify-center">

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


                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <Link href="/">
                        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200">
                            Go Back Home
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200">
                            Submit Another Message
                        </button>
                    </Link>
                </div>
            </div>


            <style jsx>{`
                .confetti {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    opacity: 0.7;
                    animation: confetti-fall 3s linear infinite;
                }

                @keyframes confetti-fall {
                    0% { transform: translateY(-10vh) rotate(0deg); }
                    100% { transform: translateY(100vh) rotate(360deg); }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                .animate-slide-in {
                    animation: slide-in 0.8s ease-out;
                }

                @keyframes slide-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
