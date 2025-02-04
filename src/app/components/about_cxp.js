import Image from "next/image";

export default function AboutCxp() {
    return (    
        <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[540px] mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden" >
            <div className="relative h-[540px]">
                <Image src="/images/trade.png" alt="trade" width={1000} height={1000} className="absolute top-[-2%] left-[-20%] md:left-[-30%] max-w-[900] md:max-w-[1000]" />
                <Image src="/images/women.png" alt="trade" width={1200} height={1200} className="absolute bottom-[0] left-[-20%] md:left-[-8%] max-w-[1200]" />
            </div>
            <div className="flex flex-col gap-4 w-full py-16 px-16 md:pl-0">
                <div className="flex gap-4 p-2 items-start">
                    <Image src="/icons/academy.svg" alt="book icon" width={60} height={60} />
                    <h2 className="text-white font-bold text-[36px]/[40px] md:text-[38px]/[44px]">Prepárate para el ciclo más grande de <span className="text-primary">la historia de las cryptos.</span> </h2>
                </div>
                <p className="text-white text-[24px]/[28px] backdrop-blur p-4 rounded-lg">Nuestro equipo ha transformado más de 10 años de experiencia en una rápida y sencilla curva de aprendizaje, estamos definitivamente en el mejor momento para el mercado Crypto y en CXP te traemos todo lo necesario para que tú también puedas ser parte de esto.</p>
                <button className="bg-transparent text-primary font-medium text-[24px] px-4 py-[4px] rounded-lg ml-auto border-primary border-[1px]">Empieza Ahora</button>
            </div>
        </div>  
    )
}
