import { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import CheeseDisplay from "./components/CheeseDisplay";
import CheesePriceTicker from "./components/CheesePriceTicker";
import EventsPage from "./components/EventsPage";
import AboutPage from "./components/AboutPage";

export default function App() {
  const [showEventPopup, setShowEventPopup] = useState(false);

  useEffect(() => {
    // Show popup when user first enters the website
    setShowEventPopup(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50">
      {/* Custom mouse cursor CSS */}
      <style>{`
        * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23666' d='M8 4c-2 0-3 1-3 3v6c0 2 1 3 3 3h1c0 2 1 4 2 5l1 2c1 1 2 2 4 2s3-1 4-2l1-2c1-1 2-3 2-5h1c2 0 3-1 3-3V7c0-2-1-3-3-3H8zm2 3c1 0 1 0 1 1s0 1-1 1-1 0-1-1 0-1 1-1zm12 0c1 0 1 0 1 1s0 1-1 1-1 0-1-1 0-1 1-1zm-6 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/%3E%3C/svg%3E"), auto;
        }
        button, a, [role="button"] {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23333' d='M8 4c-2 0-3 1-3 3v6c0 2 1 3 3 3h1c0 2 1 4 2 5l1 2c1 1 2 2 4 2s3-1 4-2l1-2c1-1 2-3 2-5h1c2 0 3-1 3-3V7c0-2-1-3-3-3H8zm2 3c1 0 1 0 1 1s0 1-1 1-1 0-1-1 0-1 1-1zm12 0c1 0 1 0 1 1s0 1-1 1-1 0-1-1 0-1 1-1zm-6 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/%3E%3C/svg%3E"), pointer;
        }
      `}</style>

      {/* Event Popup */}
      <Dialog
        open={showEventPopup}
        onOpenChange={setShowEventPopup}
      >
        <DialogContent className="bg-amber-50 border-4 border-yellow-800">
          <DialogHeader>
            <DialogTitle className="text-yellow-900">
              🧀 Upcoming Cheese Club Event! 🧀
            </DialogTitle>
            <DialogDescription className="text-yellow-800">
              Join us for our Monthly Cheese Tasting!
              <br />
              <br />
              <strong>When:</strong> Friday, November 20th at
              6:00 PM
              <br />
              <strong>Where:</strong> Student Union, Room 204
              <br />
              <br />
              Sample artisanal cheeses from around the world and
              meet fellow cheese enthusiasts!
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowEventPopup(false)}
            className="bg-yellow-700 hover:bg-yellow-800"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Cheese Price Ticker */}
      <CheesePriceTicker />

      {/* Header */}
      <div className="bg-yellow-900 text-amber-50 py-8 px-6 text-center shadow-lg border-b-8 border-yellow-700">
        <h1 className="text-5xl mb-2">🧀 The Cheese Club 🧀</h1>
        <p className="text-xl">
          Premium Artisanal Cheese Experience
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-yellow-800 mb-8">
            <TabsTrigger
              value="home"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-yellow-900"
            >
              Home
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-yellow-900"
            >
              Events
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-yellow-900"
            >
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <CheeseDisplay />
          </TabsContent>

          <TabsContent value="events">
            <EventsPage />
          </TabsContent>

          <TabsContent value="about">
            <AboutPage />
          </TabsContent>
        </Tabs>
      </div>

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
    </div>
  );
}