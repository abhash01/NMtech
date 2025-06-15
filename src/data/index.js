export const menuItems = [
  {
    title: "Services Portfolio",
    hasBorder: true,
    url: "/redirect/services-portfolio",
  },
  {
    title: "Customer Support Case Studies",
    hasSubMenu: true,
    subMenu: [
      {
        title: "Electrical systems",
        hasSubMenu: true,
        subMenu: [{ title: "Capitals" }, { title: "Solid Edge Electricals" }],
      },
      {
        title: "Electronic design",
        hasSubMenu: true,
        subMenu: [
          { title: "Calibre Design", url: "/calibre-design" },
          { title: "Calibre manufacturing", url: "/calibre-manufacturing" },
          { title: "Calibre manufacturing", url: "/calibre-manufacturing" },
          { title: "Questa", url: "/questa" },
          { title: "Tessent", url: "/tessent" },
          { title: "Veloce", url: "/veloce" },
          { title: "Xpedition", url: "/xpedition" },
          { title: "All IC products", url: "/all-ic-products" },
          { title: "All PCB software", url: "/all-pcb-software" },
          {
            title: "All IC packaging software",
            url: "/all-ic-packaging-software",
          },
        ],
      },
      {
        title: "Lifecycle management",
        hasSubMenu: true,
        subMenu: [
          { title: "Active Integration" },
          { title: "Polarion" },
          { title: "Riffyn X" },
          { title: "Teamcenter" },
          { title: "TIA Portal" },
        ],
      },
      {
        title: "Manufacturing",
        hasSubMenu: true,
        subMenu: [
          { title: "Insights Hub" },
          { title: "NX" },
          { title: "Opcenter" },
          { title: "SOlid Edge Manufacturing" },
          { title: "Tecnomatix" },
          { title: "Valor" },
        ],
      },
      {
        title: "Mechanical design",
        hasSubMenu: false,
      },
      {
        title: "Simulation & test",
        hasSubMenu: true,
        subMenu: [{ title: "Simcenter" }],
      },
      {
        title: "Software development & IoT",
        hasSubMenu: true,
        subMenu: [
          { title: "Capitals" },
          { title: "Insights Hub" },
          { title: "Mendix" },
          { title: "PLM Components" },
        ],
      },
      {
        title: "Supply chain management",
        hasSubMenu: true,
        hasBorder: true,
        subMenu: [{ title: "Digital Logistics" }],
      },
    ],
  },
  {
    title: "Solutions & services",
    hasSubMenu: true,
    subMenu: [
      {
        title: "Lifecycle management",
        hasSubMenu: true,
        subMenu: [
          { title: "Application development" },
          { title: "Application lifecycle management" },
          { title: "Capital asset lifecycle management" },
          { title: "Compliance & sustainability" },
          { title: "Cost management" },
          { title: "Industrial internet of things (IIoT)" },
          { title: "Laboratory information management" },
          { title: "Logistics management" },
          { title: "Product lifecycle management" },
          { title: "Quality management system (QMS)" },
          { title: "Requirements management" },
          { title: "Service lifecycle management" },
          { title: "Supply chain management", hasBorder: true },
        ],
      },
      {
        title: "Manufacturing",
        hasSubMenu: true,
        subMenu: [
          { title: "Factory automation" },
          { title: "IC manufacturing" },
          { title: "Manufacturing execution system" },
          { title: "Part manufacturing" },
          { title: "PCB manufacturing" },
          { title: "Process planning" },
          { title: "Production planning & scheduling" },
          { title: "Wire harness manufacturing", hasBorder: true },
        ],
      },
      {
        title: "Product engineering",
        hasSubMenu: true,
        subMenu: [
          { title: "Artwork & labeling" },
          { title: "Electrical design" },
          { title: "Engineering simulation" },
          { title: "Formulated product design" },
          { title: "IC design" },
          { title: "3DIC" },
          { title: "IC packaging" },
          { title: "Mechanical design" },
          { title: "PCB design" },
          { title: "Software engineering" },
          { title: "Systems engineering", hasBorder: true },
        ],
      },
      {
        title: "Services",
        hasSubMenu: true,
        hasBorder: true,
        subMenu: [
          { title: "Cloud Application Services" },
          { title: "Digital Transformation" },
          { title: "EDA Services" },
          { title: "Engineering Services" },
          { title: "eXplore customer centers" },
          { title: "Implementation Services" },
          { title: "Integration Service Practice" },
          { title: "Service engineering" },
          { title: "Supply Chain Consulting" },
          { title: "Technical publishing", hasBorder: true },
        ],
      },
    ],
  },
  {
    title: "Industrial  Digitalization",
    hasSubMenu: true,
    subMenu: [
      {
        title: "Aerospace & defense",
        hasUpArrow: true,
        url: "#",
      },
      {
        title: "Automotive & transportation",
        hasUpArrow: true,
        url: "#",
      },
      {
        title: "Battery",
        hasUpArrow: true,
        url: "#",
      },
      {
        title: "Electronics & semiconductors",
        hasUpArrow: true,
        url: "#",
      },
      { title: "Energy & utilities" },
      { title: "Food & beverage" },
      { title: "Heavy equipment" },
      { title: "Industrial machinery" },
      { title: "Marine" },
      {
        title: "Medical devices & pharmaceuticals",
      },
      { title: "Small & medium business", hasBorder: true },
    ],
  },
  {
    title: "Training & support",
    hasBorder: true,
    hasSubMenu: true,
    subMenu: [
      {
        title: "Support",
        hasSubMenu: true,
        subMenu: [
          { title: "Access Support Center" },
          { title: "Support Services", hasBorder: true },
        ],
      },
      {
        title: "Communities & blogs",
        hasSubMenu: true,
        subMenu: [
          { title: "Community" },
          { title: "Blogs" },
          { title: "Poadcast Network", hasBorder: true },
        ],
      },
      {
        title: "Siemens Xcelerator portfolio",
        hasSubMenu: true,
        subMenu: [
          { title: "Portfolio overview" },
          { title: "Case studies" },
          { title: "Blogs", hasBorder: true },
        ],
      },
      {
        title: "Training",
        hasSubMenu: true,
        subMenu: [{ title: "Siemens Xcelerator portfolio", hasBorder: true }],
      },
      {
        title: "Events",
        hasSubMenu: true,
        subMenu: [{ title: "Global Conferences" }, { title: "EDA Events" }],
      },
      {
        title: "Partners",
        hasSubMenu: true,
        hasBorder: true,
        subMenu: [{ title: "Partners" }, { title: "Partner Finder" }],
      },
    ],
  },
  { title: "How to buy" },
  { title: "Buying with Siemens" },
  { title: "Buy online" },
  { title: "Partners" },
  { title: "Academics" },
  { title: "Renewals" },
  { title: "Refund Policy", hasBorder: true },
  { title: "QUICK LINKS" },
  { title: "Blogs" },
  { title: "Case studies" },
  { title: "Technology glossary", hasBorder: true },
  { title: "Choose your language" },
];

