import Image from "next/image";

export default function Card({title, content, image}) {
    return (
        <div className="bg-grey border-[1px] border-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-60">
                <Image src={image} alt={title} layout="fill" objectFit="cover"/>
                <div className="absolute bottom-2 right-2 flex gap-2">
                    <button className="backdrop-blur-md bg-black/10 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1">
                        <Image  src="/icons/icon-supertrade.svg" alt="Super trade icon" width={11} height={11}/>
                        Super trade
                    </button>
                    <button className="backdrop-blur-md bg-black/10 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1">
                        <Image src="/icons/icon-supertrade.svg" alt="Super trade icon" width={11} height={11}/>
                        Super trade
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{content}</p>
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-1 border border-white text-white rounded-md bg-transparent hover:bg-white hover:text-black transition">
                    Ver más
                    </button>
                </div>
            </div>            
        </div>
    );
} 
