export async function GET(req) {
    
    //validate the authorization header
    const authHeader = req.headers.get("authorization");
  
    const SECRET_KEY = process.env.KEY; 
  
    if (!authHeader || authHeader !== `Bearer ${SECRET_KEY}`) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    //return the cryptos
    const cryptos = [
        { name: "ETH", price: 25.52, change: +0.60, icon: "/images/ethereum.png", color: "text-white" },
        { name: "SOL", price: 20.52, change: +0.60, icon: "/images/sol.png", color: "text-white" },
        { name: "BNB", price: 20.52, change: +0.60, icon: "/images/bnb.png", color: "text-white" },
        { name: "DGE", price: 55.20, change: -0.60, icon: "/images/dgecoin.png", color: "text-white" },
        { name: "BTC", price: 55.23, change: +0.60, icon: "/images/btc.png", color: "text-white" },
      ];
      
  
    return new Response(JSON.stringify(cryptos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  