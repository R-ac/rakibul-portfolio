export interface SkillItem {
  name: string;
  category: 'Language' | 'Library' | 'Framework' | 'Tool';
  description: string;
  iconName: string;
  badgeColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  resultOrStatus: string;
  isCurrent?: boolean;
  type: 'University' | 'College' | 'School';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status?: string;
  shortDescription: string;
  fullDescription: string;
  isResearch?: boolean;
  researchDisclaimer?: string;
  githubUrl?: string;
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  date?: string;
  description: string;
  certificateUrl?: string;
  link?: string;
}

export interface HobbyItem {
  title: string;
  description: string;
  icon: string;
  tagline: string;
}

export interface SocialLinks {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  facebook: string;
}

export interface TerminalData {
  whoami: string;
  interests: string[];
  status: string;
  location: string;
  affiliation: string;
}

export const portfolioData = {
  personal: {
    name: "Md. Rakibul Islam",
    nickname: "Rakib",
    subtitle: "Computer Science & Engineering Student | Developer | AI/Computer Vision Enthusiast",
    heroIntro: "I am a Computer Science and Engineering student at the Islamic University of Technology, passionate about software development, algorithms, artificial intelligence, and computer vision.",
    aboutBio: "I am a Computer Science and Engineering student at the Islamic University of Technology. I enjoy building software, experimenting with algorithms, and exploring artificial intelligence and computer vision. I am particularly interested in creating practical systems that combine programming, algorithms, and intelligent technologies.",
    cvFileName: "Md_Rakibul_Islam_CV.pdf",
    cvDownloadPath: "/Md_Rakibul_Islam_CV.pdf",
    footerQuote: "Building, learning, and exploring the world of technology.",
    copyrightYear: 2026,
  },

  socials: {
    // Editable email placeholder
    email: "rakib.rocksaw@gmail.com",
    // Editable phone placeholder
    phone: "+880 1893657929",
    linkedin: "https://www.linkedin.com/in/md-rakibul-islam-rakib-3818b03b1/",
    github: "https://github.com/R-ac",
    facebook: "https://www.facebook.com/rakib.rocksaw",
  } as SocialLinks,

  education: [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Islamic University of Technology (IUT)",
      resultOrStatus: "Currently Running",
      isCurrent: true,
      type: "University"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Laboratory College",
      resultOrStatus: "GPA: 5.00",
      isCurrent: false,
      type: "College"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Nasirabad Government High School",
      resultOrStatus: "GPA: 5.00",
      isCurrent: false,
      type: "School"
    }
  ] as EducationItem[],

  skills: [
    {
      name: "C",
      category: "Language",
      description: "Low-level systems programming, memory management, and computational algorithmic foundations.",
      iconName: "Code",
      badgeColor: "cyan"
    },
    {
      name: "C++",
      category: "Language",
      description: "High-performance programming, Object-Oriented Design, STL, and complex competitive algorithms.",
      iconName: "Cpu",
      badgeColor: "cyan"
    },
    {
      name: "Java",
      category: "Language",
      description: "Robust enterprise software engineering, OOP architectures, desktop tools, and modular systems.",
      iconName: "Coffee",
      badgeColor: "cyan"
    },
    {
      name: "Python",
      category: "Language",
      description: "Versatile scripting, rapid prototyping, data science automation, and machine learning pipelines.",
      iconName: "Terminal",
      badgeColor: "emerald"
    },
    {
      name: "NumPy",
      category: "Library",
      description: "High-dimensional matrix mathematics, vectorized computations, and numerical data processing.",
      iconName: "Binary",
      badgeColor: "emerald"
    },
    {
      name: "PyTorch",
      category: "Framework",
      description: "Deep learning neural network modeling, gradient computation, and computer vision experimentation.",
      iconName: "BrainCircuit",
      badgeColor: "emerald"
    }
  ] as SkillItem[],

  projects: [
    {
      id: "parkinsons-detection",
      title: "Parkinson's Disease Detection",
      category: "Computer Vision / AI / Medical Imaging",
      status: "Currently Working On",
      shortDescription: "Making a computer vision model to analyse DaT SPECT scans for early detection of Parkinson's disease.",
      fullDescription: "An ongoing deep learning research project investigating automated computer vision architectures to process and analyze DaT (Dopamine Transporter) SPECT brain scans. Focuses on feature extraction and neural classification to support early-stage disease detection research.",
      isResearch: true,
      researchDisclaimer: "Ongoing research & development project. Not clinically validated or certified for patient diagnosis.",
      githubUrl: "https://github.com/R-ac",
      tags: ["Computer Vision", "AI", "Medical Imaging", "SPECT Analysis"]
    },
    {
      id: "striatum-isolator",
      title: "Striatum Isolator",
      category: "Computer Vision / Medical Imaging / Algorithms",
      shortDescription: "An algorithm designed to isolate the striatum region of the brain for disease detection.",
      fullDescription: "A specialized biomedical image processing pipeline developed to perform anatomical segmentation and isolate the bilateral striatum regions from medical scans, providing clean regions of interest for diagnostic analysis algorithms.",
      githubUrl: "https://github.com/R-ac",
      tags: ["Algorithms", "Medical Imaging", "Region Segmentation", "Computer Vision"]
    },
    {
      id: "flow-simulator",
      title: "Flow",
      category: "Game Development / Simulation",
      shortDescription: "A flood rescue simulator game designed to simulate flood rescue scenarios.",
      fullDescription: "An interactive emergency simulation game modeling flood disaster dynamics, evacuation routes, and rapid rescue operations. Simulates rising water boundaries and resource allocation challenges.",
      githubUrl: "https://github.com/R-ac",
      tags: ["Game Dev", "Simulation", "Interactive Systems", "Physics Logic"]
    },
    {
      id: "alphen-planner",
      title: "Alphen",
      category: "Application Development",
      shortDescription: "An interactive gym planner application.",
      fullDescription: "A comprehensive workout planning and fitness tracking application designed to structure exercise routines, log sets and progression, and streamline training schedules with an intuitive user interface.",
      githubUrl: "https://github.com/R-ac",
      tags: ["App Development", "Productivity", "UI/UX", "State Management"]
    },
    {
      id: "gowther-game",
      title: "Gowther",
      category: "Game Development",
      shortDescription: "A split-screen card game designed for interactive multiplayer gameplay.",
      fullDescription: "A competitive split-screen tactical card game engineered for seamless same-device multiplayer competition. Features custom turn phases, card effect rulesets, and real-time interaction.",
      githubUrl: "https://github.com/R-ac",
      tags: ["Game Dev", "Card Game", "Split-Screen", "Multiplayer"]
    },
    {
      id: "led-letter-generator",
      title: "LED English Letter Generator",
      category: "Digital Logic / Hardware",
      shortDescription: "A digital logic project that generates English letters using LEDs.",
      fullDescription: "A digital electronics and hardware logic project utilizing sequential and combinational circuit designs to dynamically decode inputs and render alphanumeric English characters across an LED display matrix.",
      githubUrl: "https://github.com/R-ac",
      tags: ["Digital Logic", "Hardware", "Circuits", "LED Matrix"]
    }
  ] as ProjectItem[],

  achievements: [
    // Designed with extensible schema ready for future achievements
  ] as AchievementItem[],

  hobbies: [
    {
      title: "Gardening",
      description: "During the lockdown period, I spent a lot of time doing rooftop gardening.",
      icon: "Sprout",
      tagline: "Rooftop cultivation, botanical care, and green space exploration."
    },
    {
      title: "Reading Books",
      description: "I enjoy reading books.",
      icon: "BookOpen",
      tagline: "Engaging with literature, technical texts, and insightful thought."
    }
  ] as HobbyItem[],

  terminal: {
    whoami: "Md. Rakibul Islam",
    interests: ["Artificial Intelligence", "Computer Vision", "Algorithms", "Software Development"],
    status: "Currently learning. Currently building. Currently exploring.",
    location: "Gazipur / Dhaka, Bangladesh",
    affiliation: "Islamic University of Technology (IUT)"
  } as TerminalData
};
