import { Shirt, Users, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/Layout/PageLayout";

const Clothes = () => {
  const traditionalGarments = [
    {
      name: "Bakhu",
      gender: "Women",
      description: "The traditional dress worn by Sikkimese women, characterized by its full-sleeved blouse and wrapped skirt. A symbol of cultural identity and elegance.",
      origin: "Ancient Sikkimese tradition",
      occasions: ["Festivals", "Weddings", "Religious ceremonies", "Cultural events"],
      details: "The Bakhu consists of a full-sleeved, ankle-length dress with a colorful apron-like cloth called 'pangden' tied around the waist. It's worn with traditional jewelry and boots.",
      significance: "Represents the grace and cultural heritage of Sikkimese women",
      colors: ["Deep red", "Maroon", "Green", "Blue", "Golden borders"],
      image: "/api/placeholder/400/500",
      culturalNote: "The style and colors of Bakhu often indicate the wearer's region and social status within the community."
    },
    {
      name: "Kho",
      gender: "Men",
      description: "Traditional attire for Sikkimese men, featuring a wrap-around robe secured with a belt. Simple yet dignified, reflecting the Buddhist philosophy of minimalism.",
      origin: "Tibetan Buddhist tradition",
      occasions: ["Religious ceremonies", "Festivals", "Formal events", "Monastery visits"],
      details: "The Kho is a long, wrap-around robe typically made of silk or fine wool, secured at the waist with a traditional belt called 'kera'. Worn with traditional boots.",
      significance: "Symbolizes the Buddhist values of simplicity and spiritual focus",
      colors: ["Maroon", "Brown", "Grey", "Navy blue", "Black"],
      image: "/api/placeholder/400/500",
      culturalNote: "Monks wear maroon Kho, while laypeople wear earth-toned colors during religious occasions."
    },
    {
      name: "Dumvum",
      gender: "Women",
      description: "A traditional blouse worn as part of the complete Sikkimese women's attire, featuring intricate embroidery and traditional patterns.",
      origin: "Traditional Sikkimese craftsmanship",
      occasions: ["Daily wear", "Casual events", "Work attire", "Home festivities"],
      details: "Dumvum is a fitted blouse with traditional embroidery, worn with a wrapped skirt. The embroidery patterns often tell stories of nature and Buddhist symbols.",
      significance: "Showcases the artistic skills and cultural motifs of Sikkim",
      colors: ["Bright colors", "Floral patterns", "Traditional motifs", "Golden threads"],
      image: "/api/placeholder/400/500",
      culturalNote: "Each embroidery pattern has specific meaning, often related to Buddhist teachings or natural elements."
    },
    {
      name: "Chuba",
      gender: "Unisex",
      description: "A versatile traditional robe worn by both men and women across the Himalayan region, including Sikkim. Adapted to local climate and customs.",
      origin: "Himalayan regional tradition",
      occasions: ["Winter wear", "Travel attire", "Casual formal events", "Cultural programs"],
      details: "Chuba is a long-sleeved robe that can be adjusted for different weather conditions. Made from wool or silk, it's both practical and ceremonial.",
      significance: "Represents the shared Himalayan cultural heritage",
      colors: ["Earth tones", "Rich blues", "Deep reds", "Natural wool colors"],
      image: "/api/placeholder/400/500",
      culturalNote: "The length and style of Chuba varies between different Himalayan communities, each adding their unique touch."
    },
    {
      name: "Pangden",
      gender: "Women",
      description: "A colorful striped apron-like garment worn over the Bakhu, featuring traditional patterns and serving both decorative and practical purposes.",
      origin: "Traditional Sikkimese weaving",
      occasions: ["All formal occasions", "Religious ceremonies", "Cultural celebrations", "Traditional dances"],
      details: "Pangden features horizontal stripes in multiple colors, tied around the waist over the main dress. Each color combination has cultural significance.",
      significance: "Represents marital status and regional identity of the wearer",
      colors: ["Multi-colored stripes", "Traditional color combinations", "Regional variations"],
      image: "/api/placeholder/400/500",
      culturalNote: "The pattern and colors of Pangden can indicate whether the wearer is married, single, or widowed."
    },
    {
      name: "Gunyu",
      gender: "Women",
      description: "Traditional blouse worn by married women, distinguished by its specific cut and styling that differs from the unmarried women's attire.",
      origin: "Matrimonial tradition of Sikkim",
      occasions: ["Post-marriage wear", "Family ceremonies", "Religious functions", "Social gatherings"],
      details: "Gunyu has a distinctive neckline and sleeve design that signifies married status. Often worn with specific jewelry and head coverings.",
      significance: "Symbolizes the transition to married life and family responsibilities",
      colors: ["Subdued colors", "Traditional patterns", "Marital symbolism"],
      image: "/api/placeholder/400/500",
      culturalNote: "The transition from single to married women's attire marks an important cultural milestone in Sikkimese society."
    }
  ];

  const accessories = [
    { name: "Traditional Boots", description: "Colorful, pointed-toe boots worn with traditional attire" },
    { name: "Silver Jewelry", description: "Intricate silver ornaments including necklaces, earrings, and bracelets" },
    { name: "Head Ornaments", description: "Traditional head pieces worn during festivals and ceremonies" },
    { name: "Ceremonial Belts", description: "Decorative belts used to secure traditional robes" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Traditional Sikkimese Attire
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Discover the rich textile heritage of Sikkim through its 
            beautiful traditional garments and cultural significance
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Tapestry of Cultural Heritage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sikkimese traditional clothing reflects the region's unique blend of Tibetan, Nepali, and Lepcha influences. 
              Each garment tells a story of cultural identity, social status, and spiritual beliefs, woven together through 
              centuries of tradition and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Garments */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Traditional Garments
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the distinctive clothing worn across different communities in Sikkim
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {traditionalGarments.map((garment, index) => (
              <Card 
                key={garment.name} 
                className="overflow-hidden hover:shadow-monastery transition-all duration-300 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shirt className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Traditional {garment.name}</p>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-2xl text-foreground">
                        {garment.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {garment.gender}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed mt-3">
                    {garment.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Cultural Significance
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {garment.significance}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Origin: {garment.origin}
                    </p>
                  </div>
                  
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Worn During
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {garment.occasions.map((occasion) => (
                        <Badge key={occasion} variant="outline" className="text-xs justify-start">
                          {occasion}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Traditional Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      {garment.colors.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Details</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {garment.details}
                    </p>
                    <div className="bg-white/50 p-3 rounded border-l-4 border-primary">
                      <p className="text-xs text-muted-foreground italic">
                        Cultural Note: {garment.culturalNote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Traditional Accessories
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete your traditional attire with authentic Sikkimese accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accessories.map((accessory, index) => (
              <Card 
                key={accessory.name} 
                className="text-center hover:shadow-lg transition-shadow border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{accessory.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {accessory.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Preservation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Preserving Cultural Heritage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            These traditional garments are not just clothing - they are living symbols of Sikkim's 
            rich cultural heritage. Each piece carries forward the stories, traditions, and 
            artistic legacy of the Himalayan people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Cultural Calendar
            </button>
            <button className="border border-border bg-background hover:bg-muted text-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Monasteries
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Clothes;