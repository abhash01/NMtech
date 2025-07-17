import AssetImage from "../assets/siemensComos/Picture3.jpg";
import cyient from "../assets/customerLogo/cyient.png";
import indianoil from "../assets/customerLogo/indianoil.png";
import cipla from "../assets/customerLogo/cipla.png";
import siemens from "../assets/customerLogo/siemens.png";
import aker from "../assets/customerLogo/aker.png";
import bharat from "../assets/customerLogo/bharat.png";
import nagarpalika from "../assets/customerLogo/nagarpalika.png";
import jsw from "../assets/customerLogo/jsw.png";
import valmet from "../assets/customerLogo/valmet.png";
import esi from "../assets/customerLogo/esi.png";
import powergrid from "../assets/customerLogo/powergrid.png";
import thyss from "../assets/customerLogo/thyss.png";
import petrofac from "../assets/customerLogo/Petrofac.svg";
import snc from "../assets/customerLogo/snc.svg";
import danieli from "../assets/customerLogo/danieli.webp";
import kineco from "../assets/customerLogo/kineco.png";
import eil from "../assets/customerLogo/eil.png";
import toyo from "../assets/customerLogo/toyo.png";
import gr from "../assets/customerLogo/gr.png";
import airflow from "../assets/customerLogo/airflow.jpg";
import img1 from "../assets/icons/img1.png";
import img2 from "../assets/icons/img2.png";
import img3 from "../assets/icons/img3.png";
import img4 from "../assets/icons/img4.png";
import img5 from "../assets/icons/img5.png";
import img6 from "../assets/icons/img6.png";
import img7 from "../assets/icons/img7.png";
import img8 from "../assets/icons/img8.png";

export const customerLogos = [
  { name: "IndianOil", logo: indianoil },
  { name: "Cipla", logo: cipla },
  { name: "Siemens", logo: siemens },
  { name: "AkerSolutions", logo: aker },
  { name: "Bharat Petroleum", logo: bharat },
  { name: "NagarPalika", logo: nagarpalika },
  { name: "JSW", logo: jsw },
  { name: "Valmet", logo: valmet },
  { name: "ESI", logo: esi },
  { name: "CYIENT", logo: cyient },
  { name: "PowerGrid", logo: powergrid },
  { name: "Thyssenkrupp", logo: thyss },
  { name: "Petrofac", logo: petrofac },
  { name: "SNC Lavalin", logo: snc },
  { name: "DANIELI CORUS", logo: danieli },
  { name: "Kineco", logo: kineco },
  { name: "EIL", logo: eil },
  { name: "Toyo", logo: toyo },
  { name: "G. R. ENGINEERING", logo: gr },
  { name: "AIRFLOW EQUIPMENTS", logo: airflow },
];

// servicesData.js
export const servicesData = [
  {
    icon: img1,
    title: "Digital Twin – Services",
  },
  {
    icon: img2,
    title:
      "Reverse Engineering [3D Laser Scanning and Intelligent BIM 3D Modelling]",
  },
  {
    icon: img3,
    title: "Digitization of Plant Documentation",
  },
  {
    icon: img4,
    title: "BI Layer with integrated Dashboards",
  },
  {
    icon: img6,
    title: "Training [Various Industry practices and software solutions]",
  },
  {
    icon: img5,
    title: "Man-Power support and Drafting Services",
  },
  {
    icon: img7,
    title: "Engineering Software Customization and Integration Services",
  },
  {
    icon: img8,
    title: "NMT engagement as PIMO [Digital Project Execution]",
  },
];

