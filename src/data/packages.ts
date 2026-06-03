import { destinations } from "./destinations";

export type TravelPackage = {
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  image: string;
  gallery: string[];
  duration: string;
  days: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: "Group Tour" | "Honeymoon" | "Adventure" | "Family" | "Corporate" | "International" | "Weekend";
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { q: string; a: string }[];
};

const d = (s: string) => destinations.find((x) => x.slug === s)!;

const baseFaqs = [
  { q: "Is this package customizable?", a: "Absolutely — every itinerary can be tailored to your dates, group size, hotel category, and pace." },
  { q: "What's the booking & cancellation policy?", a: "A 25% advance confirms your booking. Free cancellation up to 30 days before departure; partial refunds thereafter." },
  { q: "Do you arrange visas and flights?", a: "Yes, our team handles visa assistance, flight bookings, travel insurance, and all on-ground logistics." },
  { q: "Is the package suitable for families with kids?", a: "Most itineraries are family-friendly. We can adjust the pace, add kid-focused experiences, and arrange family rooms." },
];

const mkItin = (days: number, place: string): TravelPackage["itinerary"] =>
  Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    title: i === 0 ? `Arrival in ${place}` : i === days - 1 ? `Departure from ${place}` : `Explore ${place} — Day ${i + 1}`,
    description: i === 0
      ? `Warm welcome on arrival, private transfer to your hotel, evening orientation walk and a curated welcome dinner showcasing local cuisine.`
      : i === days - 1
        ? `Leisure morning, last-minute shopping at local markets, and private transfer to the airport with sweet farewells.`
        : `A handpicked mix of iconic sights, hidden corners, and one signature experience — paced for relaxation, not rushing.`,
  }));

