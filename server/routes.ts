import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add API routes
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const contactData = contactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(contactData);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Contact message received successfully",
        data: message
      });
    } catch (error) {
      console.error('Error saving contact message:', error);
      return res.status(400).json({ 
        success: false, 
        message: "Failed to save contact message"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
