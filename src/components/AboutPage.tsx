import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Award, Heart, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-yellow-900 mb-4">About The Cheese Club</h2>
        <p className="text-xl text-yellow-800 max-w-3xl mx-auto">
          We're a community of cheese enthusiasts dedicated to exploring,
          tasting, and celebrating artisanal cheeses from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-4 border-yellow-700 bg-amber-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="text-yellow-700" size={32} />
              <CardTitle className="text-2xl text-yellow-900">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-yellow-900">
            <p>
              To bring together students and cheese lovers to share knowledge,
              appreciation, and joy for artisanal cheeses. We create a welcoming
              space for beginners and connoisseurs alike.
            </p>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow-700 bg-amber-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="text-yellow-700" size={32} />
              <CardTitle className="text-2xl text-yellow-900">What We Do</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-yellow-900">
            <p>
              Monthly tastings, educational workshops, cheese-making demonstrations,
              social events, and collaborations with local cheese makers and
              distributors to bring unique experiences to our members.
            </p>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow-700 bg-amber-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Heart className="text-yellow-700" size={32} />
              <CardTitle className="text-2xl text-yellow-900">Join Us</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-yellow-900">
            <p>
              Membership is open to all students! Whether you're a cheese expert
              or just curious, we welcome everyone. Check GetInvolved or email us
              to become a member and attend our next event.
            </p>
          </CardContent>
        </Card>

        <Card className="border-4 border-yellow-700 bg-amber-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="text-yellow-700" size={32} />
              <CardTitle className="text-2xl text-yellow-900">Learn & Grow</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-yellow-900">
            <p>
              From understanding terroir and aging processes to mastering the
              perfect cheese board, our club offers countless opportunities to
              deepen your cheese knowledge and palate.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-yellow-800 to-yellow-700 text-amber-50 p-12 rounded-lg text-center mt-12 border-8 border-yellow-900 shadow-2xl">
        <h3 className="text-3xl mb-6">🧀 Fun Cheese Facts 🧀</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-amber-50 text-yellow-900 p-4 rounded-lg">
            <strong>Did you know?</strong> There are over 1,800 different types of cheese in the world!
          </div>
          <div className="bg-amber-50 text-yellow-900 p-4 rounded-lg">
            <strong>Amazing fact:</strong> The holes in Swiss cheese are called "eyes" and are caused by bacteria!
          </div>
          <div className="bg-amber-50 text-yellow-900 p-4 rounded-lg">
            <strong>Cheese history:</strong> Ancient cheese making dates back over 4,000 years!
          </div>
        </div>
      </div>
    </div>
  );
}
