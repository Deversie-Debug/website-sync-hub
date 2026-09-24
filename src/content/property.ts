const CDN = "https://de9ar5iu9yk2d.cloudfront.net/Portals/0/UltraMediaGallery/715/580";

export const property = {
  name: "Ionian Treasure Suites",
  tagline: "Pessada, Kefalonia, Greece",
  phone: "+30 698 995 3758",
  phoneHref: "+306989953758",
  email: "info@ioniantreasuresuites.com",
  address: "Pessada, 28100 Kefalonia, Greece",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pessada%2C+Kefalonia%2C+Greece",
  reservationUrl: "https://ioniantreasuresuites.reserve-online.net/accommodation/suite",
  coverImage: "https://www.ioniantreasuresuites.com/images/ioniantreasuresuitescover3.jpg",
  checkIn: "15:00",
  checkOut: "11:00",
  suiteCount: 9,
  season: "1 April \u2013 31 October",
  licence: "1363681",
};

export const heroImage = `${CDN}/00010pool.20240710120716.jpg`;

export const pageImages = {
  suites: `${CDN}/30010three.20240710110724.jpg`,
  gallery: `${CDN}/00160pool.20240710120719.jpg`,
  location: `${CDN}/00070pool.20240710120736.jpg`,
  contact: `${CDN}/02010reception.20240718100720.jpg`,
  book: `${CDN}/00150pool.20240710120737.jpg`,
};

export const intro = [
  "\u201cIonian Treasure Suites\u201d is in the village of Pessada on the island of Kefalonia.",
  "The property offers nine suites in three types \u2014 five Junior Suites with a shared pool, two Superior Suites with a private pool and two Two Bedroom Suites with a private pool. Every suite has air conditioning, a sitting area with sofa bed, a bathroom with shower, a flat-screen TV, coffee facilities and free Wi-Fi.",
  "Guests enjoy concierge service, pool towels, a safe deposit box, satellite TV and Wi-Fi throughout. We are open from 1 April to 31 October.",
];

export const facilities = [
  "Concierge",
  "Pool towels",
  "Safe deposit box",
  "Satellite TV",
  "Wi-Fi internet access",
];

export const amenityGroups: Record<string, string[]] = {
  Comfort: ["Air conditioning", "Sitting area", "Sofa bed", "Flat-screen TV"],
  Connectivity: ["Free Wi-Fi internet access", "ADSL internet connection"],
  Bathroom: ["Bathroom with shower", "Bath amenities", "Bathrobes and slippers", "Hairdryer"],
  Practical: ["Coffee facilities", "Iron & ironing board", "Safe deposit box", "Pool towels", "Pool view"],
};

export type Suite = {
  id: string;
  number: string;
  name: string;
  units: number;
  sleeps: number;
  pool: string;
  blurb: string;
  highlights: string[];
  images: string[];
};

const WH = "https://cdn.webhotelier.net/photos/w=1600";

export const suites: Suite[] = [
  {
    id: "junior-suite-shared-pool",
    number: "Junior",
    name: "Junior Suite with Shared Pool",
    units: 5,
    sleeps: 4,
    pool: "Shared pool",
    blurb:
      "A suite for up to four guests with a pool view and access to the shared swimming pool. It has a sitting area with sofa bed, a bathroom with shower, coffee facilities, a flat-screen TV and free Wi-Fi.",
    highlights: ["Shared swimming pool", "Pool view", "Sofa bed", "Up to 4 guests"],
    images: [
      `${WH}/ioniantr-junior/L1960295.jpg`,
      `${WH}/ioniantr-junior/L1960283.jpg`,
      `${WH}/ioniantr-junior/L1960284.jpg`,
      `${WH}/ioniantr-junior/L1960286.jpg`,
      `${WH}/ioniantr-junior/L1960285.jpg`,
      `${WH}/ioniantr-junior/L1960287.jpg`,
    ],
  },
  {
    id: "superior-suite-private-pool",
    number: "Superior",
    name: "Superior Suite with Private Pool",
    units: 2,
    sleeps: 4,
    pool: "Private pool",
    blurb:
      "A suite for up to four guests with its own private pool and a kitchen. It has a sitting area with sofa bed, a bathroom with shower, coffee facilities, a flat-screen TV and free Wi-Fi.",
    highlights: ["Private pool", "Kitchen", "Sofa bed", "Up to 4 guests"],
    images: [
      `${WH}/ioniantr-super/L1960292.jpg`,
      `${WH}/ioniantr-super/L1960288.jpg`,
      `${WH}/ioniantr-super/L1960291.jpg`,
      `${WH}/ioniantr-super/L1960294.jpg`,
      `${WH}/ioniantr-super/L1960289.jpg`,
      `${WH}/ioniantr-super/L1960297.jpg`,
    ],
  },
  {
    id: "two-bedroom-suite-private-pool",
    number: "Two Bedroom",
    name: "Two Bedroom Suite with Private Pool",
    units: 2,
    sleeps: 5,
    pool: "Private pool",
    blurb:
      "Our two-bedroom suites sleep up to five guests, with a private pool and a kitchen. A sitting area with sofa bed, a bathroom with shower, coffee facilities, a flat-screen TV and free Wi-Fi complete the space.",
    highlights: ["Two bedrooms", "Private pool", "Kitchen", "Up to 5 guests"],
    images: [
      `${WH}/ioniantr-twobed/L1960298.jpg`,
      `${WH}/ioniantr-twobed/L1960300.jpg`,
      `${WH}/ioniantr-twobed/L1960303.jpg`,
      `${WH}/ioniantr-twobed/L1960306.jpg`,
      `${WH}/ioniantr-twobed/L1960310.jpg`,
      `${WH}/ioniantr-twobed/L1960312.jpg`,
    ],
  },
];

