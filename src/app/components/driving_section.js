import Title from "./title"; 
export default function DrivingSection() {
    return (    
        <div className="grid h-full mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden bg-cover md:bg-center bg-no-repeat bg-[url('/images/driving.png')]" >
            <div className="relative h-full min-h-[400px] md:min-h-[800px]">
                <div className="flex flex-col w-full md:pb-16 md:pt-4 md:max-w-[700px] max-w-[260px] absolute top-[8%] md:top-[8%] left-1/2 -translate-x-1/2 md:left-[4%] md:-translate-x-0">
                        <div className="border-y-[2px] border-primary px-4 py-2">
                             <h2 className="text-white text-2xl font-bold md:text-[50px]/[60px]">Transforma tus finanzas</h2>
                            <Title title ="con la economomía del futuro"  highlight = "economomía del futuro"  className ="text-white text-2xl font-bold md:text-[50px]/[60px]"></Title>
                        </div>                        
                </div>
            </div>            
        </div>  
        )
} 