export const packages: TravelPackage[] = [
  {
    slug: "kashmir-paradise-6n7d", title: "Kashmir Paradise Escape", destination: d("kashmir").name, destinationSlug: "kashmir",
    image: d("kashmir").image, gallery: [d("kashmir").image, d("ladakh").image, d("kerala").image],
    duration: "6N / 7D", days: 7, price: 28999, oldPrice: 34999, rating: 4.9, reviews: 312,
    category: "Group Tour",
    highlights: ["Shikara ride on Dal Lake", "Gulmarg Gondola", "Pahalgam valleys", "Sonamarg glaciers", "Mughal gardens"],
    overview: "A week of pure Kashmiri romance — heritage houseboats, snowy peaks, alpine meadows, and the gentlest welcome in India.",
    itinerary: mkItin(7, "Srinagar"),
    inclusions: ["6 nights premium hotels & 1 night houseboat", "Daily breakfast & dinner", "Private SUV with driver", "All sightseeing & permits", "Airport transfers"],
    exclusions: ["Airfare", "Lunch", "Gondola tickets", "Personal expenses", "Travel insurance"],
    faqs: baseFaqs,
  },
  {
    slug: "ladakh-expedition-8n9d", title: "Ladakh High-Altitude Expedition", destination: "Ladakh", destinationSlug: "ladakh",
    image: d("ladakh").image, gallery: [d("ladakh").image, d("kashmir").image],
    duration: "8N / 9D", days: 9, price: 39999, oldPrice: 46999, rating: 4.8, reviews: 218,
    category: "Adventure",
    highlights: ["Pangong Lake camping", "Nubra Valley camels", "Khardung La pass", "Thiksey Monastery", "Magnetic Hill"],
    overview: "For travellers chasing thin air and thick memories — high passes, cold desert dunes, and lakes the colour of stained glass.",
    itinerary: mkItin(9, "Leh"),
    inclusions: ["8 nights stay (hotels + tented camps)", "All meals", "4x4 SUV transport", "Inner-line permits", "Oxygen support"],
    exclusions: ["Airfare to Leh", "Personal trekking gear", "Camera fees at monasteries"],
    faqs: baseFaqs,
  },
  {
    slug: "kerala-backwater-5n6d", title: "Kerala Backwaters & Beaches", destination: "Kerala", destinationSlug: "kerala",
    image: d("kerala").image, gallery: [d("kerala").image, d("kashmir").image],
    duration: "5N / 6D", days: 6, price: 22999, rating: 4.9, reviews: 487,
    category: "Honeymoon",
    highlights: ["Private houseboat in Alleppey", "Munnar tea hills", "Kovalam beach", "Kathakali show", "Spice plantation tour"],
    overview: "Honeymoon-perfect: a private houseboat night, mist-wrapped tea plantations, and barefoot beach days on the Arabian Sea.",
    itinerary: mkItin(6, "Kochi"),
    inclusions: ["5 nights premium stays", "1 night private houseboat", "Daily breakfast", "Private AC sedan", "All transfers"],
    exclusions: ["Airfare", "Lunch & dinner (except houseboat)", "Spa & ayurveda sessions"],
    faqs: baseFaqs,
  },
  {
    slug: "bali-romance-6n7d", title: "Bali Romantic Hideaway", destination: "Bali", destinationSlug: "bali",
    image: d("bali").image, gallery: [d("bali").image, d("thailand").image, d("maldives").image],
    duration: "6N / 7D", days: 7, price: 84999, oldPrice: 99999, rating: 4.9, reviews: 624,
    category: "Honeymoon",
    highlights: ["Private pool villa in Ubud", "Uluwatu sunset & fire dance", "Nusa Penida day trip", "Floating breakfast", "Couples spa"],
    overview: "Two parts paradise, one part pampering — jungle villas, cliffside temples, and beach clubs designed for slow days together.",
    itinerary: mkItin(7, "Bali"),
    inclusions: ["3 nights Ubud pool villa + 3 nights Seminyak resort", "Daily breakfast", "Private SUV with English-speaking driver", "Floating breakfast", "60-min couple spa"],
    exclusions: ["International flights", "Visa fees", "Optional water sports"],
    faqs: baseFaqs,
  },
  {
    slug: "dubai-luxury-5n6d", title: "Dubai Skyline & Desert", destination: "Dubai", destinationSlug: "dubai",
    image: d("dubai").image, gallery: [d("dubai").image, d("maldives").image],
    duration: "5N / 6D", days: 6, price: 79999, rating: 4.8, reviews: 391,
    category: "International",
    highlights: ["Burj Khalifa 124th floor", "Desert safari with falconry", "Marina yacht cruise", "Global Village", "Miracle Garden"],
    overview: "Skyline brunches, gold-souk afternoons, and a desert night under more stars than the city ever shows you.",
    itinerary: mkItin(6, "Dubai"),
    inclusions: ["5 nights 5-star hotel", "Daily breakfast", "All tours with guide", "Private transfers", "Desert safari with BBQ dinner"],
    exclusions: ["Flights", "Visa", "Optional Atlantis tickets"],
    faqs: baseFaqs,
  },
  {
    slug: "thailand-island-7n8d", title: "Thailand Island Hopper", destination: "Thailand", destinationSlug: "thailand",
    image: d("thailand").image, gallery: [d("thailand").image, d("bali").image],
    duration: "7N / 8D", days: 8, price: 64999, oldPrice: 74999, rating: 4.7, reviews: 512,
    category: "Group Tour",
    highlights: ["Phi Phi & Maya Bay tour", "Bangkok grand palace", "Floating market", "Krabi sunset cruise", "Night market food trail"],
    overview: "From Bangkok's neon energy to Krabi's emerald waters — a week of island hops, longtail boats, and Thai street feasts.",
    itinerary: mkItin(8, "Bangkok"),
    inclusions: ["7 nights 4-star hotels", "Daily breakfast", "Internal flight Bangkok-Krabi", "Island tours", "All transfers"],
    exclusions: ["International flights", "Visa on arrival", "Optional spa treatments"],
    faqs: baseFaqs,
  },
  {
    slug: "maldives-overwater-4n5d", title: "Maldives Overwater Villa", destination: "Maldives", destinationSlug: "maldives",
    image: d("maldives").image, gallery: [d("maldives").image, d("bali").image],
    duration: "4N / 5D", days: 5, price: 134999, rating: 5.0, reviews: 287,
    category: "Honeymoon",
    highlights: ["Overwater villa", "Seaplane transfer", "Sandbank picnic", "Sunset dolphin cruise", "Couples candlelight dinner"],
    overview: "The bucket-list one. Wake up over a turquoise lagoon, snorkel coral gardens from your steps, and watch sunsets others only dream about.",
    itinerary: mkItin(5, "Malé"),
    inclusions: ["4 nights overwater villa, all-inclusive", "Seaplane transfers", "Daily breakfast/lunch/dinner", "Sandbank picnic", "Sunset cruise"],
    exclusions: ["International flights", "Premium beverages", "Diving courses"],
    faqs: baseFaqs,
  },
  {
    slug: "vietnam-cultural-6n7d", title: "Vietnam Cultural Trail", destination: "Vietnam", destinationSlug: "vietnam",
    image: d("vietnam").image, gallery: [d("vietnam").image, d("thailand").image],
    duration: "6N / 7D", days: 7, price: 58999, rating: 4.8, reviews: 198,
    category: "International",
    highlights: ["Ha Long Bay overnight cruise", "Hoi An lantern town", "Hanoi old quarter food walk", "Mekong delta day trip", "Cu Chi tunnels"],
    overview: "Hanoi's chaos, Ha Long's calm, Hoi An's lanterns, and Saigon's swagger — Vietnam in seven unforgettable acts.",
    itinerary: mkItin(7, "Hanoi"),
    inclusions: ["6 nights stays (incl. 1 night junk cruise)", "Daily breakfast", "Internal flights", "Private guide", "All transfers"],
    exclusions: ["International flights", "Visa", "Tips"],
    faqs: baseFaqs,
  },
  {
    slug: "weekend-coorg-2n3d", title: "Coorg Weekend Reset", destination: "Coorg", destinationSlug: "kerala",
    image: d("kerala").image, gallery: [d("kerala").image],
    duration: "2N / 3D", days: 3, price: 9999, rating: 4.6, reviews: 142,
    category: "Weekend",
    highlights: ["Coffee plantation stay", "Abbey Falls", "Raja's Seat sunset", "Authentic Kodava lunch"],
    overview: "Forty-eight hours among coffee blooms and misty hills — exactly the reset your week was begging for.",
    itinerary: mkItin(3, "Coorg"),
    inclusions: ["2 nights plantation resort", "Daily breakfast", "AC sedan from Bangalore", "All sightseeing"],
    exclusions: ["Lunch & dinner", "Entry fees"],
    faqs: baseFaqs,
  },
  {
    slug: "corporate-rishikesh-3n4d", title: "Rishikesh Corporate Retreat", destination: "Rishikesh", destinationSlug: "ladakh",
    image: d("ladakh").image, gallery: [d("ladakh").image],
    duration: "3N / 4D", days: 4, price: 18999, rating: 4.7, reviews: 96,
    category: "Corporate",
    highlights: ["Riverside camp", "White-water rafting", "Bonfire team activities", "Yoga & meditation", "Curated leadership workshop"],
    overview: "A retreat designed for teams — adventure that builds trust, sunrise yoga that rewires focus, and evenings around the Ganga.",
    itinerary: mkItin(4, "Rishikesh"),
    inclusions: ["3 nights riverside camp", "All meals", "Rafting & activities", "Workshop facilitator", "Tempo Traveller transport"],
    exclusions: ["Flights/train fare", "Personal expenses"],
    faqs: baseFaqs,
  },
  {
    slug: "family-rajasthan-7n8d", title: "Royal Rajasthan Family Tour", destination: "Rajasthan", destinationSlug: "dubai",
    image: d("dubai").image, gallery: [d("dubai").image],
    duration: "7N / 8D", days: 8, price: 44999, rating: 4.8, reviews: 234,
    category: "Family",
    highlights: ["Jaipur palaces", "Udaipur lake hotel", "Jodhpur blue city", "Camel safari", "Folk dance evening"],
    overview: "Palaces, deserts, and family-sized memories — Rajasthan turns every child into a prince and every parent into royalty.",
    itinerary: mkItin(8, "Jaipur"),
    inclusions: ["7 nights heritage hotels", "Daily breakfast & dinner", "Private SUV", "Guided palace tours", "Camel safari"],
    exclusions: ["Flights", "Monument entry fees"],
    faqs: baseFaqs,
  },
  {
    slug: "adventure-spiti-9n10d", title: "Spiti Valley Adventure Circuit", destination: "Spiti", destinationSlug: "ladakh",
    image: d("ladakh").image, gallery: [d("ladakh").image, d("kashmir").image],
    duration: "9N / 10D", days: 10, price: 36999, rating: 4.9, reviews: 167,
    category: "Adventure",
    highlights: ["Chandratal lake camping", "Key Monastery", "Hikkim post office", "Pin Valley", "Himalayan night sky"],
    overview: "Off-grid, high-altitude, and astonishingly cinematic — Spiti delivers the kind of adventure that resets what 'remote' means.",
    itinerary: mkItin(10, "Manali"),
    inclusions: ["9 nights stays/camps", "All meals", "4x4 Innova Crysta", "Permits & oxygen kit", "Driver-guide"],
    exclusions: ["Flights", "Personal gear", "Travel insurance"],
    faqs: baseFaqs,
  },
];
