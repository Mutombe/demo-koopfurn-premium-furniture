export const designTokens = {
  heroStyle: "parallax",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "minimal",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "about", "collections", "gallery", "stats", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Koopfurn Premium Furniture",
    legalName: "Koopfurn Premium Furniture (Pty) Ltd",
    tagline: "Furniture Redefined",
    description:
      "South Africa's destination for luxury furniture. Meticulously crafted pieces that transform spaces into statements. From contemporary living to executive office collections.",
    phone: "+27 81 833 7553",
    phoneRaw: "+27818337553",
    whatsappNumber: "27818337553",
    email: "info@koopfurn.co.za",
    address: "Johannesburg, South Africa",
    country: "South Africa",
    city: "Johannesburg",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 62,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "3,000+",
    employees: "35+",
    coordinates: { lat: -26.2041, lng: 28.0473 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0!2d28.0473!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzE0LjgiUyAyOMKwMDInNTAuMyJF!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza",
    cookieConsentKey: "koopfurn-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/koopfurn",
      instagram: "https://www.instagram.com/koopfurn",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "KOOP",
    logoLine2: "FURN",
  },

  hero: {
    badge: "Premium Furniture Collection",
    titleParts: [
      { text: "Furniture " },
      { text: "Redefined.", highlight: true },
    ],
    subtitle:
      "Every piece in our collection is chosen for its craft, its material, and its ability to transform a room. This is not furniture shopping. This is curation.",
    ctaPrimary: "Explore Collections",
    ctaSecondary: "Visit Showroom",
    trustBadge: "Free Design Consultation",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80", alt: "Modern luxury sofa in minimalist setting" },
      { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80", alt: "Designer interior with premium furniture" },
    ],
  },

  stats: [
    { number: "3000", suffix: "+", label: "Pieces Delivered" },
    { number: "9", suffix: "+", label: "Years of Craft" },
    { number: "62", suffix: "", label: "Five-Star Reviews" },
    { number: "35", suffix: "+", label: "Design Specialists" },
  ],

  servicesPreview: [
    {
      iconName: "Armchair",
      title: "Living Room Collections",
      desc: "Sofas, armchairs, coffee tables, and media consoles. Every piece designed to anchor your living space with elegance.",
    },
    {
      iconName: "Bed",
      title: "Bedroom Suites",
      desc: "Beds, nightstands, dressers, and vanities. Crafted for comfort without sacrificing visual impact.",
    },
    {
      iconName: "Desk",
      title: "Executive Office",
      desc: "Desks, ergonomic chairs, bookshelves, and conference tables. Where productivity meets prestige.",
    },
    {
      iconName: "CookingPot",
      title: "Dining Collections",
      desc: "Tables, chairs, sideboards, and bar units. Built for the moments that matter most.",
    },
    {
      iconName: "Lamp",
      title: "Outdoor Living",
      desc: "Patio sets, loungers, fire pit tables. Premium materials that weather the elements beautifully.",
    },
    {
      iconName: "Star",
      title: "Bespoke Design",
      desc: "Cannot find what you envision? Our design team creates custom pieces built to your exact specifications.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      title: "The Sandton Penthouse",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      title: "Rosebank Executive Suite",
      category: "Commercial",
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      title: "Waterfall Estate Collection",
      category: "Residential",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Crafted With " },
      { text: "Intent.", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    imageAlt: "Premium furniture showroom with curated pieces",
    experienceYears: "9+",
    experienceLabel: "Years of Craft",
    points: [
      {
        title: "Curated Selection",
        desc: "Every piece passes our quality review. We reject more than we accept. The result is a collection where nothing feels out of place.",
      },
      {
        title: "Material Integrity",
        desc: "Solid hardwoods, full-grain leathers, precision-milled metals. We never compromise on what goes into your furniture.",
      },
      {
        title: "Design Consultation",
        desc: "Our in-house designers work with you to ensure every piece fits your space, your palette, and your lifestyle. Complimentary for all orders.",
      },
      {
        title: "White-Glove Delivery",
        desc: "Assembly, placement, packaging removal. We deliver and install every piece exactly where you want it. No exceptions.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80",
    backgroundAlt: "Luxury interior space with designer furniture",
    titleParts: [
      { text: "Your Space " },
      { text: "Deserves", highlight: true },
      { text: " Better." },
    ],
    subtitle:
      "Book a complimentary design consultation. Our specialists will help you select the perfect pieces for every room in your home or office.",
    ctaPrimary: "Book a Consultation",
    whatsappText: "Hi Koopfurn! I would like to book a design consultation.",
  },

  homeTestimonials: [
    {
      name: "Naledi Mthembu",
      role: "Interior Designer, Sandton",
      text: "I have furnished dozens of luxury homes across Johannesburg. Koopfurn is my first call every time. The quality is consistent, the service is impeccable, and the pieces photograph beautifully.",
      rating: 5,
    },
    {
      name: "Robert van der Merwe",
      role: "Managing Director, Rosebank",
      text: "We furnished our entire executive floor through Koopfurn. The boardroom table alone gets compliments from every client who walks in. Worth every cent.",
      rating: 5,
    },
    {
      name: "Thandi Nkosi",
      role: "Homeowner, Waterfall Estate",
      text: "The white-glove delivery experience set them apart. Every piece was placed exactly where I wanted, packaging removed, the team even adjusted the arrangement until I was satisfied. Flawless.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Designed to " },
      { text: "Last.", highlight: true },
      { text: " Built to Inspire." },
    ],
    heroSubtitle:
      "Koopfurn was founded on a simple belief: furniture should be an investment, not a compromise. Every piece we offer meets the standard we would place in our own homes.",
    storyImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    storyImageAlt: "Koopfurn showroom interior with premium furniture display",
    storyProjectCount: "3,000+",
    storyProjectLabel: "Spaces Transformed",
    storyTitle: "From One Showroom to South Africa's Premier Furniture Destination.",
    storyParagraphs: [
      "Koopfurn was born from frustration. Too many furniture stores offered either style without substance or durability without design. We set out to prove that premium quality and contemporary aesthetics could coexist at an accessible price point.",
      "Starting from a single showroom in Johannesburg, we built our reputation on material integrity. Solid hardwoods instead of veneers. Full-grain leather instead of bonded alternatives. Precision metalwork instead of hollow tube frames. Customers noticed the difference immediately.",
      "Today, we serve homeowners, interior designers, property developers, and corporate clients across South Africa. Our design consultation service ensures every piece is not just beautiful on its own but perfect in context. That is the Koopfurn difference.",
    ],
    mission:
      "To make world-class furniture accessible to discerning South Africans. We curate, not mass-produce. We consult, not upsell. We deliver an experience, not just a product.",
    vision:
      "To be the definitive destination for premium furniture in Southern Africa. A brand synonymous with quality, taste, and the kind of service that turns first-time buyers into lifelong clients.",
    values: [
      {
        iconName: "Star",
        title: "Quality First",
        desc: "We reject pieces that do not meet our material and construction standards. No exceptions, no shortcuts.",
      },
      {
        iconName: "Eye",
        title: "Design Integrity",
        desc: "Every piece must be functional, beautiful, and timeless. Trends fade. Good design endures.",
      },
      {
        iconName: "Handshake",
        title: "Service Excellence",
        desc: "From first consultation to final placement, every touchpoint should feel effortless and premium.",
      },
      {
        iconName: "Heart",
        title: "Client Relationships",
        desc: "We furnish homes, not transactions. Many of our clients have been with us since day one.",
      },
    ],
    team: [
      { name: "Design Team", role: "Interior Design Specialists", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
      { name: "Procurement Team", role: "Material & Quality Control", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
    ],
    milestones: [
      { year: "2015", title: "Founded", desc: "Opened our first showroom in Johannesburg with a curated collection of 50 pieces." },
      { year: "2017", title: "500 Clients", desc: "Crossed 500 satisfied clients. Word-of-mouth became our most powerful marketing channel." },
      { year: "2019", title: "Corporate Division", desc: "Launched our executive office furniture line for corporate clients across Gauteng." },
      { year: "2021", title: "Design Consultation", desc: "Introduced complimentary in-home design consultation for all clients." },
      { year: "2023", title: "Showroom Expansion", desc: "Doubled our showroom space. Added outdoor living and bespoke design services." },
      { year: "2025", title: "3,000+ Deliveries", desc: "Surpassed 3,000 successful deliveries across South Africa." },
    ],
    ctaTitle: "Visit Our Showroom",
    ctaSubtitle: "See the craftsmanship up close. Our team is ready to help you find exactly what your space needs.",
    ctaCta: "Book a Visit",
  },

  services: {
    heroTitle: [
      { text: "Every Room. " },
      { text: "Elevated.", highlight: true },
    ],
    heroSubtitle:
      "Six curated collections, each designed to transform a specific space. Whether you are furnishing a penthouse or outfitting a boardroom, the standard is the same: exceptional.",
    items: [
      {
        iconName: "Armchair",
        title: "Living Room Collections",
        slug: "living-room",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        desc: "The living room is where a home reveals its character. Our collection features sectional sofas in full-grain leather, solid wood coffee tables, handcrafted media consoles, and accent chairs that anchor a room without overwhelming it.",
        features: [
          "Full-grain leather and premium fabric sofas",
          "Solid hardwood coffee and side tables",
          "Custom media consoles with cable management",
          "Accent chairs and ottomans",
          "Curated rug and throw pillow pairings",
          "Complimentary layout consultation",
        ],
      },
      {
        iconName: "Bed",
        title: "Bedroom Suites",
        slug: "bedroom",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "Sleep should be sacred, and your bedroom should reflect that. Our suites combine solid wood bed frames, premium mattress foundations, matching nightstands, and dressers built with soft-close hardware and dovetail joints.",
        features: [
          "Solid wood bed frames in king and queen",
          "Premium pocket-spring mattress options",
          "Matching nightstands with soft-close drawers",
          "Dressers with dovetail joinery",
          "Walk-in closet organization systems",
          "Vanity table and mirror sets",
        ],
      },
      {
        iconName: "Desk",
        title: "Executive Office",
        slug: "executive-office",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        desc: "Your workspace should command respect. Our executive line includes standing desks with solid wood tops, ergonomic leather chairs, floor-to-ceiling bookshelves, and conference tables that seat 12 without compromise.",
        features: [
          "Sit-stand executive desks with solid tops",
          "Ergonomic leather executive chairs",
          "Floor-to-ceiling bookshelf systems",
          "Conference tables seating 8-16",
          "Reception area furniture packages",
          "Cable management and power integration",
        ],
      },
      {
        iconName: "CookingPot",
        title: "Dining Collections",
        slug: "dining",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        desc: "The dining table is where families connect. Our collections range from intimate 4-seaters to grand 12-person tables, all crafted from solid wood with matching chairs, sideboards, and bar units.",
        features: [
          "Solid wood dining tables: 4 to 12 seaters",
          "Upholstered and solid wood chair options",
          "Matching sideboards and buffet tables",
          "Bar units and wine storage",
          "Table extension leaf systems",
          "Custom sizing available",
        ],
      },
      {
        iconName: "Lamp",
        title: "Outdoor Living",
        slug: "outdoor",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        desc: "South African living extends outdoors. Our patio and garden furniture is built from weather-resistant materials: teak, powder-coated aluminium, and marine-grade fabrics that maintain their beauty through every season.",
        features: [
          "Teak and aluminium patio dining sets",
          "All-weather wicker loungers and sofas",
          "Fire pit tables with gas integration",
          "Outdoor bar and entertaining sets",
          "Marine-grade Sunbrella fabric cushions",
          "UV-resistant finishes and treatments",
        ],
      },
      {
        iconName: "Star",
        title: "Bespoke Design",
        slug: "bespoke",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "When the collection does not have what you envision, our bespoke service creates it. Work directly with our design team to specify dimensions, materials, finishes, and details. From concept sketch to white-glove delivery.",
        features: [
          "One-on-one design consultation",
          "3D rendering before production",
          "Material and finish sample boards",
          "Custom dimensions to fit any space",
          "Artisan craftsmanship guarantee",
          "8-12 week delivery timeline",
        ],
      },
    ],
    ctaTitle: "Find Your Collection",
    ctaSubtitle: "Visit our showroom or book a consultation to experience the Koopfurn difference firsthand.",
  },

  projects: {
    heroTitle: [
      { text: "Spaces We Have " },
      { text: "Transformed", highlight: true },
    ],
    heroSubtitle:
      "From penthouse living rooms to corporate headquarters, these projects showcase what happens when premium furniture meets thoughtful design.",
    categories: ["All", "Residential", "Commercial", "Hospitality", "Bespoke"],
    items: [
      {
        id: 1,
        title: "Sandton Penthouse Living Suite",
        category: "Residential",
        location: "Sandton, Johannesburg",
        year: "2024",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        desc: "Complete furnishing of a 400sqm penthouse in Sandton. Italian leather sectionals, solid walnut dining suite for 10, and bespoke bedroom furniture throughout all four suites.",
        services: ["Living Room Collections", "Dining Collections", "Bedroom Suites"],
      },
      {
        id: 2,
        title: "Rosebank Corporate Headquarters",
        category: "Commercial",
        location: "Rosebank, Johannesburg",
        year: "2024",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        desc: "Executive floor fit-out for a leading financial services firm. Boardroom table seating 14, partner offices with sit-stand desks, and a reception area designed to impress.",
        services: ["Executive Office", "Bespoke Design"],
      },
      {
        id: 3,
        title: "Waterfall Estate Collection",
        category: "Residential",
        location: "Waterfall Estate, Midrand",
        year: "2023",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        desc: "Whole-home furnishing for a new estate residence. Every room curated to a cohesive palette of warm neutrals and dark wood tones. Included outdoor living and entertainment areas.",
        services: ["Living Room Collections", "Outdoor Living", "Dining Collections"],
      },
    ],
  },

  contact: {
    heroTitle: [
      { text: "Let Us " },
      { text: "Help.", highlight: true },
    ],
    heroSubtitle: "Book a consultation, visit our showroom, or simply ask a question. Our team responds within 24 hours.",
    formTitle: "Get in Touch",
    subjects: [
      "Design Consultation",
      "Product Enquiry",
      "Delivery Information",
      "Corporate Account",
      "Bespoke Commission",
      "General",
    ],
  },

  reviews: {
    heroTitle: "What Our Clients Say",
    heroSubtitle: "Real feedback from businesses and individuals we've served.",
    overallRating: 4.8,
    totalReviews: 12,
    ratingBreakdown: { 5: 8, 4: 3, 3: 1, 2: 0, 1: 0 },
    items: [
      { name: "Tendai Moyo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Business Owner", text: "Exceptional service from start to finish. Professional, reliable, and delivered exactly what was promised. Highly recommend.", rating: 5, date: "2025-11-15", projectType: "Commercial" },
      { name: "Sarah Ncube", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Operations Manager", text: "Outstanding quality and attention to detail. The team went above and beyond our expectations.", rating: 5, date: "2025-10-22", projectType: "Residential" },
      { name: "James Mutasa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Director", text: "Professional approach and excellent communication throughout the project. Would definitely work with them again.", rating: 5, date: "2025-09-18", projectType: "Commercial" },
      { name: "Grace Chikwanha", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Homeowner", text: "Great value for money. The quality exceeded what we expected at this price point.", rating: 4, date: "2025-08-30", projectType: "Residential" },
      { name: "Peter Dube", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "Project Manager", text: "Reliable and efficient. They completed the work on time and within budget.", rating: 5, date: "2025-07-14", projectType: "Commercial" },
      { name: "Rudo Mapfumo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "CEO", text: "Impressed by their professionalism and the quality of their work. A trusted partner.", rating: 5, date: "2025-06-20", projectType: "Industrial" },
      { name: "David Chirume", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Facility Manager", text: "Solid work, good communication, fair pricing. Everything you want in a service provider.", rating: 4, date: "2025-05-11", projectType: "Commercial" },
      { name: "Linda Sithole", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Property Developer", text: "They understood our vision and delivered beautifully. The attention to detail was remarkable.", rating: 5, date: "2025-04-28", projectType: "Residential" },
      { name: "Michael Banda", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Engineer", text: "Technical expertise is top-notch. They solved problems we didnt even know we had.", rating: 5, date: "2025-03-15", projectType: "Industrial" },
      { name: "Nyasha Gumbo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "Procurement Officer", text: "Responsive, professional, and competitively priced. Our go-to provider.", rating: 4, date: "2025-02-08", projectType: "Commercial" },
      { name: "Robert Zvobgo", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Contractor", text: "Reliable partner. They deliver what they promise, every time.", rating: 5, date: "2025-01-22", projectType: "Construction" },
      { name: "Chiedza Mapondera", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "School Administrator", text: "Wonderful experience. The team was courteous, professional, and efficient.", rating: 5, date: "2024-12-10", projectType: "Institutional" },
    ],
  },
};

export default siteData;
