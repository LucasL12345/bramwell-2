import { Card } from "@/components/ui/card";
import { MousePointerClick, CalendarCheck, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick className="w-12 h-12 text-primary" />,
      title: "1. Choose Equipment",
      description: "Browse our range of industrial dehumidifiers and select the right unit for your needs."
    },
    {
      icon: <CalendarCheck className="w-12 h-12 text-primary" />,
      title: "2. Contact Us for a Quote",
      description: "Submit a quick inquiry or booking request through our website. We'll confirm availability and provide a tailored quote."
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "3. Fast Delivery",
      description: "We deliver directly to your door or site across Glasgow. Our team will help set up the equipment and show you how to use it safely."
    },
    {
      icon: <RotateCcw className="w-12 h-12 text-primary" />,
      title: "4. We Collect",
      description: "Once your job is done, simply let us know. We'll arrange a convenient time to collect the equipment from your location."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">How It Works</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">
          Our rental process is designed to be simple, transparent, and hassle-free.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-10 border-t-2 border-dashed border-slate-300" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-white p-6 rounded-full shadow-lg border-4 border-slate-50 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Ready to get started?</h2>
            <p className="text-muted-foreground">Check our availability and get your drying project moving today.</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold" asChild>
              <Link href="/equipment">View Equipment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
