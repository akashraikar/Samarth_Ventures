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
  foundingYear: '2011',
  tagline: 'Bridging Centuries of Goldsmith Artistry with Aerospace-Grade 3D CAD Precision',
  narrative: [
    'Samarth Ventures was founded with a singular, uncompromising vision: to elevate the jewelry manufacturing and design sector through rigorous technical education, advanced digital 3D modeling, and scientific electroforming innovations.',
    'Originating in the vibrant heart of the Indian jewelry manufacturing capital, our founders recognized a widening divide between traditional goldsmithing genius and the rapid digitization of global luxury markets. While international brands adopted 5-axis CNC, SLA micro-printing, and procedural surface modeling, local artisans were constrained by manual wax carving and unstandardized castings.',
    'Over the last 15 years, Samarth Ventures has evolved from a boutique CAD studio into India’s foremost industrial training academy and advanced jewelry engineering center. We have trained over 1,450 professionals—ranging from fourth-generation hereditary karigars to corporate designers from prestigious international export houses—empowering them with precision mathematical modeling, metrology reverse engineering, and sustainable manufacturing workflows.'
  ],
  mission: 'To democratize world-class 3D CAD engineering for jewelers, transforming traditional craftsmen into digital artisans and enabling jewelry manufacturers to achieve flawless production yield, dramatic gold weight savings, and unmatched aesthetic brilliance.',
  vision: 'To establish global leadership in jewelry technical education, electroforming research, and digital heritage preservation, inspiring a new era where technology honors the master craftsman.',
  values: [
    {
      title: 'Precision Over Approximation',
      description: 'In fine jewelry, 0.05mm is the difference between a secure diamond and a shattered stone. We teach mathematical exactness in every curve, bevel, and surface.'
    },
    {
      title: 'Production-Ready Mindset',
      description: 'We do not teach digital drawing for the screen alone. Every file modeled in our academy must cast cleanly, withstand stone setting pressure, and polish to mirror perfection.'
    },
    {
      title: 'Honoring Heritage Craftsmanship',
      description: 'We view 3D software not as a replacement for human soul, but as an amplifier for centuries of traditional nakshi, filigree, and jadau wisdom.'
    },
    {
      title: 'Scientific Innovation in Electroforming',
      description: 'Pioneering hollow luxury through state-of-the-art chemical baths and lightweighting algorithms that save up to 70% raw gold weight while preserving surface durability.'
    }
  ]
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2011',
    title: 'Founding of Samarth Ventures CAD Studio',
    description: 'Established in Mumbai as a specialized 3D jewelry modeling and rendering consultancy for leading export manufacturing houses.'
  },
  {
    year: '2014',
    title: 'Launch of the Precision Training Academy',
    description: 'Inaugurated our dedicated training academy equipped with high-performance workstations and direct McNeel Rhinoceros certified curricula.'
  },
  {
    year: '2017',
    title: 'Pioneering Electroforming R&D Center',
    description: 'Commissioned an advanced laboratory for 24K and 18K hollow electroforming, enabling radical gold weight reduction without structural compromise.'
  },
  {
    year: '2020',
    title: 'Reverse Engineering & Metrology Division',
    description: 'Integrated blue-light 3D laser scanning and metrology reverse engineering into our flagship curriculum to preserve antique heritage collections.'
  },
  {
    year: '2023',
    title: 'Digital Artisan Fellowship Program',
    description: 'Formed nationwide partnerships with traditional artisan clusters in Rajasthan, Gujarat, and South India to transition hereditary karigars into 3D CAD professionals.'
  },
  {
    year: 'Present',
    title: 'Over 1,450 Certified Professionals Worldwide',
    description: 'Recognized as the premier training partner for top jewelry brands, boasting a 98.4% graduate placement rate and state-of-the-art electroforming facilities.'
  }
];

export const KEY_METRICS: MetricStat[] = [
  {
    value: '1,450+',
    label: 'Certified Professionals',
    description: 'Graduates actively leading design studios and manufacturing units worldwide.'
  },
  {
    value: '98.4%',
    label: 'Placement & Industry Rate',
    description: 'Direct recruitment by top domestic and export fine jewelry conglomerates.'
  },
  {
    value: '70%',
    label: 'Gold Weight Reduction',
    description: 'Achieved through our specialized hollow CAD and electroforming technology.'
  },
  {
    value: '15+ Yrs',
    label: 'Industry Technical Mastery',
    description: 'Continuous leadership in Rhino 3D modeling, casting troubleshooting, and electrochemistry.'
  }
];

