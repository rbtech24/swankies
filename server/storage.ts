import { users, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type Booking, type InsertBooking } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingsByEmail(email: string): Promise<Booking[]>;
  getBookingById(id: number): Promise<Booking | undefined>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private bookings: Map<number, Booking>;
  currentId: number;
  currentContactId: number;
  currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.bookings = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
    this.currentBookingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const createdAt = new Date().toISOString();
    const contactMessage: ContactMessage = {
      ...insertMessage,
      id,
      createdAt
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const createdAt = new Date().toISOString();
    const booking: Booking = {
      ...insertBooking,
      id,
      status: "pending",
      createdAt
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookingsByEmail(email: string): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      (booking) => booking.email === email
    );
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