export const topNavItem = [
  {
    label: "Services Portfolio",
    isActive: true,
    subMenu: [
      {
        title: "Engineering Software Expertise",
        hasBorder: true,
        url: "/engineering-software-expertise",
      },
      {
        title: "Services Include",
        hasBorder: true,
        url: "/service-include",
      },
    ],
  },
  {
    label: "Customer Support Case Studies",
    isActive: false,
    subMenu: [
      {
        title: "Intelligent P&ID Drafting and IOM",
        hasSubMenu: true,
        url: "/kochi-refinery",
      },
      {
        title: "Intelligent P&ID Drafting in COMOS - Autria",
        hasSubMenu: true,
        url: "/lenzing-autria",
      },
      {
        title: "Intelligent P&ID Drafting in COMOS - Germany",
        hasSubMenu: true,
        url: "/cabb-germany",
      },
      {
        title: "Digital Twin in COMOS - Indore",
        hasSubMenu: true,
        url: "/cipla-indore",
      },
      {
        title: "Digital Twin in COMOS - (Vijayanagar)",
        hasSubMenu: true,
        url: "/jsw-steel-vijayanagar",
      },
      {
        title: "Evaluating Predictive Mainenance Solutions",
        hasSubMenu: true,
        url: "/epms",
      },
      {
        title: "COMOS Training on Admin Modules",
        hasSubMenu: true,
        url: "/cosmos-admin",
      },
      {
        title: "AKER Solutions – MUMBAI",
        hasSubMenu: true,
        hasBorder: true,
        url: "/aker-mumbai",
      },
      {
        title: "Auto Wiring Data Update with ILDS – EIL",
        hasSubMenu: true,
        hasBorder: true,
        url: "/auto-wiring-eil",
      },
      {
        title: "SYN Lava",
        hasSubMenu: true,
        hasBorder: true,
        url: "/snc",
      },
      {
        title: "Toyota Engineering – MUMBAI",
        hasSubMenu: true,
        hasBorder: true,
        url:"/toyota-mumbai"
      },
      {
        title: "EDMS (Engineering Data Management System) – MUMBAI & KOCHI",
        hasSubMenu: true,
        hasBorder: true,
        url:"/edms"
      },
    ],
  },
  {
    label: "Solutions & services",
    isActive: false,
    subMenu: [
      {
        title: "Solutions & services",
        hasSubMenu: true,
        url: "/solutions-and-services",
      },
    ],
  },
  {
    label: "Industrial  Digitalization",
    isActive: false,
    subMenu: [
      {
        title: "Digital Twin",
        hasUpArrow: true,
        url: "/digital-twin",
      },
      {
        title: "Digital Documentation",
        hasUpArrow: true,
        url: "/digital-documentation",
      },
      {
        title: "OT - IT Integration",
        hasUpArrow: true,
        url: "/ot-it-integration",
      },
    ],
  },
  {
    label: "Training & support",
    isActive: false,
    subMenu: [
      {
        title: "What is COMOS",
        hasSubMenu: true,
        url: "/what-is-comos",
      },
      {
        title: "COMOS Modules",
        hasSubMenu: true,
        url: "/comos-modules",
      },
      {
        title: "Partners",
        hasSubMenu: true,
        hasBorder: true,
      },
    ],
  },
];
