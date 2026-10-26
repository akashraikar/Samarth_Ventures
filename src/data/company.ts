export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface MetricStat {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  courseCompleted: string;
}

export const COMPANY_STORY = {
  foundingYear: "2023",
  tagline:
    "Bridging Centuries of Goldsmith Artistry with Aerospace-Grade 3D CAD Precision",
  narrative: [
    "Samarth Ventures was founded with a singular, uncompromising vision: to elevate the jewellery manufacturing and design sector through rigorous technical education, advanced digital 3D modeling, and high-pricision electroforming innovations.",
    "Originating in the vibrant heart of the Indian jewellery manufacturing capital, our founders recognized a widening divide between traditional goldsmithing genius and the rapid digitization of global luxury markets. While international brands adopted 5-axis CNC, SLA micro-printing, and procedural surface modeling, local artisans were constrained by manual wax carving and unstandardized castings.",
    "Over the last several years, Samarth Ventures has evolved from a boutique CAD studio into India’s foremost industrial training academy and advanced jewellery engineering center. We have trained over 500 professionals—ranging from fourth-generation hereditary karigars to corporate designers from prestigious international export houses—empowering them with precision mathematical modeling, reverse engineering, and sustainable manufacturing workflows.",
  ],
  mission:
    "To democratize world-class 3D CAD engineering for jewellers, transforming traditional craftsmen into digital artisans and enabling jewellery manufacturers to achieve flawless production yield, dramatic gold weight savings, and unmatched aesthetic brilliance.",
  vision:
    "To establish global leadership in jewellery technical education, electroforming research, and digital heritage preservation, inspiring a new era where technology honors the master craftsman.",
  values: [
    {
      title: "Precision Over Approximation",
      description:
        "In electroforming jewellery, 0.1mm to 0.09mm determines flawless weight management. We impart mathematical accuracy in design engineering for impeccable output.",
    },
    {
      title: "Production-Ready Mindset",
      description:
        "We do not teach digital drawing for the screen alone. Every file modeled in our academy must clear all the downstream manufacturing processes involved, and polish to mirror perfection.",
    },
    {
      title: "Honoring Heritage Craftsmanship",
      description:
        "We view 3D software not as a replacement for human soul, but as an amplifier for centuries of traditional nakshi, filigree, and jadau wisdom.",
    },
    {
      title: "High-Pricision Innovation in Electroforming",
      description:
        "Pioneering hollow luxury through state-of-the-art chemical baths and lightweighting algorithms that save up to 90% raw gold weight while preserving surface durability.",
    },
  ],
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2023",
    title: "Founding of Samarth Ventures Training Academy",
    description:
      "Launched our flagship online training platform in Bangalore, featuring authorized McNeel Rhinoceros certified curricula.",
  },
  {
    year: "2024",
    title: "Launch of the Advanced Workstation Training Center",
    description:
      "Inaugurated our physical training facility, equipped with high-performance workstations to deliver hands-on, certified McNeel Rhinoceros training.",
  },
  {
    year: "2025",
    title: "Establishment of Samarth Ventures CAD Studio",
    description:
      "Founded our specialized 3D jewellery design studio, delivering precision modeling for electroforming to tier-one manufacturing enterprises.",
  },
  {
    year: "2025",
    title: "Launch of the Digital Artisan Fellowship Program",
    description:
      "Formed strategic nationwide partnerships across Rajasthan, Gujarat, Maharashtra, and South India to transition hereditary karigars into proficient 3D CAD professionals.",
  },
  {
    year: "2026",
    title: "Inception of the Reverse Engineering Division",
    description:
      "Integrated industrial blue-light 3D laser scanning and reverse engineering workflows into our core curriculum, serving antique heritage preservation and CNC die-mold manufacturing.",
  },
  {
    year: "2026",
    title: "Expansion into Industrial Electroforming Consultancy",
    description:
      "Deployed specialized electroforming design training modules and advanced on-site corporate consultancy services for manufacturing clients.",
  },
  {
    year: "Present",
    title: "Global Network of 500+ Certified Professionals",
    description:
      "Positioned as the premier training partner for elite jewellery manufacturers, boasting a 98.4% graduate placement rate alongside state-of-the-art electroforming services.",
  },
];

export const KEY_METRICS: MetricStat[] = [
  {
    value: "500+",
    label: "Certified Professionals",
    description:
      "Graduates actively leading design studios and manufacturing units worldwide.",
  },
  {
    value: "98.4%",
    label: "Placement recommendations & Industry Rate",
    description:
      "Direct reference for recruitment by top domestic and export fine jewellery conglomerates.",
  },
  {
    value: "90%",
    label: "Gold Weight Reduction",
    description:
      "Achieved through our specialized hollow CAD and electroforming technology.",
  },
  {
    value: "30+ Years",
    label: "Industry Technical Mastery",
    description:
      "Leadership in Rhino 3D modeling, Reverse Engineering and Electroforming troubleshooting.",
  },
];

