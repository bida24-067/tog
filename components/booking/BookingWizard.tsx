"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  User,
  AlertCircle,
  FileText,
  ExternalLink,
  MessageCircle,
  Search,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { servicesData, ServiceItem } from "@/data/services";
import { siteConfig } from "@/data/site";

interface BookingWizardProps {
  initialServiceId?: string;
  onClose?: () => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialServiceId,
  onClose,
}) => {
  // Wizard steps: 1: Services, 2: Date & Time, 3: Details, 4: Confirm, 5: Success
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1: Selected services
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Step 2: Date & Time
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<{ time: string; available: boolean }[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);

  // Step 3: Customer Details
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [notifyWhatsApp, setNotifyWhatsApp] = useState<boolean>(true);
  const [notifyEmail, setNotifyEmail] = useState<boolean>(true);

  // Step 4 & 5: Submission & Result
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    referenceCode: string;
    googleCalendarUrl: string;
    whatsappUrl: string;
  } | null>(null);

  // Pre-select service if provided via props
  useEffect(() => {
    if (initialServiceId) {
      const found = servicesData
        .flatMap((c) => c.items)
        .find((i) => i.id === initialServiceId);
      if (found) {
        setSelectedServices([found]);
      }
    }
  }, [initialServiceId]);

  // Set default date to tomorrow on load
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split("T")[0];
    setSelectedDate(dateStr);
  }, []);

  // Fetch available slots from Google Calendar synced API whenever selectedDate changes
  useEffect(() => {
    if (!selectedDate) return;

    let isMounted = true;
    setIsLoadingSlots(true);
    setSelectedTime("");

    fetch(`/api/calendar?date=${selectedDate}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          if (data.slots) {
            setAvailableSlots(data.slots);
          } else {
            setAvailableSlots([]);
          }
          setIsLoadingSlots(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching slots:", err);
        if (isMounted) setIsLoadingSlots(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedDate]);

  // Handle service toggle
  const toggleService = (service: ServiceItem) => {
    const exists = selectedServices.some((s) => s.id === service.id);
    if (exists) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Filter services by category and search
  const filteredServices = servicesData
    .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
    .flatMap((cat) =>
      cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  // Calculate total price display
  const calculateTotal = () => {
    if (selectedServices.length === 0) return "P0";
    let hasQuote = false;
    let sum = 0;

    for (const s of selectedServices) {
      if (s.price.toLowerCase().includes("quote")) {
        hasQuote = true;
      }
      const match = s.price.match(/\d+/);
      if (match) {
        sum += parseInt(match[0], 10);
      }
    }

    if (hasQuote && sum > 0) {
      return `P${sum} + Quote Item`;
    } else if (hasQuote) {
      return "Request for Quote";
    }
    return `P${sum}`;
  };

  // Submit booking to Google Calendar API
  const handleFinalApproval = async () => {
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/calendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: selectedServices.map((s) => ({
            id: s.id,
            name: s.name,
            price: s.price,
          })),
          totalPrice: calculateTotal(),
          date: selectedDate,
          time: selectedTime,
          customer: {
            name,
            phone,
            email,
            notes,
            notifyWhatsApp,
            notifyEmail,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to finalize appointment.");
      }

      setBookingConfirmation({
        referenceCode: data.appointment.referenceCode,
        googleCalendarUrl: data.links.googleCalendarUrl,
        whatsappUrl: data.links.whatsappUrl,
      });

      setCurrentStep(5); // Jump to success screen
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step names for indicator
  const stepsList = [
    { num: 1, title: "Services" },
    { num: 2, title: "Date & Time" },
    { num: 3, title: "Details" },
    { num: 4, title: "Approval" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[var(--radius)] shadow-xl border border-[#ded9cb] overflow-hidden">
      {/* Progress Header */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E4D8] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
              Store Google Calendar Synced
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
              Reserve Your Treatment
            </h2>
          </div>

          {/* Step Pill Indicators (Hide on success step 5) */}
          {currentStep < 5 && (
            <div className="flex items-center gap-2">
              {stepsList.map((step) => {
                const isActive = currentStep === step.num;
                const isDone = currentStep > step.num;
                return (
                  <div
                    key={step.num}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans transition-colors ${
                      isActive
                        ? "bg-primary text-white font-medium"
                        : isDone
                        ? "bg-[#ded9cb] text-primary"
                        : "bg-white text-primary/40 border border-[#E8E4D8]"
                    }`}
                  >
                    <span>{step.num}</span>
                    <span className="hidden md:inline">{step.title}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Step Content Area */}
      <div className="p-6 sm:p-8 md:p-10 min-h-[460px]">
        {/* STEP 1: SERVICE SELECTION */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-primary">
                  1. Choose Your Service(s)
                </h3>
                <p className="text-xs text-primary/70 mt-1">
                  Select one or more bespoke treatments for your visit.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-primary/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-[var(--radius)] border border-[#ded9cb] focus:outline-none focus:border-accent font-sans bg-[#FAF8F5]"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`text-xs px-3.5 py-1.5 rounded-full font-sans uppercase tracking-wider shrink-0 transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-white"
                    : "bg-surface/60 text-primary hover:bg-surface"
                }`}
              >
                All
              </button>
              {servicesData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-sans uppercase tracking-wider shrink-0 transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white"
                      : "bg-surface/60 text-primary hover:bg-surface"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Services List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
              {filteredServices.map((service) => {
                const isSelected = selectedServices.some((s) => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service)}
                    className={`p-4 rounded-[var(--radius)] border cursor-pointer transition-all flex items-start justify-between gap-4 ${
                      isSelected
                        ? "border-accent bg-accent/5 ring-1 ring-accent"
                        : "border-[#ded9cb] hover:border-primary/40 bg-white"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-medium text-base text-primary">
                          {service.name}
                        </span>
                        {service.featured && (
                          <span className="bg-surface text-accent text-[9px] uppercase px-1.5 py-0.5 rounded tracking-widest font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      {service.duration && (
                        <p className="text-[11px] text-primary/60 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif font-semibold text-primary text-base">
                        {service.prefix ? `${service.prefix} ` : ""}
                        {service.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtotal & Next action */}
            <div className="pt-4 border-t border-[#E8E4D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-primary/80">
                <span>Selected ({selectedServices.length}): </span>
                <span className="font-serif font-bold text-accent text-lg ml-1">
                  {calculateTotal()}
                </span>
              </div>

              <Button
                onClick={() => {
                  if (selectedServices.length > 0) setCurrentStep(2);
                }}
                disabled={selectedServices.length === 0}
                className={selectedServices.length === 0 ? "opacity-40 cursor-not-allowed" : ""}
                size="md"
              >
                CHOOSE DATE & TIME
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: DATE & TIME (SYNCED WITH GOOGLE CALENDAR) */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-primary">
                  2. Select Date & Store Time Slot
                </h3>
                <p className="text-xs text-primary/70 mt-1">
                  Slots automatically reflect Touch Of Glow working hours & real-time calendar availability.
                </p>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-accent hover:underline flex items-center gap-1 font-sans font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Change Services
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Date Input & Store Hours info */}
              <div className="md:col-span-5 space-y-4">
                <label className="block text-xs uppercase font-sans font-semibold tracking-wider text-accent">
                  Appointment Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-[var(--radius)] border border-[#ded9cb] font-sans text-sm text-primary focus:outline-none focus:border-accent bg-[#FAF8F5]"
                />

                <div className="p-4 bg-surface/50 rounded-[var(--radius)] border border-[#ded9cb] space-y-2 text-xs text-primary/80">
                  <span className="font-semibold text-primary block">Store Hours (Molapo Mall):</span>
                  <p>• Weekdays: {siteConfig.hours.weekdays}</p>
                  <p>• Saturday: {siteConfig.hours.saturday}</p>
                  <p>• Sunday: {siteConfig.hours.sunday}</p>
                </div>
              </div>

              {/* Time Slots Selector */}
              <div className="md:col-span-7">
                <label className="block text-xs uppercase font-sans font-semibold tracking-wider text-accent mb-3">
                  Available Calendar Slots ({selectedDate || "Select Date"})
                </label>

                {isLoadingSlots ? (
                  <div className="h-48 flex items-center justify-center text-xs text-primary/60">
                    <span className="animate-pulse">Checking Store Google Calendar availability...</span>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="p-8 text-center text-xs text-primary/60 border border-dashed border-[#ded9cb] rounded-[var(--radius)]">
                    No available appointments on this date. Please pick another day.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 max-h-[260px] overflow-y-auto pr-1">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`py-2.5 px-2 rounded-[var(--radius)] text-xs font-sans font-medium transition-all text-center ${
                          selectedTime === slot.time
                            ? "bg-accent text-white shadow-sm ring-1 ring-accent"
                            : slot.available
                            ? "bg-[#FAF8F5] text-primary hover:bg-surface border border-[#ded9cb]"
                            : "bg-gray-100 text-gray-300 cursor-not-allowed border border-gray-200"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Nav buttons */}
            <div className="pt-6 border-t border-[#E8E4D8] flex items-center justify-between">
              <Button
                variant="outline"
                size="md"
                onClick={() => setCurrentStep(1)}
              >
                BACK
              </Button>
              <Button
                onClick={() => {
                  if (selectedDate && selectedTime) setCurrentStep(3);
                }}
                disabled={!selectedDate || !selectedTime}
                className={!selectedDate || !selectedTime ? "opacity-40 cursor-not-allowed" : ""}
                size="md"
              >
                CLIENT DETAILS
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: CLIENT DETAILS & NOTIFICATION PREFERENCE */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-primary">
                  3. Your Details
                </h3>
                <p className="text-xs text-primary/70 mt-1">
                  We use these details for your appointment booking and confirmation notifications.
                </p>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs text-accent hover:underline flex items-center gap-1 font-sans font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Change Time
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-sans font-semibold tracking-wider text-accent mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-primary/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Boipelo Motsepe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-[var(--radius)] border border-[#ded9cb] focus:outline-none focus:border-accent bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-sans font-semibold tracking-wider text-accent mb-1.5">
                  WhatsApp / Phone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-primary/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="(+267) 72000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-[var(--radius)] border border-[#ded9cb] focus:outline-none focus:border-accent bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs uppercase font-sans font-semibold tracking-wider text-accent mb-1.5">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-primary/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-[var(--radius)] border border-[#ded9cb] focus:outline-none focus:border-accent bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs uppercase font-sans font-semibold tracking-wider text-accent mb-1.5">
                  Special Notes / Nail Art Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need gel soak off first, or prefer french ombre style..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 text-xs rounded-[var(--radius)] border border-[#ded9cb] focus:outline-none focus:border-accent bg-[#FAF8F5]"
                />
              </div>

              {/* Notification Toggles */}
              <div className="sm:col-span-2 pt-2 border-t border-[#E8E4D8] space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-primary block">
                  Delivery Preferences:
                </span>
                <label className="flex items-center gap-2 text-xs text-primary/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifyWhatsApp}
                    onChange={(e) => setNotifyWhatsApp(e.target.checked)}
                    className="accent-accent"
                  />
                  <span>Send reservation details directly to my WhatsApp</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-primary/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.checked)}
                    className="accent-accent"
                  />
                  <span>Send calendar invite to my Email</span>
                </label>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E4D8] flex items-center justify-between">
              <Button
                variant="outline"
                size="md"
                onClick={() => setCurrentStep(2)}
              >
                BACK
              </Button>
              <Button
                onClick={() => {
                  if (name.trim() && phone.trim()) setCurrentStep(4);
                }}
                disabled={!name.trim() || !phone.trim()}
                className={!name.trim() || !phone.trim() ? "opacity-40 cursor-not-allowed" : ""}
                size="md"
              >
                REVIEW & APPROVAL
              </Button>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMATION & APPROVAL */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-primary">
                4. Review & Confirm Appointment
              </h3>
              <p className="text-xs text-primary/70 mt-1">
                Please verify your booking details before approving and syncing to the calendar.
              </p>
            </div>

            {/* Summary Voucher */}
            <div className="bg-[#FAF8F5] p-6 rounded-[var(--radius)] border border-[#ded9cb] space-y-4">
              <div className="flex justify-between items-start pb-4 border-b border-[#E8E4D8]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block">
                    Touch Of Glow • Reservation
                  </span>
                  <p className="font-serif text-xl text-primary font-medium mt-1">
                    {name}
                  </p>
                  <p className="text-xs text-primary/70">{phone} {email ? `• ${email}` : ""}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-primary/60 block">
                    Estimated Total
                  </span>
                  <span className="font-serif text-2xl font-bold text-accent">
                    {calculateTotal()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-primary/80">
                <div>
                  <span className="font-semibold text-primary block mb-1">Date & Time:</span>
                  <p className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-accent" />
                    <span>{selectedDate}</span>
                  </p>
                  <p className="flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{selectedTime} hrs</span>
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-primary block mb-1">Location:</span>
                  <p>{siteConfig.location.mall}, {siteConfig.location.shop}</p>
                  <p>{siteConfig.location.city}, Botswana</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E4D8]">
                <span className="font-semibold text-primary text-xs block mb-2">Selected Services:</span>
                <ul className="space-y-1.5 text-xs">
                  {selectedServices.map((s) => (
                    <li key={s.id} className="flex justify-between text-primary/80">
                      <span>• {s.name}</span>
                      <span className="font-serif font-medium">{s.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {notes && (
                <div className="pt-3 border-t border-[#E8E4D8] text-xs text-primary/70">
                  <span className="font-semibold text-primary">Notes: </span>
                  {notes}
                </div>
              )}
            </div>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Policies notice */}
            <p className="text-[11px] text-primary/60 leading-relaxed italic">
              * Terms and Conditions Apply. By approving, your appointment will be scheduled in the Touch Of Glow Store Calendar and a confirmation will be dispatched.
            </p>

            <div className="pt-6 border-t border-[#E8E4D8] flex items-center justify-between">
              <Button
                variant="outline"
                size="md"
                onClick={() => setCurrentStep(3)}
                disabled={isSubmitting}
              >
                BACK
              </Button>
              <Button
                onClick={handleFinalApproval}
                disabled={isSubmitting}
                size="lg"
                className="bg-accent text-white hover:bg-primary"
              >
                {isSubmitting ? "SYNCING CALENDAR..." : "CONFIRM & APPROVE BOOKING"}
              </Button>
            </div>
          </div>
        )}

        {/* STEP 5: SUCCESS & SYNCHRONIZATION */}
        {currentStep === 5 && bookingConfirmation && (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Appointment Approved & Synced
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-primary font-medium">
                We Can&apos;t Wait to Pamper You!
              </h3>
              <p className="text-xs text-primary/70 max-w-md mx-auto leading-relaxed">
                Your reservation is confirmed in the Touch Of Glow store calendar. Reference Code:{" "}
                <span className="font-mono font-bold text-primary">{bookingConfirmation.referenceCode}</span>.
              </p>
            </div>

            {/* Actions for customer */}
            <div className="max-w-md mx-auto pt-4 flex flex-col gap-3">
              {/* WhatsApp Action */}
              <a
                href={bookingConfirmation.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-6 rounded-[var(--radius)] font-sans text-xs uppercase font-semibold tracking-wider hover:opacity-95 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open Confirmation in WhatsApp</span>
              </a>

              {/* Personal Google Calendar Sync */}
              <a
                href={bookingConfirmation.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-surface text-primary border border-[#ded9cb] py-3.5 px-6 rounded-[var(--radius)] font-sans text-xs uppercase font-semibold tracking-wider hover:bg-[#ded9cb] transition-all"
              >
                <CalendarIcon className="w-4 h-4 text-accent" />
                <span>Add to My Google Calendar</span>
              </a>
            </div>

            <div className="pt-8 border-t border-[#E8E4D8]">
              <button
                onClick={() => {
                  setSelectedServices([]);
                  setName("");
                  setPhone("");
                  setEmail("");
                  setNotes("");
                  setCurrentStep(1);
                  if (onClose) onClose();
                }}
                className="text-xs text-primary/60 hover:text-accent font-sans uppercase tracking-wider underline underline-offset-4"
              >
                Book Another Treatment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingWizard;
