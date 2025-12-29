import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Monthly Cheese Tasting",
    date: "Friday, November 20, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Student Union, Room 204",
    type: "Tasting",
    description: "Join us for our monthly cheese tasting event! Sample artisanal cheeses from around the world, learn about cheese making processes, and meet fellow cheese enthusiasts."
  },
  {
    id: 2,
    title: "Cheese & Wine Pairing Workshop",
    date: "Saturday, December 5, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Campus Center, Room 301",
    type: "Workshop",
    description: "Learn the art of pairing cheese with wine! Our expert sommeliers will guide you through the perfect combinations and teach you the principles of flavor pairing."
  },
  {
    id: 3,
    title: "Holiday Cheese Board Social",
    date: "Wednesday, December 18, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Student Union, Main Hall",
    type: "Social",
    description: "Celebrate the holidays with beautiful cheese boards! Learn how to create stunning cheese presentations and enjoy festive snacks with the club."
  },
  {
    id: 4,
    title: "Artisanal Cheese Making Demo",
    date: "Friday, January 15, 2026",
    time: "5:30 PM - 7:30 PM",
    location: "Science Building, Lab 102",
    type: "Workshop",
    description: "Ever wondered how cheese is made? Join us for a hands-on demonstration where you'll learn the science and art of cheese making from a local artisan."
  }
];

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-yellow-900 mb-4">Upcoming Cheese Club Events</h2>
        <p className="text-xl text-yellow-800">
          Join us for exciting cheese-related activities throughout the year!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card 
            key={event.id}
            className="border-4 border-yellow-700 bg-amber-50 hover:shadow-xl transition-shadow"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-2xl text-yellow-900">{event.title}</CardTitle>
                <span className="bg-yellow-700 text-white px-3 py-1 rounded-full text-sm">
                  {event.type}
                </span>
              </div>
              <CardDescription className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-yellow-800">
                  <Calendar size={18} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-800">
                  <Clock size={18} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-800">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-900">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-yellow-800 text-amber-50 p-8 rounded-lg text-center mt-12">
        <h3 className="text-2xl mb-4">Want to suggest an event?</h3>
        <p className="mb-4">
          We're always looking for new and exciting cheese-related activities! 
          Send us your ideas at cheeseclub@university.edu
        </p>
      </div>
    </div>
  );
}
