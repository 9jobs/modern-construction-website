export interface Property {
  id: string;
  slug: string; // Unique URL slug: /properties/[slug]
  title: string;
  type: 'house-land' | 'land-only' | 'renovated' | 'old-home' | 'new-build' | 'investment' | 'display';
  suburb: string;
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA';
  price: number;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  landSize: number; // sqm
  houseSize?: number; // sqm
  buildStatus: 'Completed' | 'Under Construction' | 'Ready to Build' | 'Subdivided' | 'Design Phase' | 'Renovated';
  roi?: number; // Estimated Development ROI %
  rentalYield?: number; // Rental Yield %
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  features: string[];
  developmentPotential?: string;
  estateName?: string;
  houseName?: string;
  videoUrl?: string; // YouTube or Vimeo walkthrough
  floorPlanImage?: string; // Floor plan diagram
  lat?: number; // Mock coordinates for vector map
  lng?: number;
}

export interface HouseDesign {
  id: string;
  slug: string;
  name: string;
  type: 'single' | 'double';
  bedrooms: number;
  bathrooms: number;
  cars: number;
  width: number; // meters
  size: number; // sqm
  price: number;
  image: string;
  features: string[];
  description: string;
}

export interface LandEstate {
  id: string;
  slug: string;
  name: string;
  suburb: string;
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA';
  lotSizes: string; // e.g. "350 - 650 sqm"
  priceFrom: number;
  availability: 'Selling Fast' | 'Registering Now' | 'Stage 1 Sold Out' | 'Limited Release';
  image: string;
  description: string;
}

export interface DisplayHome {
  id: string;
  slug: string;
  name: string;
  address: string;
  suburb: string;
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA';
  hours: string;
  image: string;
  virtualTourLink: string;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  price: number;
  description: string;
  features: string[];
}

export interface RenovatedHome {
  id: string;
  slug: string;
  title: string;
  suburb: string;
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA';
  purchasePrice: number;
  renovationCost: number;
  salePrice: number;
  roi: number; // ROI %
  image: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  features: string[];
}

export interface DevelopmentSite {
  id: string;
  slug: string;
  title: string;
  suburb: string;
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA';
  landSize: number;
  zoning: string;
  potentialDwellings: number;
  estimatedRoi: number;
  price: number;
  image: string;
  description: string;
  developmentPotential: string;
  features: string[];
}

export interface InvestmentProperty {
  id: string;
  slug: string;
  title: string;
  suburb: string;
  state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA';
  price: number;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  rentalYield: number;
  estimatedRoi: number;
  image: string;
  description: string;
  features: string[];
}

