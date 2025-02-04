import Image from "next/image";

export default function HomeBanner() {
    return (    
        <div className="relative w-ful h-full md:h-[540px] bg-cover bg-center bg-no-repeat bg-[url('/images/home-banner.png')]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="relative z-10 h-full">
                {/* home banner content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 px-8 md:px-20 h-full">
                    <div className="flex flex-col gap-6 w-full md:pb-16 pt-4 max-w-[550px]">
                       
                        <div className="relative border-y-[2px] border-primary px-4 py-2 flex items-center justify-center">
                                <div className="absolute left-0 top-0 h-1/2 w-[2px] bg-primary">
                                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-primary rounded-full translate-x-[-50%]" />
                                </div>
                                <h2 className="text-white text-4xl font-black md:text-[56px]/[60px]">Lo mejor de crypto en un solo lugar.</h2>
                                <div className="absolute right-0 bottom-0 h-1/2 w-[2px] bg-primary">
                                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full translate-x-[50%]" />
                                </div>
                        </div>
                        <p className="text-white text-[28px]/[30px] backdrop-blur p-4 rounded-lg">En CXP, accede a un equipo de expertos, herramientas especializadas, formación en criptomonedas y una comunidad activa, todo lo que necesitas en un solo lugar.</p>
                        <button className="bg-primary text-white text-[28px] px-2 py-[2px] rounded-lg w-[150px] ml-auto">Registrate</button>
                    </div>
                    <div className="relative place-self-center md:place-self-end">
                        <Image src="/images/person-banner.png" alt="Banner" width={390} height={390} />
                        <Image src="/icons/button-banner.png" alt="Banner" width={80} height={80} className="absolute top-[46%] left-[15%]"/>
                    </div>  
                </div>
            </div>
        </div>   
    )
}