export const ELECTROFORMING_DATA = {
  heroTitle: "Electroforming: The Science of Lightweight Luxury",
  subtitle:
    "Achieve up to 90% gold weight savings with uncompromising surface hardness and micro-meter structural fidelity.",
  processSteps: [
    {
      step: "01",
      title: "Parametric CAD Mandrel Modeling",
      description:
        "The jewellery piece is engineered in Rhinoceros with calibrated wall relief, internal support ribs, evacuation ports, and electrical conductivity contact points.",
    },
    {
      step: "02",
      title: "Conductive Core Activation",
      description:
        "Precision sacrificial wax or low-melting copper alloys are prepared and coated with microscopic conductive silver layers to ensure uniform electrodeposition.",
    },
    {
      step: "03",
      title: "Precision Electro-Deposition Bath",
      description:
        "Immersed in controlled gold cyanide / sulphite electrolytic tanks under micro-amperage current density, depositing 24K or 18K gold atoms uniformly at 120–250 microns.",
    },
    {
      step: "04",
      title: "Thermal Mandrel Evacuation",
      description:
        "The internal sacrificial core is safely evacuated through microscopic exhaust vents using controlled chemical dissolution or thermal leaching, leaving a 100% hollow, seamless gold shell.",
    },
    {
      step: "05",
      title: "Structural Tempering & Polishing",
      description:
        "Heat treatment increases Vickers micro-hardness to withstand everyday wear and prong setting, followed by automated magnetic finishing and hand luster polishing.",
    },
  ],
  specifications: [
    {
      param: "Weight Reduction vs Solid Cast",
      value: "45% to 90%",
      note: "Significant reduction in retail price barrier without visible difference",
    },
    {
      param: "Wall Thickness Uniformity",
      value: "100 – 220 µm (Microns)",
      note: "Controlled by computerized current density distributors",
    },
    {
      param: "Gold Fineness Purity (Approx)",
      value: "9K(375) / 14K (585) / 18K (750) / 22K (916) / 24K (999)",
      note: "Conforms to Hallmarking & Bureau of Indian Standards",
    },
    {
      param: "Surface Vickers Hardness (HV)",
      value: "120 – 165 HV",
      note: "Higher scratch resistance than conventional annealed cast gold",
    },
    {
      param: "Dimensional Tolerance",
      value: "± 0.015 mm",
      note: "Perfect reproduction of intricate filigree and nakshi relief",
    },
    {
      param: "Eco-Friendly Chemistry",
      value: "Closed-Loop Cyanide Neutralized",
      note: "Zero discharge environmental compliance with silver recovery",
    },
  ],
  costComparison: {
    solidGoldWeight: "45.0 grams",
    solidGoldCost: "₹3,37,500",
    electroformedWeight: "14.5 grams",
    electroformedCost: "₹1,08,750",
    savingsPercentage: "67.8% Gold Capital Savings",
    retailAdvantage: "High-impact statement bridal look at accessible pricing",
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Digital Artisan course completely transformed my workflow by beautifully blending traditional craft principles with cutting-edge 3D tools. It gave me the advanced technical skills and confidence I needed to truly elevate my design career.",
    author: "Dinesh Naik",
    role: "Senior CAD Designer",
    company: "Mehta Gold Pvt. Ltd.",
    courseCompleted:
      "Digital Artisan - Advanced 3D Modelling for Traditional Crafts",
  },
  {
    quote:
      "This institute provides an exceptional, industry-focused learning environment with top-tier mentorship. The Digital Artisan program completely elevated my technical mastery over high-precision 3D modeling and complex CAM outputs.",
    author: "Ravi Naik",
    role: "Senior CAD/CAM Designer",
    company: "Bhima Gold, Bangalore",
    courseCompleted:
      "Digital Artisan - Advanced 3D Modelling for Traditional Crafts",
  },
  {
    quote:
      "I had an incredible, forward-thinking learning experience here backed by brilliant practical guidance. The Jewellery CAD Professional course gave me comprehensive mastery over advanced Rhinoceros workflows and high-end retail design standards.",
    author: "Priyanka",
    role: "Technical Designer",
    company: "Titan (Tanishq)",
    courseCompleted:
      "Jewellery CAD Professional in Rhinoceros - Advanced Level",
  },
];
