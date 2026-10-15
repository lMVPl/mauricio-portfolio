/**
 * Single source of truth for every word on the site.
 * Content adapted from Mauricio Vázquez Pérez’s CV; project details reflect documented work.
 * Components only read from this file.
 *
 * LinkedIn and GitHub URLs provided by Mauricio; other personal URLs are intentionally blank.
 * Only verified professional experience and credentials are included.
 */

/* ───────────────────────── Profile ───────────────────────── */

export const PROFILE = {
  name: "Mauricio Vázquez Pérez",
  firstName: "Mauricio",
  initials: "MV",
  role: "Data Analyst",
  roles: ["Data Analyst", "Data Quality Analyst", "Data Science", "IT & Operations Analyst"],
  email: "mauriciovp00@outlook.com",
  phone: "+52 55 3471 7043",
  phoneHref: "tel:+525534717043",
  location: "State of Mexico, Mexico",
  website: "",
  websiteLabel: "",
  github: "https://github.com/lMVPl",
  linkedin: "https://www.linkedin.com/in/mauricio-vp/",
  resume: "/Mauricio-Vazquez-Perez-CV.pdf",
  booking: "",
  resumeSummary:
    "Computer Systems Engineer with nearly four years of experience in data quality, AI data pipelines, and IT operations. Experienced in Python and SQL validation, multimodal dataset quality assurance, Excel-based ETL, reporting, and operational process improvement. Interested in Data Analyst and Data Science opportunities in Mexico or remotely.",
  aboutLine:
    "Computer Systems Engineer · Google Data Analytics · Oracle Next Education Data Science",
  quote: "Turning complex data into reliable insights and practical improvements.",
  current: {
    title: "IT & Operations Analyst",
    org: "MTM Soluciones",
    client: "",
  },
  card: { id: "MVP-DATA", dept: "Data Analytics", validTill: "Present" },
} as const;

/* ───────────────────────── Navigation ───────────────────────── */

export type NavItem = { id: string; label: string };

export const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/* ───────────────────────── Skills ───────────────────────── */

export type Skill = {
  /** Stable id — also the key into TechLogo's BRAND / CONCEPT maps. */
  id: string;
  name: string;
  symbol: string;
};

export type SkillGroup = { family: string; short: string; skills: Skill[] };

/**
 * Groups reflect documented skills and tools from Mauricio’s CV.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    family: "Programming & Query Languages",
    short: "Languages",
    skills: [
      { id: "python", name: "Python", symbol: "Py" },
      { id: "r", name: "R", symbol: "R" },
      { id: "java", name: "Java", symbol: "Ja" },
      { id: "javascript", name: "JavaScript", symbol: "Js" },
    ],
  },
  {
    family: "Data Analysis & Quality",
    short: "Data",
    skills: [
      { id: "etl", name: "ETL", symbol: "Et" },
      { id: "datacleaning", name: "Data Cleaning", symbol: "Dc" },
      { id: "datavalidation", name: "Data Validation", symbol: "Dv" },
      { id: "pandas", name: "Pandas", symbol: "Pd" },
      { id: "numpy", name: "NumPy", symbol: "Np" },
      { id: "pyspark", name: "PySpark", symbol: "Ps" },
      { id: "scikitlearn", name: "scikit-learn", symbol: "Sk" },
      { id: "llm", name: "LLMs", symbol: "AI" },
    ],
  },
  {
    family: "Analytics & BI",
    short: "BI",
    skills: [
      { id: "tableau", name: "Tableau", symbol: "Tb" },
      { id: "excel", name: "Excel", symbol: "Ex" },
      { id: "googleanalytics", name: "Google Analytics", symbol: "Ga" },
    ],
  },
  {
    family: "Databases",
    short: "Databases",
    skills: [
      { id: "mysql", name: "MySQL", symbol: "My" },
      { id: "postgresql", name: "PostgreSQL", symbol: "Pg" },
      { id: "sqlserver", name: "SQL Server", symbol: "Ss" },
    ],
  },
  {
    family: "IT & Business Systems",
    short: "IT",
    skills: [
      { id: "sharepoint", name: "SharePoint", symbol: "Sp" },
      { id: "googleworkspace", name: "Google Workspace", symbol: "Gw" },
      { id: "odoo", name: "Odoo ERP", symbol: "Od" },
      { id: "linux", name: "Linux Fundamentals", symbol: "Lx" },
    ],
  },
  {
    family: "Development & Collaboration",
    short: "Tools",
    skills: [
      { id: "git", name: "Git", symbol: "Gt" },
      { id: "github", name: "GitHub", symbol: "Gh" },
      { id: "vscode", name: "Visual Studio Code", symbol: "Vs" },
      { id: "notion", name: "Notion", symbol: "Nt" },
      { id: "jira", name: "JIRA", symbol: "Ji" },
      { id: "sop", name: "SOP Documentation", symbol: "So" },
    ],
  },
];

/* ───────────────────────── Experience & education ───────────────────────── */