export const galleryCategories = ["Pool & grounds", "Suites", "Reception"];

export const galleryImages = [
  { src: `${CDN}/00010pool.20240710120716.jpg`, alt: "Sunbeds and parasols along the swimming pool", category: "Pool & grounds" },
  { src: `${CDN}/00050pool.20240710120711.jpg`, alt: "The pool terrace seen from the garden", category: "Pool & grounds" },
  { src: `${CDN}/00070pool.20240710120736.jpg`, alt: "Turquoise water of the swimming pool at midday", category: "Pool & grounds" },
  { src: `${CDN}/00150pool.20240710120737.jpg`, alt: "Loungers and shade sails beside the pool", category: "Pool & grounds" },
  { src: `${CDN}/00160pool.20240710120719.jpg`, alt: "Pool and suite facades in warm afternoon light", category: "Pool & grounds" },
  { src: `${CDN}/00210pool.20240710120715.jpg`, alt: "Garden planting framing the pool deck", category: "Pool & grounds" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-junior/L1960283.jpg`, alt: "Junior Suite interior", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-junior/L1960284.jpg`, alt: "Junior Suite sitting area", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-junior/L1960286.jpg`, alt: "Junior Suite with pool view", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-super/L1960288.jpg`, alt: "Superior Suite interior", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-super/L1960291.jpg`, alt: "Superior Suite private pool", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-super/L1960294.jpg`, alt: "Superior Suite details", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-twobed/L1960300.jpg`, alt: "Two Bedroom Suite interior", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-twobed/L1960303.jpg`, alt: "Two Bedroom Suite bedroom", category: "Suites" },
  { src: `https://cdn.webhotelier.net/photos/w=1600/ioniantr-twobed/L1960306.jpg`, alt: "Two Bedroom Suite private pool", category: "Suites" },
  { src: `${CDN}/02010reception.20240718100720.jpg`, alt: "Reception lounge of Ionian Treasure Suites", category: "Reception" },
  { src: `${CDN}/02090reception.20240718100740.jpg`, alt: "Seating in the reception area", category: "Reception" },
  { src: `${CDN}/02160reception.20240718100741.jpg`, alt: "Reception desk and stone detailing", category: "Reception" },
  { src: `${CDN}/02300reception.20240718100756.jpg`, alt: "Shaded courtyard beside reception", category: "Reception" },
  { src: `${CDN}/02520reception.20240718110754.jpg`, alt: "Entrance path to the suites", category: "Reception" },
];

export const nearby = [
  { name: "Pessada Beach", distance: "600 m", note: "Pebble and sand cove, a seven-minute walk downhill." },
  { name: "Pessada Port", distance: "1.2 km", note: "Seasonal ferry crossings to Zakynthos island." },
  { name: "Argostoli", distance: "10 min drive", note: "Kefalonia's capital: waterfront, markets and tavernas." },
  { name: "Lourdas Beach", distance: "15 min drive", note: "Long organised sandy beach beneath Mount Ainos." },
  { name: "Myrtos Beach", distance: "45 min drive", note: "The island's most photographed white-pebble bay." },
  { name: "Kefalonia Airport (EFL)", distance: "20 min drive", note: "Direct transfers arranged on request." },
];

export const faqs = [
  {
    q: "How do I book a suite?",
    a: "Send an enquiry through the booking form on this site and we reply personally, usually within 24 hours, with availability and rates. You can also reserve instantly through our secure reservation system, or call us.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 15:00 and check-out is by 11:00. Earlier arrivals and later departures can often be arranged \u2014 just ask when you book.",
  },
  {
    q: "Are rates published?",
    a: "Rates are quoted on request because they vary by season and length of stay. Booking direct with us always gets you our best available rate.",
  },
  {
    q: "When are you open?",
    a: "We operate from 1 April to 31 October.",
  },
  {
    q: "Are the suites suitable for families?",
    a: "Yes. Junior and Superior Suites sleep up to four guests, and the Two Bedroom Suites with private pool sleep up to five.",
  },
  {
    q: "Do you arrange car hire and transfers?",
    a: "We work with Drive Kefalonia for rental cars and can organise airport transfers. Add the request to your booking enquiry.",
  },
];

