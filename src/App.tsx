import { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './components/ui/dialog';
import { Button } from './components/ui/button';
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Calendar,
  Info,
} from "lucide-react";

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

// Import your actual components here
import CheesePriceTicker from './components/CheesePriceTicker';
import EventsPage from './components/EventsPage';
import AboutPage from './components/AboutPage';

export default function App() {
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [selectedCheese, setSelectedCheese] = useState<Cheese | null>(null);
  const [currentTab, setCurrentTab] = useState("home");

  useEffect(() => {
    setShowEventPopup(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      {/* Collage Background Layer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage: "url('/src/assets/image3.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed',

      }}></div>
      {/* Custom mouse cursor CSS */}
      <style>{`
        * {
          cursor: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFDA44' d='M0,0v278.261h100.174v100.174H0V512h512V0H0z M155.826,155.826h-44.522v-44.522h44.522V155.826z M345.043,400.696h-66.783v-66.783h66.783V400.696z M400.696,211.478H300.522V111.304h100.174V211.478z'/%3E%3Cpath d='M278.261 400.696h66.783v33.391h-66.783zM100.174 278.261h33.391v100.174h-33.391zM478.609 0H33.391L0 0v33.391v211.479v33.391h33.391h66.783v-33.391H33.391v-211.48h445.218v445.218H33.391v-66.783h66.783v-33.391H33.391H0v33.391v66.783v33.391h33.391h445.218h33.391V0h-33.391zM300.522 77.913h100.174v33.391H300.522zM400.696 111.304h33.391v100.174h-33.391zM267.13 111.304h33.391v100.174H267.13zM300.522 211.478h100.174v33.391H300.522zM111.304 77.913h44.522v33.391h-44.522zM77.913 111.304h33.391v44.522H77.913zM111.304 155.826h44.522v33.391h-44.522zM155.826 111.304h33.391v44.522h-33.391zM278.261 300.522h66.783v33.391h-66.783zM345.043 333.913h33.391v66.783h-33.391zM244.87 333.913h33.391v66.783H244.87z'/%3E%3C/svg%3E") 0 0, auto !important;
        }
        button, a, [role="button"] {
          cursor: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cg%3E%3Cpath stroke='null' id='svg_1' fill='%23FFDA44' d='m-0.66665,0.66665l0,278.261l100.174,0l0,100.174l-100.174,0l0,133.565l386.82623,-0.49999l6.75158,-57.58175l68.74986,-59.5817l49.67233,-0.33333l0,-394.00324m-356.174,155.826l-44.522,0l0,-44.522l44.522,0l0,44.522zm189.217,244.87l-66.783,0l0,-66.783l66.783,0l0,66.783zm55.653,-189.218l-100.174,0l0,-100.174l100.174,0l0,100.174z'/%3E%3Crect id='svg_2' height='33.391' width='66.783' y='400.696' x='278.261'/%3E%3Crect id='svg_3' height='100.174' width='33.391' y='278.261' x='100.174'/%3E%3Crect id='svg_5' height='33.391' width='100.174' y='77.24635' x='300.522'/%3E%3Crect id='svg_6' height='100.174' width='33.391' y='111.304' x='400.696'/%3E%3Crect stroke='null' id='svg_7' height='100.174' width='33.391' y='111.304' x='267.13'/%3E%3Crect id='svg_8' height='33.391' width='100.174' y='211.478' x='300.522'/%3E%3Crect id='svg_9' height='33.391' width='44.522' y='77.913' x='111.304'/%3E%3Crect id='svg_10' height='44.522' width='33.391' y='111.304' x='77.913'/%3E%3Crect id='svg_11' height='33.391' width='44.522' y='155.826' x='111.304'/%3E%3Crect id='svg_12' height='44.522' width='33.391' y='111.304' x='155.826'/%3E%3Crect id='svg_13' height='33.391' width='66.783' y='300.522' x='278.261'/%3E%3Cpath id='svg_14' d='m345.043,333.91299l33.391,0l0,66.783l-33.391,0l0,-66.783z'/%3E%3Crect id='svg_15' height='66.783' width='33.391' y='333.913' x='244.87'/%3E%3Cline stroke='null' fill='none' id='svg_16' y2='276.99999' x2='179.99999' y1='247.99999' x1='100.99999'/%3E%3Crect id='svg_20' height='66.783' width='33.391' y='423.33088' x='359.54196'/%3E%3Crect id='svg_22' height='66.783' width='33.391' y='375.91093' x='411.8745'/%3E%3Crect transform='rotate(90 478.568 392.804)' id='svg_23' height='66.783' width='33.391' y='359.41246' x='461.87201'/%3E%3Crect id='svg_24' height='33' width='67' y='423.66604' x='378.00093'/%3E%3Crect stroke='null' id='svg_32' height='292.16873' width='33.391' y='-13.35922' x='-0.19599'/%3E%3Crect stroke='null' id='svg_33' height='33.391' width='502.82963' y='-0.08486' x='32.52936'/%3E%3Crect stroke='null' id='svg_34' height='350.16716' width='33.391' y='29.30625' x='479.36051'/%3E%3Crect stroke='null' id='svg_35' height='33.391' width='393.4993' y='479.47064' x='-1'/%3E%3Crect stroke='null' id='svg_36' height='33.391' width='69.4496' y='245.85683' x='32.26774'/%3E%3Crect stroke='null' id='svg_37' height='33.391' width='100.78207' y='379.85316' x='-0.39803'/%3E%3Crect id='svg_38' height='66.783' width='33.391' y='413.24415' x='-1.7899'/%3E%3C/g%3E%3C/svg%3E") 0 0, auto !important;
        }

        `}</style>

      {/* Event Popup */}
      <Dialog open={showEventPopup} onOpenChange={setShowEventPopup}>
        <DialogContent
          style={{
            backgroundImage: "url('/src/assets/popup.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundColor: 'transparent',
            boxSizing: 'border-box', // make border visible
            border: '4px solid white', // ensure border shows  // override Radix background
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-black-900">
              Upcoming Cheese Club Event!
            </DialogTitle>
            <DialogDescription className="text-black-800">
              Join us for our Monthly Cheese Tasting!
              <br />
              <br />
              <strong>When: Friday, November 20th at 6:00 PM</strong>
              <br />
              <strong>Where: Student Union, Room 204</strong>
              <br />
              <br />
              Sample artisanal cheeses from around the world and meet fellow cheese enthusiasts!
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowEventPopup(false)}
            style={{
              backgroundColor: 'black',
              color: 'white',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#333')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'black')
            }
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

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

      {/* Cheese Price Ticker */}
      <CheesePriceTicker />

      {/* Header */}
      <div className="text-black-50 py-8 px-6 text-center">
        <h1 className="text-5xl mb-2"> The Cheese Club </h1>
        <p className="text-xl">Premium Artisanal Cheese Experience</p>
      </div>

      {/* Main Content */}
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsContent value="home">
          {/* Fridge with Cheese Display */}
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
            {/* Fridge Magnets - Freezer Section */}
            <div className="flex justify-center gap-8 pt-8 pb-4"
              style={{
                paddingRight: '150px',
                paddingTop: '50px'
              }}>
              <button
                className="magnet"
                onClick={() => setCurrentTab("about")}
              >
                <img
                  src="/src/assets/ABOUTdrawing.png"
                  alt="Events"
                  style={{ width: '200px', height: 'auto', display: 'block', cursor: 'inherit' }}
                />

              </button>
            </div>
            <div className="flex justify-center gap-8 pt-8 pb-4" style={{ paddingLeft: '150px' }}>
              <button
                className="magnet-image"
                onClick={() => setCurrentTab("events")}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  lineHeight: 0,

                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src="/src/assets/fridgemagnets.png"
                  alt="Events"
                  style={{ width: '300px', height: 'auto', rotate: '345deg', display: 'block', cursor: 'inherit' }}
                />
              </button>
            </div>

            {/* Cheese Sticky Notes */}
            <div className="px-32 max-w-lg mx-auto" style={{ paddingTop: '85px', maxWidth: '350px', maxHeight: '100px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cheeses.map((cheese) => (
                  <button
                    key={cheese.id}
                    onClick={() => setSelectedCheese(cheese)}
                    className="note group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-yellow-700"
                  >
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-white/70 group-hover:bg-white/85 transition-opacity duration-300 z-0"></div>

                    {/* TEXT CONTENT */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">


                      <h3 className="text-black-900 font-bold text-lg leading-tight mb-1">
                        {cheese.name}
                      </h3>

                      <p className="text-xs font-semibold text-black-800 uppercase tracking-wide">
                        {cheese.origin}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <EventsPage />
          </div>
        </TabsContent>

        <TabsContent value="about">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <AboutPage />
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-yellow-900 text-amber-50 py-8 mt-16 border-t-8 border-yellow-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.instagram.com/ru_cheezin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com/cheeseclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Twitter size={24} />
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/cheeseclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:cheeseclub@university.edu"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a
                href="https://getinvolved.university.edu/cheeseclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <span>GetInvolved</span>
              </a>
            </div>
          </div>
          <div className="text-center text-sm opacity-75">
            © 2025 The Cheese Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div >
  );
}