export type Experience = {
  id: string;
  org: string;
  client?: string;
  mode?: string;
  title: string;
  start: string; // "YYYY-MM"
  end: string | null; // null = present
  period: string;
  status?: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "mtm",
    org: "MTM Soluciones",
    mode: "Mexico",
    title: "IT & Operations Analyst",
    start: "2026-03",
    end: null,
    period: "Mar 2026 – Present",
    bullets: [
      "Manage IT operations for approximately 40 users and 60 devices, including Google Workspace administration and asset inventory.",
      "Designed and administer the company SharePoint site, including document libraries, permissions, lists, and calendars.",
      "Built Excel-based trackers, ETL workflows, pricing models, and reports to support business decisions.",
      "Authored four Standard Operating Procedures and support Odoo v17 ERP and online sales operations.",
    ],
  },
  {
    id: "training",
    org: "Self-directed professional development",
    mode: "Training",
    title: "Data Analytics & Data Science Training",
    start: "2025-02",
    end: "2026-03",
    period: "Feb 2025 – Mar 2026",
    bullets: [
      "Completed Google Data Analytics Professional Certificate and Oracle Next Education Data Science program.",
      "Practiced SQL, R, Tableau, MySQL, PostgreSQL, and machine-learning fundamentals through coursework.",
    ],
  },
  {
    id: "scale-coder",
    org: "Scale AI",
    mode: "Independent Contractor",
    title: "AI Quality Assurance Coder",
    start: "2023-03",
    end: "2025-02",
    period: "Mar 2023 – Feb 2025",
    bullets: [
      "Developed Python and SQL validation scripts and queries to verify data integrity in AI pipelines.",
      "Supported ingestion and flow of datasets for large-scale machine-learning processing.",
      "Collaborated with machine-learning teams on data-quality requirements and dataset delivery.",
      "Promoted after maintaining a quality rate above 80%.",
    ],
  },
  {
    id: "scale-qa",
    org: "Scale AI",
    mode: "Independent Contractor",
    title: "Quality Assurance Specialist",
    start: "2021-10",
    end: "2023-03",
    period: "Oct 2021 – Mar 2023",
    bullets: [
      "Labeled and validated multimodal datasets spanning text, images, video, and 3D.",
      "Maintained a quality rate above 80% and conducted post-process audits.",
      "Investigated root causes of data-quality issues and provided actionable feedback.",
    ],
  },
];

export type Education = {
  id: string;
  school: string;
  place: string;
  degree: string;
  start: string;
  end: string;
  period: string;
  bullets: string[];
};

export const EDUCATION: Education[] = [
  {
    id: "uci",
    school: "Universidad de Cuautitlán Izcalli",
    place: "State of Mexico, Mexico",
    degree: "B.Sc. in Computer Systems Engineering",
    start: "2019-01",
    end: "2022-08",
    period: "Jan 2019 – Aug 2022",
    bullets: ["Degree obtained"],
  },
];

/* ───────────────────────── Work (built from resume deliverables) ───────────────────────── */

export type Project = {
  id: string;
  index: string;
  title: string;
  /** Company / context the work was done for, exactly as in the resume. */
  kicker: string;
  description: string;
  features: string[];
  /** Skill ids (see SKILL_GROUPS) — rendered as chips with tiny logos. */
  tech: string[];
  github: string | null;
};

/**
 * These panels describe documented professional deliverables, not independent public repositories.
 */
