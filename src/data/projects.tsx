export interface Project {
  slug: string;
  title: string;
  shortDescription: string;

  // Developer fields
  overview?: string;
  problem?: string;
  architecture?: string;
  challenges?: string;
  role?: string;
  impact?: string;

  features?: string[];
  tech?: string[];
  liveUrl?: string;

  // Instructor fields
  evidence?: string[];
  outcome?: string;
  curriculum?: string[];
  lessonPlanUrl?: string;

  roles: string[];
  
}






export const projects: Project[] = [
  {
    slug: "marketplace-mvp",
    title: "E-COMMERCE -  (Marketplace Platform with Commission & Cashback Engine)",
    shortDescription:
      "Multi-role e-commerce marketplace with admin, agent commissions and customer wallet cashback logic.",
    overview:
      "A production-ready marketplace MVP featuring multi-role access, sales agent commission tracking, and automated customer wallet cashback systems integrated with backend APIs.",
 problem:
  "Traditional e-commerce systems do not natively support structured sales-agent commission models and automated cashback wallet logic. The goal was to design a marketplace that supports multi-role interaction with controlled business logic.",

architecture:
  "The application follows a layered structure with a React frontend communicating with RESTful APIs built using Node.js and Express. Commission and cashback logic are processed server-side, with relational database storage ensuring transaction consistency.",

challenges:
  "Ensuring accurate commission calculations and wallet balance consistency required careful validation logic and role-based controls. Maintaining secure transaction flows across user roles was a key engineering focus.",
role:
  "Designed and developed the entire application independently including frontend interfaces, backend API integration, database structure design, commission business logic implementation, and deployment configuration.",

impact:
  "Demonstrates ability to design complex business logic systems beyond standard CRUD applications, including financial commission workflows and incentive wallet automation.",

      features: [
      "Role-based access (Admin / Agent / Customer)",
      "Sales agent commission calculation logic",
      "Customer wallet cashback system",
      "Secure REST API integration",
      "Responsive UI across devices",
    ],
    tech: ["React", "Node.js", "Express", "SQL", "REST APIs"],
liveUrl: "https://marketplace-ngatia.vercel.app/",
roles: [ "freelance","developer"],

  },
{
  slug: "task-manager-api",
  title: "Task Manager System - (Fullstack Laravel + Vue Application)",
  shortDescription:
    "A fullstack task management system with strict business rules, status workflows, and reporting.",

  overview:
    "A fullstack task management application built with Laravel and Vue, designed to enforce real-world business rules such as controlled status transitions, priority-based sorting, and structured reporting. The system demonstrates strong backend architecture with validation layers, database constraints, and a clean API-driven frontend.",

  features: [
    "Task creation with validation and constraints",
    "Strict status workflow (pending → in_progress → done)",
    "Priority-based sorting (high → low)",
    "Composite uniqueness enforcement (title + due date)",
    "RESTful API with Laravel",
    "Daily report with aggregated task statistics",
    "Dynamic frontend with Vue (no build tools)",
    "Real-time UI updates via API integration",
  ],

  tech: ["Laravel", "PHP", "MySQL", "Vue.js", "JavaScript", "HTML", "CSS"],

  liveUrl: "https://cytonn-ngatia2026.vercel.app/",

  roles: ["developer"],
},
    {
  slug: "Proffesional-website",
  title: " Professional Business website - (AGRICULTURE CONSULTING)",
  shortDescription:
    "Professional consulting website presenting agricultural advisory services and business information.",
  overview:
    "A professional website developed for an agriculture consulting firm to showcase services, industry expertise, and provide a clear contact pathway for potential clients.",

  features: [
    "Professional services presentation",
    "Clean responsive layout",
    "Structured service sections",
    "Business contact interface",
    "Optimized deployment on Vercel",
  ],

  tech: ["React", "Next.js", "TypeScript", "CSS"],

  liveUrl: "https://agriculture-consulting.vercel.app/",

  roles: ["developer", "freelance"],
},
  {
    slug: "Trek-N-Tread",
    title: "TREK & TREAD   - (Booking/Payment-Integrated Static website)",
    shortDescription:
      "Service platform integrated with Paystack payment gateway.",
    overview:
      "A web-based services platform featuring secure Paystack payment integration with transaction verification flow.",
    features: [
      "Service booking interface",
      "Paystack payment integration",
      "Transaction verification logic",
      "Responsive frontend",
      "Backend communication",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Paystack API"],
    liveUrl: "https://outdoor-1.onrender.com",
    roles: ["developer", "freelance"],

  },


{
  slug: "operating-systems-cbet",
  title: "Operating Systems (Windows & Linux)",
  shortDescription: "Conducted hands-on labs on OS installation, configuration, process management, and troubleshooting across Windows and Linux environments.",
  evidence: ["Lab Guides", "Student Assessments", "Configuration Reports"],
  outcome: "Students achieved CBET Level 5 competency in installing, configuring, and managing operating systems.",
  curriculum: ["KNEC Diploma ICT", "CDACC ICT Technician Level 5"],
  lessonPlanUrl: "https://drive.google.com/drive/folders/1TCmyuNX9_YbMOQUxSARkz9W9fPCy9JNf",
  liveUrl: "",
  roles: ["instructor"]
},
{
  slug: "systems-analysis-design",
  title: "Systems Analysis & Design",
  shortDescription: "Facilitated CBET-aligned training on SDLC, feasibility studies, requirements analysis, and system modeling using real-world case studies.",
  evidence: ["Lab Guides", "Assessment Records", "System Config Reports"],
  outcome: "Learners produced complete system design documentation and demonstrated CBET Level 6 competency in system analysis and design.",
  curriculum: ["KNEC Diploma ICT", "CDACC Level 5"],
  lessonPlanUrl: "https://drive.google.com/drive/folders/1TCmyuNX9_YbMOQUxSARkz9W9fPCy9JNf",
  liveUrl: "",
  roles: ["instructor"]
},
{
  slug: "oop-cbet",
  title: "Object-Oriented Programming (Java & C#)",
  shortDescription: "Delivered CBET-based training in object-oriented programming using Java and C#, emphasizing practical system development and modular design.",
  evidence: ["Lab Guides", "Assessment Records", "System Config Reports"],
  outcome: "Students achieved CBET Level 6 competency in applying object-oriented programming to real-world systems.",
  curriculum: ["KNEC Diploma ICT", "CDACC ICT Technician Level 5"],
  lessonPlanUrl: "https://drive.google.com/drive/folders/1TCmyuNX9_YbMOQUxSARkz9W9fPCy9JNf",
  liveUrl: "",
  roles: ["instructor"]
}



];
