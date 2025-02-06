"use client";
import Image from "next/image";
import useSWR from "swr";
import Loader from "../components/loader";


const fetcher = async (url) => {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}` },
  });

  if (!res.ok) {
    throw new Error(`Error HTTP: ${res.status}`);
  }

  return res.json();
};

export default function CryptoCarousel() {
  const { data: cryptos, error } = useSWR("/api/cryptos", fetcher, {
    refreshInterval: 300000, 
  });

   // Manejo de errores
   if (error) {
    return <div className="text-red-500 text-center py-4">Error cargando datos: {error.message}</div>;
  }

  //  Si la API devuelve `null`, `undefined` o array vacío
  if (!cryptos || cryptos.length === 0) {
    return (
      <div className="text-white text-center py-4">
        <Loader />
      </div>
    );
  }

  // Duplicamos solo si hay menos de 12 criptos
  const duplicatedCryptos = cryptos.length >= 12
  ? cryptos
  : Array.from({ length: Math.ceil(12 / cryptos.length) }, () => cryptos).flat();


  return (
    <div className="w-full overflow-hidden bg-grey py-2 h-[80px]" aria-label="Ticker de criptomonedas">
      <div className="flex h-full py-4 whitespace-nowrap animate-marquee">
        {/* crypto card */}
        {duplicatedCryptos.map((crypto, index) => (
          <div key={index} className="flex items-center gap-2 px-2 border-l-[1px] border-white">
            <div className="w-8 h-8">
              <Image src={crypto.icon || "/images/default-crypto.png"} alt={`Ícono de ${crypto.name || "criptomoneda"}`} width={32} height={32} />
            </div>
            <span className="text-[34px] font-bold text-white">
            {crypto.name || "Desconocido"}
            </span>
            <div className="flex flex-col items-start">
              <span className="text-xs text-white text-lg font-bold">
                {crypto.price ? `$${crypto.price}` : "N/A"}
              </span>
              <span className={`text-xs	text-md font-bold ${crypto.change >= 0 ? "text-green-400" : "text-red-600"}`}>
                {crypto.change ? (crypto.change >= 0 ? `+${crypto.change}` : crypto.change) : "N/A"}
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