export const PROJECTS: Project[] = [
  {
    id: "mtm-analytics",
    index: "01",
    title: "Operational Analytics & Pricing Tools",
    kicker: "MTM Soluciones · 2026",
    description:
      "Developed Excel-based tracking, pricing-analysis, and reporting tools to support operational decisions.",
    features: [
      "Excel-based ETL and data restructuring",
      "Operational tracking and reporting",
      "Product-pricing analysis",
      "Business decision support",
    ],
    tech: ["excel", "etl"],
    github: null,
  },
  {
    id: "mtm-sharepoint",
    index: "02",
    title: "Company SharePoint Workspace",
    kicker: "MTM Soluciones · 2026",
    description:
      "Designed and administered an organization-wide SharePoint workspace for document management and collaboration.",
    features: [
      "Document libraries and information architecture",
      "Access groups and permissions",
      "Lists, calendars, and homepage",
      "Used across company departments",
    ],
    tech: ["sharepoint", "googleworkspace"],
    github: null,
  },
  {
    id: "scale-quality",
    index: "03",
    title: "AI Data Quality & Validation",
    kicker: "Scale AI · 2021–2025",
    description:
      "Validated multimodal datasets and developed Python and SQL checks to support data integrity in machine-learning workflows.",
    features: [
      "Python and SQL validation scripts",
      "Multimodal dataset QA",
      "Data-quality audits and error reporting",
      "Collaboration with machine-learning teams",
    ],
    tech: ["python", "warehouse"],
    github: null,
  },
];

/* ───────────────────────── Community (off the clock) ───────────────────────── */

export type CommunityItem = {
  id: string;
  name: string;
  /** Short context line, e.g. what I did there. */
  kicker: string;
  status: "Live" | "In progress" | "Volunteer";
  description: string;
  url: string;
  domain: string;
  /** Full-page capture in /public/community (scripts/capture-community.cjs). */
  image: string;
};

/** No community projects supplied yet. */
export const COMMUNITY: CommunityItem[] = [];

/* ───────────────────────── Certifications ───────────────────────── */

/** Credentials listed in Mauricio’s CV; verification URLs can be added later. */
export const CERTIFICATIONS: {
  title: string;
  issuer: string;
  href?: string;
}[] = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Google" },
  { title: "Data Science", issuer: "Oracle Next Education" },
  { title: "Elements of AI", issuer: "University of Helsinki" },
  {
    title: "CCNA v7 (coursework and final exam completed)",
    issuer: "Cisco Networking Academy",
  },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy" },
  { title: "NDG Linux Essentials", issuer: "Cisco Networking Academy" },
  { title: "Python Essentials I", issuer: "Cisco Networking Academy" },
];

/* ───────────────────────── Achievements ───────────────────────── */

export type Achievement = {
  id: string;
  /** Skill id for a real brand logo, or a CONCEPT icon id. */
  icon: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "users",
    icon: "doc",
    value: 40,
    prefix: "~",
    label: "Users supported",
    caption: "MTM Soluciones",
    detail: "Sole IT owner supporting approximately 40 users and 60 devices",
  },
  {
    id: "sops",
    icon: "doc",
    value: 4,
    label: "SOPs authored",
    caption: "MTM Soluciones",
    detail: "Documented and standardized recurring operational processes",
  },
  {
    id: "quality",
    icon: "medal",
    value: 80,
    prefix: ">",
    suffix: "%",
    label: "Quality rate",
    caption: "Scale AI",
    detail: "Sustained quality rate above 80%, leading to promotion",
  },
];

/* ───────────────────────── Derived helpers ───────────────────────── */

export const ALL_SKILLS = SKILL_GROUPS.flatMap((g) =>
  g.skills.map((s) => ({ ...s, family: g.family, short: g.short })),
);

export function skillById(id: string) {
  return ALL_SKILLS.find((s) => s.id === id);
}

export function projectsUsing(skillId: string) {
  return PROJECTS.filter((p) => p.tech.includes(skillId));
}

/** Section index used by the "03 — Selected work" tags, in page order (empty sections are skipped). */
export const SECTION_INDEX: Record<string, string> = Object.fromEntries(
  [
    "about",
    "skills",
    ...(PROJECTS.length ? ["work"] : []),
    ...(COMMUNITY.length ? ["community"] : []),
    ...(CERTIFICATIONS.length ? ["certifications"] : []),
    "experience",
    ...(ACHIEVEMENTS.length ? ["achievements"] : []),
    "contact",
  ].map((id, i) => [id, String(i + 1).padStart(2, "0")]),
);
