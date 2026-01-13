import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, ShieldCheck, Clock, ArrowRight, Droplets, Wrench, BadgePoundSterling } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Abstract Industrial Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-500 rounded-l-full blur-3xl transform translate-x-1/3" />
          <div className="absolute left-0 bottom-0 w-1/2 h-full bg-blue-900 rounded-r-full blur-3xl transform -translate-x-1/3" />
        </div>
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
           {/* industrial warehouse background */}
           <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight flex flex-col items-center">
              <span>Glasgow</span>
              <span className="text-primary-foreground bg-primary px-4 mt-2 inline-block">Dehumidifier Hire</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Professional drying equipment for homeowners and contractors. 
              Fast delivery across Glasgow and surrounding areas. Combat damp and flooding effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold" asChild>
                <Link href="/contact">Get a Quote Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6" asChild>
                <Link href="/equipment">View Equipment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why Hire From Bramwell?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide reliable, industrial-grade equipment without the hassle of ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Truck className="w-10 h-10 text-primary" />}
              title="Fast Glasgow Delivery"
              description="Same-day or next-day delivery options available for urgent drying needs across Glasgow."
            />
            <FeatureCard 
              icon={<BadgePoundSterling className="w-10 h-10 text-primary" />}
              title="Cost-Effective"
              description="Save money with competitive daily and weekly rates. No capital investment required."
            />
            <FeatureCard 
              icon={<Wrench className="w-10 h-10 text-primary" />}
              title="No Maintenance"
              description="All equipment is serviced, PAT tested, and ready to work. We handle the maintenance so you don't have to."
            />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Dealing with unexpected flooding?</h2>
            <p className="text-blue-100 text-lg">Our emergency response team can get equipment to you quickly.</p>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-bold shadow-lg" asChild>
            <Link href="/contact">Contact Us Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Expert Dehumidifier Hire in Glasgow</h2>
              <div className="prose prose-slate text-muted-foreground">
                <p className="mb-4">
                  Whether you're dealing with the aftermath of a burst pipe, seasonal dampness, or need to accelerate plaster drying on a construction site, Bramwell Equipment has the solution.
                </p>
                <p className="mb-4">
                  Our range of <strong>industrial dehumidifiers</strong> and <strong>emergency drying equipment</strong> is specifically selected for performance and reliability. We understand that water damage waits for no one, which is why we prioritize speed and efficiency.
                </p>
                <p>
                  As a trusted provider of <strong>local tool rental</strong> services, we pride ourselves on offering expert advice to ensure you get the right machine for the job, saving you time and money.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle text="Industrial Grade" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle text="Energy Efficient" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle text="Compact Units" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle text="Expert Support" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 opacity-20"></div>
              {/* Construction site dehumidifier */}
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Industrial Dehumidifier on Site" 
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="p-8 text-center hover:shadow-lg transition-shadow border-4 border-transparent hover:border-primary">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-display mb-3 text-slate-900">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}

function CheckCircle({ text }: { text: string }) {
  return (
    <>
      <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
      <span className="font-medium text-slate-700">{text}</span>
    </>
  );
}
