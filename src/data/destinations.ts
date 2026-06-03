import kashmir from "@/assets/dest-kashmir.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import bali from "@/assets/dest-bali.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import vietnam from "@/assets/dest-vietnam.jpg";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: "Domestic" | "International";
  image: string;
  description: string;
  startingPrice: number;
  tagline: string;
};

export const destinations: Destination[] = [
  { slug: "kashmir", name: "Kashmir", country: "India", region: "Domestic", image: kashmir, description: "Drift across mirror-still Dal Lake at dawn, wander tulip valleys, and sleep aboard heritage shikaras under Himalayan skies.", startingPrice: 18999, tagline: "Paradise on Earth" },
  { slug: "ladakh", name: "Ladakh", country: "India", region: "Domestic", image: ladakh, description: "Cross dizzying mountain passes, camp by electric-blue Pangong, and witness monasteries clinging to ancient cliffs.", startingPrice: 24999, tagline: "Land of High Passes" },
  { slug: "kerala", name: "Kerala", country: "India", region: "Domestic", image: kerala, description: "Float through palm-lined backwaters on a private houseboat, sip cardamom chai, and chase spice-scented sunsets.", startingPrice: 14999, tagline: "God's Own Country" },
  { slug: "bali", name: "Bali", country: "Indonesia", region: "International", image: bali, description: "Cliffside temples, rice-terrace mornings, and palm-fringed beach clubs — Bali wraps you in tropical magic.", startingPrice: 49999, tagline: "Island of the Gods" },
  { slug: "dubai", name: "Dubai", country: "UAE", region: "International", image: dubai, description: "Skyline-piercing towers, golden dunes, and luxury yachts — Dubai dials every experience up to spectacular.", startingPrice: 56999, tagline: "Where Future Meets Desert" },
  { slug: "thailand", name: "Thailand", country: "Thailand", region: "International", image: thailand, description: "Hop turquoise lagoons by longtail boat, feast at floating markets, and unwind on powder-soft islands.", startingPrice: 42999, tagline: "Smiles, Spice & Sea" },
  { slug: "maldives", name: "Maldives", country: "Maldives", region: "International", image: maldives, description: "Glass-floor villas above coral gardens, candlelit sandbank dinners, and the bluest water you'll ever see.", startingPrice: 89999, tagline: "Barefoot Luxury" },
  { slug: "vietnam", name: "Vietnam", country: "Vietnam", region: "International", image: vietnam, description: "Sail through misty Ha Long karsts, lose yourself in Hoi An's lantern lanes, and feast street-side in Hanoi.", startingPrice: 46999, tagline: "Timeless Charm" },
];
