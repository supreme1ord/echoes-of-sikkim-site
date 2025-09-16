import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Calendar, MapPin, Shirt, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/components/Layout/PageLayout";
import heroImage from "@/assets/sikkim-monastery-hero.jpg";

const Index = () => {
  const quickNavigation = [
    {
      title: "Sacred Monasteries",
      description: "Explore the magnificent Buddhist monasteries of Sikkim",
      icon: Mountain,
      href: "/monasteries",
      color: "bg-gradient-to-br from-primary/20 to-primary/10",
    },
    {
      title: "Cultural Calendar",
      description: "Discover festivals and sacred celebrations",
      icon: Calendar,
      href: "/calendar",
      color: "bg-gradient-to-br from-secondary/20 to-secondary/10",
    },
    {
      title: "Transportation",
      description: "Plan your journey to Sikkim",
      icon: Navigation,
      href: "/transportation",
      color: "bg-gradient-to-br from-monastery-gold/20 to-monastery-gold/10",
    },
    {
      title: "Traditional Clothes",
      description: "Learn about Sikkimese traditional garments",
      icon: Shirt,
      href: "/clothes",
      color: "bg-gradient-to-br from-monastery-red/20 to-monastery-red/10",
    },
    {
      title: "Interactive Map",
      description: "Navigate through sacred sites",
      icon: MapPin,
      href: "/map",
      color: "bg-gradient-to-br from-accent/20 to-accent/10",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            EchoesOfSikkim
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the sacred monasteries and rich cultural heritage of Sikkim. 
            Journey through centuries of Buddhist tradition and breathtaking mountain landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
            >
              <Link to="/monasteries">
                Explore Monasteries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 text-lg"
            >
              <Link to="/map">
                View Map
                <MapPin className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Sikkim's Heritage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in the spiritual and cultural treasures of the Himalayan kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickNavigation.map((item, index) => (
              <Card 
                key={item.title} 
                className="group hover:shadow-monastery transition-all duration-300 border-0 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className={`${item.color} transition-colors duration-300 group-hover:scale-105`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <item.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-muted-foreground mb-4 text-base">
                    {item.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={item.href}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Gateway to Sacred Traditions
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Sikkim, nestled in the Eastern Himalayas, is home to some of the most magnificent 
                  Buddhist monasteries in the world. These sacred spaces have preserved centuries 
                  of spiritual wisdom and cultural heritage.
                </p>
                <p>
                  From the grandeur of Rumtek Monastery to the ancient traditions of Pemayangtse, 
                  each monastery tells a unique story of faith, art, and devotion.
                </p>
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/monasteries">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Beautiful monastery in Sikkim mountains"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;