export const ELECTROFORMING_DATA = {
  heroTitle: 'Electroforming: The Science of Lightweight Luxury',
  subtitle: 'Achieve up to 70% gold weight savings with uncompromising surface hardness and micro-meter structural fidelity.',
  processSteps: [
    {
      step: '01',
      title: 'Parametric CAD Mandrel Modeling',
      description: 'The jewelry piece is engineered in Rhinoceros with calibrated wall relief, internal support ribs, evacuation ports, and electrical conductivity contact points.'
    },
    {
      step: '02',
      title: 'Conductive Core Activation',
      description: 'Precision sacrificial wax or low-melting copper alloys are prepared and coated with microscopic conductive silver layers to ensure uniform electrodeposition.'
    },
    {
      step: '03',
      title: 'Precision Electro-Deposition Bath',
      description: 'Immersed in controlled gold cyanide / sulphite electrolytic tanks under micro-amperage current density, depositing 24K or 18K gold atoms uniformly at 120–250 microns.'
    },
    {
      step: '04',
      title: 'Thermal Mandrel Evacuation',
      description: 'The internal sacrificial core is safely evacuated through microscopic exhaust vents using controlled chemical dissolution or thermal leaching, leaving a 100% hollow, seamless gold shell.'
    },
    {
      step: '05',
      title: 'Structural Tempering & Polishing',
      description: 'Heat treatment increases Vickers micro-hardness to withstand everyday wear and prong setting, followed by automated magnetic finishing and hand luster polishing.'
    }
  ],
  specifications: [
    { param: 'Weight Reduction vs Solid Cast', value: '45% to 70%', note: 'Significant reduction in retail price barrier without visible difference' },
    { param: 'Wall Thickness Uniformity', value: '150 – 220 µm (Microns)', note: 'Controlled by computerized current density distributors' },
    { param: 'Gold Fineness Purity', value: '18K (750) / 22K (916) / 24K (999)', note: 'Conforms to Hallmarking & Bureau of Indian Standards' },
    { param: 'Surface Vickers Hardness (HV)', value: '120 – 165 HV', note: 'Higher scratch resistance than conventional annealed cast gold' },
    { param: 'Dimensional Tolerance', value: '± 0.015 mm', note: 'Perfect reproduction of intricate filigree and nakshi relief' },
    { param: 'Eco-Friendly Chemistry', value: 'Closed-Loop Cyanide Neutralized', note: 'Zero discharge environmental compliance with silver recovery' }
  ],
  costComparison: {
    solidGoldWeight: '45.0 grams',
    solidGoldCost: '₹3,37,500',
    electroformedWeight: '14.5 grams',
    electroformedCost: '₹1,08,750',
    savingsPercentage: '67.8% Gold Capital Savings',
    retailAdvantage: 'High-impact statement bridal look at accessible pricing'
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The Rhinoceros Advanced CAD course at Samarth Ventures completely transformed our design department. We cut our sample turnaround time from 3 weeks to 3 days, and our casting defects dropped to near zero.',
    author: 'Rajesh K. Mehta',
    role: 'Vice President of Design',
    company: 'Siddhi Jewels Export Corp',
    courseCompleted: 'Jewellery CAD Professional in Rhinoceros - Advanced Level'
  },
  {
    quote: 'As a traditional fourth-generation goldsmith, I was afraid computers would ruin our handcrafted nakshi legacy. The Digital Artisan course taught me that Rhino 3D is just another chisel—one with infinite precision.',
    author: 'Anand Soni',
    role: 'Master Craftsman & Studio Owner',
    company: 'Soni Heritage Goldsmiths, Jaipur',
    courseCompleted: 'Digital Artisan - Advanced 3D Modelling for Traditional Crafts'
  },
  {
    quote: 'The Reverse Engineering program is unmatched in Asia. Being able to laser scan an heirloom 1920s necklace and generate production-ready NURBS models within hours has given our brand a massive competitive edge.',
    author: 'Pooja V. Singhania',
    role: 'Lead CAD Metrologist',
    company: 'Aura Luxury Haute Joaillerie',
    courseCompleted: 'Rhino level 1 & 2 Reverse Engineering & Designing Pro'
  }
];
