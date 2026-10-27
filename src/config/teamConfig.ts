export interface SampleProject {
  id: string;
  title: string;
  badge: "Demo project" | "Concept sample";
  shortDescription: string;
  conceptArchitecture: string;
  sampleTechnologies: string[];
  disclaimer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  headline: string;
  avatarSeed: string;
  accent: {
    primary: string;
    gradient: string;
    pillBg: string;
    pillBorder: string;
    pillText: string;
    ring: string;
  };
  skills: string[];
  suggestedInterests: {
    isEditableSuggestion: boolean;
    notice: string;
    items: string[];
  };
  editableBio: {
    isEditableSuggestion: boolean;
    notice: string;
    intro: string;
  };
  sampleProjects: SampleProject[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface TeamConfig {
  teamName: string;
  tagline: string;
  mission: string;
  hackathonFocus: string[];
  generalContact: {
    emailPlaceholder: string;
    discordPlaceholder: string;
    locationNote: string;
  };
  members: TeamMember[];
}

export const TEAM_CONFIG: TeamConfig = {
  teamName: "WEBSLINGERS",
  tagline: "Student Hackathon Development Squad",
  mission:
    "We are a 4-person student developer team combining algorithmic problem solving, clean frontend design, and multi-language software engineering for rapid hackathon prototyping.",
  hackathonFocus: [
    "Rapid Hackathon MVP Development",
    "Full-Stack Web Prototypes",
    "Algorithmic Problem Solving",
    "Clean, Accessible UI/UX"
  ],
  generalContact: {
    emailPlaceholder: "ADD_TEAM_CONTACT_EMAIL",
    discordPlaceholder: "ADD_DISCORD_HANDLE_OR_SERVER",
    locationNote: "Student Hackathon Team • Open to Collaborations & Competitions"
  },
  members: [
    {
      id: "anushka",
      name: "Anushka",
      role: "Student Developer",
      headline: "Frontend Styling & Python Scripting Enthusiast",
      avatarSeed: "anushka",
      accent: {
        primary: "#ec4899",
        gradient: "from-pink-500 to-rose-600",
        pillBg: "bg-pink-500/10 dark:bg-pink-500/20",
        pillBorder: "border-pink-500/30",
        pillText: "text-pink-600 dark:text-pink-300",
        ring: "focus-visible:ring-pink-500"
      },
      skills: ["Python", "HTML", "CSS"],
      suggestedInterests: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Anushka's real interests",
        items: [
          "Responsive Layouts & CSS Grid/Flexbox",
          "Python Automation Scripts",
          "Design Systems & Web Accessibility",
          "Interactive Visual Styling"
        ]
      },
      editableBio: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Anushka's custom introduction",
        intro:
          "Passionate student developer exploring the intersection of modern semantic HTML/CSS styling and Python utility scripting. Excited about crafting visually intuitive interfaces and participating in collaborative hackathon challenges."
      },
      sampleProjects: [
        {
          id: "ecotrack-concept",
          title: "EcoTrack Dashboard",
          badge: "Concept sample",
          shortDescription:
            "A concept for tracking student campus recycling habits with sleek CSS styling and a lightweight Python aggregation script.",
          conceptArchitecture:
            "Semantic HTML5 interface styled with responsive CSS variables, fed by mock Python data parser.",
          sampleTechnologies: ["HTML5", "CSS3", "Python"],
          disclaimer:
            "Concept sample designed for student hackathon portfolio demonstration; not an active or completed production build."
        },
        {
          id: "studyflow-ui",
          title: "StudyFlow Guide UI",
          badge: "Demo project",
          shortDescription:
            "A responsive knowledge-base template designed for hackathon student teams to organize sprint notes and revision links.",
          conceptArchitecture:
            "Pure HTML & CSS responsive component kit with keyboard-accessible accordion panels.",
          sampleTechnologies: ["HTML", "CSS Grid", "Flexbox"],
          disclaimer:
            "Demo project created for layout demonstration purposes; not an official deployed application."
        }
      ],
      socialLinks: {
        github: "ADD_GITHUB_URL",
        linkedin: "ADD_LINKEDIN_URL",
        email: "ADD_CONTACT_EMAIL"
      }
    },
    {
      id: "anjali",
      name: "Anjali",
      role: "Student Developer",
      headline: "Systems Logic, Algorithms & Java/C++ Explorer",
      avatarSeed: "anjali",
      accent: {
        primary: "#8b5cf6",
        gradient: "from-violet-500 to-indigo-600",
        pillBg: "bg-violet-500/10 dark:bg-violet-500/20",
        pillBorder: "border-violet-500/30",
        pillText: "text-violet-600 dark:text-violet-300",
        ring: "focus-visible:ring-violet-500"
      },
      skills: ["Python", "Java", "C++"],
      suggestedInterests: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Anjali's real interests",
        items: [
          "Object-Oriented Architecture (Java)",
          "High-Performance Algorithms (C++)",
          "Data Structures & Optimization",
          "Python Data Analysis & Logic"
        ]
      },
      editableBio: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Anjali's custom introduction",
        intro:
          "Computer science student with a keen curiosity for foundational programming, computational thinking, and core backend logic. Enjoys diving into Java object structures, C++ algorithms, and scripting solutions in Python."
      },
      sampleProjects: [
        {
          id: "route-solver-concept",
          title: "Campus Path Router",
          badge: "Concept sample",
          shortDescription:
            "A simulated shortest-path pathfinding model comparing Dijkstra and A* algorithmic efficiency across student campus maps.",
          conceptArchitecture:
            "C++ core graph traversal engine with Python plotting wrapper for benchmark analytics.",
          sampleTechnologies: ["C++", "Python", "Algorithms"],
          disclaimer:
            "Concept sample designed for algorithmic portfolio illustration; not a commercial or deployed software service."
        },
        {
          id: "inventory-engine-demo",
          title: "SafeState Inventory Core",
          badge: "Demo project",
          shortDescription:
            "A structured object-oriented simulation illustrating safe transactional updates and clean entity encapsulation.",
          conceptArchitecture:
            "Java class hierarchy modeling transactions, with Python integration tests for sanity checks.",
          sampleTechnologies: ["Java", "Python", "OOP"],
          disclaimer:
            "Demo project written as a conceptual exercise; not a deployed production system."
        }
      ],
      socialLinks: {
        github: "ADD_GITHUB_URL",
        linkedin: "ADD_LINKEDIN_URL",
        email: "ADD_CONTACT_EMAIL"
      }
    },
    {
      id: "misheal",
      name: "Misheal",
      role: "Student Developer",
      headline: "Full-Stack Interactivity & Performance Logic",
      avatarSeed: "misheal",
      accent: {
        primary: "#06b6d4",
        gradient: "from-cyan-500 to-blue-600",
        pillBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
        pillBorder: "border-cyan-500/30",
        pillText: "text-cyan-600 dark:text-cyan-300",
        ring: "focus-visible:ring-cyan-500"
      },
      skills: ["Python", "JavaScript", "C++"],
      suggestedInterests: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Misheal's real interests",
        items: [
          "Interactive Client Scripting (JavaScript)",
          "Low-Level & Memory-Efficient Code (C++)",
          "Automated Data Extraction & Tooling (Python)",
          "Real-Time Event Processing"
        ]
      },
      editableBio: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Misheal's custom introduction",
        intro:
          "Enthusiastic student programmer combining dynamic JavaScript browser scripting with the compute speed of C++ and the versatility of Python. Passionate about linking performant computation to fluid user interactions during hackathons."
      },
      sampleProjects: [
        {
          id: "telemetry-stream-concept",
          title: "PulseData Stream Viewer",
          badge: "Concept sample",
          shortDescription:
            "A concept for capturing simulated device events in C++, processing batches via Python, and streaming to a live browser UI.",
          conceptArchitecture:
            "Simulated C++ emitter, Python message dispatcher, and responsive JavaScript DOM visualizer.",
          sampleTechnologies: ["JavaScript", "Python", "C++"],
          disclaimer:
            "Concept sample for student showcase; no hardware or production cloud services are actively deployed."
        },
        {
          id: "event-scheduler-demo",
          title: "Async Task Dispatcher",
          badge: "Demo project",
          shortDescription:
            "An interactive JavaScript dashboard demonstrating event loops and task queues backed by Python worker simulations.",
          conceptArchitecture:
            "Client-side JS event simulator connected to mock asynchronous task queues.",
          sampleTechnologies: ["JavaScript", "Python", "DOM APIs"],
          disclaimer:
            "Demo project created for demonstration; not a production-hosted platform."
        }
      ],
      socialLinks: {
        github: "ADD_GITHUB_URL",
        linkedin: "ADD_LINKEDIN_URL",
        email: "ADD_CONTACT_EMAIL"
      }
    },
    {
      id: "dhanesh",
      name: "Dhanesh",
      role: "Student Developer",
      headline: "Frontend Architecture, UI Systems & Python Automation",
      avatarSeed: "dhanesh",
      accent: {
        primary: "#10b981",
        gradient: "from-emerald-500 to-teal-600",
        pillBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
        pillBorder: "border-emerald-500/30",
        pillText: "text-emerald-600 dark:text-emerald-300",
        ring: "focus-visible:ring-emerald-500"
      },
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      suggestedInterests: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Dhanesh's real interests",
        items: [
          "Modern Responsive Web Apps",
          "Interactive UI Engineering & State Management",
          "Python Scripting & Workflow Automation",
          "Component Libraries & Developer Tooling"
        ]
      },
      editableBio: {
        isEditableSuggestion: true,
        notice: "Editable Suggestion — replace with Dhanesh's custom introduction",
        intro:
          "Curious student developer who enjoys building engaging web experiences from HTML/CSS foundations to modern JavaScript reactivity, paired with Python for rapid backend prototyping and automation scripts."
      },
      sampleProjects: [
        {
          id: "hackflow-concept",
          title: "HackFlow Sprint Board",
          badge: "Concept sample",
          shortDescription:
            "A concept for an agile task board tailored for hackathon 24-hour sprints, with real-time UI state and mock Python task triggers.",
          conceptArchitecture:
            "Modern JavaScript state container, CSS Flex/Grid layout, and Python JSON data persistence concept.",
          sampleTechnologies: ["JavaScript", "HTML5", "CSS3", "Python"],
          disclaimer:
            "Concept sample prepared for student hackathon portfolio; not an active commercial SaaS."
        },
        {
          id: "docformat-demo",
          title: "AutoDoc Layout Engine",
          badge: "Demo project",
          shortDescription:
            "A live browser layout preview tool that reads mock markdown/Python docstrings and formats them into a clean HTML/CSS stylesheet.",
          conceptArchitecture:
            "Client-side DOM manipulation engine with responsive typography templates.",
          sampleTechnologies: ["HTML", "CSS", "JavaScript"],
          disclaimer:
            "Demo project created for frontend demonstration purposes."
        }
      ],
      socialLinks: {
        github: "ADD_GITHUB_URL",
        linkedin: "ADD_LINKEDIN_URL",
        email: "ADD_CONTACT_EMAIL"
      }
    }
  ]
};
