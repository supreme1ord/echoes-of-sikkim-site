import { useState } from "react";
import { MapPin, Navigation, Info, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/Layout/PageLayout";

const MapPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const monasteries = [
    {
      id: "rumtek",
      name: "Rumtek Monastery",
      coordinates: { lat: 27.3124, lng: 88.7303 },
      district: "East Sikkim",
      established: 1966,
      significance: "Largest monastery in Sikkim",
      description: "The main seat of the Karma Kagyu lineage, known as the 'Dharma Chakra Centre'.",
      highlights: ["Golden Stupa", "Sacred Black Crown", "Buddhist Institute"],
      nearbyAttractions: ["Ranka Monastery", "Lingdum Monastery"],
      bestTime: "March to June, September to December",
      duration: "2-3 hours"
    },
    {
      id: "pemayangtse",
      name: "Pemayangtse Monastery",
      coordinates: { lat: 27.2850, lng: 88.2501 },
      district: "West Sikkim",
      established: 1705,
      significance: "Premier Nyingma monastery",
      description: "One of the oldest monasteries with stunning views of Kangchenjunga.",
      highlights: ["Ancient sculptures", "Kangchenjunga views", "Pure lineage tradition"],
      nearbyAttractions: ["Rabdentse Ruins", "Khecheopalri Lake"],
      bestTime: "October to May",
      duration: "2-3 hours"
    },
    {
      id: "tashiding",
      name: "Tashiding Monastery",
      coordinates: { lat: 27.2833, lng: 88.2167 },
      district: "West Sikkim",
      established: 1641,
      significance: "Sacred purification site",
      description: "Hilltop monastery believed to cleanse sins of pilgrims.",
      highlights: ["Bhumchu Festival", "Hilltop location", "Sacred water ceremony"],
      nearbyAttractions: ["Yuksom", "Dubdi Monastery"],
      bestTime: "October to March",
      duration: "1-2 hours"
    },
    {
      id: "enchey",
      name: "Enchey Monastery",
      coordinates: { lat: 27.3389, lng: 88.6167 },
      district: "East Sikkim",
      established: 1909,
      significance: "Capital region monastery",
      description: "Important Nyingma center known for its annual Cham dances.",
      highlights: ["Cham dances", "Capital city location", "Annual festivals"],
      nearbyAttractions: ["Gangtok city", "Handicrafts Center"],
      bestTime: "Year round",
      duration: "1-2 hours"
    },
    {
      id: "ralang",
      name: "Ralang Monastery",
      coordinates: { lat: 27.2167, lng: 88.5833 },
      district: "South Sikkim",
      established: 1768,
      significance: "Kagyu school center",
      description: "Famous for its Kagyed dance and ancient Buddhist traditions.",
      highlights: ["Kagyed dance", "Ancient manuscripts", "Cultural preservation"],
      nearbyAttractions: ["Ravangla", "Buddha Park"],
      bestTime: "March to June, September to December",
      duration: "2 hours"
    }
  ];

  const touristSpots = [
    {
      name: "Gangtok",
      type: "Capital City",
      coordinates: { lat: 27.3389, lng: 88.6167 },
      description: "The vibrant capital with modern amenities and monastery access"
    },
    {
      name: "Pelling", 
      type: "Hill Station",
      coordinates: { lat: 27.2850, lng: 88.2501 },
      description: "Scenic town with views of Kangchenjunga"
    },
    {
      name: "Yuksom",
      type: "Historic Town",
      coordinates: { lat: 27.3681, lng: 88.2203 },
      description: "First capital of Sikkim and trekking base"
    },
    {
      name: "Ravangla",
      type: "Buddha Park",
      coordinates: { lat: 27.2833, lng: 88.5167 },
      description: "Home to the giant Buddha statue"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Interactive Map of Sikkim
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Navigate through the sacred monasteries and cultural sites 
            of Sikkim with our interactive guide
          </p>
        </div>
      </section>

      {/* Map Legend */}
      <section className="py-8 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Monasteries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Tourist Spots</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-monastery-gold rounded-full"></div>
              <span className="text-sm text-muted-foreground">Selected Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Container */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Area - Placeholder for interactive map */}
            <div className="order-2 lg:order-1">
              <Card className="h-[600px] border-0 shadow-monastery overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Sikkim Monastery Map
                  </CardTitle>
                  <CardDescription>
                    Click on markers to explore monastery details
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 h-full">
                  <div className="relative w-full h-[520px] bg-gradient-to-br from-monastery-cream to-background flex items-center justify-center">
                    {/* Simplified map representation */}
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
                      
                      {/* Monastery markers */}
                      {monasteries.map((monastery, index) => (
                        <div
                          key={monastery.id}
                          className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                            selectedLocation === monastery.id ? 'scale-125' : ''
                          }`}
                          style={{
                            left: `${20 + (index * 15)}%`,
                            top: `${30 + (index * 10)}%`
                          }}
                          onClick={() => setSelectedLocation(
                            selectedLocation === monastery.id ? null : monastery.id
                          )}
                        >
                          <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                            selectedLocation === monastery.id 
                              ? 'bg-monastery-gold' 
                              : 'bg-primary hover:bg-primary/80'
                          }`}>
                            <MapPin className="h-3 w-3 text-white" />
                          </div>
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {monastery.name}
                          </div>
                        </div>
                      ))}

                      {/* Tourist spot markers */}
                      {touristSpots.map((spot, index) => (
                        <div
                          key={spot.name}
                          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                          style={{
                            left: `${60 + (index * 12)}%`,
                            top: `${40 + (index * 8)}%`
                          }}
                        >
                          <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg"></div>
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {spot.name}
                          </div>
                        </div>
                      ))}

                      {/* Disclaimer */}
                      <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg">
                        <p className="text-xs text-muted-foreground">
                          <Info className="h-3 w-3 inline mr-1" />
                          Interactive map placeholder. Real coordinates would be integrated with Google Maps or OpenStreetMap.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monastery Details */}
            <div className="order-1 lg:order-2 space-y-6">
              {selectedLocation ? (
                (() => {
                  const monastery = monasteries.find(m => m.id === selectedLocation);
                  return monastery ? (
                    <Card className="border-0 shadow-glow">
                      <CardHeader className="bg-gradient-to-r from-monastery-gold/20 to-monastery-red/20">
                        <CardTitle className="font-serif text-2xl">
                          {monastery.name}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="secondary">Est. {monastery.established}</Badge>
                          <span>{monastery.district}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <CardDescription className="text-base leading-relaxed">
                          {monastery.description}
                        </CardDescription>

                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Significance</h4>
                          <p className="text-sm text-muted-foreground">{monastery.significance}</p>
                        </div>

                        <div className="bg-accent/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Highlights</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {monastery.highlights.map((highlight) => (
                              <Badge key={highlight} variant="outline" className="justify-start">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Best Time to Visit</h5>
                            <p className="text-xs text-muted-foreground">{monastery.bestTime}</p>
                          </div>
                          <div className="bg-secondary/10 p-3 rounded-lg">
                            <h5 className="font-semibold text-sm mb-1">Duration</h5>
                            <p className="text-xs text-muted-foreground">{monastery.duration}</p>
                          </div>
                        </div>

                        <div className="bg-monastery-cream p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Nearby Attractions</h4>
                          <div className="flex flex-wrap gap-2">
                            {monastery.nearbyAttractions.map((attraction) => (
                              <Badge key={attraction} variant="outline" className="text-xs">
                                {attraction}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1">
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : null;
                })()
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="font-serif text-2xl">
                      Explore Sikkim's Monasteries
                    </CardTitle>
                    <CardDescription>
                      Click on any monastery marker to learn more about its history, 
                      significance, and visiting information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      {monasteries.map((monastery) => (
                        <button
                          key={monastery.id}
                          onClick={() => setSelectedLocation(monastery.id)}
                          className="text-left p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold">{monastery.name}</div>
                          <div className="text-sm text-muted-foreground">{monastery.district}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Travel Tips */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Travel Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="text-sm">
                    <strong>Emergency Contact:</strong> +91-3592-202-595
                  </div>
                  <div className="text-sm">
                    <strong>Best Season:</strong> March to June, September to December
                  </div>
                  <div className="text-sm">
                    <strong>Entry:</strong> Most monasteries are free to enter
                  </div>
                  <div className="text-sm">
                    <strong>Photography:</strong> Ask permission before photographing inside
                  </div>
                  <div className="text-sm">
                    <strong>Dress Code:</strong> Modest clothing recommended
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MapPage;