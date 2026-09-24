const CDN = "https://de9ar5iu9yk2d.cloudfront.net/Portals/0/UltraMediaGallery/715/580";

export const property = {
  name: "Ionian Treasure Suites",
  tagline: "Pessada, Kefalonia, Greece",
  operator: "Selected Hideaways",
  phone: "+30 22861 86603",
  phoneHref: "+302286186603",
  email: "info@ioniantreasuresuites.com",
  address: "Pessada, Kefalonia 28100, Ionian Islands, Greece",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pessada%2C+Kefalonia%2C+Greece",
  reservationUrl: "https://ioniantreasuresuites.reserve-online.net/accommodation/suite",
  coverImage: "https://www.ioniantreasuresuites.com/images/ioniantreasuresuitescover3.jpg",
  checkIn: "15:00",
  checkOut: "11:00",
  suiteCount: 9,
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
  "\u201cIonian Treasure Suites\u201d is in a beautiful location on Kefalonia island, in the village of Pessada.",
  "The complex offers its guests nine brand-new suites in three types \u2014 Junior Suites with a shared pool, Superior Suites with a private pool, and Two Bedroom Suites with a private pool. All are tastefully decorated and fully equipped with modern amenities: air-conditioning, a sitting area, a bathroom with shower, free Wi-Fi and a dining table in the kitchen.",
  "\u201cIonian Treasure Suites\u201d also features a swimming pool, a garden, a lovely view of the sea, parking and a private entrance.",
  "The accommodation is in a privileged location \u2014 just 600 metres from beautiful Pessada Beach, and close to the village port with seasonal ferries to Zakynthos. Argostoli, Kefalonia's capital, is a ten-minute drive away, and guests have a choice of many sandy, organised beaches nearby.",
];

export const facilities = [
  "Air conditioning",
  "Garden",
  "Swimming pool",
  "Pool towels",
  "Sunbeds",
  "Outdoor furniture",
  "Free Wi-Fi",
  "TV with Netflix",
  "Laundry service (on request)",
  "Private entrance",
  "Private parking (free)",
  "Non-smoking",
];

export const amenityGroups: Record<string, string[]> = {
  Sleeping: [
    "Bedroom with one large double bed",
    "Linen provided",
    "Wardrobe / closet",
    "Safe",
  ],
  Living: [
    "Seating area with sofa",
    "TV with Netflix",
    "Free Wi-Fi",
    "Air conditioning (2 units)",
  ],
  Kitchen: [
    "Fully equipped kitchen & kitchenware",
    "Stovetop, refrigerator, microwave",
    "Coffee machine & electric kettle",
    "Grill and dining table",
  ],
  Bathroom: [
    "Bathroom with shower",
    "Free toiletries",
    "Hairdryer",
    "Pool towels",
  ],
  Practical: [
    "Private entrance",
    "Private parking (free)",
    "Laundry on request",
    "Non-smoking",
  ],
};

export type Suite = {
  id: string;
  number: string;
  name: string;
  units: number;
  size: number;
  sleeps: number;
  view: string;
  blurb: string;
  highlights: string[];
  images: string[];
};