// ----------------------------------------------------
// 1. ACTIVE PROPERTIES DIRECTORY LISTINGS (26 Items)
// ----------------------------------------------------
const rawPropertiesData: Property[] = [
  // HOUSE & LAND PACKAGES (6 Items)
  {
    id: 'hl-1',
    slug: 'the-grandview-package-box-hill',
    title: 'The Grandview Executive Package',
    type: 'house-land',
    suburb: 'Box Hill',
    state: 'NSW',
    price: 1395000,
    bedrooms: 4,
    bathrooms: 3,
    cars: 2,
    landSize: 450,
    houseSize: 290,
    buildStatus: 'Ready to Build',
    roi: 12.8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A premium turnkey house and land package featuring our award-winning Grandview double-storey design. Located in the highly rated Gables masterplanned community, Box Hill.',
    features: ['Stone Benchtops', '900mm Smeg Appliances', 'Ducted Air Conditioning', 'High 2.7m Ceilings'],
    estateName: 'The Gables',
    houseName: 'Grandview 290',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054c0cfb6c5075c3453b3b4823a0c71&profile_id=139&oauth2_token_id=57447761',
    floorPlanImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hl-2',
    slug: 'the-horizon-package-point-cook',
    title: 'The Horizon Family Estate Package',
    type: 'house-land',
    suburb: 'Point Cook',
    state: 'VIC',
    price: 985000,
    bedrooms: 4,
    bathrooms: 2.5,
    cars: 2,
    landSize: 400,
    houseSize: 240,
    buildStatus: 'Ready to Build',
    roi: 10.5,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful turnkey package optimized for modern families in Point Cook. Fixed site costs and landscaping inclusions.',
    features: ['Double Garage', 'Premium Carpet & Tiles', 'Solar Panels Included', 'Flyscreens to Windows'],
    estateName: 'Saratoga Estate',
    houseName: 'Horizon 240',
    floorPlanImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hl-3',
    slug: 'coastal-haven-broadbeach-waters',
    title: 'Coastal Haven Premium Package',
    type: 'house-land',
    suburb: 'Broadbeach Waters',
    state: 'QLD',
    price: 2150000,
    bedrooms: 5,
    bathrooms: 4.5,
    cars: 3,
    landSize: 600,
    houseSize: 390,
    buildStatus: 'Under Construction',
    roi: 14.2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'High-end canal living in Broadbeach Waters. Massive floorplan boasting separate parent retreat, custom lap pool option, and butler pantry.',
    features: ['Waterfront views', 'Butlers Pantry', 'Outdoor Alfresco Bar', 'Ducted Air Zone Control'],
    estateName: 'Broadbeach Canals',
    houseName: 'Aero Luxury 390',
    floorPlanImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hl-4',
    slug: 'the-monarch-package-mount-barker',
    title: 'The Monarch Country Living',
    type: 'house-land',
    suburb: 'Mount Barker',
    state: 'SA',
    price: 745000,
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    landSize: 512,
    houseSize: 210,
    buildStatus: 'Ready to Build',
    roi: 9.8,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious rural residential block paired with our Monarch 210 single storey layout. Ideal first-home option or high-yield investment build.',
    features: ['900mm Westinghouse Appliances', 'Rainwater Tank', 'Double Glazed Windows', 'Laminate Flooring'],
    estateName: 'Springlake Mount Barker',
    houseName: 'Monarch 210',
    floorPlanImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hl-5',
    slug: 'the-albany-package-alkimos',
    title: 'The Albany Coastal Lifestyle',
    type: 'house-land',
    suburb: 'Alkimos',
    state: 'WA',
    price: 685000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    landSize: 375,
    houseSize: 185,
    buildStatus: 'Ready to Build',
    roi: 11.0,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    description: 'Live 5 minutes from the WA shoreline in Alkimos Vista. Optimized layout with separate theater room and lock-and-leave features.',
    features: ['Stone Bench Kitchen', 'Reverse Cycle AC', 'Walk-in Robes', 'Paved Alfresco area'],
    estateName: 'Alkimos Vista',
    houseName: 'Albany 185',
    floorPlanImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hl-6',
    slug: 'the-clarendon-oran-park',
    title: 'The Clarendon Premium Living',
    type: 'house-land',
    suburb: 'Oran Park',
    state: 'NSW',
    price: 1150000,
    bedrooms: 4,
    bathrooms: 2.5,
    cars: 2,
    landSize: 420,
    houseSize: 260,
    buildStatus: 'Under Construction',
    roi: 12.0,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    description: 'Perfect family residence located in the heart of Oran Park. Modern double-storey home offering a study nook, balcony, and storage options.',
    features: ['Front Landscaping', 'Ducted Air Conditioning', 'Hebel Panel Siding', 'Walk-in Pantry'],
    estateName: 'Oran Park Town',
    houseName: 'Clarendon 260',
    floorPlanImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },

  // LAND ONLY / ESTATES (6 Items)
  {
    id: 'lo-1',
    slug: 'serviced-flat-allotment-baldivis',
    title: 'Serviced Flat Block Baldivis',
    type: 'land-only',
    suburb: 'Baldivis',
    state: 'WA',
    price: 295000,
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    landSize: 450,
    buildStatus: 'Subdivided',
    roi: 14.5,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Completely flat and sandy, build-ready corner block in the fast-growing suburb of Baldivis. Connected to gas, electricity, water, and sewer.',
    features: ['Ready Titles', 'Corner Block', 'No Retaining Needed', 'NBN Connected'],
    estateName: 'Rivergums Baldivis'
  },
  {
    id: 'lo-2',
    slug: 'estate-lot-kellyville',
    title: 'Kellyville Ridge Subdivision Allotment',
    type: 'land-only',
    suburb: 'Kellyville',
    state: 'NSW',
    price: 950000,
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    landSize: 500,
    buildStatus: 'Subdivided',
    roi: 18.0,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Elevated building site in prestigious Kellyville. Offering stunning regional views, ideal for a custom architectural builder.',
    features: ['Elevated Outlook', 'Class M Soil test', 'Fully Serviced Pit', '15m Frontage'],
    estateName: 'Kellyville Heights'
  },
  {
    id: 'lo-3',
    slug: 'subdivided-lot-werribee',
    title: 'Werribee Subdivided Building Plot',
    type: 'land-only',
    suburb: 'Werribee',
    state: 'VIC',
    price: 380000,
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    landSize: 420,
    buildStatus: 'Subdivided',
    roi: 11.2,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Flat, fully registered land block inside Harpley Estate. Ideal for building a double-storey design immediately.',
    features: [' Harpley Estate', 'Registered Title', 'Soil classification complete', 'NBN connected'],
    estateName: 'Harpley Estate'
  },
  {
    id: 'lo-4',
    slug: 'estate-lot-springfield-lakes',
    title: 'Premium Allotment Springfield Lakes',
    type: 'land-only',
    suburb: 'Springfield Lakes',
    state: 'QLD',
    price: 450000,
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    landSize: 480,
    buildStatus: 'Subdivided',
    roi: 12.5,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Scenic plot adjacent to reserve forests. Fully retained with limestone blocks and ready to construct.',
    features: ['Forest Facing', 'Limestone Retained', 'Low Soil Movement classification', 'Utility Ready'],
    estateName: 'Springfield Rise'
  },
  {
    id: 'lo-5',
    slug: 'block-mount-barker',
    title: 'Lakeside Allotment Mount Barker',
    type: 'land-only',
    suburb: 'Mount Barker',
    state: 'SA',
    price: 310000,
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    landSize: 395,
    buildStatus: 'Subdivided',
    roi: 10.0,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Serene parkside land block within walking distance to local shopping village and wetlands.',
    features: ['Parkside Location', 'Flat building pad', 'Sewer & Gas Connected', 'First Home Buyer Eligible'],
    estateName: 'Springlake Mount Barker'
  },
  {
    id: 'lo-6',
    slug: 'beachside-block-alkimos',
    title: 'Beachside Block Alkimos',
    type: 'land-only',
    suburb: 'Alkimos',
    state: 'WA',
    price: 275000,
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    landSize: 350,
    buildStatus: 'Subdivided',
    roi: 15.0,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Flat, fully serviced beachside lot in Trinity Alkimos. Ready to build your single or double storey coastal design.',
    features: ['Beachside Walkway', 'Sandy Class A soil', 'Fencing Package Included', 'NBN fiber to home'],
    estateName: 'Trinity Alkimos'
  },

  // RENOVATED HOMES (6 Items)
  {
    id: 'ren-1',
    slug: 'brighton-revival-renovated',
    title: 'Renovated Mid-Century Brighton Revival',
    type: 'renovated',
    suburb: 'Brighton',
    state: 'VIC',
    price: 2450000,
    bedrooms: 4,
    bathrooms: 2.5,
    cars: 2,
    landSize: 710,
    houseSize: 260,
    buildStatus: 'Renovated',
    roi: 22.4,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'An old, structural-fatigued cottage rebuilt into a stunning modern coastal estate. High-end finishes, double glazed window walls, and landscaped pool area.',
    features: ['Fully Restored Facade', 'Miele Kitchen Appliance Package', 'Oak Engineered Timbers', '7-Year Builder Guarantee']
  },
  {
    id: 'ren-2',
    slug: 'paddington-terrace-revival-sydney',
    title: 'The Paddington Terrace Revival',
    type: 'renovated',
    suburb: 'Paddington',
    state: 'NSW',
    price: 2950000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 1,
    landSize: 180,
    houseSize: 175,
    buildStatus: 'Renovated',
    roi: 19.8,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    description: 'Victorian terrace completely gutted and transformed with modern architecture, internal atrium, and polished concrete floors.',
    features: ['Atrium Courtyard', 'Polished Concrete Slabs', 'Custom Heritage Steel Windows', 'Marble Ensuite bathrooms']
  },
  {
    id: 'ren-3',
    slug: 'preston-californian-bungalow-rehab',
    title: 'Californian Bungalow Modern Rebuild',
    type: 'renovated',
    suburb: 'Preston',
    state: 'VIC',
    price: 1550000,
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    landSize: 620,
    houseSize: 220,
    buildStatus: 'Renovated',
    roi: 24.5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Classic weatherboard bungalow completely restored and expanded with double-storey rear extension and timber alfresco.',
    features: ['Rear Extension', 'Ducted Climate Controls', 'Period Feature cornices', 'Spacious Back Deck']
  },
  {
    id: 'ren-4',
    slug: 'broadbeach-waters-coastal-makeover',
    title: 'Broadbeach Coastal Villa Makeover',
    type: 'renovated',
    suburb: 'Broadbeach Waters',
    state: 'QLD',
    price: 2600000,
    bedrooms: 5,
    bathrooms: 4,
    cars: 3,
    landSize: 680,
    houseSize: 340,
    buildStatus: 'Renovated',
    roi: 20.8,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Distressed waterfront block completely overhauled into a modern Mediterranean-style villa. Rendered walls, arched claddings.',
    features: ['Waterfront location', 'Arched Architectural design', 'Natural Stone tiling', 'Outdoor BBQ kitchen']
  },
  {
    id: 'ren-5',
    slug: 'prospect-cottage-revival',
    title: 'Prospect Character Cottage Revival',
    type: 'renovated',
    suburb: 'Prospect',
    state: 'SA',
    price: 1250000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    landSize: 550,
    houseSize: 180,
    buildStatus: 'Renovated',
    roi: 18.2,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    description: 'Bluestone cottage matching heritage facades with modern extensions. High ceilings, smart lighting, and landscaping.',
    features: ['Bluestone Facade', 'Extension with Double Glazing', 'Zoned climate controls', 'Landscaped grounds']
  },
  {
    id: 'ren-6',
    slug: 'nedlands-heritage-transformation',
    title: 'Nedlands Heritage Estate Transformation',
    type: 'renovated',
    suburb: 'Nedlands',
    state: 'WA',
    price: 2850000,
    bedrooms: 4,
    bathrooms: 3,
    cars: 2,
    landSize: 800,
    houseSize: 310,
    buildStatus: 'Renovated',
    roi: 21.5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Stately Nedlands home restored with architectural extensions. Top of the line materials and structural warranties.',
    features: ['Architectural extension', 'Oak timber floors', 'Fully reticulated garden', 'Luxury ensuite bathroom']
  },

  // DEVELOPMENT SITES (6 Items)
  {
    id: 'dev-1',
    slug: 'multi-unit-development-site-preston',
    title: 'High Density Triplex Development Site',
    type: 'old-home',
    suburb: 'Preston',
    state: 'VIC',
    price: 1100000,
    bedrooms: 3,
    bathrooms: 1,
    cars: 2,
    landSize: 850,
    buildStatus: 'Design Phase',
    roi: 26.5,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Weatherboard cottage on a flat 850sqm site. Approved plans for 3 x luxury double-storey townhouses. Estimated gross realization value of $2.85M.',
    features: ['Zoned GRZ2', 'No Easements', 'Approved Plans & Permits', '18.5m Frontage'],
    developmentPotential: 'Build 3 townhouses, yields high equity upon construction exit.'
  },
  {
    id: 'dev-2',
    slug: 'subdivision-site-coopers-plains',
    title: 'Post-War Cottage Subdivision Site',
    type: 'old-home',
    suburb: 'Coopers Plains',
    state: 'QLD',
    price: 680000,
    bedrooms: 2,
    bathrooms: 1,
    cars: 1,
    landSize: 920,
    buildStatus: 'Ready to Build',
    roi: 24.1,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
    description: 'Dilapidated post-war cottage on 920sqm plot. Subdivision approved to split into two separate 460sqm blocks. Demolition certificate ready.',
    features: ['Subdivision Approved', 'Demolition Permits Ready', 'High Tenant Demand', 'Flat Allotment'],
    developmentPotential: 'Split block, construct 2 detached residences, estimated profit margin 24.1%.'
  },
  {
    id: 'dev-3',
    slug: 'box-hill-duplex-potential',
    title: 'Box Hill Duplex Development Site',
    type: 'old-home',
    suburb: 'Box Hill',
    state: 'NSW',
    price: 1050000,
    bedrooms: 3,
    bathrooms: 1,
    cars: 2,
    landSize: 720,
    buildStatus: 'Design Phase',
    roi: 22.8,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Level land holding in Kellyville/Box Hill corridor. R3 zoned with duplex build rights (STCA). Retain current tenant while drafting designs.',
    features: ['R3 Zoning', 'Level 720sqm Block', 'Walk to future metro link', 'High rental growth zone'],
    developmentPotential: 'Construct side-by-side duplex residences. Target exit valuation: $2.4M.'
  },
  {
    id: 'dev-4',
    slug: 'mawson-lakes-townhouse-development',
    title: 'Mawson Lakes Multi-Townhouse Site',
    type: 'old-home',
    suburb: 'Mawson Lakes',
    state: 'SA',
    price: 580000,
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    landSize: 780,
    buildStatus: 'Design Phase',
    roi: 21.0,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Corner site adjacent to technology hub. Council approvals drafted for 4 townhouses with single car garages.',
    features: ['Corner Site Access', 'Walk to train station', 'Drafted plans available', 'Zoned Urban Renewal'],
    developmentPotential: 'Develop 4 medium density row townhouses. Estimated build completion: 12 months.'
  },
  {
    id: 'dev-5',
    slug: 'nedlands-subdivision-duplex',
    title: 'Nedlands Dual-Key Site',
    type: 'old-home',
    suburb: 'Nedlands',
    state: 'WA',
    price: 1650000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 1,
    landSize: 880,
    buildStatus: 'Ready to Build',
    roi: 19.5,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Prime Nedlands block with older style residence. Subdividable into two high value building parcels.',
    features: ['R20 Zoned', 'Premium Suburb location', 'Flat building land', 'Utilities near site boundaries'],
    developmentPotential: 'Subdivide into 2 green title lots of 440sqm. Estimated exit price: $1.2M per lot.'
  },
  {
    id: 'dev-6',
    slug: 'springfield-multi-dwelling',
    title: 'Springfield Multi-Dwelling Site',
    type: 'old-home',
    suburb: 'Springfield Lakes',
    state: 'QLD',
    price: 890000,
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    landSize: 1100,
    buildStatus: 'Design Phase',
    roi: 25.2,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Large acre block with high development capability. Suitable for townhouse blocks or large duplex formats.',
    features: ['Zoned Res B', 'Large 1100sqm block', 'Draft plans available', 'Sewer lines mapped'],
    developmentPotential: 'Develop 5 townhouses with modern architectural designs.'
  },

  // INVESTMENT PROPERTIES (6 Items)
  {
    id: 'inv-1',
    slug: 'loganholme-dual-occupancy-yield',
    title: 'Loganholme High-Yield Dual Occupancy',
    type: 'investment',
    suburb: 'Loganholme',
    state: 'QLD',
    price: 820000,
    bedrooms: 6,
    bathrooms: 4,
    cars: 2,
    landSize: 580,
    houseSize: 260,
    buildStatus: 'Completed',
    rentalYield: 6.8,
    roi: 12.0,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    description: 'Double income cash-flow build. Split tenancy design yielding immediate positive return. Full depreciation schedule available.',
    features: ['Dual Tenancy contracts', 'BMT Depreciation Schedule', 'Immediate Rent collection', 'Zero body corporate fees']
  },
  {
    id: 'inv-2',
    slug: 'mawson-lakes-townhouse-investment',
    title: 'Mawson Lakes Townhouse Deal',
    type: 'investment',
    suburb: 'Mawson Lakes',
    state: 'SA',
    price: 590000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 1,
    landSize: 220,
    houseSize: 155,
    buildStatus: 'Completed',
    rentalYield: 5.6,
    roi: 10.5,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Turnkey residential investment next to Adelaide Technology Park. Solid rental history, tenants currently under long-term contract.',
    features: ['Under contract tenancy', 'Near University hubs', 'Modern fitout specifications', 'Low vacancy rate history']
  },
  {
    id: 'inv-3',
    slug: 'point-cook-dual-key-cash-flow',
    title: 'Point Cook Dual-Key Investment',
    type: 'investment',
    suburb: 'Point Cook',
    state: 'VIC',
    price: 910000,
    bedrooms: 5,
    bathrooms: 3,
    cars: 2,
    landSize: 450,
    houseSize: 225,
    buildStatus: 'Completed',
    rentalYield: 5.9,
    roi: 11.5,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    description: 'Dual key (3bed + 2bed) property in premium Saratoga Estate. Solid yields, high depreciation assets.',
    features: ['High Tax write-offs', 'Harwood kitchen benchtop', 'Dual water & power logs', 'Long lease history']
  },
  {
    id: 'inv-4',
    slug: 'box-hill-investment-builds',
    title: 'Box Hill Co-Living Allotment',
    type: 'investment',
    suburb: 'Box Hill',
    state: 'NSW',
    price: 1450000,
    bedrooms: 6,
    bathrooms: 6,
    cars: 3,
    landSize: 520,
    houseSize: 310,
    buildStatus: 'Completed',
    rentalYield: 7.2,
    roi: 13.8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Co-living design optimized for SMSF investors. 6 bedrooms with separate ensuites, returning superior yields.',
    features: ['SMSF Compliant', '6 Private suites', 'Shared gourmet kitchen', 'Fully managed tenancy']
  },
  {
    id: 'inv-5',
    slug: 'nedlands-duplex-rental',
    title: 'Nedlands High Yield Duplex',
    type: 'investment',
    suburb: 'Nedlands',
    state: 'WA',
    price: 1950000,
    bedrooms: 5,
    bathrooms: 3.5,
    cars: 2,
    landSize: 580,
    houseSize: 280,
    buildStatus: 'Completed',
    rentalYield: 5.2,
    roi: 12.5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Duplex investment home yielding double returns in premium Western Australia suburb. Quality builder fixtures.',
    features: ['Double rental return', 'High capital growth area', 'Premium build warranties', 'Near local medical clinics']
  },
  {
    id: 'inv-6',
    slug: 'springfield-investment-townhouse',
    title: 'Springfield Dual Rental Townhouse',
    type: 'investment',
    suburb: 'Springfield Lakes',
    state: 'QLD',
    price: 760000,
    bedrooms: 5,
    bathrooms: 3,
    cars: 2,
    landSize: 390,
    houseSize: 215,
    buildStatus: 'Completed',
    rentalYield: 6.4,
    roi: 11.0,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    description: 'Turnkey duplex returning solid cash flow. Completely managed by regional realtors, zero owner stress.',
    features: ['Fully Managed Tenancy', 'Premium kitchen appliances', 'Double storey brick sidetrack', 'Tax write-offs ready']
  },

  // DISPLAY HOMES (6 Items overall, these can also represent display properties)
  {
    id: 'dh-1',
    slug: 'the-emperor-display-mulgrave',
    title: 'The Emperor Showcase Display Home',
    type: 'display',
    suburb: 'Mulgrave',
    state: 'VIC',
    price: 2100000,
    bedrooms: 5,
    bathrooms: 4.5,
    cars: 2,
    landSize: 650,
    houseSize: 420,
    buildStatus: 'Completed',
    roi: 9.8,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    description: 'Modern-property flagship display home showcasing premium finishes and structural builder capability. Guaranteed 7% leaseback return for 24 months.',
    features: ['Premium Display Upgrades', '7% Leaseback Guarantee', 'Fully Furnished options', 'State of the art home automation'],
    estateName: 'Mulgrave Estate'
  },
  {
    id: 'dh-2',
    slug: 'the-horizon-display-marsden-park',
    title: 'The Horizon Display Suite',
    type: 'display',
    suburb: 'Marsden Park',
    state: 'NSW',
    price: 1780000,
    bedrooms: 4,
    bathrooms: 3.5,
    cars: 2,
    landSize: 520,
    houseSize: 330,
    buildStatus: 'Completed',
    roi: 9.5,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury display home showcasing parent retreats, custom lighting setups, and large outdoor log decks.',
    features: ['High Ceilings', 'Integrated Sound System', 'Developer Leaseback program', 'Outdoor log deck'],
    estateName: 'Marsden Park Heights'
  },
  {
    id: 'dh-3',
    slug: 'the-monarch-display-mount-barker',
    title: 'The Monarch Country Display Home',
    type: 'display',
    suburb: 'Mount Barker',
    state: 'SA',
    price: 890000,
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    landSize: 540,
    houseSize: 220,
    buildStatus: 'Completed',
    roi: 8.5,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Open plan living display home showcasing modern rustic kitchen setups and passive thermal heating properties.',
    features: ['Passive heating design', 'Rustic gourmet kitchen', 'Leaseback return: 6%', 'Limestone surrounds'],
    estateName: 'Springlake Mount Barker'
  },
  {
    id: 'dh-4',
    slug: 'the-albany-display-alkimos',
    title: 'The Albany Coastal Display Home',
    type: 'display',
    suburb: 'Alkimos',
    state: 'WA',
    price: 790000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    landSize: 420,
    houseSize: 195,
    buildStatus: 'Completed',
    roi: 9.0,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    description: 'Coastal display home showcasing light natural tone timbers, outdoor paving, and sand-resistant claddings.',
    features: ['Light natural wood trims', 'Sand-resistant materials', 'Leaseback return: 6.5%', 'Double-glazed sliders'],
    estateName: 'Alkimos Vista'
  },
  {
    id: 'dh-5',
    slug: 'the-glen-waverley-display',
    title: 'The Glen Waverley Custom Display',
    type: 'display',
    suburb: 'Glen Waverley',
    state: 'VIC',
    price: 2450000,
    bedrooms: 5,
    bathrooms: 4.5,
    cars: 2,
    landSize: 680,
    houseSize: 410,
    buildStatus: 'Completed',
    roi: 9.2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Prestigious custom display suite featuring smart glass interfaces, parent voids, and butler serveries.',
    features: ['Parent Void areas', 'Smart glass windows', 'Butler serveries', 'Sub-floor hydronic heating'],
    estateName: 'Waverley Rise'
  },
  {
    id: 'dh-6',
    slug: 'the-broadbeach-display-coastal',
    title: 'The Broadbeach Canal Display Home',
    type: 'display',
    suburb: 'Broadbeach Waters',
    state: 'QLD',
    price: 2850000,
    bedrooms: 5,
    bathrooms: 5.5,
    cars: 3,
    landSize: 720,
    houseSize: 450,
    buildStatus: 'Completed',
    roi: 10.2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Exquisite canal-front display home. Double-storey architectural masterpiece with massive windows.',
    features: ['Canal-front deck', 'EPDM Eco Roof', 'Floor-to-ceiling glass', '7.5% leaseback option'],
    estateName: 'Broadbeach Canals'
  }
];

