import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema, bookingSchema } from "@shared/schema";

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

  // Create a new booking
  app.post('/api/bookings', async (req, res) => {
    try {
      // Validate request body
      const bookingData = bookingSchema.parse(req.body);
      
      // Store the booking
      const booking = await storage.createBooking(bookingData);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Booking created successfully",
        data: booking
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      return res.status(400).json({ 
        success: false, 
        message: "Failed to create booking"
      });
    }
  });

  // Get bookings by email
  app.get('/api/bookings', async (req, res) => {
    try {
      const email = req.query.email as string;
      
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email parameter is required"
        });
      }
      
      const bookings = await storage.getBookingsByEmail(email);
      
      return res.status(200).json({
        success: true,
        data: bookings
      });
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch bookings"
      });
    }
  });

  // Get booking by ID
  app.get('/api/bookings/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid booking ID"
        });
      }
      
      const booking = await storage.getBookingById(id);
      
      if (!booking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found"
        });
      }
      
      return res.status(200).json({
        success: true,
        data: booking
      });
    } catch (error) {
      console.error('Error fetching booking:', error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch booking"
      });
    }
  });

  // Update booking status
  app.patch('/api/bookings/:id/status', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid booking ID"
        });
      }
      
      if (!status || !['pending', 'confirmed', 'completed', 'cancelled'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status value"
        });
      }
      
      const updatedBooking = await storage.updateBookingStatus(id, status);
      
      if (!updatedBooking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found"
        });
      }
      
      return res.status(200).json({
        success: true,
        message: "Booking status updated successfully",
        data: updatedBooking
      });
    } catch (error) {
      console.error('Error updating booking status:', error);
      return res.status(500).json({
        success: false,
        message: "Failed to update booking status"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
