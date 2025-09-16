import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";
import { PageLayout } from "@/components/Layout/PageLayout";

const Monasteries = () => {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      location: "Rumtek, East Sikkim",
      yearEstablished: 1966,
      description: "The largest monastery in Sikkim and the main seat of the Karma Kagyu lineage. Known as the 'Dharma Chakra Centre', it houses precious Buddhist artifacts and sacred relics.",
      details: "Rumtek Monastery is famous for its golden stupa and the sacred Black Crown ceremony. The monastery complex includes a shrine hall, monastery, and educational institute.",
      image: "/api/placeholder/600/400",
      significance: "Worldwide headquarters of the Karma Kagyu order",
      highlights: ["Golden Stupa", "Sacred Black Crown", "Buddhist Institute"]
    },
    {
      name: "Pemayangtse Monastery",
      location: "Pelling, West Sikkim",
      yearEstablished: 1705,
      description: "One of the oldest and most significant monasteries in Sikkim, belonging to the Nyingma school of Tibetan Buddhism. Offers stunning views of Kangchenjunga.",
      details: "The name means 'Perfect Sublime Lotus' and only monks of pure Tibetan lineage are allowed to reside here. The monastery contains ancient Buddhist sculptures and paintings.",
      image: "/api/placeholder/600/400",
      significance: "Premier monastery of the Nyingma school in Sikkim",
      highlights: ["Ancient Buddhist sculptures", "Kangchenjunga views", "Pure lineage tradition"]
    },
    {
      name: "Tashiding Monastery",
      location: "Tashiding, West Sikkim",
      yearEstablished: 1641,
      description: "Perched on a hilltop between two rivers, this sacred site is believed to cleanse sins of pilgrims. The monastery is renowned for its annual Bhumchu festival.",
      details: "Legend says that just a glimpse of this monastery can cleanse one's sins. The sacred Bhumchu ceremony predicts the coming year's events based on the water level in the sacred pot.",
      image: "/api/placeholder/600/400",
      significance: "Sacred site for sin purification",
      highlights: ["Bhumchu Festival", "Hilltop location", "Sacred water ceremony"]
    },
    {
      name: "Enchey Monastery",
      location: "Gangtok, East Sikkim",
      yearEstablished: 1909,
      description: "Located above Gangtok, this monastery is significant for the Cham dances performed during the annual festival. The name means 'Solitary Temple'.",
      details: "Built on the site blessed by Lama Druptob Karpo, the monastery is an important center for Nyingma teachings and practices in the capital region.",
      image: "/api/placeholder/600/400",
      significance: "Important Nyingma center near the capital",
      highlights: ["Cham dances", "Capital city location", "Annual festivals"]
    },
    {
      name: "Ralang Monastery",
      location: "Ralang, South Sikkim",
      yearEstablished: 1768,
      description: "Known for its sacred Kagyed dance and the preservation of ancient Buddhist traditions. The monastery follows the Kagyu school of Tibetan Buddhism.",
      details: "The monastery is famous for its masked dances and houses ancient manuscripts and religious artifacts. It plays a crucial role in preserving Sikkimese Buddhist culture.",
      image: "/api/placeholder/600/400",
      significance: "Center for Kagyu school teachings",
      highlights: ["Kagyed dance", "Ancient manuscripts", "Cultural preservation"]
    },
    {
      name: "Labrang Monastery",
      location: "Yuksom, West Sikkim",
      yearEstablished: 1701,
      description: "One of the oldest monasteries in Sikkim, built near the first capital of Sikkim. It holds great historical significance in the state's Buddhist heritage.",
      details: "Located in the historic town of Yuksom where the first Chogyal was crowned, this monastery represents the beginning of organized Buddhism in Sikkim.",
      image: "/api/placeholder/600/400",
      significance: "Historical significance in Sikkim's Buddhist heritage",
      highlights: ["First capital location", "Historical importance", "Traditional architecture"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Sacred Monasteries of Sikkim
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Discover the magnificent Buddhist monasteries that have preserved 
            centuries of spiritual wisdom in the Himalayan kingdom
          </p>
        </div>
      </section>

      {/* Monasteries Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {monasteries.map((monastery, index) => (
              <Card 
                key={monastery.name} 
                className="overflow-hidden hover:shadow-monastery transition-all duration-300 border-0 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={monastery.image} 
                    alt={monastery.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-serif text-2xl text-foreground">
                      {monastery.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      Est. {monastery.yearEstablished}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {monastery.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {monastery.yearEstablished}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {monastery.description}
                  </CardDescription>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Cultural Significance
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {monastery.significance}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {monastery.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Historical Details</h4>
                    <p className="text-sm text-muted-foreground">
                      {monastery.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Plan Your Spiritual Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to experience the tranquility and wisdom of these sacred places? 
            Explore our transportation guide and cultural calendar to plan your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              View Transportation
            </button>
            <button className="border border-border bg-background hover:bg-muted text-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Cultural Calendar
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Monasteries;