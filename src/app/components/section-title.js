import Image from "next/image";

export default function SectionTitle({ title, highlight, icon_url }) {

    const parts = title.split(new RegExp(`(${highlight})`, "gi"));

    return (
        <div className="w-full">
            <div className="flex flex-row gap-2 md:gap-4 items-center justify-between mb-10">
                <div className="flex gap-4 flex-row items-center text-center">
                    <Image src={icon_url} alt="icon profit" width={60} height={63} className="md:w-[90px] md:h-[95px]" />
                    <h2 className="font-bold text-[24px] md:text-[52px] leading-tight text-left md:text-center te">
                        {parts.map((part, index) =>
                            part.toLowerCase() === highlight.toLowerCase() ? (
                            <span key={index} className="text-primary">
                                {part}
                            </span>
                            ) : (
                            <span key={index}>{part}</span>
                            )
                        )}
                    </h2>
                </div>
                {/* title line */}
                <div className="flex items-center justify-start w-[20%] md:w-[60%] mt-4 md:mt-0 flex-nowrap">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0"></div>
                    <div className="flex-1 border-t-2 border-primary"></div>
                </div>
            </div>
        </div>
    );
} 
