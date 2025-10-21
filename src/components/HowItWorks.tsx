import { Bell, Target, Trophy } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Bell,
      title: "We Find the Best Hunting Deals",
      description: "Our team scours South Africa for exclusive promotions on rifles, optics, apparel, and real gear hunters use.",
    },
    {
      icon: Target,
      title: "You Get Weekly Promos by Email",
      description: "Every week, the top deals land in your inbox — no searching, no hassle, just savings.",
    },
    {
      icon: Trophy,
      title: "Exclusive Giveaways for Subscribers",
      description: "Monthly draws for hunting gear and accessories. Only subscribers qualify.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Three Simple Steps to Never Miss a Hunting Deal Again
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
