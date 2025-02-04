import Image from "next/image";
import Title from "./title";

export default function ReviewsSection() {
    return (    
        <div className="grid grid-cols-1 md:grid-cols-2 h-full mt-8 mx-4 md:mx-20 rounded-2xl overflow-hidden">
            <div className="h-full min-h-[400px] md:min-h-[800px]">
                <Image src="/images/reviews-image.png" alt="trade" width={668} height={769} className="w-auto h-full object-cover" />
            </div>
            <div className="flex flex-col gap-6 w-full py-8 md:py-16 mx:px-16 md:pl-0 md:justify-center">
                <h2 className="font-bold text-[24px] md:text-[32px]/[42px]">Lo que dicen nuestros Usuarios</h2>
                
                <div className="flex flex-col gap-2 md:gap-2 p-4 items-start border-[1px] border-primary rounded-lg">
                    <p className="italic text-[18px]/[24px] md:text-[31px]/[36px]">“Las señales de CXP me han ayudado a mejorar mi estrategia de trading. No son infalibles, pero definitivamente son una herramienta valiosa en mi arsenal”</p>
                    <Title title="Ana R. Trader de Criptomonedas." highlight="Ana R." className="text-white font-bold text-[24px] md:text-[28px]"></Title>
                </div>
                <div className="flex flex-col gap-2 md:gap-2 p-4 items-start border-[1px] border-primary rounded-lg">
                    <p className="italic text-[18px]/[24px] md:text-[31px]/[36px]">“Las señales de CXP me han ayudado a mejorar mi estrategia de trading. No son infalibles, pero definitivamente son una herramienta valiosa en mi arsenal”</p>
                    <Title title="Carlos M. Inversor en Criptomonedas." highlight="Carlos M." className="text-white font-bold text-[24px] md:text-[28px]"></Title>
                </div>
            </div>
        </div>  
    )
}
