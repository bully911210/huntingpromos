import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FeaturedDeals = () => {
  const deals = [
    {
      title: "Vortex Optics Sale",
      discount: "30% OFF",
      category: "Riflescopes",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
    },
    {
      title: "Tactical Knives Bundle",
      discount: "BUY 2 GET 1 FREE",
      category: "Knives & Tools",
      image: "https://images.unsplash.com/photo-1585766440840-e3a4d8e8f733?w=800&q=80",
    },
    {
      title: "Camo Apparel Range",
      discount: "40% OFF",
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800&q=80",
    },
    {
      title: "Rangefinder Special",
      discount: "R500 OFF",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured Deals This Week
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out what's hot right now – limited stock on most items
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {deals.map((deal, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-bold">
                  {deal.discount}
                </Badge>
              </div>
              <CardContent className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {deal.category}
                </p>
                <h3 className="text-lg font-heading font-semibold mb-4">
                  {deal.title}
                </h3>
                <Button className="w-full" variant="outline">
                  View Deal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
