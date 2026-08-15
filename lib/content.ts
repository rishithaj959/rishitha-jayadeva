export const profile = {
  name: "Rishitha Jayadeva",
  location: "Melbourne, VIC, Australia",
  email: "rishithaj959@gmail.com",
  phone: "+61 478 028 259",
  linkedin: "https://www.linkedin.com/in/rishitha-j",
  github: "https://github.com/",
  role: "Data Scientist",
  tagline: "I turn messy spreadsheets into dashboards leadership actually trusts.",
  subTagline:
    "Master of Data Science (Monash, 2025) with hands-on reporting experience in SQL, Python, Power BI and R. I like the part of the job most people skip: cleaning the data until the story in it is undeniable.",
  visaNote: "Full working rights in Australia — Temporary Graduate Visa (subclass 485) valid to Jan 2029",
};

export const kpis = [
  { value: "12+", label: "dashboards shipped" },
  { value: "5", label: "end-to-end analytics builds" },
  { value: "3", label: "ML & big-data pipelines" },
  { value: "1", label: "expo-winning platform" },
  { value: "8mo", label: "in a live reporting team" },
  { value: "100%", label: "AU work rights" },
];

export const skills = [
  {
    group: "Languages & Data",
    items: ["Python", "R", "SQL", "SQLite", "MySQL", "Relational Data Modeling"],
  },
  {
    group: "BI & Visualization",
    items: ["Power BI (DAX, Power Query)", "Tableau", "R Shiny", "Dashboard Design"],
  },
  {
    group: "Analysis",
    items: ["KPI Design", "Segmentation", "Time-Series", "Geospatial Analysis", "EDA"],
  },
  {
    group: "Big Data & ML",
    items: ["PySpark", "Apache Kafka", "Spark MLlib", "ML Pipelines"],
  },
  {
    group: "Tooling",
    items: ["Git", "R Studio", "MySQL Workbench", "Trello", "LeanKit", "Miro"],
  },
];

export const experience = [
  {
    company: "V Tricks Technologies",
    role: "Data Analytics Trainee",
    period: "Jun 2023 – Jan 2024",
    location: "Bengaluru, India",
    bullets: [
      "Rebuilt the team's SQL + R cleaning workflow, cutting the manual prep time on weekly reporting datasets and raising downstream data quality.",
      "Designed Power BI dashboards that became the default view stakeholders opened to track core business metrics — replacing ad-hoc spreadsheet reports.",
      "Wrote optimized SQL extraction and aggregation queries across multiple joined tables, reducing query runtime for recurring reports.",
      "Partnered with cross-functional teams to scope and ship end-to-end reporting solutions, tightening the loop between raw data and decisions.",
    ],
  },
  {
    company: "SRR Constructions",
    role: "Business & Administrative Assistant",
    period: "Jan 2018 – Dec 2024",
    location: "Bengaluru, India",
    bullets: [
      "Owned documentation and tracking for active projects, gathering requirements directly from stakeholders to keep scope and timelines aligned.",
      "Built client-facing pitch presentations that translated technical project detail into a narrative non-technical clients could act on.",
      "Introduced a structured record-keeping system that improved retrieval speed and accountability across overlapping projects.",
      "Tracked action items across leadership meetings, closing the gap between what was decided and what actually got done.",
    ],
  },
];

export const projects = [
  {
    title: "Store Performance Analytics",
    tag: "Featured",
    summary:
      "An end-to-end revenue analytics build for a multi-store retail dataset — from raw SQLite tables to an executive-ready Power BI view.",
    impact:
      "Surfaced underperforming store-quarter combinations by building a custom performance-band model, turning a flat sales table into a ranked, explorable view of where revenue was actually being won or lost.",
    stack: ["SQLite", "Power BI", "DAX", "Data Modeling"],
    link: "https://github.com/",
  },
  {
    title: "Smart Building Analytics — ML & Big Data",
    tag: "Featured",
    summary:
      "A streaming pipeline that ingests IoT sensor data through Kafka, processes it in PySpark, and feeds ML models for energy forecasting.",
    impact:
      "Combined anomaly detection with energy-usage prediction so a building's energy spikes could be flagged near real-time instead of discovered in a monthly bill.",
    stack: ["PySpark", "Apache Kafka", "Spark MLlib"],
    link: "https://github.com/",
  },
  {
    title: "Bushfire Impacts Dashboard",
    tag: "Featured",
    summary:
      "An interactive R Shiny dashboard linking bushfire activity to air quality and soil condition over time, built for policy-side exploration.",
    impact:
      "Layered geospatial maps with time-series trends so a policy reader could move from 'where did it burn' to 'what changed in the air and soil after' in the same view.",
    stack: ["R Shiny", "R Studio", "Geospatial Analysis"],
    link: "https://github.com/",
  },
  {
    title: "OfficeEz — Workplace Wellbeing Platform",
    tag: "Expo Winner",
    summary:
      "Designed the relational schema and data pipeline behind a workplace wellbeing platform, run as an Agile team project.",
    impact:
      "Took the win at Monash's project expo on the strength of a clean MySQL schema and a Python data-validation layer that kept downstream analysis trustworthy.",
    stack: ["MySQL", "Python", "LeanKit", "Miro"],
    link: "https://github.com/LELI1891633/5120-TE20-main-project",
  },
  {
    title: "Understanding Stocks!",
    tag: "Project",
    summary:
      "A plain-English web primer that teaches stock market fundamentals to people with zero finance background.",
    impact:
      "Stripped jargon out of investing concepts so a first-time reader could follow the logic end to end without a finance degree.",
    stack: ["HTML", "CSS"],
    link: "https://github.com/",
  },
  {
    title: "Address Book & Phone Tracker",
    tag: "Project",
    summary:
      "A Python contact manager with a built-in phone-number locator that resolves country-level origin on entry.",
    impact:
      "Combined two small utilities — contact storage and number lookup — into one tool a non-technical user could run without touching code.",
    stack: ["Python"],
    link: "https://github.com/",
  },
];

export const education = [
  {
    school: "Monash University, Clayton, VIC, Australia",
    program: "Master of Data Science",
    period: "Dec 2025",
  },
  {
    school: "New Horizon College of Engineering, Bangalore, India",
    program: "Bachelor of Engineering — Information Science",
    period: "Jun 2023",
  },
];

export const certifications = [
  "Deloitte — Data Analytics Job Simulation",
  "AWS — Introduction to Machine Learning: Art of the Possible",
  "Simplilearn — Snowflake",
  "Simplilearn — Data Analytics with Generative AI",
  "Udemy — Python for Data Science",
  "Atlassian — Apply Agile Practices to Manage Work",
  "VMware — Software-Defined Storage Concepts",
  "Reverse Engineering INFOSEC — Ethical Hacking",
];

export const talk = {
  title:
    "Python-Based GUI for Message Security and Statistical Analysis using Cryptography Techniques",
  venue:
    "4th International Conference on Multidisciplinary Innovation in Academic Research (ICMIAR-2023), Chennai, India",
};
