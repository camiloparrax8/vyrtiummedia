"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CryptoCarousel() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/cryptos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}`,
        },
      });

      if (res.status === 401) {
        console.error("Unauthorized access");
        return;
      }

      const data = await res.json();
      setCryptos(data);
    }

    fetchData();
    // Update data every 30 seconds
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedCryptos = Array.from({ length: 4 }, () => cryptos).flat();

  return (
    <div className="w-full overflow-hidden bg-grey py-2 h-[80px]">
      <div className="flex h-full py-4 whitespace-nowrap animate-marquee">
        {/* crypto card */}
        {duplicatedCryptos.map((crypto, index) => (
          <div key={index} className="flex items-center gap-2 px-2 border-l-[1px] border-white">
            <div className="w-8 h-8">
              <Image src={crypto.icon} alt={crypto.name} width={32} height={32} />
            </div>
            <span className="text-[34px] font-bold text-white">
              {crypto.name}
            </span>
            <div className="flex flex-col items-start">
              <span className="text-xs text-white text-lg font-bold">
                {crypto.price}
              </span>
              <span className={`text-xs	text-md font-bold ${crypto.change >= 0 ? "text-green-400" : "text-red-600"}`}>
                {crypto.change >= 0 ? `+${crypto.change}` : crypto.change}
              </span>
            </div>
            <span className={`mt-auto text-xs ${crypto.change >= 0 ? "text-green-400" : "text-red-600"}`}>
              {crypto.change >= 0 ? "▲" : "▼"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
