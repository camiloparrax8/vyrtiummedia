import Image from "next/image";

export default function Header() {
    return (
        <>
        {/* mobile header */}
        <header className="pt-[20px] px-4 mb-[26px] md:hidden">
          <div className="p-4 flex items-center justify-between" >
            <Image src="/images/logo.svg" alt="Logo" width={170} height={50} priority/>
            <Image src="/icons/icon-menu.svg" alt="Logo" width={38} height={38} />
          </div>
         
        </header>
        {/* desktop header */}
        <header className="pt-[25px] mb-[46px] md:flex hidden w-full md:px-4">
          <div className="flex items-center px-12 w-full gap-16 ">
              <Image src="/images/logo.svg" alt="Logo" width={250} height={50} priority/>
              <nav className="flex-grow">
                <ul className="flex justify-between w-full">
                  <li><a href="#" className="font-bold">Inicio</a></li>
                  <li><a href="#" className="text-[20px] inline-block transition-transform duration-300 ease-in-out hover:scale-110">CXP Academia</a></li>
                  <li><a href="#" className="text-[20px] inline-block transition-transform duration-300 ease-in-out hover:scale-110">Opera</a></li>
                  <li><a href="#" className="text-[20px] inline-block transition-transform duration-300 ease-in-out hover:scale-110">CXP Blog <span className="text-[14px]">▼</span> </a></li>
                  <li><a href="#" className="text-[20px] inline-block transition-transform duration-300 ease-in-out hover:scale-110">Precios</a></li>
                  <li><a href="#" className="text-[20px] inline-block transition-transform duration-300 ease-in-out hover:scale-110">Hype</a></li>
                </ul>
              </nav>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-4 py-[6px] rounded-lg">Registrate</button>
                <button className="bg-secondary text-background px-4 py-[6px] rounded-lg">Iniciar Sesión</button>
              </div>
          </div>
          
        </header>
      </>
    );
}
