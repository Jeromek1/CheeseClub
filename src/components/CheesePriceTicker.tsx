import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CheesePrice {
  name: string;
  price: number;
  change: number;
  symbol: string;
}

export default function CheesePriceTicker() {
  const [prices, setPrices] = useState<CheesePrice[]>([
    { name: "Cheddar", price: 12.50, change: 0, symbol: "CHD" },
    { name: "Brie", price: 18.75, change: 0, symbol: "BRI" },
    { name: "Parmigiano", price: 24.99, change: 0, symbol: "PRM" },
    { name: "Gouda", price: 15.25, change: 0, symbol: "GDA" },
    { name: "Roquefort", price: 22.50, change: 0, symbol: "RQF" },
    { name: "Manchego", price: 19.99, change: 0, symbol: "MNC" },
    { name: "Gruyère", price: 21.75, change: 0, symbol: "GRY" },
    { name: "Camembert", price: 16.50, change: 0, symbol: "CMB" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices => 
        currentPrices.map(cheese => {
          const changePercent = (Math.random() - 0.5) * 5; // -2.5% to +2.5%
          const newPrice = cheese.price * (1 + changePercent / 100);
          return {
            ...cheese,
            price: Math.max(1, newPrice), // Ensure price doesn't go below $1
            change: changePercent
          };
        })
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 py-3 overflow-hidden border-b-4 border-yellow-700">
      <div className="flex animate-ticker">
        {[...prices, ...prices].map((cheese, index) => (
          <div 
            key={`${cheese.symbol}-${index}`} 
            className="flex items-center gap-3 px-6 whitespace-nowrap"
          >
            <span className="font-mono">{cheese.symbol}</span>
            <span className="font-mono">${cheese.price.toFixed(2)}</span>
            <span className={`flex items-center gap-1 ${
              cheese.change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {cheese.change >= 0 ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              <span className="font-mono">
                {cheese.change >= 0 ? '+' : ''}{cheese.change.toFixed(2)}%
              </span>
            </span>
            <span className="text-gray-600 mx-2">|</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
