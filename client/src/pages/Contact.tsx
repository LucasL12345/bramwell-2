import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Contact() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const equipmentName = searchParams.get("equipment");

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: equipmentName ? `I'm interested in hiring the ${equipmentName}. Please provide a quote.` : "",
    },
  });

  const mutation = useCreateInquiry();

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-300">Get a quote or ask us a question.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help with all your drying equipment needs. Fill out the form, and our team will get back to you within 2 business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard 
                icon={<Phone className="w-6 h-6 text-primary" />}
                title="Phone"
                content="0141 555 1234"
              />
              <InfoCard 
                icon={<Mail className="w-6 h-6 text-primary" />}
                title="Email"
                content="enquiries@bramwellequipment.com"
              />
              <InfoCard 
                icon={<Clock className="w-6 h-6 text-primary" />}
                title="Hours"
                content="Daily: 9:00am - 9:00pm"
              />
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden shadow-inner relative">
              <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                 alt="Map Location Placeholder"
                 className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="bg-white/90 shadow-lg pointer-events-none">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Find us in Glasgow
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-xl border-t-4 border-t-primary">
            <h3 className="text-xl font-display font-bold mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} className="bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="07123 456789" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="I'm interested in hiring a dehumidifier for a flooded basement..." 
                          className="min-h-[150px] bg-slate-50 resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg font-bold" 
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg border border-border/50 shadow-sm">
      <div className="mr-4 mt-1 bg-blue-50 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-muted-foreground text-sm">{content}</p>
      </div>
    </div>
  );
}
