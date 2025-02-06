import Image from "next/image";
import Title from "../components/title"; 
import VideoCarousel from "../components/video_carousel";
export default function AboutCxpTwo() {
    return (    
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 h-full mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden" >
            <div className="min-h-[400px] md:min-h-[500px] relative overflow-hidden">
                <Image src="/images/student.png" alt="trade" width={787} height={765} className="absolute bottom-0 w-auto h-[350px] md:h-[500px] object-cover z-20" />
                <Image src="/images/coins.png" alt="trade" width={400} height={400} className="absolute 0 md:right-[10%] top-0 right-0 w-auto md:h-[400] h-[350px] object-cover z-10" />
                <VideoCarousel></VideoCarousel>
            </div>
            <div className="flex flex-col gap-8 w-full py-8 md:py-16 px-8 md:px-16 md:pl-0 md:align-center">
                <Title title="Somos el mejor aliado para potencializar tus finanzas" highlight="potencializar tus finanzas" className="text-white font-bold text-[32px]/[38px] md:text-[32px]/[38px]"/>
                <p className="text-white text-[18px] md:text-[24px]/[30px]">En CXP estamos motivados en potencializar la adopción masiva de las criptomonedas facilitándote todas nuestras herramientas y conocimientos a nuestra comunidad, nuestro equipo de expertos con más de 10 años de experiencia ha desarrollado herramientas para llevar tus finanzas al siguiente nivel.</p>
                {/* social networks */}
                <div className="flex md:gap-4 gap-2 items-center justify-center">
                    <div className="group flex flex-col items-center">
                        <button className="flex justify-center items-center bg-transparent rounded-full py-4 px-4 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0  group-hover:bg-primary group-hover:scale-110">
                            <Image src="/icons/red2.png" alt="Telegram" width={30} height={10} />
                        </button>
                        <span className="font-bold text-white text-[9px] md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 ">
                            Free Telegram
                        </span>
                    </div>
                    <div className="group flex flex-col items-center">
                        <button className="flex justify-center items-center bg-transparent rounded-full py-4 px-4 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0  group-hover:bg-primary group-hover:scale-110">
                            <Image src="/icons/red4.png" alt="Discord" width={28} height={10} />
                        </button>
                        <span className="font-bold text-white text-[9px] md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                            Free Discord
                        </span>
                    </div>
                    <div className="group flex flex-col items-center">
                        <button className="flex justify-center items-center bg-transparent rounded-full py-4 px-4 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0  group-hover:bg-primary group-hover:scale-110">
                            <Image src="/icons/red3.png" alt="Kick" width={20} height={10} />
                        </button>
                        <span className="font-bold text-white text-[9px] md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                            Live on Kick
                        </span>
                    </div>
                </div>
            </div>        
        </div>  
        )
} 