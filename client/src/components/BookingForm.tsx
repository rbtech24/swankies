import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

// Define form schema with zod
const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceType: z.string().min(1, 'Please select a service type'),
  vehicleType: z.string().min(1, 'Please select a vehicle type'),
  date: z.date({
    required_error: 'Please select a date',
  }),
  time: z.string().min(1, 'Please select a time slot'),
  location: z.string().min(5, 'Please provide your location details'),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

// Define available time slots
const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

// Service types and vehicle types
const serviceTypes = [
  { value: 'essential-auto', label: 'Essential Auto Detail' },
  { value: 'premium-auto', label: 'Premium Auto Detail' },
  { value: 'elite-auto', label: 'Elite Auto Restoration' },
  { value: 'essential-boat', label: 'Essential Boat Detail' },
  { value: 'premium-boat', label: 'Premium Boat Detail' },
  { value: 'elite-boat', label: 'Elite Boat Restoration' },
  { value: 'essential-motorcycle', label: 'Essential Motorcycle Detail' },
  { value: 'premium-motorcycle', label: 'Premium Motorcycle Detail' },
  { value: 'elite-motorcycle', label: 'Elite Motorcycle Restoration' },
  { value: 'ceramic-coating', label: 'Ceramic Coating' },
  { value: 'paint-correction', label: 'Paint Correction' },
  { value: 'interior-detail', label: 'Interior Detailing' }
];

const vehicleTypes = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV/Crossover' },
  { value: 'truck', label: 'Truck' },
  { value: 'sports-car', label: 'Sports Car' },
  { value: 'luxury', label: 'Luxury Vehicle' },
  { value: 'motorcycle', label: 'Motorcycle' },
  { value: 'boat-small', label: 'Boat (Under 20ft)' },
  { value: 'boat-medium', label: 'Boat (20-30ft)' },
  { value: 'boat-large', label: 'Boat (Over 30ft)' },
  { value: 'rv', label: 'RV/Camper' },
  { value: 'other', label: 'Other' }
];

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  // Get current date and set min/max date constraints
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 3); // Allow booking up to 3 months in advance

  // Initialize form
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      vehicleType: '',
      location: '',
      message: '',
    }
  });

  // Filter unavailable days (e.g., past days and Sundays)
  const disabledDays = (date: Date) => {
    const day = date.getDay();
    return date < today || day === 0; // Disable past dates and Sundays
  };

  // Handle form submission
  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format the date as ISO string for API submission
      const formattedData = {
        ...data,
        date: format(data.date, 'yyyy-MM-dd'),
      };
      
      // Send booking data to the API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit booking');
      }
      
      // Show success message
      toast({
        title: "Booking Request Submitted!",
        description: `We've received your request for ${data.serviceType} on ${format(data.date, 'MMMM do')} at ${data.time}. We'll contact you shortly to confirm your appointment.`,
        duration: 5000,
      });
      
      // Reset form
      form.reset();
      setSelectedDate(undefined);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Your booking request couldn't be submitted. Please try again or call us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-card/50 rounded-xl p-6 md:p-8 shadow-lg border border-primary/20">
      <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-center">
        Book Your <span className="text-primary text-shadow-neon">Detailing Service</span>
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Service Type */}
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Vehicle Type */}
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {vehicleTypes.map((vehicle) => (
                        <SelectItem key={vehicle.value} value={vehicle.value}>
                          {vehicle.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Date Selection */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <div className="p-1 border rounded-md">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setSelectedDate(date);
                        }}
                        disabled={disabledDays}
                        fromDate={today}
                        toDate={maxDate}
                        className="rounded-md border"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Time Selection */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Your address or marina location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          {/* Message/Notes */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please provide any additional details about your vehicle or specific service requirements"
                    className="h-24"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-md hover:shadow-neon-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Your Appointment'}
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-400 mt-4">
            After submitting, we'll contact you to confirm your appointment and provide any additional information.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;