export const partners = [
  {
    name: "Ionian Treasure Villas",
    description: "Our sister property \u2014 self-catering villas elsewhere on Kefalonia.",
    url: "https://www.ioniantreasurevillas.com/",
    image: "https://www.ioniantreasuresuites.com/images/ioniantreasurevillas_thumb.jpg",
  },
  {
    name: "Drive Kefalonia Rent-a-Car",
    description: "Island car hire, delivered to the property or the airport.",
    url: "https://www.drivekefalonia.com/",
    image: "https://www.ioniantreasuresuites.com/images/drivekefalonia.jpg",
  },
];

export const seasons = [
  {
    period: "May \u2013 June",
    weather: "24\u201329 \u00b0C, long light evenings",
    note: "Wildflowers still on the hillsides, warm sea, beaches almost to yourself. Our quietest good-weather months.",
  },
  {
    period: "July \u2013 August",
    weather: "30\u201334 \u00b0C, dependable sunshine",
    note: "Peak season: the Zakynthos ferry runs from Pessada port and every taverna is open. Book earliest for these dates.",
  },
  {
    period: "September \u2013 early October",
    weather: "24\u201330 \u00b0C, warmest sea of the year",
    note: "Our favourite window \u2014 grape harvest, softer light, and swimming that lasts well into October.",
  },
];

export const experienceCategories = ["Beaches", "Village life", "Day trips", "Food & wine"];

export const experiences = [
  {
    title: "The seven-minute walk to Pessada Beach",
    category: "Beaches",
    distance: "600 m",
    text: "Take the lane below the property and keep going downhill. A small pebble-and-sand cove with clear, sheltered water \u2014 best in the morning before the light goes hard.",
  },
  {
    title: "Lourdas and the long sandy bay",
    category: "Beaches",
    distance: "15 min drive",
    text: "Organised sand beneath Mount Ainos, with sunbeds, shade and a row of tavernas at the top of the road. The easiest full beach day with a car.",
  },
  {
    title: "Myrtos at golden hour",
    category: "Beaches",
    distance: "45 min drive",
    text: "The white-pebble bay everyone photographs. Go late in the afternoon: the crowds thin, the cliffs turn amber and the drive back over the pass is the point.",
  },
  {
    title: "An evening in Argostoli",
    category: "Village life",
    distance: "10 min drive",
    text: "Park near the Drapano bridge and walk the waterfront to Lithostroto for the evening volta, ice cream and the loggerhead turtles that drift by the fish quay.",
  },
  {
    title: "Ferry across to Zakynthos",
    category: "Day trips",
    distance: "1.2 km to the port",
    text: "Seasonal crossings leave from Pessada port just below us. Leave the car, walk on, and be on another island for lunch. We will check the current timetable for you.",
  },
  {
    title: "Mount Ainos and the black firs",
    category: "Day trips",
    distance: "45 min drive",
    text: "A national park of endemic Kefalonian fir, semi-wild horses and a view that takes in the whole island. Bring a layer \u2014 it is noticeably cooler at the top.",
  },
  {
    title: "Robola wine on the Omala plain",
    category: "Food & wine",
    distance: "25 min drive",
    text: "The island's crisp white grape, grown on limestone terraces. The cooperative near Valsamata pours tastings, and bottles travel home well.",
  },
  {
    title: "Market mornings, terrace dinners",
    category: "Food & wine",
    distance: "In your suite",
    text: "Every suite has a full kitchen and a grill. Buy fish and vegetables in Argostoli in the morning, then cook and eat outside as the light drops behind the hills.",
  },
];

export const included = [
  { title: "Shared & private pools", text: "Junior Suites share a pool; Superior and Two Bedroom Suites have their own private pool." },
  { title: "Pool towels", text: "Pool towels provided for every guest." },
  { title: "Coffee facilities", text: "Coffee facilities in every suite, plus a kitchen in Superior and Two Bedroom Suites." },
  { title: "Free Wi-Fi & satellite TV", text: "Free Wi-Fi internet access and a flat-screen TV with satellite channels." },
  { title: "Concierge", text: "Our concierge is happy to help you plan your days on Kefalonia." },
  { title: "Comfort in every suite", text: "Air conditioning, safe deposit box, sofa bed, bathrobes and slippers." },
];
