import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export const Giveaway = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <Gift className="w-10 h-10 text-accent-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            This Month's Giveaway
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4">
              Win a Tactical Range Bag Worth R2 000!
            </h3>
            <p className="text-lg md:text-xl mb-6 text-primary-foreground/90">
              Premium waterproof construction, multiple compartments, and heavy-duty zippers. Perfect for the range or the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="text-4xl font-heading font-bold">12</p>
                <p className="text-sm uppercase tracking-wider">Days Left</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="text-4xl font-heading font-bold">2,847</p>
                <p className="text-sm uppercase tracking-wider">Entries</p>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="hero"
            className="bg-accent hover:bg-accent/90"
          >
            Enter Giveaway (Subscribers Only)
          </Button>

          <p className="text-sm mt-4 text-primary-foreground/70">
            Drawing on the last day of the month. Winner announced via email.
          </p>
        </div>
      </div>
    </section>
  );
};