// ----------------------------------------------------
// 2. HOUSE DESIGNS CATALOG (8 Items)
// ----------------------------------------------------
const rawHouseDesignsData: HouseDesign[] = [
  {
    id: 'des-1',
    slug: 'grandview-290',
    name: 'Grandview 290',
    type: 'double',
    bedrooms: 4,
    bathrooms: 3,
    cars: 2,
    width: 12.5,
    size: 290,
    price: 435000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: ['Study Nook', 'Double Storey Void', 'Walk-in Pantry', 'Balcony Option'],
    description: 'A stately double-storey home designed for wide blocks, matching large parent quarters with ground floor entertaining voids.'
  },
  {
    id: 'des-2',
    slug: 'horizon-240',
    name: 'Horizon 240',
    type: 'single',
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    width: 14.0,
    size: 240,
    price: 310000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    features: ['Theater Room', 'Open Plan Dining', 'Double Garage', 'Alfresco Deck'],
    description: 'Our most popular single-storey design, offering zoned bedrooms, a massive central living area, and an integrated theater.'
  },
  {
    id: 'des-3',
    slug: 'monarch-210',
    name: 'Monarch 210',
    type: 'single',
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    width: 10.5,
    size: 210,
    price: 275000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    features: ['Slim Block Width', 'Central Courtyard', 'Walk-in Robe', 'Stone Benchtops'],
    description: 'Designed specifically for narrow blocks. Rotated internal spaces provide high passive solar lighting.'
  },
  {
    id: 'des-4',
    slug: 'albany-185',
    name: 'Albany 185',
    type: 'single',
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    width: 12.5,
    size: 185,
    price: 2450000,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    features: ['Rear Alfresco', 'Compact Design', 'Double brick WA spec', 'LED Downlights'],
    description: 'Highly efficient family home suitable for first home buyers or down-sizers seeking quality on compact blocks.'
  },
  {
    id: 'des-5',
    slug: 'clarendon-260',
    name: 'Clarendon 260',
    type: 'double',
    bedrooms: 4,
    bathrooms: 2.5,
    cars: 2,
    width: 11.5,
    size: 260,
    price: 385000,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    features: ['Upstairs Retreat', 'Large Alfresco', 'Butler pantry option', 'Double Vanity'],
    description: 'A versatile double-storey design offering three separate living areas and parent retreats.'
  },
  {
    id: 'des-6',
    slug: 'imperial-350',
    name: 'Imperial 350',
    type: 'double',
    bedrooms: 5,
    bathrooms: 4,
    cars: 3,
    width: 15.0,
    size: 350,
    price: 520000,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    features: ['Multi-Gen Living Suite', 'Home Office', 'Triple Garage', 'Covered Portico'],
    description: 'Our ultimate luxury model. Multi-generational layouts with private guest quarters and triple garages.'
  },
  {
    id: 'des-7',
    slug: 'coastal-duo-320',
    name: 'Coastal Duo 320',
    type: 'double',
    bedrooms: 5,
    bathrooms: 3.5,
    cars: 2,
    width: 13.5,
    size: 320,
    price: 475000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    features: ['Waterfront Balcony', 'High Ceilings', 'Stone cladding details', 'Double Ensuites'],
    description: 'Designed to maximize waterfront orientation. Light natural wood panels and double ensuite fixtures.'
  },
  {
    id: 'des-8',
    slug: 'haven-single-190',
    name: 'Haven Single 190',
    type: 'single',
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    width: 12.0,
    size: 190,
    price: 255000,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
    features: ['Open Plan Dining', 'Study Nook', 'Double Garage', 'Laminate flooring'],
    description: 'Functional single-storey living focusing on family-friendly layouts and high-quality build inclusions.'
  }
];

