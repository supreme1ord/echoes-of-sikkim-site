import { useState } from "react";
import { Train, Bus, Plane, Hotel, Phone, ChevronDown, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PageLayout } from "@/components/Layout/PageLayout";

const Transportation = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const transportationOptions = [
    {
      id: "train",
      title: "Train Booking",
      icon: Train,
      description: "Convenient rail connections to reach Sikkim",
      color: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
      details: {
        overview: "The nearest railway station to Sikkim is New Jalpaiguri (NJP) in West Bengal, approximately 125 km from Gangtok.",
        routes: [
          "Delhi to NJP - Rajdhani Express (17-20 hours)",
          "Kolkata to NJP - Darjeeling Mail (8-10 hours)",
          "Mumbai to NJP - LTT NJP Express (24-28 hours)",
          "Chennai to NJP - Kamrup Express (30-32 hours)"
        ],
        bookingSteps: [
          "Visit IRCTC website or app",
          "Create account and login",
          "Search for trains to New Jalpaiguri (NJP)",
          "Select travel date and class",
          "Make payment and download ticket",
          "From NJP, take shared taxi or bus to Gangtok"
        ],
        tips: "Book advance tickets (120 days prior). NJP to Gangtok takes 3-4 hours by road."
      }
    },
    {
      id: "bus",
      title: "Bus Booking",
      icon: Bus,
      description: "Affordable bus services connecting major cities",
      color: "bg-gradient-to-br from-green-500/20 to-green-600/10",
      details: {
        overview: "Multiple bus services operate from major cities to Sikkim via Siliguri and Gangtok.",
        routes: [
          "Delhi to Gangtok - 18-20 hours",
          "Kolkata to Gangtok - 12-14 hours",
          "Guwahati to Gangtok - 8-10 hours",
          "Darjeeling to Gangtok - 4-5 hours"
        ],
        bookingSteps: [
          "Visit RedBus, MakeMyTrip, or state transport websites",
          "Select departure city and Gangtok as destination",
          "Choose travel date and bus type",
          "Select seats and passenger details",
          "Make online payment",
          "Download mobile ticket or print"
        ],
        tips: "Volvo and sleeper buses available. Book 2-3 days in advance during peak season."
      }
    },
    {
      id: "flight",
      title: "Flight Booking",
      icon: Plane,
      description: "Fastest way to reach Sikkim via Bagdogra Airport",
      color: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
      details: {
        overview: "Bagdogra Airport (IXB) is the nearest airport, 124 km from Gangtok. Pakyong Airport in Sikkim has limited flights.",
        routes: [
          "Delhi to Bagdogra - 2 hours (Direct flights available)",
          "Mumbai to Bagdogra - 2.5 hours (Direct flights available)",
          "Bangalore to Bagdogra - 2.5 hours (Direct flights available)",
          "Kolkata to Bagdogra - 1.5 hours (Multiple daily flights)"
        ],
        bookingSteps: [
          "Visit airline websites or booking portals",
          "Search flights to Bagdogra (IXB)",
          "Compare prices and timings",
          "Enter passenger details",
          "Add baggage if needed",
          "Make payment and get e-ticket",
          "Pre-book taxi from airport to Gangtok"
        ],
        tips: "Book 3-4 weeks advance for better rates. Airport to Gangtok takes 4-5 hours by road."
      }
    },
    {
      id: "hotel",
      title: "Hotel Booking",
      icon: Hotel,
      description: "Comfortable accommodation options across Sikkim",
      color: "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
      details: {
        overview: "Sikkim offers diverse accommodation from budget homestays to luxury resorts across all regions.",
        routes: [
          "Gangtok - Luxury hotels, budget guesthouses, homestays",
          "Pelling - Mountain resorts, monastery stays, eco-lodges",
          "Lachung/Lachen - Traditional homestays, guesthouses",
          "Yuksom - Heritage hotels, trekking lodges"
        ],
        bookingSteps: [
          "Visit MakeMyTrip, Booking.com, or OYO",
          "Select destination and check-in dates",
          "Filter by price, amenities, and ratings",
          "Read reviews and check photos",
          "Select room type and number of guests",
          "Make payment or choose pay-at-hotel",
          "Download confirmation voucher"
        ],
        tips: "Book early during festival seasons. Many monasteries offer simple guest accommodation."
      }
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Transportation Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Your complete guide to reaching Sikkim and exploring 
            its magnificent monasteries and cultural treasures
          </p>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple convenient options to reach the land of monasteries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {transportationOptions.map((option, index) => (
              <Card 
                key={option.id} 
                className="overflow-hidden hover:shadow-monastery transition-all duration-300 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Collapsible>
                  <CollapsibleTrigger 
                    onClick={() => toggleSection(option.id)}
                    className="w-full"
                  >
                    <CardHeader className={`${option.color} transition-all duration-300 hover:scale-[1.02]`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-white/20 rounded-lg">
                            <option.icon className="h-8 w-8 text-foreground" />
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                            <CardDescription className="text-muted-foreground mt-1">
                              {option.description}
                            </CardDescription>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform duration-300 ${
                            openSections.includes(option.id) ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="p-6 space-y-6">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                        <p className="text-sm text-muted-foreground">
                          {option.details.overview}
                        </p>
                      </div>

                      <div className="bg-accent/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Popular Routes</h4>
                        <ul className="space-y-2">
                          {option.details.routes.map((route, routeIndex) => (
                            <li key={routeIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {route}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Booking Steps</h4>
                        <ol className="space-y-2">
                          {option.details.bookingSteps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                                {stepIndex + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Pro Tips</h4>
                        <p className="text-sm text-muted-foreground">
                          {option.details.tips}
                        </p>
                      </div>

                      <Button className="w-full" size="lg">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Book {option.title.split(' ')[0]} Now
                      </Button>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Helpline */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-glow">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
              <CardTitle className="font-serif text-2xl flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                Sikkim Tourism Helpline
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              <div className="text-3xl font-bold text-primary">
                +91-3592-202-595
              </div>
              <div className="text-lg font-semibold text-foreground">
                24/7 Tourist Assistance
              </div>
              <p className="text-muted-foreground">
                For travel assistance, emergency support, and tourist information. 
                Available round the clock to help make your journey to Sikkim smooth and memorable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Emergency Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            All transportation options lead to the same destination - the spiritual 
            heart of the Himalayas. Choose what works best for your travel style and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              View Monastery Map
            </Button>
            <Button variant="outline" size="lg" className="font-semibold">
              Cultural Calendar
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Transportation;