import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact message schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  service: text("service").notNull(),
  message: text("message"),
  createdAt: text("created_at").notNull().default("NOW()"),
});

export const contactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof contactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Booking schema for appointment scheduling
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceType: text("service_type").notNull(),
  vehicleType: text("vehicle_type").notNull(),
  date: text("date").notNull(), // Store as ISO date string
  time: text("time").notNull(),
  location: text("location").notNull(),
  message: text("message"),
  status: text("status").default("pending").notNull(), // pending, confirmed, completed, cancelled
  createdAt: text("created_at").notNull().default("NOW()"),
});

export const bookingSchema = createInsertSchema(bookings).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertBooking = z.infer<typeof bookingSchema>;
export type Booking = typeof bookings.$inferSelect;