// ----------------------------------------------------
// 3. DISPLAY VILLAGE HOMES (6 Items)
// ----------------------------------------------------
const rawDisplayHomesData: DisplayHome[] = [
  {
    id: 'dh-1',
    slug: 'the-emperor-display-mulgrave',
    name: 'The Emperor Showcase',
    address: 'Lot 14, Mulgrave Display Village',
    suburb: 'Mulgrave',
    state: 'VIC',
    hours: 'Thursday - Monday (10:00 AM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    virtualTourLink: 'https://matterport.com/discover',
    bedrooms: 5,
    bathrooms: 4.5,
    cars: 2,
    price: 2100000,
    description: 'Our award-winning flagship display home in Victoria. Re-live luxury with smart home integrations and fully landscaped surrounds.',
    features: ['Smart Glass Windows', 'Sub-floor hydronic heating', 'Sound systems', 'Developer Leaseback']
  },
  {
    id: 'dh-2',
    slug: 'the-horizon-display-marsden-park',
    name: 'The Horizon Design Center',
    address: 'Lot 22, Marsden Park Display Estate',
    suburb: 'Marsden Park',
    state: 'NSW',
    hours: 'Thursday - Monday (10:00 AM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    virtualTourLink: 'https://matterport.com/discover',
    bedrooms: 4,
    bathrooms: 3.5,
    cars: 2,
    price: 1780000,
    description: 'Beautiful double-storey home displaying parent voids, floating timber staircases, and modern gourmet kitchen styling.',
    features: ['Floating timber stairs', 'Double story voids', '6-star energy layout', 'Developer Leaseback']
  },
  {
    id: 'dh-3',
    slug: 'the-monarch-display-mount-barker',
    name: 'The Monarch Country Display',
    address: 'Lot 4, Springlake Display Estate',
    suburb: 'Mount Barker',
    state: 'SA',
    hours: 'Friday - Monday (11:00 AM - 4:00 PM)',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    virtualTourLink: 'https://matterport.com/discover',
    bedrooms: 4,
    bathrooms: 2,
    cars: 2,
    price: 890000,
    description: 'Open plan living display home showcasing modern rustic kitchen setups and passive thermal heating properties.',
    features: ['Passive heating design', 'Rustic gourmet kitchen', 'Leaseback return: 6%', 'Limestone surrounds']
  },
  {
    id: 'dh-4',
    slug: 'the-albany-display-alkimos',
    name: 'The Albany Coastal Display',
    address: 'Lot 101, Alkimos Vista Exhibit',
    suburb: 'Alkimos',
    state: 'WA',
    hours: 'Friday - Sunday (12:00 PM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    virtualTourLink: 'https://matterport.com/discover',
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    price: 790000,
    description: 'Coastal display home showcasing light natural tone timbers, outdoor paving, and sand-resistant claddings.',
    features: ['Light natural wood trims', 'Sand-resistant materials', 'Leaseback return: 6.5%', 'Double-glazed sliders']
  },
  {
    id: 'dh-5',
    slug: 'the-glen-waverley-display',
    name: 'The Waverley Luxury Display',
    address: 'Lot 50, Waverley Rise displays',
    suburb: 'Glen Waverley',
    state: 'VIC',
    hours: 'Thursday - Monday (10:00 AM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    virtualTourLink: 'https://matterport.com/discover',
    bedrooms: 5,
    bathrooms: 4.5,
    cars: 2,
    price: 2450000,
    description: 'Prestigious custom display suite featuring smart glass interfaces, parent voids, and butler serveries.',
    features: ['Parent Void areas', 'Smart glass windows', 'Butler serveries', 'Sub-floor hydronic heating']
  },
  {
    id: 'dh-6',
    slug: 'the-broadbeach-display-coastal',
    name: 'The Broadbeach Canal Display',
    address: 'Lot 9, Broadbeach Waterfront Villa',
    suburb: 'Broadbeach Waters',
    state: 'QLD',
    hours: 'Thursday - Monday (10:00 AM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    virtualTourLink: 'https://matterport.com/discover',
    bedrooms: 5,
    bathrooms: 5.5,
    cars: 3,
    price: 2850000,
    description: 'Exquisite canal-front display home. Double-storey architectural masterpiece with massive windows.',
    features: ['Canal-front deck', 'EPDM Eco Roof', 'Floor-to-ceiling glass', '7.5% leaseback option']
  }
];

