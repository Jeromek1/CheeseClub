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
  {
    id: 9,
    name: "Feta",
    origin: "Greece",
    type: "Soft/Brined",
    age: "2 months",
    flavor: "Tangy, salty, and refreshing",
    description: "A Greek staple made from sheep's milk or a blend of sheep and goat's milk. Stored in brine, it's perfect for salads and Mediterranean dishes.",
    image: "🧀"
  }
];

export default function CheeseDisplay() {
  const [selectedCheese, setSelectedCheese] = useState<Cheese | null>(null);

  return (
    <div>
      {/* Display Case Header */}
      <div className="bg-gradient-to-b from-yellow-800 to-yellow-700 text-amber-50 p-8 rounded-t-lg border-8 border-yellow-900 shadow-2xl">
        <h2 className="text-3xl text-center mb-2">Artisanal Cheese Display</h2>
        <p className="text-center opacity-90">Click any cheese to learn more</p>
      </div>

      {/* Display Case */}
      <div className="bg-gradient-to-b from-amber-100 to-yellow-100 p-8 rounded-b-lg border-x-8 border-b-8 border-yellow-900 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cheeses.map((cheese) => (
            <Card 
              key={cheese.id}
              onClick={() => setSelectedCheese(cheese)}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-4 border-yellow-700 hover:border-yellow-800"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-2">{cheese.image}</div>
                <CardTitle className="text-yellow-900">{cheese.name}</CardTitle>
                <CardDescription>
                  {cheese.origin} • {cheese.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">Click to learn more</p>
              </CardContent>
            </Card>
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
