'use client'

import Box from "@/components/Box"
import Link from "next/link";
import { useEffect, useState } from "react"

import { FaPinterest } from "react-icons/fa";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";

const socialLinks = [
    {name: 'facebook', Icon: FaSquareFacebook},
    {name: 'pinterest', Icon: FaPinterest},
    {name: 'instagram', Icon: FaInstagram }
]

export default function Home() {
    const [date, setDate] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const currentDate = new Date();
            const targetDate = new Date(currentDate.getFullYear() + 1, 0, 1); // 1. Januar des nächsten Jahres
            const timeDifference = targetDate - currentDate;

            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            setDate({days, hours, minutes, seconds});
        }

        calculateTimeLeft(); // initial ausführen
        const intervalId = setInterval(calculateTimeLeft, 1000); // Intervall starten
        return () => clearInterval(intervalId); //* Cleanup beim Unmount
    }, [])

    return (
        <main className="flex justify-between items-center flex-col h-screen pb-10">
            <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="text-White font-bold text-xl lg:text-2xl py-10">Countdown to the New Year 🎉</h1>
                <div className="grid grid-cols-4 lg:gap-4 gap-2">
                    {Object.entries(date).map(([key, value]) => (
                        <Box key={key} number={value < 10 ? '0' + value : value} text={key.toUpperCase()} /> 
                    ))}
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-3 justify-center">
                    {socialLinks.map((link, index) => (
                        <link.Icon className="text-xl hover:text-Red hover:scale-125 transition-all" key={index} />
                    ))}
                </div>
                <div className="text-xs lg:text-Static pt-5">
                    Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:text-Red underline">Frontend Mentor</Link>. 
                    Coded by <Link href="#" target="_blank" className="hover:text-Red underline">Mohamed Yazan Emran</Link>.
                </div>
            </div>
        </main>
    )
}