// ----------------------------------------------------
// 4. LAND ESTATES (6 Items)
// ----------------------------------------------------
const rawLandEstatesData: LandEstate[] = [
  {
    id: 'est-1',
    slug: 'the-gables-box-hill',
    name: 'The Gables',
    suburb: 'Box Hill',
    state: 'NSW',
    lotSizes: '300 - 650 sqm',
    priceFrom: 850000,
    availability: 'Selling Fast',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'A masterplanned residential community in Box Hill featuring wide tree-lined avenues, proposed school blocks, and large lakes.'
  },
  {
    id: 'est-2',
    slug: 'rivergums-baldivis-estate',
    name: 'The Rivergums',
    suburb: 'Baldivis',
    state: 'WA',
    lotSizes: '350 - 580 sqm',
    priceFrom: 260000,
    availability: 'Limited Release',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Scenic residential estate in Baldivis with pre-installed utilities, parkways, and close proximity to schools.'
  },
  {
    id: 'est-3',
    slug: 'saratoga-point-cook',
    name: 'Saratoga',
    suburb: 'Point Cook',
    state: 'VIC',
    lotSizes: '350 - 600 sqm',
    priceFrom: 620000,
    availability: 'Stage 1 Sold Out',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Premium living in Point Cook containing private gym center privileges, lakes, and walking reserves.'
  },
  {
    id: 'est-4',
    slug: 'harpley-estate-werribee',
    name: 'Harpley Estate',
    suburb: 'Werribee',
    state: 'VIC',
    lotSizes: '320 - 550 sqm',
    priceFrom: 340000,
    availability: 'Registering Now',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'A lakeside masterplanned development with connected waterways, primary schools, and neighborhood retail.'
  },
  {
    id: 'est-5',
    slug: 'springlake-mount-barker',
    name: 'Springlake',
    suburb: 'Mount Barker',
    state: 'SA',
    lotSizes: '375 - 750 sqm',
    priceFrom: 290000,
    availability: 'Selling Fast',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Picturesque living in Adelaide Hills. Boasting lake vistas, mature gum trees, and parkways.'
  },
  {
    id: 'est-6',
    slug: 'trinity-alkimos-estate',
    name: 'Trinity Alkimos',
    suburb: 'Alkimos',
    state: 'WA',
    lotSizes: '300 - 500 sqm',
    priceFrom: 245000,
    availability: 'Limited Release',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Beachside masterplanned development in Western Australia, walking distance to coastal reserves and future rail links.'
  }
];

