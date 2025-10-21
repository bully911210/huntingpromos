import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const [email, setEmail] = useState("");
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
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "You're in! 🎯",
        description: "Check your inbox for your welcome email.",
      });

      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <img src={logo} alt="Hunting Promos SA" className="h-20 w-auto mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Never Miss a Deal Again
            </h3>
            <p className="text-white/70 mb-6">
              Last chance to join – weekly deals start this Monday.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Button
              type="submit"
              variant="hero"
              disabled={loading}
              className="h-12 whitespace-nowrap"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Hunting Promos SA. All rights reserved.
            </p>
            <p className="text-xs text-white/40 mt-2">
              Exclusive Hunting Deals • Gear • Giveaways
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
