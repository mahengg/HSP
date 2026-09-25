export const site = {
  name: "Heartland Strategy Partners",
  shortName: "HSP",
  location: "Kansas City, Missouri",
  email: "hello@yourdomain.com",
  phone: "(816) 555-0000",
};

export type OrganizationKey =
  | "nonprofits"
  | "churches"
  | "boards"
  | "public-health";

export type ServiceItem = {
  name: string;
  description: string;
  price: string;
  bullets: string[];
};

export type Organization = {
  key: OrganizationKey;
  title: string;
  eyebrow: string;
  description: string;
  services: ServiceItem[];
};

export const organizations: Organization[] = [
  {
    key: "nonprofits",
    title: "Nonprofits",
    eyebrow: "Mission-centered growth",
    description:
      "Practical strategy, facilitation, and research support for organizations balancing mission, capacity, funding, and community needs.",
    services: [
      {
        name: "Development Strategy",
        description:
          "Build a focused plan for growth, fundraising priorities, partnerships, or program expansion.",
        price: "Starting at $1,500",
        bullets: [
          "Strategic planning",
          "Development roadmaps",
          "Program growth planning",
          "Implementation priorities",
        ],
      },
      {
        name: "Facilitation",
        description:
          "Structured sessions that help teams make progress on important conversations and decisions.",
        price: "Starting at $650 / session",
        bullets: [
          "Planning retreats",
          "Team workshops",
          "Stakeholder sessions",
          "Decision facilitation",
        ],
      },
      {
        name: "General Consulting",
        description:
          "Flexible advisory support for organizational challenges, projects, and planning needs.",
        price: "Starting at $150 / hour",
        bullets: [
          "Project advising",
          "Organizational review",
          "Implementation support",
          "Leadership consultation",
        ],
      },
      {
        name: "Survey Support",
        description:
          "Get useful feedback from the people your organization serves, employs, or partners with.",
        price: "Starting at $900",
        bullets: [
          "Survey design",
          "Question development",
          "Distribution planning",
          "Results summary",
        ],
      },
    ],
  },
  {
    key: "churches",
    title: "Churches",
    eyebrow: "Clarity for changing communities",
    description:
      "Support for churches navigating planning, leadership conversations, member engagement, growth, and organizational change.",
    services: [
      {
        name: "Development Strategy",
        description:
          "Create a practical plan around ministry priorities, community engagement, growth, or organizational direction.",
        price: "Starting at $1,250",
        bullets: [
          "Strategic planning",
          "Ministry development",
          "Community engagement",
          "Priority setting",
        ],
      },
      {
        name: "Facilitation",
        description:
          "Independent facilitation for retreats, leadership discussions, and sensitive planning conversations.",
        price: "Starting at $600 / session",
        bullets: [
          "Leadership retreats",
          "Visioning sessions",
          "Congregational conversations",
          "Planning workshops",
        ],
      },
      {
        name: "General Consulting",
        description:
          "Short- or long-term support for projects, planning questions, and organizational challenges.",
        price: "Starting at $140 / hour",
        bullets: [
          "Leadership advising",
          "Project planning",
          "Organizational assessment",
          "Implementation support",
        ],
      },
      {
        name: "Survey Support",
        description:
          "Understand member experiences, community priorities, and organizational needs through focused surveys.",
        price: "Starting at $800",
        bullets: [
          "Member surveys",
          "Community surveys",
          "Question design",
          "Results interpretation",
        ],
      },
    ],
  },
  {
    key: "boards",
    title: "Nonprofit Boards",
    eyebrow: "Better governance and decisions",
    description:
      "Facilitation and strategy support that helps nonprofit boards clarify priorities, roles, governance, and next steps.",
    services: [
      {
        name: "Development Strategy",
        description:
          "Align board priorities with organizational goals and create a practical framework for oversight and progress.",
        price: "Starting at $1,500",
        bullets: [
          "Board strategy",
          "Governance priorities",
          "Annual planning",
          "Goal alignment",
        ],
      },
      {
        name: "Facilitation",
        description:
          "Neutral facilitation for board retreats, strategic conversations, and decision-making sessions.",
        price: "Starting at $750 / session",
        bullets: [
          "Board retreats",
          "Governance discussions",
          "Decision sessions",
          "Priority workshops",
        ],
      },
      {
        name: "General Consulting",
        description:
          "Independent support for governance questions, board development, and organizational planning.",
        price: "Starting at $160 / hour",
        bullets: [
          "Governance advising",
          "Board development",
          "Planning support",
          "Role clarification",
        ],
      },
      {
        name: "Survey Support",
        description:
          "Gather structured feedback from board members, staff, stakeholders, and communities.",
        price: "Starting at $900",
        bullets: [
          "Board self-assessments",
          "Stakeholder surveys",
          "Survey analysis",
          "Findings summaries",
        ],
      },
    ],
  },
  {
    key: "public-health",
    title: "Public Health",
    eyebrow: "Data-informed community strategy",
    description:
      "Strategy, facilitation, and survey support for public-health programs, partnerships, coalitions, and community initiatives.",
    services: [
      {
        name: "Development Strategy",
        description:
          "Translate community needs, program goals, and stakeholder priorities into an actionable strategy.",
        price: "Starting at $2,000",
        bullets: [
          "Program strategy",
          "Implementation planning",
          "Community engagement strategy",
          "Partnership planning",
        ],
      },
      {
        name: "Facilitation",
        description:
          "Facilitate productive conversations across teams, coalitions, agencies, and community partners.",
        price: "Starting at $750 / session",
        bullets: [
          "Coalition meetings",
          "Stakeholder sessions",
          "Planning workshops",
          "Community conversations",
        ],
      },
      {
        name: "General Consulting",
        description:
          "Flexible advisory support for public-health programs, initiatives, and cross-sector projects.",
        price: "Starting at $175 / hour",
        bullets: [
          "Program advising",
          "Project planning",
          "Stakeholder strategy",
          "Implementation support",
        ],
      },
      {
        name: "Survey Support",
        description:
          "Design practical surveys and turn responses into clear findings that support decisions.",
        price: "Starting at $1,200",
        bullets: [
          "Survey development",
          "Community feedback",
          "Data summaries",
          "Findings reports",
        ],
      },
    ],
  },
];
