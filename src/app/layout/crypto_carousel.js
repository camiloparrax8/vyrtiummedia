import CryptoTicker from "../components/crypto_ticker";

export default function CryptoCarousel() {


  return (
    <div className="w-full overflow-hidden bg-grey py-2 h-[80px]" aria-label="Ticker de criptomonedas">
      <div className="flex h-full py-4 whitespace-nowrap animate-marquee">
        {/* crypto card */}
       <CryptoTicker />
      </div>
    </div>
  );
}
