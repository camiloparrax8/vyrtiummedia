"use client";
import { useState } from "react";
import Image from "next/image";

export default function HoverIconsAbout() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-end absolute bottom-[0] left-[-40%] md:left-[-10%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      aria-label="Mujer con criptomonedas flotantes"
    >
      <Image 
        src="/images/women.png" 
        alt="Mujer con fondo de criptomonedas" 
        width={900} 
        height={900} 
        className="max-w-[1000px] md:max-w-[1200px] md:w-[1200px] md:h-[450px] z-10"
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
  );
}
