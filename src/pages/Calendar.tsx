import { Calendar as CalendarIcon, Star, Users, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/Layout/PageLayout";

const Calendar = () => {
  const festivals = [
    {
      name: "Losar",
      date: "February 10-12, 2024",
      type: "Tibetan New Year",
      description: "The most important festival in Sikkim, celebrating the Tibetan New Year with traditional dances, prayers, and feasts.",
      location: "All monasteries across Sikkim",
      significance: "Marks the beginning of the new year according to the Tibetan calendar",
      traditions: ["Cham dances", "Traditional feasts", "Prayer ceremonies", "Family gatherings"],
      icon: "🎊"
    },
    {
      name: "Saga Dawa",
      date: "May 23, 2024",
      type: "Buddha's Enlightenment",
      description: "Commemorates Buddha's birth, enlightenment, and death. One of the most sacred days for Buddhists worldwide.",
      location: "Rumtek, Pemayangtse, and other major monasteries",
      significance: "Triple blessed day in Buddhist calendar",
      traditions: ["Merit-making activities", "Prayer flag hoisting", "Circumambulation", "Charitable acts"],
      icon: "🙏"
    },
    {
      name: "Pang Lhabsol",
      date: "August 15, 2024",
      type: "Guardian Deity Festival",
      description: "Unique to Sikkim, celebrating Mount Kangchenjunga as the guardian deity of the state.",
      location: "Tashiding Monastery and various locations",
      significance: "Honors the sacred mountain and state's protector",
      traditions: ["Warrior dances", "Traditional archery", "Mask dances", "Mountain worship"],
      icon: "⛰️"
    },
    {
      name: "Drupka Teshi",
      date: "July 28, 2024",
      type: "First Sermon Day",
      description: "Celebrates Buddha's first sermon at Sarnath, marking the beginning of his teaching journey.",
      location: "All Buddhist monasteries",
      significance: "Commemorates the turning of the first wheel of dharma",
      traditions: ["Dharma teachings", "Community prayers", "Meditation sessions", "Religious discussions"],
      icon: "📿"
    },
    {
      name: "Bhumchu",
      date: "February 24, 2024",
      type: "Sacred Water Festival",
      description: "A unique festival at Tashiding Monastery where sacred water is distributed to predict the coming year.",
      location: "Tashiding Monastery",
      significance: "Prophetic ceremony using sacred water",
      traditions: ["Water blessing ceremony", "Predictions for the year", "Pilgrimage", "Merit accumulation"],
      icon: "💧"
    },
    {
      name: "Dashain",
      date: "October 10-20, 2024",
      type: "Hindu-Buddhist Festival",
      description: "A major festival celebrating the victory of good over evil, observed by both Hindu and Buddhist communities.",
      location: "Throughout Sikkim",
      significance: "Victory of goddess Durga over demon Mahishasura",
      traditions: ["Family reunions", "Traditional games", "Feast preparations", "Cultural performances"],
      icon: "🎭"
    },
    {
      name: "Tihar/Deepawali",
      date: "November 1-5, 2024",
      type: "Festival of Lights",
      description: "Five-day festival honoring different animals and relationships, celebrated with lights and decorations.",
      location: "All communities across Sikkim",
      significance: "Celebrates the bond between humans, animals, and nature",
      traditions: ["Oil lamp lighting", "Animal worship", "Brother-sister bonding", "Traditional sweets"],
      icon: "🪔"
    },
    {
      name: "Lhabab Duchen",
      date: "November 12, 2024",
      type: "Buddha's Descent",
      description: "Celebrates Buddha's descent from heaven after teaching his mother, one of the four major Buddhist festivals.",
      location: "Major Buddhist monasteries",
      significance: "Commemorates Buddha's return to earth",
      traditions: ["Special prayers", "Merit multiplication day", "Generous offerings", "Community gatherings"],
      icon: "☁️"
    }
  ];

  const monthlyEvents = [
    { month: "January", events: ["Winter meditation retreats", "New Year preparations"] },
    { month: "February", events: ["Losar celebrations", "Bhumchu festival"] },
    { month: "March", events: ["Spring prayers", "Monastery renovations"] },
    { month: "April", events: ["Buddha Jayanti preparations", "Spring cleaning rituals"] },
    { month: "May", events: ["Saga Dawa", "Buddha Purnima"] },
    { month: "June", events: ["Monsoon prayers", "Rain retreat begins"] },
    { month: "July", events: ["Drupka Teshi", "Summer teachings"] },
    { month: "August", events: ["Pang Lhabsol", "Independence Day"] },
    { month: "September", events: ["Autumn festivals", "Harvest celebrations"] },
    { month: "October", events: ["Dashain", "Post-harvest rituals"] },
    { month: "November", events: ["Tihar/Deepawali", "Lhabab Duchen"] },
    { month: "December", events: ["Year-end prayers", "Winter preparations"] }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Cultural Calendar
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Experience the sacred festivals and celebrations that bring 
            Sikkim's monasteries to life throughout the year
          </p>
        </div>
      </section>

      {/* Monthly Overview */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Year-Round Celebrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Monthly overview of religious and cultural events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {monthlyEvents.map((month, index) => (
              <Card key={month.month} className="hover:shadow-lg transition-shadow border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                    {month.month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {month.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Major Festivals & Celebrations
            </h2>
            <p className="text-xl text-muted-foreground">
              Sacred occasions that illuminate Sikkim's spiritual heritage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <Card 
                key={festival.name} 
                className="overflow-hidden hover:shadow-monastery transition-all duration-300 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl" role="img" aria-label={festival.name}>
                        {festival.icon}
                      </span>
                      <div>
                        <CardTitle className="font-serif text-2xl text-foreground">
                          {festival.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {festival.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {festival.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {festival.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {festival.description}
                  </CardDescription>
                  
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Significance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {festival.significance}
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Traditional Activities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {festival.traditions.map((tradition) => (
                        <Badge key={tradition} variant="outline" className="text-xs justify-start">
                          {tradition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Plan Your Festival Visit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the magic of Sikkim's festivals firsthand. Plan your journey 
            to coincide with these spectacular celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Transportation Guide
            </button>
            <button className="border border-border bg-background hover:bg-muted text-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Find Accommodations
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Calendar;