// ----------------------------------------------------
// 5. RENOVATED HOMES CASE STUDIES (6 Items)
// ----------------------------------------------------
const rawRenovatedHomesData: RenovatedHome[] = [
  {
    id: 'ren-1',
    slug: 'brighton-revival-renovated',
    title: 'Brighton Mid-Century Revival',
    suburb: 'Brighton',
    state: 'VIC',
    purchasePrice: 1200000,
    renovationCost: 650000,
    salePrice: 2450000,
    roi: 22.4,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'Completely reimagined mid-century coastal villa. Structural engineering reinforced foundations while interior voids were expanded.',
    features: ['Foundation Stabilization', 'Floor Voids Expanded', 'Luxury Pool and Alfresco', 'Premium Inclusions']
  },
  {
    id: 'ren-2',
    slug: 'paddington-terrace-revival-sydney',
    title: 'Paddington Terrace Revival',
    suburb: 'Paddington',
    state: 'NSW',
    purchasePrice: 1750000,
    renovationCost: 600000,
    salePrice: 2950000,
    roi: 19.8,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Victorian terrace transformed with light atrium layouts, steel frames, and modern concrete floors.',
    features: ['Internal Atrium', 'Polished Concrete Floors', 'Steel Window Frames', 'Dual Air Zones']
  },
  {
    id: 'ren-3',
    slug: 'preston-californian-bungalow-rehab',
    title: 'Californian Bungalow Rebuild',
    suburb: 'Preston',
    state: 'VIC',
    purchasePrice: 850000,
    renovationCost: 400000,
    salePrice: 1550000,
    roi: 24.5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Weatherboard cottage completely gutted and added double storey extensions containing high ceiling bedrooms.',
    features: ['Weatherboard Restoration', 'Rear Double Storey Extension', 'Custom timber deck', 'Warranted structures']
  },
  {
    id: 'ren-4',
    slug: 'broadbeach-waters-coastal-makeover',
    title: 'Broadbeach Canal Villa Makeover',
    suburb: 'Broadbeach Waters',
    state: 'QLD',
    purchasePrice: 1450000,
    renovationCost: 700000,
    salePrice: 2600000,
    roi: 20.8,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Distressed waterfront block completely overhauled into a modern Mediterranean-style villa. Rendered walls, arched claddings.',
    features: ['Rendered Brick facade', 'Lap pool construction', 'Custom gas kitchen', 'Aluminium double-glazed frames']
  },
  {
    id: 'ren-5',
    slug: 'prospect-cottage-revival',
    title: 'Prospect Character Cottage',
    suburb: 'Prospect',
    state: 'SA',
    purchasePrice: 700000,
    renovationCost: 350000,
    salePrice: 1250000,
    roi: 18.2,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    description: 'Bluestone cottage matching heritage facades with modern extensions. High ceilings, smart lighting, and landscaping.',
    features: ['Heritage Stone cladding', 'Glass roofing sections', 'Custom bathroom floor heating', 'Fully paved paths']
  },
  {
    id: 'ren-6',
    slug: 'nedlands-heritage-transformation',
    title: 'Nedlands Heritage Estate',
    suburb: 'Nedlands',
    state: 'WA',
    purchasePrice: 1650000,
    renovationCost: 700000,
    salePrice: 2850000,
    roi: 21.5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Stately Nedlands home restored with architectural extensions. Top of the line materials and structural warranties.',
    features: ['Heritage restoration approvals', 'Rear floor layout redesign', 'Custom steel claddings', 'Fully reticulated garden']
  }
];