export const topNavItem = [
  {
    title: "Home",
    // hasBorder: true,
    hasSubMenu: false,
    isActive: true,
    url: "/",
    // subMenu: [
    //   {
    //     title: "Engineering Software Expertise",
    //     // hasBorder: true,
    //     hasSubMenu: true,
    //     url: "/engineering-software-expertise",
    //   },
    //   {
    //     title: "Services Include",
    //     // hasBorder: true,
    //     hasSubMenu: true,
    //     url: "/service-include",
    //   },
    // ],
  },
  {
    title: "Services",
    isActive: false,
    hasSubMenu: true,
    subMenu: [
      {
        title: "SIEMENS COMOS",
        hasSubMenu: true,
        url: "/siemens-comos",
      },
      {
        title: "How COMOS Looks for Asset Management and Design Engineering",
        hasSubMenu: true,
        url: "/asset-management",
      },
      {
        title: "How COMOS looks for Operations and Maintenance",
        hasSubMenu: true,
        url: "/operation-maintenance",
      },
      {
        title:
          "Operator Training Simulator for Engineering and Operations phase of Plant",
        hasSubMenu: true,
        url: "/operator-training",
      },
      {
        title: "Digital Operator Rounds / Mobile Worker",
        hasSubMenu: true,
        url: "/digital-operator-rounds",
      },
      {
        title: "Complete customised iDB for plant engineering",
        hasSubMenu: true,
        url: "/iDB-plant-engineering",
      },
      // {
      //   title: "ROI for EPC – Engineering Company",
      //   hasSubMenu: true,
      //   url: "",
      // },
      // {
      //   title: "ROI for Owner Operators",
      //   hasSubMenu: true,
      //   hasBorder: false,
      //   url: "",
      // },
      // {
      //   title: "Software Engineering",
      //   hasSubMenu: true,
      //   hasBorder: false,
      //   url: "",
      // },
      // {
      //   title: "Industry 4.0 Solution",
      //   hasSubMenu: true,
      //   hasBorder: false,
      //   url: "",
      // },
      {
        title: "Training",
        hasSubMenu: true,
        hasBorder: true,
        url: "/training",
      },
      // {
      //   title: "EDMS (Engineering Data Management System) – MUMBAI & KOCHI",
      //   hasSubMenu: true,
      //   hasBorder: true,
      //   url: "/edms",
      // },
    ],
  },

  {
    title: "About us",
    isActive: false,
    hasSubMenu: false,
    url: "/about-us",
    // subMenu: [
    //   {
    //     title: "Digital Twin",
    //     hasUpArrow: true,
    //     url: "/digital-twin",
    //   },
    //   {
    //     title: "Digital Documentation",
    //     hasUpArrow: true,
    //     url: "/digital-documentation",
    //   },
    //   {
    //     title: "OT - IT Integration",
    //     hasUpArrow: true,
    //     url: "/ot-it-integration",
    //   },
    // ],
  },
  {
    title: "Contact us",
    isActive: false,
    hasSubMenu: false,
    url: "/contact-us",
    // subMenu: [
    //   {
    //     title: "What is COMOS",
    //     hasSubMenu: true,
    //     url: "/what-is-comos",
    //   },
    //   {
    //     title: "COMOS Modules",
    //     hasSubMenu: true,
    //     url: "/comos-modules",
    //   },
    //   {
    //     title: "Partners",
    //     hasSubMenu: true,
    //     hasBorder: true,
    //   },
    // ],
  },
];

// Hero Section Data
export const heroSectionData = {
  title: "Integration Services Practice Consulting",
  description:
    "Design processes across product lifecycle management (PLM), manufacturing operations management (MOM) and other enterprise systems that produce tangible value. Ensure that those processes are ready to run, robust, flexible and easy to use.",
  colors: {
    primary: "var(--color-primary)",
    primaryLight: "var(--color-primary-light)",
  },
};

