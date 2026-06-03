import tempo from "@/assets/fleet-tempo.jpg";
import bus from "@/assets/fleet-bus.jpg";
import suv from "@/assets/fleet-suv.jpg";
import sedan from "@/assets/fleet-sedan.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  image: string;
  seats: number;
  features: string[];
  description: string;
  pricePerKm: number;
};

export const fleet: Vehicle[] = [
  {
    slug: "tempo-traveller", name: "Tempo Traveller", type: "Mini Coach", image: tempo, seats: 12,
    features: ["Push-back recliner seats", "Premium AC", "Bluetooth audio", "USB charging", "Ample luggage", "Trained chauffeur"],
    description: "Our most-loved group ride. Ideal for friend trips, small families, and corporate outings to the hills or beach.",
    pricePerKm: 28,
  },
  {
    slug: "luxury-coach", name: "Luxury Coach", type: "Full Bus", image: bus, seats: 35,
    features: ["Reclining seats with footrest", "Onboard washroom", "Entertainment screens", "Wi-Fi enabled", "Refreshment service", "Professional driver + attendant"],
    description: "Built for large group tours, weddings, and corporate retreats. Long-haul comfort with zero compromise.",
    pricePerKm: 55,
  },
  {
    slug: "premium-suv", name: "Premium SUV", type: "Innova / Fortuner class", image: suv, seats: 6,
    features: ["Captain-chair second row", "Climate zones", "Premium audio", "Tinted glass", "All-terrain ready", "Experienced driver"],
    description: "Perfect for families, hill stations, and high-altitude trips. Built to handle Ladakh as comfortably as a city run.",
    pricePerKm: 22,
  },
  {
    slug: "luxury-sedan", name: "Luxury Sedan", type: "Camry / E-Class class", image: sedan, seats: 4,
    features: ["Leather interiors", "Chauffeur-driven", "Premium sound", "Mood lighting", "Complimentary water", "VIP airport pickup"],
    description: "Our flagship arrival experience — for honeymoon couples, business travellers, and anyone craving silent luxury.",
    pricePerKm: 38,
  },
];
