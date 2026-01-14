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
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            We're here to help with all your drying equipment needs. Reach out to us directly and our team will get back to you quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <InfoCard 
              icon={<Phone className="w-6 h-6 text-primary" />}
              title="Phone"
              content="07738 128756"
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
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg border border-border/50 shadow-sm min-h-[180px] justify-center text-center">
      <div className="mb-4 bg-blue-50 p-4 rounded-full">
        {icon}
      </div>
      <div className="w-full">
        <h4 className="font-semibold text-slate-900 mb-2 text-lg">{title}</h4>
        <p className="text-muted-foreground text-sm whitespace-nowrap px-2">{content}</p>
      </div>
    </div>
  );
}
