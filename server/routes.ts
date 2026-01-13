import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Equipment Routes
  app.get(api.equipment.list.path, async (req, res) => {
    const items = await storage.getEquipment();
    res.json(items);
  });

  app.get(api.equipment.get.path, async (req, res) => {
    const item = await storage.getEquipmentItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.json(item);
  });

  // Inquiry Routes
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getEquipment();
  if (existing.length === 0) {
    const items = [
      {
        name: "Industrial Dehumidifier (50L/24h)",
        description: "Heavy-duty unit perfect for flood damage, construction sites, and large open spaces. Extracts up to 50 liters per day.",
        pricePerDay: 4500, // £45.00
        pricePerWeek: 18000, // £180.00
        category: "Industrial",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        available: true
      },
      {
        name: "Commercial Building Dryer",
        description: "Robust and reliable dryer for plaster drying and new builds. Efficient moisture removal.",
        pricePerDay: 3500,
        pricePerWeek: 14000,
        category: "Industrial",
        imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
        available: false
      },
      {
        name: "Compact Home Dehumidifier",
        description: "Ideal for domestic leaks, damp rooms, and laundry drying. Quiet operation and portable.",
        pricePerDay: 2500,
        pricePerWeek: 10000,
        category: "Domestic",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        available: false
      },
      {
        name: "Turbo Carpet Dryer",
        description: "High-velocity air mover for rapid drying of carpets, floors, and walls after leaks.",
        pricePerDay: 2000,
        pricePerWeek: 8000,
        category: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&q=80",
        available: false
      }
    ];

    for (const item of items) {
      await storage.createEquipment(item);
    }
    console.log("Database seeded with equipment");
  }
}