export const comosData = [
  {
    title:
      "Single User Interface (UI/UX) and single Database and Single File Share System for complete process plant life cycle, including following:",
    items: [
      "Process Engineering",
      "Piping Engineering",
      "Mechanical Equipment Engineering (Static and Rotary)",
      "Instrumentation and Controls Engineering",
      "Electrical Engineering",
      "Drawings and Document Management",
      "Project Management",
      "Procurement Management",
      "Construction Management",
      "Commissioning Management",
      "Punch-Points Management",
      "Start-Up procedure Management",
      "Complete Digital Handover",
      {
        parent: "Operation and Maintenance of Plant",
        children: [
          "Asset Management",
          "Reactive, Preventive, Condition based, Predictive and Prescriptive Maintenance",
          "Corrosion Control document",
          "Pipeline and static equipment wall thickness monitoring and analysis",
          "Risk Based Inspection and Risk Assessment",
          "FMEA Analysis",
          "Shutdown Planning",
          "Plant Operator shift Management",
          "Inspection Rounds",
          "Events Management",
          "Work permits",
          "Work packages with detailed instructions",
          "Resource planning (Both Human and Hardware)",
          "LOTO (Lock-Out – Tag-Out) procedures",
          "Mobile Worker, Digital Helmet integration",
          "Calibration Management",
          "Warehouse Management",
          "Spare parts and stocks management",
        ],
      },
    ],
    comos: true,
    notAllowed: true,
    other:
      "Multiple software solutions. No integration and automated data exchange, extreme manual intervention required.",
  },
  {
    title: "Detailed Plant Hierarchy suiting all Industry",
    items: [
      "Users can select hierarchy as per project requirement (4 levels, 5 levels KKS structure)",
    ],
    comos: true,
    notAllowed: true,
    other: "KKS mostly not possible",
  },
  {
    title: "Assets are registered once in the project",
    items: ["Same Asset is used on all deliverables"],
    comos: true,
    notAllowed: true,
    other:
      "Multiple systems require duplicating of Assets. Admins are required to manage consistency.",
    otherImage: AssetImage,
  },
  {
    title: "Built-in Document Management System",
    items: [
      "Manage Transmittals, Document Revisions, Associate and Link 3rd Party documents",
      "Support all Windows system-based generic documents, with built-in viewer like: PDF, Scan files, Image files, AutoCAD files, MicroStation Files and such",
      "Even 3rd Party application files are managed (for viewing native application required) like: MS Office files (Word, PowerPoint, Excel, Visio), Audio and Video files (mp3, mk4, etc)",
    ],
    comos: true,
    notAllowed: true,
    other: "Requires separate DMS system to manage documents",
  },
  {
    title:
      "Built-in Graphics Engine (no 3rd Party Tools are required for creating smart and intelligent drawings) ",
    items: [],
    comos: true,
    notAllowed: false,
    other:
      "Many solutions require AutoCAD, MicroStation or MS Visio for generating interactive drawings",
  },
  {
    title: "Multiple Window View",
    items: [
      "View drawings, documents, properties, Plant Hierarchy simultaneously, as COMOS offers window docking and dual screen operation",
    ],
    comos: true,
    notAllowed: false,
    other: "",
  },
  {
    title:
      "Bulk printing of documents with bulk export to PDF, AutoCAD, and other formats over a button click",
    items: ["This feature is a huge time saver"],
    comos: true,
    notAllowed: true,
    other:
      "Individual documents need to be opened manually and exported one by one. Export requires a valid software license for drawing formats.",
  },
  {
    title:
      "Web Based visualisation available without any extra effort of converting or publishing the drawings",
    items: [],
    comos: true,
    notAllowed: true,
    other:
      "Requires publishing of documents to special application for visualisation over Web",
  },
  {
    title:
      "Web based (over web browsers like: Chrome, Safari, Firefox, Microsoft Edge) data editing, document upload, check-in / checkout, Redline commenting.",
    items: [],
    comos: true,
    notAllowed: true,
    other:
      "Web based editing of data not possible, requires native applications to edit and publish the modified document. Document upload not possible, requires native application",
  },
  {
    title: "Dashboarding over web without any scripting.",
    items: ["Create real-time dashboards just by drag and drop"],
    comos: true,
    notAllowed: false,
    other: "",
  },
  {
    title:
      "Virtual Walkthrough with real-time sensor data display via OPC UA connection, conduct Model reviews",
    items: [],
    comos: true,
    notAllowed: false,
    other: "",
  },
  {
    title: "AR / VR Based Operator Training Simulator",
    items: [
      "Design VR based training environment for plant operators like: Learning topography, HSE practices, SOPs, Start-up procedures, Emergency shutdown routines, Energy isolation and such scenarios",
    ],
    comos: true,
    notAllowed: false,
    other: "",
  },
  {
    title: "AR / VR Based Operator Training Simulator",
    items: [
      "Design VR based training environment for plant operators like: Learning topography, HSE practices, SOPs, Start-up procedures, Emergency shutdown routines, Energy isolation and such scenarios",
    ],
    comos: true,
    notAllowed: false,
    other: "",
  },
  {
    title:
      "Integrate your data with 3rd Party application with ease due to object-oriented programming",
    items: [],
    comos: true,
    notAllowed: true,
    other:
      "Need to write special scripts outside the application for data exchange with other solutions",
  },
  {
    title:
      "Direct interface with SAP (ready connector) for data and documents exchange.",
    items: [],
    comos: true,
    notAllowed: false,
    other: "",
  },
];

