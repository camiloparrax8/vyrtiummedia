import Image from "next/image";

export default function Footer() {

    return (
        <footer className="flex flex-col text-white md:h-[400px] mt-4">
            <div className="grid grid-cols-1 md:grid-cols-5 bg-grey md:h-full pt-16 gap-8 md:px-20 pb-6 justify-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Image src="/images/logo-footer.png" alt="book icon" width={300} height={200} className="max-w-[300]" />
                    <div className="flex p-2 items-center justify-center gap-2">
                        <button className="bg-transparent">
                            <Image src="/icons/red1.png" alt="book icon" width={30} height={30} />
                        </button>
                        <button className="bg-transparent">
                            <Image src="/icons/red2.png" alt="book icon" width={35} height={35} />
                        </button>
                        <button className="bg-transparent">
                            <Image src="/icons/red3.png" alt="book icon" width={30} height={30} />
                        </button>
                        <button className="bg-transparent">
                            <Image src="/icons/red4.png" alt="book icon" width={35} height={35} />
                        </button>
                    </div>   
                </div>
                
                <form action={null} method="post" className="flex flex-col gap-2 justify-center items-center">
                    <input type="text" placeholder="Correo" className="bg-white rounded-lg h-[40px] py-2 px-2 md:w-full w-[50%]"></input>
                    <button className="bg-primary font-medium text-[18px] md:text-[24px] px-4 py-[4px] rounded-lg border-primary border-[1px] md:w-full w-[50%]">Subscribete</button>
                </form>

                <div className="flex flex-col gap-2 pl-6 md:pl-0">
                    <h2 className="text-primary font-bold text-[32px]">About Us</h2>
                    <div className="flex items-center justify-end w-[100%] mt-4 md:mt-0 flex-nowrap">
                        <div className="flex-1 border-t-2 border-primary"></div>
                        <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0"></div>
                    </div>
                    <p className="text-[14px]/[16px]">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>

                <div className="flex flex-col gap-2 pl-6 md:pl-0">
                    <h2 className="text-primary font-bold text-[32px]">Services</h2>
                    <div className="flex items-center justify-end w-[100%] mt-4 md:mt-0 flex-nowrap">
                        <div className="flex-1 border-t-2 border-primary"></div>
                        <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0"></div>
                    </div>
                    <div>
                        <p className="text-[18px]/[22px]">CXP AI</p>
                        <p className="text-[18px]/[22px]">CXP Academy</p>
                        <p className="text-[18px]/[22px]">Trading room</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 pl-6 md:pl-0">
                    <h2 className="text-primary font-bold text-[32px]">CXP Blog</h2>
                    <div className="flex items-center justify-end w-[100%] mt-4 md:mt-0 flex-nowrap">
                        <div className="flex-1 border-t-2 border-primary"></div>
                        <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0"></div>
                    </div>
                    <div>
                        <p className="text-[18px]/[22px]">Guides</p>
                        <p className="text-[18px]/[22px]">Trading Inside</p>
                        <p className="text-[18px]/[22px]">E-books</p>
                        <p className="text-[18px]/[22px]">Courses</p>
                    </div>
                </div>
            </div>

            <div className="bg-primary py-6 md:py-[30px] px-[36px]">
                <p className="text-grey text-[12px] md:text-[16px]">DESIGNED BY CXP CORP 2025 /ALL RIGTHS RESERVED</p>
            </div>
        </footer>
    )                

}