// ----------------------------------------------------
// 6. DEVELOPMENT SITES (6 Items)
// ----------------------------------------------------
const rawDevelopmentSitesData: DevelopmentSite[] = [
  {
    id: 'dev-1',
    slug: 'multi-unit-development-site-preston',
    title: 'Preston High Density Triplex Site',
    suburb: 'Preston',
    state: 'VIC',
    landSize: 850,
    zoning: 'GRZ2 (General Residential)',
    potentialDwellings: 3,
    estimatedRoi: 26.5,
    price: 1100000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Prime flat 850sqm site with old weatherboard house. Full DA permits completed for 3 x luxury double storey townhouses.',
    developmentPotential: 'Develop 3 modern townhouses. Expected realization value of $2.85M.',
    features: ['18.5m Frontage', 'No easements', 'Walk to public transport links', 'GRZ2 High Density Zoning']
  },
  {
    id: 'dev-2',
    slug: 'subdivision-site-coopers-plains',
    title: 'Coopers Plains Splitter Block',
    suburb: 'Coopers Plains',
    state: 'QLD',
    landSize: 920,
    zoning: 'LMR (Low-Medium Density)',
    potentialDwellings: 2,
    estimatedRoi: 24.1,
    price: 680000,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
    description: 'Distressed post-war cottage on 920sqm splitter block. Demolition approvals complete, ready for title subdivisions.',
    developmentPotential: 'Split into two separate green title lots of 460sqm. Build two modern family homes.',
    features: ['Splitter potential', 'No flood overlay zone', 'Quiet tree-lined residential street', 'Electricity & Water pit ready']
  },
  {
    id: 'dev-3',
    slug: 'box-hill-duplex-potential',
    title: 'Box Hill R3 Duplex Site',
    suburb: 'Box Hill',
    state: 'NSW',
    landSize: 720,
    zoning: 'R3 (Medium Density)',
    potentialDwellings: 2,
    estimatedRoi: 22.8,
    price: 1050000,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Level land holding in Kellyville/Box Hill corridor. R3 zoned with duplex build rights (STCA).',
    developmentPotential: 'Construct side-by-side duplex residences. Target exit valuation: $2.4M.',
    features: ['R3 Zoning', 'Level 720sqm Block', 'Walk to future metro link', 'High rental growth zone']
  },
  {
    id: 'dev-4',
    slug: 'mawson-lakes-townhouse-development',
    title: 'Mawson Lakes Multi-Townhouse Site',
    suburb: 'Mawson Lakes',
    state: 'SA',
    landSize: 780,
    zoning: 'UR (Urban Renewal)',
    potentialDwellings: 4,
    estimatedRoi: 21.0,
    price: 580000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Corner site adjacent to technology hub. Council approvals drafted for 4 townhouses with single car garages.',
    developmentPotential: 'Develop 4 medium density row townhouses. Estimated build completion: 12 months.',
    features: ['Corner Site Access', 'Walk to train station', 'Drafted plans available', 'Zoned Urban Renewal']
  },
  {
    id: 'dev-5',
    slug: 'nedlands-subdivision-duplex',
    title: 'Nedlands Subdividible Block',
    suburb: 'Nedlands',
    state: 'WA',
    landSize: 880,
    zoning: 'R20 (Low Density Residential)',
    potentialDwellings: 2,
    estimatedRoi: 19.5,
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Prime Nedlands block with older style residence. Subdividable into two high value building parcels.',
    developmentPotential: 'Subdivide into 2 green title lots of 440sqm. Estimated exit price: $1.2M per lot.',
    features: ['R20 Zoned', 'Premium Suburb location', 'Flat building land', 'Utilities near site boundaries']
  },
  {
    id: 'dev-6',
    slug: 'springfield-multi-dwelling',
    title: 'Springfield Townhouse Land holding',
    suburb: 'Springfield Lakes',
    state: 'QLD',
    landSize: 1100,
    zoning: 'Res B (Medium Density)',
    potentialDwellings: 5,
    estimatedRoi: 25.2,
    price: 890000,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Large acre block with high development capability. Suitable for townhouse blocks or large duplex formats.',
    developmentPotential: 'Develop 5 townhouses with modern architectural designs.',
    features: ['Zoned Res B', 'Large 1100sqm block', 'Draft plans available', 'Sewer lines mapped']
  }
];

