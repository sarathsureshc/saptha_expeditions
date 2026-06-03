import s1 from "@/assets/story-1.jpg";
import s2 from "@/assets/story-2.jpg";
import s3 from "@/assets/story-3.jpg";
import k from "@/assets/dest-kashmir.jpg";
import b from "@/assets/dest-bali.jpg";
import m from "@/assets/dest-maldives.jpg";

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "watching-sunrise-above-clouds",
    title: "Watching the Sunrise Above the Clouds in Munnar",
    excerpt: "A 4am alarm, a flask of cardamom tea, and a moment that makes every early morning worth it.",
    cover: s1, author: "Anjali Menon", authorRole: "Senior Travel Curator",
    date: "May 14, 2026", readTime: "6 min read", category: "Adventure",
    body: [
      "There are mornings you remember for the silence, and this was one of them. We left the resort in pitch dark — only the green glow of our driver's dashboard for company — and wound up the switchbacks toward Top Station.",
      "By the time we arrived, the world below was missing. Clouds had filled the valleys overnight, an unbroken ocean of white pierced only by distant peaks. Then the sun arrived, slow and warm, and the cloud sea turned pink, gold, copper.",
      "This is the part of travel that doesn't make it onto Instagram — not really. The chill in your hands. The way your guide passes you tea without saying anything. The quiet decision that you'll never sleep in on a trip again.",
    ],
  },
  {
    slug: "honeymoon-in-bali",
    title: "Our Honeymoon in Bali: 7 Days, 7 Magical Moments",
    excerpt: "From floating breakfasts to cliffside temple sunsets — a couple's diary of an unforgettable week.",
    cover: s2, author: "Rohan & Tara",
    authorRole: "Honeymoon Travellers",
    date: "April 22, 2026", readTime: "8 min read", category: "Honeymoon",
    body: [
      "We chose Bali because everyone said it would feel like a dream. They were right, but they undersold it. The dream had a soundtrack — gamelan music, distant temple bells, the rush of rice-paddy water — and a smell, frangipani and incense, that we still catch in unexpected moments back home.",
      "Day one was Ubud. Day three was Uluwatu's fire dance, with the sun bleeding into the Indian Ocean. By day five we'd stopped checking the time. Our villa had no clocks anyway, just a private pool and a hammock and a butler who learned how we took our coffee by morning two.",
      "If you're planning a honeymoon and you can stretch the budget — do it. Future-you will not regret the upgrade to the pool villa.",
    ],
  },
  {
    slug: "street-food-in-hanoi",
    title: "A Street-Food Education in Hanoi's Old Quarter",
    excerpt: "Plastic stools, sizzling woks, and the best $3 dinner we've ever had.",
    cover: s3, author: "Karan Pillai", authorRole: "Food & Travel Writer",
    date: "March 30, 2026", readTime: "5 min read", category: "Culture",
    body: [
      "Hanoi doesn't ease you in. Within an hour of landing, we were elbows-deep in a bowl of bun cha at a corner stall, perched on stools made for very small humans, with motorbikes flowing past like a river.",
      "Our guide, Linh, took us on a three-hour food walk that turned into five. Egg coffee at Giảng. Banh mi from a cart that's been parked on the same corner since 1979. Pho at midnight from a stand that has no name and no menu.",
      "Hanoi taught us that the best food in the world is rarely served on tablecloths. Sometimes the chair is plastic, the menu is the woman pointing at a pot, and you just nod.",
    ],
  },
  {
    slug: "kashmir-in-winter",
    title: "Kashmir in Winter: Snow, Silence, and Saffron Tea",
    excerpt: "Why January might just be the best month to visit the valley nobody warns you about.",
    cover: k, author: "Anjali Menon", authorRole: "Senior Travel Curator",
    date: "February 18, 2026", readTime: "7 min read", category: "Destinations",
    body: [
      "The valley empties in January, and that's exactly the point. Gulmarg's slopes belong to skiers and the occasional yak. Dal Lake freezes in patches and the shikara wallahs trade oars for chai-stove duty.",
      "We stayed at a houseboat in Srinagar with a kangri at our feet and saffron tea on the brazier. The owner played 70s Hindi cinema on a tiny TV and we didn't move for hours.",
      "If you can handle the cold, Kashmir in winter is the version locals love most. Quiet. Snow-softened. And impossibly photogenic.",
    ],
  },
  {
    slug: "first-time-maldives",
    title: "Was the Maldives Worth the Hype? A First-Timer's Honest Take",
    excerpt: "We splurged on the overwater villa. Here's what surprised us — good and bad.",
    cover: m, author: "Priya Sharma", authorRole: "Travel Editor",
    date: "January 28, 2026", readTime: "9 min read", category: "Reviews",
    body: [
      "Short answer: yes. Long answer: yes, but with caveats nobody mentions.",
      "The water really is that colour. The fish really do swim under your glass floor. The seaplane really is the most fun way to land anywhere on Earth. But you'll also pay $14 for a coffee, and your phone signal will be spotty, and that's actually the gift of the place.",
      "Three nights felt short. Five felt right. Seven is overkill unless you genuinely want to do nothing — which, honestly, is the whole point.",
    ],
  },
  {
    slug: "packing-light-for-southeast-asia",
    title: "How We Packed for 3 Weeks in Southeast Asia in One Carry-On",
    excerpt: "The wardrobe, the toiletries, the gear — and the three things we wish we'd left at home.",
    cover: b, author: "Karan Pillai", authorRole: "Food & Travel Writer",
    date: "December 12, 2025", readTime: "6 min read", category: "Tips",
    body: [
      "Three weeks. Five countries. One 40-litre backpack. We did it, and it changed how we travel.",
      "The secret isn't fewer clothes — it's smarter ones. Two pairs of quick-dry shorts, three merino tees, one set of evening clothes, sandals, sneakers, and a packable rain shell. That's it.",
      "Skip the bulky power bank. Skip the second camera. Skip the 'just in case' jacket. Southeast Asia will provide.",
    ],
  },
];
