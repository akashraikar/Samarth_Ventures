import { CourseData } from '../types';

export const COURSES: Record<string, CourseData> = {
  'course-advanced': {
    id: 'course-advanced',
    pageKey: 'course-advanced',
    title: 'Jewellery CAD Professional in Rhinoceros - Advanced Level',
    subtitle: 'Master complex bridal sets, multi-stone pavé arrays, organic SubD forms, and manufacturing-ready tolerances',
    level: 'Advanced',
    duration: '12 Weeks (120 Hours Intensive)',
    format: 'Studio Workstation + Hands-on Foundry Testing',
    software: ['Rhinoceros 8', 'Grasshopper Computational Design', 'KeyShot 11 Pro', 'V-Ray for Rhino'],
    prerequisites: 'Basic Rhino 3D literacy or completion of Intermediate CAD Diploma',
    certification: 'Authorized Rhinoceros 3D Advanced Jewelry Specialist Diploma',
    heroImage: '/src/assets/images/cad_advanced_ring_1791375517380.jpg',
    overview: 'Engineered for practicing designers and senior modelers seeking complete mastery over high-jewelry complexity. This intensive program moves beyond standard shapes into multi-axis curved pavé setting, articulated mechanical hinges, lightweight honeycomb back-cutting, and exact shrinkage allowance calculations required by modern casting houses.',
    coreHighlights: [
      'Advanced NURBS surface continuity (G0, G1, G2 curve continuity blending)',
      'Algorithmic prong placement with Grasshopper parametric scripts',
      'Complex multi-part bridal sets and custom interlocking bands',
      'Hollow core modeling optimized for high-tensile electroforming and weight control',
      'Realistic photorealistic rendering for luxury client presentations in KeyShot',
      'Foundry-ready STL validation, boolean error elimination, and support structuring'
    ],
    modules: [
      {
        number: '01',
        title: 'Precision Surface Architecture & Continuity',
        duration: '2 Weeks (20 hrs)',
        summary: 'Deep dive into mathematical curvature, zebra stripe analysis, and surface matching.',
        topics: [
          'Mastering G1 Tangency and G2 Curvature surface matching in Rhino 8',
          'Single-span vs Multi-span surface topology for flawless mirror polishing',
          'Troubleshooting bad boundaries, microscopic naked edges, and non-manifold solids',
          'Extracting iso-curves for structural jewelry skeleton frameworks'
        ]
      },
      {
        number: '02',
        title: 'High-Jewelry Stone Setting Engineering',
        duration: '3 Weeks (30 hrs)',
        summary: 'Industrial standards for secure stone seats, prong tolerances, and micro-pavé.',
        topics: [
          'French cut, fishtail, and bright-cut pavé channel geometry',
          'Bezel and flush-set tolerances for emerald, marquise, and fancy diamond cuts',
          'Parametric distribution of stones along 3D compound spatial curves',
          'Under-gallery architectural wirework and light-hole penetration patterns'
        ]
      },
      {
        number: '03',
        title: 'Mechanical Articulations & Findings',
        duration: '3 Weeks (30 hrs)',
        summary: 'Designing functioning jewelry clasps, safety locks, and tennis bracelet hinges.',
        topics: [
          'Hinged bangles with integrated spring box clasps and figure-eight safeties',
          'Flexible tennis bracelet link connections with pre-calculated casting clearances',
          'Removable jacket mechanisms and convertible 2-in-1 cocktail pendants',
          'Metal shrinkage compensation tables across 14K, 18K, 22K gold and 950 Platinum'
        ]
      },
      {
        number: '04',
        title: 'SubD Organic Forms & Freeform Sculpting',
        duration: '2 Weeks (20 hrs)',
        summary: 'Bridging sculptural organics with precise mechanical tolerances.',
        topics: [
          'Subdivision modeling for fauna, flora, and undulating modern statement cuffs',
          'Converting SubD bodies to production NURBS without mathematical surface seam tears',
          'Texture displacement mapping for guilloché and hand-chiseled metal finishes',
          'Weight optimization and strategic back-scooping for cost efficiency'
        ]
      },
      {
        number: '05',
        title: 'Production Export, 3D Printing & Portfolio Capstone',
        duration: '2 Weeks (20 hrs)',
        summary: 'Final execution from digital geometry to physical master cast and portfolio.',
        topics: [
          'Direct resin 3D printer slicing (DLP/SLA) with sacrificial sprue architectures',
          'KeyShot lighting studio setup: Diamond dispersion, metal caustics, and turntable animations',
          'Developing a 10-piece luxury bridal collection portfolio for international luxury houses',
          'Industry placement jury review and McNeel certified practical assessment'
        ]
      }
    ],
    careerOutcomes: [
      'Senior CAD Designer for Export Jewelry Manufacturers',
      'High-End Bridal Bespoke Specialist',
      '3D Technical Director for Fine Jewelry Brands',
      'Independent Fine Jewelry Studio Founder'
    ],
    capstoneProject: 'Comprehensive 5-piece Bridal High Jewelry Suite (Cocktail Ring, Convertible Necklace, Hinged Bangle, Studs & Maang Tikka) completely engineered for casting and stone setting.',
    batchSchedule: 'Weekend & Weekday Batches Available • Next Cohort: 1st & 3rd Monday of every month'
  },

  'course-intermediate': {
    id: 'course-intermediate',
    pageKey: 'course-intermediate',
    title: 'Jewellery designing in Rhinoceros - Intermidiate Level',
    subtitle: 'Transition from basic sketching to commercial 3D digital craftsmanship and production fundamentals',
    level: 'Intermediate',
    duration: '8 Weeks (80 Hours Hands-on)',
    format: 'Instructor-Led Classroom / Dedicated CAD Studio',
    software: ['Rhinoceros 8', 'KeyShot Essentials', 'Curvature Analysis Tools'],
    prerequisites: 'Basic computer proficiency and understanding of jewelry design principles',
    certification: 'Certified Jewelry CAD Modeler (Samarth Ventures Accredited)',
    heroImage: '/src/assets/images/hero_jewellery_cad_1791375506977.jpg',
    overview: 'The definitive foundation for aspiring jewelry modelers, 2D jewelry sketch artists, and gemstone bench jewelers. Learn how to transform 2D concept sketches into dimensionally accurate 3D CAD digital assets while mastering standard ring sizing, prong settings, hollow profiles, and basic stone weights.',
    coreHighlights: [
      'Rhino 8 user interface navigation, command aliases, and viewport optimization',
      'Standard ring shanks, comfort-fit bands, and signet ring modeling',
      'Standard 4-prong and 6-prong solitaire setting construction',
      'Hollow pendants and stamped jewelry weight budgeting',
      'Accurate metal gram calculations and stone carat weight estimators',
      'Preparing leak-free STL files for wax 3D printers'
    ],
    modules: [
      {
        number: '01',
        title: 'Interface Mastery & Accurate 2D Curve Drafting',
        duration: '2 Weeks (20 hrs)',
        summary: 'Accurate curve drafting, coordinate entry, and industrial jewelry scales.',
        topics: [
          'Rhino 3D interface, viewports, C-Planes, and Osnap precision controls',
          'Metric scale calibration for jewelry tolerance (0.01mm accuracy standards)',
          'Drafting clean 2D profiles: Bezier curves, offset curves, and fillet blends',
          'Importing hand-drawn orthographic sketches and scaling to ring finger sizes'
        ]
      },
      {
        number: '02',
        title: 'Solid Modeling & Essential Ring Geometry',
        duration: '2 Weeks (20 hrs)',
        summary: 'Extrusions, lofts, rails, and classic solitaire ring architectures.',
        topics: [
          'Sweep 1-rail and 2-rail operations for comfort-fit ring shanks',
          'Constructing classic Solitaire Tiffany prongs and peg heads',
          'Signet rings with laser-engraved monogram reliefs and deep seals',
          'Boolean unions, differences, and split operations without solid failures'
        ]
      },
      {
        number: '03',
        title: 'Earrings, Pendants & Basic Stone Assemblies',
        duration: '2 Weeks (20 hrs)',
        summary: 'Drop earrings, halo pendants, bail assemblies, and stone seat preparation.',
        topics: [
          'Pendant bails, loops, and mechanical jump ring linkages',
          'Creating round, oval, and pear-cut stone seats and metal drill cutters',
          'Classic diamond halo settings with shared prong wire configurations',
          'Weight reduction strategies: Scooping, hollow stamping, and under-carvings'
        ]
      },
      {
        number: '04',
        title: 'Commercial Rendering & 3D Printing Output',
        duration: '2 Weeks (20 hrs)',
        summary: 'Materials, lighting, client mockups, and wax printer verification.',
        topics: [
          'Setting up KeyShot studio materials: Yellow gold, rose gold, white gold, and diamonds',
          'Generating clean high-resolution customer approval renders',
          'Exporting watertight STLs for LCD/DLP resin 3D printers',
          'Bench jeweler hand-finishing allowances and sprue positioning logic'
        ]
      }
    ],
    careerOutcomes: [
      'Junior CAD Modeler at Commercial Jewelry Brand',
      'Digital Production Assistant in Casting Unit',
      'Custom Ring 3D Drafter for Retail Jewelry Stores',
      'Freelance 3D Jewelry Visualizer'
    ],
    capstoneProject: 'Commercial 3-piece Retail Suite: Diamond Solitaire Engagement Ring, Matching Wedding Band, and Classic Halo Drop Pendant.',
    batchSchedule: 'Morning, Afternoon & Evening Batches • Flexible Schedules'
  },

  'course-reverse-engineering': {
    id: 'course-reverse-engineering',
    pageKey: 'course-reverse-engineering',
    title: 'Rhino level 1 & 2 Reverse Engineering & Designing Pro',
    subtitle: 'From laser 3D scan point clouds and heritage physical samples to precision parametric CAD reconstruction',
    level: 'Professional & Industry Pro',
    duration: '10 Weeks (100 Hours Intensive)',
    format: 'Metrology Lab + Advanced Workstation Practice',
    software: ['Rhinoceros 8', 'Geomagic Wrap / Mesh2Surface', 'Rhino Resurfacing Tools', 'CloudCompare'],
    prerequisites: 'Basic CAD modeling background or professional bench jewelry experience',
    certification: 'Professional Reverse Engineering & Metrology Certification',
    heroImage: '/src/assets/images/cad_reverse_engineering_1791375527282.jpg',
    overview: 'A pioneering program addressing a massive industry pain point: how to take physical handcrafted antiques, vintage heritage ornaments, or competitor production samples, 3D scan them, and reconstruct flawless mathematical NURBS surfaces with zero dimensional distortion. Master the complete bridge between physical metrology and digital manufacturing.',
    coreHighlights: [
      'Blue light structured 3D scanner workflow and point-cloud cleanup',
      'Mesh segmentation, decimation, and alignment along true geometric axes',
      'Converting organic polygonal meshes into editable CAD NURBS surfaces',
      'Deviation analysis and heat-map comparison against original artifacts',
      'Modifying and modernizing vintage heritage designs for modern mass casting',
      'Rapid duplicate mold generation and wear-repair modeling'
    ],
    modules: [
      {
        number: '01',
        title: '3D Scanning Fundamentals & Mesh Diagnostics',
        duration: '2 Weeks (20 hrs)',
        summary: 'Structured light scanning, point cloud registration, and mesh repair.',
        topics: [
          'Calibration of high-precision jewelry optical 3D scanners',
          'Scanning anti-reflective spray application and fixture orientation',
          'Point cloud registration, global alignment, and noise filtering',
          'Closing holes, non-manifold repairs, and triangle decimation in Rhino'
        ]
      },
      {
        number: '02',
        title: 'Geometric Feature Extraction & Axis Alignment',
        duration: '2 Weeks (20 hrs)',
        summary: 'Extracting planes, cylinders, and reference symmetry planes.',
        topics: [
          'Best-fit primitive extraction (Cylinders, Spheres, Planes) from dense scan meshes',
          'Re-aligning scanned jewelry to world origin and coordinate planes',
          'Section slicing along curves to capture intricate wall profiles',
          'Extracting cross-sectional profiles and NURBS curve fitting'
        ]
      },
      {
        number: '03',
        title: 'Freeform Resurfacing & Deviation Analysis',
        duration: '3 Weeks (30 hrs)',
        summary: 'Surface patching, curvature matching, and tolerance validation.',
        topics: [
          'Auto-surfacing vs Quad-mesh manual retopology for jewelry surfaces',
          'Patch network construction with G1/G2 continuity constraints',
          'Surface deviation heatmaps: Ensuring ±0.02mm fidelity to the original piece',
          'Correcting casting shrinkage and deformation from the original physical specimen'
        ]
      },
      {
        number: '04',
        title: 'Design Modernization & Industrial Re-Engineering',
        duration: '3 Weeks (30 hrs)',
        summary: 'Upgrading vintage heritage artifacts for modern automated production.',
        topics: [
          'Replacing worn-out stone prongs with standardized machine-set prong seats',
          'Re-engineering heavy antique jewelry into lightweight hollow electroform structures',
          'Parametric resizing: Adjusting finger sizes and bracelet lengths without distorting motifs',
          'Production documentation: Technical 2D drafting with GD&T dimensions for casting houses'
        ]
      }
    ],
    careerOutcomes: [
      'Reverse Engineering Specialist for Jewelry Manufacturers',
      'Heritage Restoration & Archival 3D Modeler',
      'Quality Control & Metrology CAD Engineer',
      'Antique Jewelry Digital Replication Consultant'
    ],
    capstoneProject: 'Full Reconstruction & Optimization of a 70-Year-Old Traditional Jadau Kundan Master Necklace into a modern, weight-optimized modular casting assembly.',
    batchSchedule: 'Weekend Executive Cohort • Limited to 8 Candidates per Batch'
  },

  'course-digital-artisan': {
    id: 'course-digital-artisan',
    pageKey: 'course-digital-artisan',
    title: 'Digital Artisan - Advanced 3D Modelling for Traditional Crafts',
    subtitle: 'Harmonizing centuries-old Indian goldsmith craft traditions with cutting-edge digital 3D sculpting',
    level: 'Masterclass',
    duration: '10 Weeks (100 Hours)',
    format: 'Artisan Workshop + Hybrid CAD Studio',
    software: ['Rhinoceros 8 SubD', 'ZBrush for Jewelry', 'KeyShot Luxury Edition', 'Grasshopper Filigree'],
    prerequisites: 'Open to traditional jewelry karigars, bench jewelers, and CAD designers',
    certification: 'Master Digital Artisan Fellowship Credential',
    heroImage: '/src/assets/images/digital_artisan_craft_1791375553414.jpg',
    overview: 'Bridging the generational gap between the master karigar (artisan goldsmith) and high-speed digital manufacturing. This specialized curriculum teaches how to model intricate Indian temple jewelry, nakshi relief motifs, intricate filigree wirework, and jali fretwork in 3D CAD without losing the soul, depth, and tactile beauty of handcrafted heirloom jewelry.',
    coreHighlights: [
      'Digital temple jewelry sculpting: Divine motifs, peacocks, elephants, and flora',
      'Generative filigree and traditional jali fretwork with algorithmic control',
      'Nakshi repoussé and chasing simulation inside digital sculpting environments',
      'Kundan & Jadau collet setting construction in 3D CAD',
      'Weight-saving hollow techniques tailored for 22K/24K yellow gold market demands',
      'Direct-to-wax resin printing for intricate filigree preservation'
    ],
    modules: [
      {
        number: '01',
        title: 'Heritage Motifs & Digital Sculpting Foundations',
        duration: '2 Weeks (20 hrs)',
        summary: 'Traditional Indian design grammar translated into 3D curves and surfaces.',
        topics: [
          'Anatomy of traditional jewelry: Paisley, mango, lotus, and peacock motifs',
          'Rhino 8 SubD organic modeling for fluid animal and floral jewelry forms',
          'Relief sculpting heights, draft angles, and undercuts required for clean rubber mold release',
          'Integrating digital wax carving with traditional casting sprues'
        ]
      },
      {
        number: '02',
        title: 'Algorithmic Filigree & Jali Architecture',
        duration: '3 Weeks (30 hrs)',
        summary: 'Parametric wire twisting, fretwork, and intricate pierced lattice work.',
        topics: [
          'Creating twisted wire filigree rope cords with Grasshopper parameters',
          'Projecting geometric and floral jali patterns across double-curved domed surfaces',
          'Controlling wire diameter tolerances (0.35mm–0.60mm) for wax printing and casting fill',
          'Structural rib reinforcement hidden inside delicate openwork surfaces'
        ]
      },
      {
        number: '03',
        title: 'Temple Nakshi & Divine Figurine Jewelry',
        duration: '3 Weeks (30 hrs)',
        summary: 'Deep relief antique temple jewellery, gold deities, and antique patinas.',
        topics: [
          'High-detail digital repoussé and chasing without manual hammer distortion',
          'Constructing antique Lakshmi, Ganesha, and royal peacock pendant sets',
          'Modeling Jadau kundan collets and foil-backed polki diamond settings in CAD',
          'Designing modular multi-piece assemblies for post-cast hand assembly'
        ]
      },
      {
        number: '04',
        title: 'Lightweighting for High-Karat Gold & Capstone Collection',
        duration: '2 Weeks (20 hrs)',
        summary: 'Optimizing 22K gold weights, electroforming core compatibility, and master portfolio.',
        topics: [
          'Lightweighting formulas for high-value 22-karat traditional bridal wear',
          'Preparing wax cores for gold electroforming deposition',
          'Rendering antique gold finishes with warm patinas and polki gemstones',
          'Final Capstone: Designing a complete 4-piece Heritage Bridal Nakshi Parure'
        ]
      }
    ],
    careerOutcomes: [
      'Heritage Jewelry Creative Director',
      'Traditional Karigar Studio Digital Transformation Lead',
      'Bespoke Nakshi & Temple Jewelry CAD Modeler',
      'Luxury Brand Indian Heritage Line Designer'
    ],
    capstoneProject: 'Heirloom Temple Nakshi Necklace Suite featuring a sculpted deity centerpiece, articulated peacock side-links, and intricate jali under-galleries.',
    batchSchedule: 'Flexible Timings for Working Craftsmen • Master Artisan Mentor Sessions'
  }
};