export const suites: Suite[] = [
  {
    id: "junior-suite-shared-pool",
    number: "Junior",
    name: "Junior Suite with Shared Pool",
    units: 5,
    size: 32,
    sleeps: 2,
    view: "Pool & garden",
    blurb:
      "A bright, brand-new suite for two, a few steps from the shared swimming pool. Tastefully decorated with a bedroom, sitting area, fully equipped kitchen and a bathroom with shower \u2014 plus your own private entrance and terrace.",
    highlights: ["Shared swimming pool", "Private entrance & terrace", "Full kitchen", "Free Wi-Fi & Netflix"],
    images: [
      `${CDN}/10010onefour.20240710130727.jpg`,
      `${CDN}/10020onefour.20240710130728.jpg`,
      `${CDN}/10040onefour.20240710130725.jpg`,
      `${CDN}/10060onefour.20240710130737.jpg`,
    ],
  },
  {
    id: "superior-suite-private-pool",
    number: "Superior",
    name: "Superior Suite with Private Pool",
    units: 2,
    size: 38,
    sleeps: 2,
    view: "Sea & private pool",
    blurb:
      "All the comfort of our Junior Suites with one unforgettable extra: your own private pool on the terrace, looking out toward the Ionian. A quiet, completely private corner of Kefalonia for two.",
    highlights: ["Private pool on the terrace", "Sea view", "Full kitchen & dining table", "Free Wi-Fi & Netflix"],
    images: [
      `${CDN}/30010three.20240710110724.jpg`,
      `${CDN}/30020three.20240710110734.jpg`,
      `${CDN}/30030three.20240710110729.jpg`,
      `${CDN}/30050three.20240710110747.jpg`,
    ],
  },
  {
    id: "two-bedroom-suite-private-pool",
    number: "Two Bedroom",
    name: "Two Bedroom Suite with Private Pool",
    units: 2,
    size: 55,
    sleeps: 4,
    view: "Sea & private pool",
    blurb:
      "Our largest suites: two separate bedrooms, a spacious living area and a fully equipped kitchen, opening onto a private pool and terrace. Ideal for families or two couples travelling together.",
    highlights: ["Two separate bedrooms", "Private pool & terrace", "Sleeps up to 4", "Full kitchen & dining table"],
    images: [
      `${CDN}/20010twofive.20240710120750.jpg`,
      `${CDN}/20030twofive.20240710120705.jpg`,
      `${CDN}/20040twofive.20240710120740.jpg`,
      `${CDN}/20060twofive.20240710120748.jpg`,
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
  { src: `${CDN}/10010onefour.20240710130727.jpg`, alt: "Suite bedroom with large double bed", category: "Suites" },
  { src: `${CDN}/10040onefour.20240710130725.jpg`, alt: "Suite seating area with sofa", category: "Suites" },
  { src: `${CDN}/10160onefour.20240710130735.jpg`, alt: "Fully equipped suite kitchen with dining table", category: "Suites" },
  { src: `${CDN}/20030twofive.20240710120705.jpg`, alt: "Bright suite interior with garden view", category: "Suites" },
  { src: `${CDN}/20220twofive.20240710120702.jpg`, alt: "Bathroom with walk-in shower", category: "Suites" },
  { src: `${CDN}/30020three.20240710110734.jpg`, alt: "Suite terrace with outdoor furniture and sea view", category: "Suites" },
  { src: `${CDN}/30050three.20240710110747.jpg`, alt: "Suite bedroom looking out toward the Ionian sea", category: "Suites" },
  { src: `${CDN}/30130three.20240710110745.jpg`, alt: "Detail of suite decoration and lighting", category: "Suites" },
  { src: `${CDN}/30340three.20240710120707.jpg`, alt: "Evening view from a suite veranda", category: "Suites" },
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
    q: "Is parking available?",
    a: "Yes. Private on-site parking is free for all guests, and each suite has its own private entrance.",
  },
  {
    q: "Are the suites suitable for families?",
    a: "Yes. The Junior and Superior Suites are designed for two guests, while the Two Bedroom Suites with private pool sleep up to four \u2014 ideal for families or two couples travelling together.",
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
  { title: "Swimming pool & sunbeds", text: "A private pool terrace with loungers, parasols and pool towels for every suite." },
  { title: "600 m to Pessada Beach", text: "A short walk downhill to the cove, with many more organised beaches nearby." },
  { title: "Fully equipped kitchens", text: "Stovetop, refrigerator, microwave, coffee machine, grill and a dining table." },
  { title: "Free Wi-Fi & Netflix", text: "Fast wireless internet throughout and a smart TV with Netflix in each suite." },
  { title: "Free private parking", text: "On-site parking and a private entrance to every suite. Car hire arranged." },
  { title: "Brand-new interiors", text: "Tastefully decorated 32 m\u00b2 suites with air conditioning, safe and walk-in shower." },
];
