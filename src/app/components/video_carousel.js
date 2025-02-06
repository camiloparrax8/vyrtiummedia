  import Image from "next/image";


  export default function VideoCarousel() {
    return (
      <div className="flex flex-col gap-2 absolute top-0 left-[5%] p-4  bg-black bg-opacity-25 animate-scroll z-0">
        <Image src="/images/reproductor1.png" alt="Video" width={300} height={300} />
        <Image src="/images/reproductor2.png" alt="Video" width={300} height={300} />  
        <Image src="/images/reproductor1.png" alt="Video" width={300} height={300} />
        <Image src="/images/reproductor2.png" alt="Video" width={300} height={300} /> 
      </div>
    );
  }
