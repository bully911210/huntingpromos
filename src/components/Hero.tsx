import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-email", {
        body: { email, name },
      });

      if (error) throw error;

      toast({
        title: "Success! 🎯",
        description: "Check your inbox for your welcome email. Weekly deals coming your way!",
      });

      setEmail("");
      setName("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <img src={logo} alt="Hunting Promos SA" className="h-24 md:h-32 w-auto" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Get Exclusive Hunting Deals Before Anyone Else
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Join thousands of South African hunters getting weekly gear promos and giveaways.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <Input
              type="text"
              placeholder="Your Name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 text-lg bg-white/95 border-tan"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg bg-white/95 border-tan flex-1"
                required
              />
              <Button
                type="submit"
                variant="hero"
                disabled={loading}
                className="h-14 px-8 whitespace-nowrap"
              >
                {loading ? "Joining..." : "Get My Weekly Deals"}
              </Button>
            </div>
            <p className="text-sm text-white/70">
              No spam. Unsubscribe anytime. 100% free.
            </p>
          </form>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