export const designData = [
  {
    phase: "FEED",
    process: [
      "PFD",
      "Simulation software interface",
      "Fluid stream component management",
      "Mass Balance",
      "Heat and Material Transfer balancing",
      "Equipment List",
      "Major process controls and interlocks",
      "HAZOP study",
    ],
    instrumentation: [],
    electrical: [],
  },
  {
    phase: "Basic Engineering",
    process: [
      "P&ID (Automatic conversion from PFD to P&ID) with automated Off page connector",
      "Automatic and interactive list reports for pipelines, piping bulk material, equipment, instrument index, major electrical consumers",
      "Interface to industry proven 3D modelling software (like: PDMS, SP3D, OpenPlant – iModel)",
    ],
    instrumentation: [
      "Instrument Index",
      "Process Controls",
      "Instrument Loops",
      "Main Instrument types",
      "Control System Architecture",
      "I/O List, Alarm and Trip schedule",
    ],
    electrical: [
      "Sub-station basic engineering",
      "Sub Station Automation systems engineering",
    ],
  },
  {
    phase: "Detail Engineering",
    process: [
      "Datasheets",
      "Long Lead item procurement list",
      "Bid Preparation and Bid Evaluation",
      "Interface to SAP with PR request creation",
      "Equipment Sizing",
      "Cause and Effect Matrix",
      "Hydraulic and Pneumatic engineering",
      "Firefighting system engineering",
    ],
    instrumentation: [
      "Datasheets",
      "Loop Wiring Drawings",
      "Hook-Up Drawings",
      "Cable Schedule",
      "JB Termination drawings",
      "Drum Schedule",
      "IO assignment",
      "Control Valve Sizing",
      "Face-to-Face dimensions exchange with 3D solutions",
      "Telecommunication engineering",
      "Foundation Field bus drawings",
      "Fire and Gas Detection engineering",
      "SIL Study",
      "Control Panel (Cabinet) Design Engineering",
    ],
    electrical: [
      "SLDs",
      "MV, HV and LV panel designs and SLD and detailed circuit diagrams",
      "Consumer List",
      "Interface to ETAP for breaker sizing, Transformer sizing, Harmonics evaluation",
      "Cable Sizing",
      "Cable Schedule",
      "Drum Schedule",
      "SAS design",
      "Consumer Datasheets",
    ],
  },
  {
    phase: "Commissioning",
    process: [
      "Commissioning Test packages, with interactive links to P&IDs, Datasheets, Assets",
      "Use templates to automatically define the test procedures for Pipeline (like: Hydrotest, pneumatic pressure test, etc), Equipment and such",
      "Automated association of Equipment cleaning procedures using international standards",
    ],
    instrumentation: [
      "Loop Checks documentation",
      "FAT, SAT management",
      "Instrument calibration management",
      "Control valve calibration",
    ],
    electrical: ["Cable Laying schedule", "FAT, SAT management"],
  },
  {
    phase: "Start-Up",
    process: [
      "Use templates to define start-up procedure",
      "With single database for instrumentation, manage alarm and trip points",
      "Create interactive plant operating manuals",
    ],
    instrumentation: [
      "Setpoints management",
      "Interface with DCS / PLC system via OPC UA",
    ],
    electrical: [
      "Interface to SAS system via OPC UA",
      "Breaker settings",
      "Start-Up procedures via pre-defined templates",
    ],
  },
];
