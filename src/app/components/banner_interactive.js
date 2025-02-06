"use client";
import { useState } from "react";
import Image from "next/image";

export default function BannerInteractive() {
const [isHovered, setIsHovered] = useState(false);

return (
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
);
}
