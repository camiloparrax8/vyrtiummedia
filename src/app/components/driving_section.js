import Title from "./title"; 
export default function DrivingSection() {
    return (    
        <div className="grid h-full mt-8 mx-8 md:mx-20 border-white border-[1px] rounded-2xl overflow-hidden bg-cover md:bg-center bg-no-repeat bg-[url('/images/driving.png')]" >
            <div className="relative h-full min-h-[400px] md:min-h-[600px]">
                <div className="flex flex-col w-full md:pb-16 md:pt-2 md:max-w-[650px] max-w-[260px] absolute top-[8%] md:top-[8%] left-1/2 -translate-x-1/2 md:left-[4%] md:-translate-x-0">
                        <div className="relative border-y-[2px] border-primary px-4 py-2">
                            <h2 className="text-white text-2xl font-bold md:text-[40px]/[40px]">Transforma tus finanzas</h2>
                            <Title title ="con la economomía del futuro"  highlight = "economomía del futuro"  className ="text-white text-2xl font-bold md:text-[40px]/[48px]"></Title>
                            <div className="absolute left-0 top-0 h-1/2 w-[2px] bg-primary">
                                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-primary rounded-full translate-x-[-50%]" />
                            </div>
                            <div className="absolute right-0 bottom-0 h-1/2 w-[2px] bg-primary">
                                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full translate-x-[50%]" />
                            </div> 
                        </div>              
                </div>
            </div>          
        </div>  
        )
} 