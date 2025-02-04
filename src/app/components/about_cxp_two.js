import Image from "next/image";
import Title from "./title"; 
export default function AboutCxpTwo() {
    return (    
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 h-full mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden" >
            <div className="h-full min-h-[400px] md:min-h-[500px] relative">
                <Image src="/images/student.png" alt="trade" width={787} height={765} className="absolute bottom-0 w-auto h-[350px] md:h-[500px] object-cover z-10" />
                <Image src="/images/coins.png" alt="trade" width={400} height={400} className="absolute top-0 right-0 w-auto md:h-[400] h-[350px] object-cover" />
            </div>
            <div className="flex flex-col gap-8 w-full py-8 md:py-16 px-8 md:px-16 md:pl-0 md:align-center">
                <Title title="Somos el mejor aliado para potencializar tus finanzas" highlight="potencializar tus finanzas" className="text-white font-bold text-[32px] md:text-[32px]/[38px]"/>
                <p className="text-white text-[18px] md:text-[24px]/[30px]">En CXP estamos motivados en potencializar la adopción masiva de las criptomonedas facilitándote todas nuestras herramientas y conocimientos a nuestra comunidad, nuestro equipo de expertos con más de 10 años de experiencia ha desarrollado herramientas para llevar tus finanzas al siguiente nivel.</p>
                <div className="flex gap-2 md:gap-4 p-2 items-center justify-center">
                    <button className="bg-transparent">
                        <Image src="/icons/telegram-small.png" alt="book icon" width={80} height={80} />
                    </button>
                    <button className="bg-transparent">
                        <Image src="/icons/discord-small.png" alt="book icon" width={80} height={80} />
                    </button>
                    <button className="bg-transparent">
                        <Image src="/icons/kick-small.png" alt="book icon" width={80} height={80} />
                    </button>
                </div>       
            </div>        
        </div>  
        )
} 