// ----------------------------------------------------
// 7. HIGH-YIELD INVESTMENT PROPERTIES (6 Items)
// ----------------------------------------------------
const rawInvestmentPropertiesData: InvestmentProperty[] = [
  {
    id: 'inv-1',
    slug: 'loganholme-dual-occupancy-yield',
    title: 'Loganholme Dual-Income Cashflow Package',
    suburb: 'Loganholme',
    state: 'QLD',
    price: 820000,
    bedrooms: 6,
    bathrooms: 4,
    cars: 2,
    rentalYield: 6.8,
    estimatedRoi: 12.0,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    description: 'Double income cash-flow build. Split tenancy design yielding immediate positive return. Full depreciation schedule available.',
    features: ['Dual Tenancy contracts', 'BMT Depreciation Schedule', 'Immediate Rent collection', 'Zero body corporate fees']
  },
  {
    id: 'inv-2',
    slug: 'mawson-lakes-townhouse-investment',
    title: 'Mawson Lakes Multi-Tenancy Townhouse',
    suburb: 'Mawson Lakes',
    state: 'SA',
    price: 590000,
    bedrooms: 3,
    bathrooms: 2,
    cars: 1,
    rentalYield: 5.6,
    estimatedRoi: 10.5,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Turnkey residential investment next to Adelaide Technology Park. Solid rental history, tenants currently under long-term contract.',
    features: ['Under contract tenancy', 'Near University hubs', 'Modern fitout specifications', 'Low vacancy rate history']
  },
  {
    id: 'inv-3',
    slug: 'point-cook-dual-key-cash-flow',
    title: 'Point Cook Dual-Key Cash-Flow Builder',
    suburb: 'Point Cook',
    state: 'VIC',
    price: 910000,
    bedrooms: 5,
    bathrooms: 3,
    cars: 2,
    rentalYield: 5.9,
    estimatedRoi: 11.5,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    description: 'Dual key (3bed + 2bed) property in premium Saratoga Estate. Solid yields, high depreciation assets.',
    features: ['High Tax write-offs', 'Harwood kitchen benchtop', 'Dual water & power logs', 'Long lease history']
  },
  {
    id: 'inv-4',
    slug: 'box-hill-investment-builds',
    title: 'Box Hill Co-Living SMSF Deal',
    suburb: 'Box Hill',
    state: 'NSW',
    price: 1450000,
    bedrooms: 6,
    bathrooms: 6,
    cars: 3,
    rentalYield: 7.2,
    estimatedRoi: 13.8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Co-living design optimized for SMSF investors. 6 bedrooms with separate ensuites, returning superior yields.',
    features: ['SMSF Compliant', '6 Private suites', 'Shared gourmet kitchen', 'Fully managed tenancy']
  },
  {
    id: 'inv-5',
    slug: 'nedlands-duplex-rental',
    title: 'Nedlands Dual Rental Estate Package',
    suburb: 'Nedlands',
    state: 'WA',
    price: 1950000,
    bedrooms: 5,
    bathrooms: 3.5,
    cars: 2,
    rentalYield: 5.2,
    estimatedRoi: 12.5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Duplex investment home yielding double returns in premium Western Australia suburb. Quality builder fixtures.',
    features: ['Double rental return', 'High capital growth area', 'Premium build warranties', 'Near local medical clinics']
  },
  {
    id: 'inv-6',
    slug: 'springfield-investment-townhouse',
    title: 'Springfield Lakes Dual Income Deal',
    suburb: 'Springfield Lakes',
    state: 'QLD',
    price: 760000,
    bedrooms: 5,
    bathrooms: 3,
    cars: 2,
    rentalYield: 6.4,
    estimatedRoi: 11.0,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    description: 'Turnkey duplex returning solid cash flow. Completely managed by regional realtors, zero owner stress.',
    features: ['Fully Managed Tenancy', 'Premium kitchen appliances', 'Double storey brick sidetrack', 'Tax write-offs ready']
  }
];

export const propertiesData: Property[] = rawPropertiesData.filter(p => p.state === 'VIC');
export const displayHomesData: DisplayHome[] = rawDisplayHomesData.filter(p => p.state === 'VIC');
export const landEstatesData: LandEstate[] = rawLandEstatesData.filter(p => p.state === 'VIC');
export const renovatedHomesData: RenovatedHome[] = rawRenovatedHomesData.filter(p => p.state === 'VIC');
export const developmentSitesData: DevelopmentSite[] = rawDevelopmentSitesData.filter(p => p.state === 'VIC');
export const investmentPropertiesData: InvestmentProperty[] = rawInvestmentPropertiesData.filter(p => p.state === 'VIC');
export const houseDesignsData: HouseDesign[] = rawHouseDesignsData;
