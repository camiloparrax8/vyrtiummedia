"use client";
import { useState } from "react";

import Image from "next/image";

export default function AboutCxp() {

    const [isHovered, setIsHovered] = useState(false);

    return (    
        <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden" >
            <div className="relative h-full min-h-[500px]">
                <Image src="/images/trade.png" alt="trade" width={1000} height={1000} className="absolute top-[0%] md:top-[-2%] left-[-65%] md:left-[-30%] max-w-[900px] md:max-w-[1000px]" />
                <Image 
                    src="/images/women.png" 
                    alt="women" 
                    width={1200} 
                    height={1200} 
                    className="absolute bottom-[0] left-[-55%] md:left-[-8%] max-w-[1050px] md:max-w-[1200px]" 
                    onMouseEnter={() => setIsHovered(true)}
                />

                {/* icons on hover */}
                <div className={`absolute z-10 bottom-[70%] left-[25%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <Image src="/images/btc.png" alt="icon1" width={50} height={50} />
                </div>
                <div className={`absolute z-10 bottom-[45%] left-[20%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <Image src="/images/sol.png" alt="icon1" width={50} height={50} />
                </div>
                <div className={`absolute z-10 bottom-[70%] left-[54%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <Image src="/images/ethereum.png" alt="icon1" width={50} height={50} />
                </div>
                <div className={`absolute z-10 bottom-[50%] left-[57%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                    <Image src="/images/dgecoin.png" alt="icon1" width={50} height={50} />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full py-8 md:py-16 px-8 mx:px-16 md:pl-0">
                <div className="flex gap-2 md:gap-4 p-2 items-start">
                    <Image src="/icons/academy.svg" alt="book icon" width={60} height={60} />
                    <h2 className="text-white font-bold text-[24px] md:text-[38px]/[44px]">Prepárate para el ciclo más grande de <span className="text-primary">la historia de las cryptos.</span> </h2>
                </div>
                <p className="text-white text-[18px] md:text-[24px] backdrop-blur p-2 rounded-lg">Nuestro equipo ha transformado más de 10 años de experiencia en una rápida y sencilla curva de aprendizaje, estamos definitivamente en el mejor momento para el mercado Crypto y en CXP te traemos todo lo necesario para que tú también puedas ser parte de esto.</p>
                <button className="bg-transparent text-primary font-medium text-[18px] md:text-[24px] px-4 py-[4px] rounded-lg ml-auto border-primary border-[1px]">Empieza Ahora</button>
            </div>
        </div>  
    )
}
