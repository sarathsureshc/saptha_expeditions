export type Testimonial = {
  name: string;
  initials: string;
  destination: string;
  rating: number;
  text: string;
  trip: string;
  hasVideo?: boolean;
};

export const testimonials: Testimonial[] = [
  { name: "Aditi Raghunathan", initials: "AR", destination: "Bali", rating: 5, trip: "Bali Honeymoon, 2026", text: "Every detail was handled — from the floating breakfast surprise on our anniversary to the airport pickup. SAPTHA didn't just book a trip, they curated a memory.", hasVideo: true },
  { name: "Vikram & Family", initials: "VF", destination: "Kashmir", rating: 5, trip: "Family Tour, 2025", text: "Travelling with elderly parents and two kids felt effortless. The hotels were spotless, the SUV was comfortable, and our driver Mansoor became part of the family." },
  { name: "Neha Kapoor", initials: "NK", destination: "Maldives", rating: 5, trip: "Solo Wellness Retreat", text: "I was nervous about a solo trip. SAPTHA's 24/7 support meant I never felt alone — even on a tiny island in the middle of the Indian Ocean.", hasVideo: true },
  { name: "Rohan Desai", initials: "RD", destination: "Ladakh", rating: 5, trip: "Adventure Expedition", text: "From the oxygen kit at Khardung La to the warm Maggi at Pangong — they think of things you didn't even know to worry about. Best agency I've used." },
  { name: "Sanjay Iyer", initials: "SI", destination: "Dubai", rating: 4, trip: "Corporate Group, 12 pax", text: "Coordinated a 12-member leadership offsite. The retreat hit every brief — desert evening, skyline dinner, even a private boardroom at the hotel for our strategy session." },
  { name: "Meera & Arjun", initials: "MA", destination: "Kerala", rating: 5, trip: "Anniversary, 2025", text: "The Alleppey houseboat night was something out of a film. Slow, romantic, with the best fish curry we've ever had. We're already planning the next one with them." },
  { name: "Priya Bhatt", initials: "PB", destination: "Thailand", rating: 5, trip: "Girls' Trip, 2026", text: "Six girlfriends, two destinations, zero stress. The itinerary balanced beach days and Bangkok nights perfectly. Loved the WhatsApp concierge — instant replies always.", hasVideo: true },
  { name: "Ananya Reddy", initials: "AR", destination: "Vietnam", rating: 5, trip: "Cultural Tour, 2025", text: "Hoi An at night was magic. Our guide Linh in Hanoi turned a food walk into the highlight of the trip. SAPTHA picks people who love their cities — it shows." },
];
