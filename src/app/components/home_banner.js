"use client";
import { useState } from "react";

import Image from "next/image";

export default function HomeBanner() {

    const [isHovered, setIsHovered] = useState(false);

    return (    
        <div className="relative w-ful h-full md:h-[540px] bg-cover bg-center bg-no-repeat bg-[url('/images/home-banner.webp')]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="relative z-10 h-full">
                {/* home banner content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 px-8 md:px-20 h-full">
                    <div className="flex flex-col gap-6 w-full md:pb-16 pt-4 max-w-[550px]">
                        <div className="relative border-y-[2px] border-primary px-4 py-2 flex items-center justify-center">
                                <div className="absolute left-0 top-0 h-1/2 w-[2px] bg-primary">
                                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-primary rounded-full translate-x-[-50%]" />
                                </div>
                                <h2 className="text-white text-[28px] font-black md:text-[56px]/[60px]">Lo mejor de crypto en un solo lugar.</h2>
                                <div className="absolute right-0 bottom-0 h-1/2 w-[2px] bg-primary">
                                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full translate-x-[50%]" />
                                </div>
                        </div>
                        <p className="text-white md:text-[28px]/[30px] text-[18px]/[25px] backdrop-blur p-4 rounded-lg">En CXP, accede a un equipo de expertos, herramientas especializadas, formación en criptomonedas y una comunidad activa, todo lo que necesitas en un solo lugar.</p>
                        <button className="bg-primary text-white text-[20px]  md:text-[28px] px-2 md:py-[2px] rounded-lg md:w-[150px] w-[120px] ml-auto">Registrate</button>
                    </div>
                    <div className="relative place-self-center md:place-self-end">
                        <Image src="/images/person-banner.webp" priority alt="Banner" width={390} height={390} />
                        {
                            isHovered === false && (
                                <div 
                                    className="absolute z-10 top-[50%] left-[22%] cursor-pointer" 
                                    onMouseEnter={() => setIsHovered(true)}
                                    onClick={() => setIsHovered(true)}
                                >
                                    <Image src="/icons/button-banner2.png" alt="Banner" width={40} height={40} className="animate-pulse"/>
                                    <Image src="/icons/button-banner.png" alt="Banner" width={18} height={18} className="absolute top-[30%] left-[25%]"/>
                                </div>
                            ) 
                        }
                            
                        {/* icons on hover */}
                        <div className={`absolute z-10 top-[35%] right-[10%] bg-primary p-2 rounded-md transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                            <Image src="/icons/red1.png" alt="icon1" width={30} height={30} />
                        </div>

                        <div className={`absolute -z-10 top-[10%] right-[32%] bg-primary p-2 rounded-md transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                            <Image src="/icons/red1.png" alt="icon1" width={30} height={30} />
                        </div>

                        <div className={`absolute z-10 top-[8%] left-[20%] bg-primary p-2 rounded-md transition-all duration-700 transform ${isHovered ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-12 translate-y-12"}`}>
                            <Image src="/icons/daimond.png" alt="icon1" width={30} height={30} />
                        </div>

                        <div className={`absolute z-10 top-[57%] right-[80%] bg-primary p-2 rounded-md transition-all duration-700 transform ${isHovered ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-12 -translate-y-12"}`}>
                            <Image src="/icons/academy.svg" alt="icon1" width={30} height={30} />
                        </div>

                        <div className={`absolute z-10 top-[25%] right-[50%] scale-x-[-1] transition-all duration-700 transform ${isHovered ? "opacity-50 translate-x-0 translate-y-0" : "opacity-0 translate-x-12 -translate-y-12"}`}>
                            <Image src="/images/trader.png" alt="icon1" width={150} height={200} className="max-w-[300] md:w-[230px]" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>   
    )
}
