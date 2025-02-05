"use client";
import { useState } from "react";

import Image from "next/image";
import Title from "./title";

export default function AboutCxp() {

    const [isHovered, setIsHovered] = useState(false);

    return (    
        <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden" >
            <div className="relative min-h-[500px]">
                <Image src="/images/trade.png" alt="trade" width={1000} height={1000} className="absolute top-[0%] md:top-[-2%] left-[-85%] md:left-[-30%] max-w-[900px] md:max-w-[1000px]" />
                
                <div className="flex items-end absolute bottom-[0] left-[-55%] md:left-[-10%] ">
                    <Image 
                        src="/images/women.png" 
                        alt="women" 
                        width={900} 
                        height={900} 
                        className="max-w-[1000px] md:max-w-[1200px] md:w-[1200px] md:h-[450px] z-10" 
                        onMouseEnter={() => setIsHovered(true)}
                    />

                    {/* icons on hover */}
                    <div className={`absolute z-10 bottom-[84%] left-[24%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                        <Image src="/images/btc.png" alt="icon1" width={50} height={50} />
                    </div>
                    <div className={`absolute z-10 bottom-[55%] left-[21%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                        <Image src="/images/sol.png" alt="icon1" width={50} height={50} />
                    </div>
                    <div className={`absolute z-10 bottom-[85%] left-[45%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                        <Image src="/images/ethereum.png" alt="icon1" width={50} height={50} />
                    </div>
                    <div className={`absolute z-10 bottom-[55%] left-[47%] transition-all duration-500 transform ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                        <Image src="/images/dgecoin.png" alt="icon1" width={50} height={50} />
                    </div>

                </div>
                
            </div>
            <div className="flex flex-col gap-4 w-full py-8 md:py-16 px-8 md:px-20 md:pl-0">
                <div className="flex gap-2 md:gap-4 p-2 items-start">
                    <Image src="/icons/academy.svg" alt="book icon" width={60} height={60} />
                    <Title title="Prepárate para el ciclo más grande de la historia de las cryptos."  highlight="la historia de las cryptos." className="text-white font-bold text-[24px] md:text-[38px]/[44px]">Academia</Title>
                </div>
                <p className="text-white text-[18px] md:text-[24px] backdrop-blur p-2 rounded-lg">Nuestro equipo ha transformado más de 10 años de experiencia en una rápida y sencilla curva de aprendizaje, estamos definitivamente en el mejor momento para el mercado Crypto y en CXP te traemos todo lo necesario para que tú también puedas ser parte de esto.</p>
                <button className="bg-transparent text-primary font-medium text-[18px] md:text-[24px] px-4 py-[4px] rounded-lg ml-auto border-primary border-[1px]">Empieza Ahora</button>
            </div>
        </div>  
    )
}
