import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';


interface Cheese {
  id: number;
  name: string;
  origin: string;
  type: string;
  description: string;
  image: string;
  age: string;
  flavor: string;
}

const cheeses: Cheese[] = [
  {
    id: 1,
    name: "Aged Cheddar",
    origin: "England",
    type: "Hard",
    age: "18 months",
    flavor: "Sharp, nutty, and complex",
    description: "A classic English cheddar aged to perfection. This cheese develops a crystalline texture and deep, savory flavor that pairs beautifully with crackers and fruit.",
    image: "🧀"
  },
  {
    id: 2,
    name: "Brie de Meaux",
    origin: "France",
    type: "Soft",
    age: "4-6 weeks",
    flavor: "Buttery, earthy, and creamy",
    description: "Known as the 'Queen of Cheeses,' this French delicacy has a soft, edible rind and a creamy interior. Best served at room temperature with baguette.",
    image: "🧀"
  },
  {
    id: 3,
    name: "Parmigiano-Reggiano",
    origin: "Italy",
    type: "Hard",
    age: "24 months",
    flavor: "Umami-rich, fruity, and nutty",
    description: "The King of Italian cheeses. This PDO-protected cheese from Emilia-Romagna is perfect for grating over pasta or enjoying in chunks with balsamic vinegar.",
    image: "🧀"
  },
  {
    id: 4,
    name: "Gouda",
    origin: "Netherlands",
    type: "Semi-hard",
    age: "12 months",
    flavor: "Sweet, caramel, and slightly nutty",
    description: "A Dutch masterpiece with a smooth texture and sweet undertones. As it ages, it develops crunchy protein crystals and a deeper flavor.",
    image: "🧀"
  },
  {
    id: 5,
    name: "Roquefort",
    origin: "France",
    type: "Blue",
    age: "3 months",
    flavor: "Tangy, salty, and bold",
    description: "A sheep's milk blue cheese from southern France, aged in limestone caves. Its distinctive blue veins and creamy texture make it a gourmet favorite.",
    image: "🧀"
  },
  {
    id: 6,
    name: "Manchego",
    origin: "Spain",
    type: "Semi-hard",
    age: "6 months",
    flavor: "Slightly salty, sweet, and nutty",
    description: "Made from sheep's milk in La Mancha, this Spanish cheese has a distinctive zigzag pattern on its rind and pairs wonderfully with quince paste.",
    image: "🧀"
  },
  {
    id: 7,
    name: "Gruyère",
    origin: "Switzerland",
    type: "Hard",
    age: "12 months",
    flavor: "Sweet, nutty, with a hint of earthiness",
    description: "A Swiss classic essential for fondue. This cheese has a dense, slightly grainy texture and complex flavor that intensifies with age.",
    image: "🧀"
  },
  {
    id: 8,
    name: "Camembert",
    origin: "France",
    type: "Soft",
    age: "3 weeks",
    flavor: "Rich, buttery, and mushroomy",
    description: "Similar to Brie but with a more intense flavor. This Normandy cheese becomes increasingly creamy as it ripens and is delicious when baked.",
    image: "🧀"
  },
  /*{
    id: 9,
    name: "Feta",
    origin: "Greece",
    type: "Soft/Brined",
    age: "2 months",
    flavor: "Tangy, salty, and refreshing",
    description: "A Greek staple made from sheep's milk or a blend of sheep and goat's milk. Stored in brine, it's perfect for salads and Mediterranean dishes.",
    image: "🧀"
  }*/
];

export default function CheeseDisplay() {
  const [selectedCheese, setSelectedCheese] = useState<Cheese | null>(null);

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://pngimg.com/uploads/refrigerator/refrigerator_PNG101546.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        minWidth: '1200px',
        minHeight: '1200px'
      }}
    >
      {/* Sticky Notes */}
      <div className="px-32 max-w-lg mx-auto" style={{ paddingTop: '450px', maxWidth: '350px', maxHeight: '100px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cheeses.map((cheese) => (
            <div
              key={cheese.id}
              onClick={() => setSelectedCheese(cheese)}
              className="note group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-yellow-700"
            >
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-white/70 group-hover:bg-white/85 transition-opacity duration-300 z-0"></div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2 filter drop-shadow-sm">{cheese.image}</div>

                <h3 className="text-yellow-900 font-bold text-lg leading-tight mb-1">
                  {cheese.name}
                </h3>

                <p className="text-xs font-semibold text-yellow-800 uppercase tracking-wide">
                  {cheese.origin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cheese Details Dialog */}
      <Dialog open={!!selectedCheese} onOpenChange={() => setSelectedCheese(null)}>
        <DialogContent className="bg-amber-50 border-4 border-yellow-800 max-w-2xl">
          {selectedCheese && (
            <>
              <DialogHeader>
                <div className="text-6xl text-center mb-4">{selectedCheese.image}</div>
                <DialogTitle className="text-3xl text-yellow-900 text-center">
                  {selectedCheese.name}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  <div className="space-y-4 mt-4 text-yellow-900">
                    <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg border-2 border-yellow-700">
                      <div>
                        <strong>Origin:</strong> {selectedCheese.origin}
                      </div>
                      <div>
                        <strong>Type:</strong> {selectedCheese.type}
                      </div>
                      <div>
                        <strong>Age:</strong> {selectedCheese.age}
                      </div>
                      <div>
                        <strong>Flavor Profile:</strong> {selectedCheese.flavor}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-yellow-700">
                      <strong>Description:</strong>
                      <p className="mt-2">{selectedCheese.description}</p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}