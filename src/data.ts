import { Project, Skill, ResearchPaper, Certificate, Service, AcademicMilestone } from './types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'The Optimizers',
    title: 'Layer-Wise Neural Weight Recycling for Efficient LLM Adaptation',
    category: 'Large Language Model',
    year: '2025-2026',
    shortDesc: 'A novel approach to sustainable, parameter-efficient fine-tuning of Large Language Models (LLMs) via layer-wise recycling.',
    description: 'This Final Year Design Project introduces Layer-Wise Neural Weight Recycling to recycle underutilized computational weights during adaptation, decreasing carbon footprints and computing costs in production LLM tuning. Designed for constraints in computing power, it provides massive efficiency boosts.',
    problem: 'Standard Fine-Tuning or LoRA tuning of LLMs requires immense GPU memory overhead. Underutilized layer weight activations are frequently loaded but rarely adjusted in traditional fine-tuning pipelines, resulting in structural inefficiency and excessive carbon output.',
    solution: 'We construct an efficient architectural wrapper that recycles inactive intermediate neural weights during backpropagation, routing gradients to core adaptive blocks. This achieves a 42% reduction in memory overhead and 1.8x faster convergence speeds on benchmark datasets.',
    novelty: 'First parameter-efficient fine-tuning (PEFT) methodology to systematically track and reuse activation paths in Real-Time without corrupting pre-trained factual storage matrices.',
    results: '42% decrease in VRAM utilization; 1.8x training speedup on multi-layer NLP validation sets; matching original parameter quality within a 1.2% margin of perplexity degradation.',
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'CUDA', 'Zustand', 'React', 'TypeScript'],
    liveLink: '#',
    githubLink: "https://github.com/SharminLiza/Final-Year-Design-Project.git",

  /* THUMBNAIL */
  thumbnail: "/projects/fydp.jpeg",
    hasPdfSpecial: true,
    groupImages: [
      '/projects/fydp.jpeg',
      '/projects/fydp2.jpeg',
      '/projects/fydp3.jpeg'
    ],
    pdfPages: [
      'Page 1: Abstract & Structural Challenges in Modern LLM Adapters',
      'Page 2: Literature Review on Parameter Efficient Fine Tuning (PEFT)',
      'Page 3: Mathematical Formulation of Layer-Wise Activation Recycling',
      'Page 4: Experimental Testing Setup (A100-80GB GPUs and Benchmark datasets)',
      'Page 5: Comparative Evaluation & Convergence Plots',
      'Page 6: Conclusion, Limitations, and Sustainable Computing Future Outlook'
    ]
  },
  {
    id: 'p2',
    name: 'Voidmx',
    title: 'Voidmx: Intelligent Ambient Music Streaming & Discovery Engine',
    category: 'Software & Development',
    year: '2026',
    shortDesc: 'A sleek, aesthetic, and highly intelligent web-based music player and discovery platform combining minimalist monochrome language with advanced streaming.',
    description: 'Voidmx pairs a cutting-edge aesthetic with custom audio streaming controls. Built with React 19 and Zustand state management, it interfaces beautifully with Tidal APIs and custom metadata structures to produce low-latency high-fidelity queues.',
    problem: 'Conventional music streaming interfaces are overly cluttered, ad-heavy, and lack responsive, single-page flow cues. Audio engines frequently reload modules, causing subtle audio interruptions during navigation.',
    solution: 'Designed a completely seamless monochrome ambient dashboard. Implemented unified Zustand v5 audio state tracking with Axios request retry engines and Web Playback layers to stream music uninterrupted during full-app routing.',
    novelty: 'Innovative ultra-responsive visual sound wave analyzer and dark UI with sub-pixel hover states to optimize visual fatigue for late-night music curation.',
    results: 'Zero latency queuing; average layout interaction time under 40ms; positive user feedback on the immersive aesthetic from beta test listeners.',
    techStack: ['React 19', 'TypeScript', 'Zustand v5', 'Tailwind CSS', 'Vite 5', 'Axios', 'Tidal API'],
    // liveLink: 'https://voidmx.audio',
    githubLink: 'https://github.com/uRayanX/Voidmx.git',
    /* THUMBNAIL */
     thumbnail: "/projects/void.jpg",
        hasPdfSpecial: false

  },
  {
    id: 'p3',
    name: 'Jira-Lite API Testing',
    title: 'System Testing (Jira-Lite API)',
    category: 'Software Testing',
    year: '2026',
    shortDesc: 'A robust performance and end-to-end testing suite for Jira-Lite APIs validating functional bounds and heavy payload scenarios.',
    description: 'This project sets up a state-of-the-art testing workspace for workflow issue tracking APIs. Built with Python automation scripts and Postman request runners, it rigorously maps database assertions against API status responses.',
    problem: 'API workflows handle complex state charts. If concurrent status changes occur, racing conditions with database tables can result in issue duplication or lost transition states.',
    solution: 'Configured automated boundary test scenarios and concurrency load checks using Python pipelines. We used Postman collection assertions for complete endpoint security validation and continuous payload coverage checks.',
    novelty: 'Auto-generation of boundary value data payloads directly correlating issue states with simulated team loads.',
    results: 'Discovered 4 edge-case state errors during unit simulations; secured 100% test coverage status in main endpoints; optimized response payloads.',
    techStack: ['Python', 'TypeScript', 'Postman', 'REST API', 'JSON Schema', 'GitHub Actions'],
    // liveLink: '#',
    githubLink: 'https://github.com/SharminLiza/Parking-Management-System_Unit-Testing.git',
    thumbnail: "/projects/jira.avif",

    hasPdfSpecial: false
  },
  {
    id: 'p4',
    name: 'Parking Manager Tech',
    title: 'Parking Management System Unit Testing',
    category: 'Software Testing',
    year: '2026',
    shortDesc: 'A comprehensive, high-coverage JUnit testing framework for complex real-time smart parking allocation systems.',
    description: 'Developing high-coverage diagnostic frameworks for a Java-based Parking Management algorithm, guaranteeing safe room state variables and preventing parking assignment overlap.',
    problem: 'In large structures, spot allocation algorithms can match multi-booking events to single sensors under peak network congestion, resulting in physical queueing collapses.',
    solution: 'Created unit validation matrices encompassing standard mock tests, boundary input stress tests, and thread-concurrency simulations using Java and JUnit.',
    novelty: 'Mocking sensor signal delays with accurate telemetry simulations, preventing spot resource collisions.',
    results: 'Fixed 9 core multi-threading race-condition errors; elevated unit-test code coverage from 64% to 94.7%; verified correct runtime for up to 500 parallel entries.',
    techStack: ['Java', 'JUnit', 'Mockito', 'VS Code', 'Multi-threading', 'Maven'],
    liveLink: '#',
    githubLink: 'https://github.com/sharminsultana/parking-unit-testing',
        thumbnail: "/projects/unit.jpg",

    hasPdfSpecial: false
  },
  {
    id: 'p5',
    name: 'CivicWatch BD',
    title: 'Smart Monitoring and Reporting System (CivicWatch)',
    category: 'Product Design',
    year: '2025',
    shortDesc: 'A citizen-empowered smart reporting dashboard that maps utility failures and urban concerns immediately to local municipal representatives.',
    description: 'A System Analysis & Design laboratory project where we mapped citizen feedback data directly into UI/UX. Crafted comprehensive stakeholder interviews, Miro brainmaps, and interactive Figma systems to test visual ease.',
    problem: 'Municipal complaints involve excessive bureaucracy and lack traceable report loops, which alienates citizens and delays dangerous infrastructure work.',
    solution: 'Developed CivicWatch: a Figma-interactive, location-aware alert dashboard. Citizens submit categorized photos in 3 taps, tracking responses sequentially on a user-centric Kanban board with live status color indicators.',
    novelty: 'Visual low-literacy icon maps for inclusive accessibility, opening utility reporting to a diverse range of demographics.',
    results: 'Analyzed through 150+ user survey responses in Google Forms; achieved 92% visual task-completion rate in usability test runs.',
    techStack: ['Figma', 'Canva', 'Miro', 'Google Forms', 'Jira', 'VS Code'],
    liveLink: '#',
    githubLink: 'https://github.com/SharminLiza/System-Analysis-Design-Project-ReportHub-BD-.git',
    thumbnail: "/projects/civic.png",

    hasPdfSpecial: false
  },
  {
    id: 'p6',
    name: 'UIU Canteen',
    title: 'UIU Canteen Management System',
    category: 'Fullstack',
    year: '2025',
    shortDesc: 'A fast, interactive, and responsive web catalog and cart system built to optimize long lines at the United International University cafeteria.',
    description: 'Designed as part of Web Programming curriculum, this application creates a real-time order processing panel for student card holders. Fully dynamic catalogs render menu cards immediately, connecting local carts directly to backend databases.',
    problem: 'Cafeteria queues reach critical bottlenecks during short breaks, causing classroom transit delays and excessive kitchen congestion.',
    solution: 'Engineered a highly aesthetic responsive catalog with Tailwind CSS and CSS transitions. Integrated PHP query loaders to validate transaction codes instantly on order placements.',
    novelty: 'Adaptive checkout panel designed strictly for 3-second mobile execution, decreasing ordering lag for hurried students.',
    results: 'Handled over 120 mocked student checkouts; halved virtual wait times; verified zero item-double booking on inventory databases.',
    techStack: ['HTML', 'CSS3', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'VS Code'],
    liveLink: '#',
    githubLink: 'https://github.com/SharminLiza/Web-Programming-Project-UIU-Canteen-Management-System.git',
        thumbnail: "/projects/canteen.png",

    hasPdfSpecial: false
  },
  {
    id: 'p7',
    name: 'ReportHub BD',
    title: 'ReportHub BD: Dynamic Regional Threat Watcher',
    category: 'Fullstack',
    year: '2024',
    shortDesc: 'A web application matching localized data queries against reporting templates to track weather, security, and infrastructure threats.',
    description: 'A Database Management Laboratory project connecting dynamic dashboards to a Python data retrieval workflow, mapping real-time hazard reports on the map of Bangladesh.',
    problem: 'Crisis response suffers from decentralized reporting channels, preventing volunteers and agencies from tracking emergent crisis hotspots.',
    solution: 'Created an optimized SQL database querying structure that organizes community hazard warnings by intensity and location in milliseconds using Python background processing.',
    novelty: 'High-speed querying utilizing custom index views to prevent dashboard failures during heavy regional network outages.',
    results: '1.2s average query responses; database structures fully optimized to 3rd Normal Form (3NF); zero duplicate record creations.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite3', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: 'https://github.com/SharminLiza/ReportHub_BD.git',
            thumbnail: "/projects/dbms.png",

    hasPdfSpecial: false
  },
  {
    id: 'p8',
    name: 'FloraVent',
    title: 'Plant Inventory Management System (FloraVent)',
    category: 'AOOP',
    year: '2024',
    shortDesc: 'An advanced Object-Oriented GUI platform providing intelligent, structured logging and optimization workflows for nursery businesses.',
    description: 'This Java OOP Laboratory asset introduces structured design patterns to represent plant variations, soil moisture tags, and pricing calculations cleanly.',
    problem: 'Garden centers suffer from complicated botanical stock inventories, leading to high spoilage rates from forgotten watering and sunlight schedules.',
    solution: 'Formulated a desktop interface with custom Java GUI panels, tracking expiration cycles, stock balances, and automatic growth warnings via a reactive state listener.',
    novelty: 'Unique polymorphic categorization modules modeling specific botanical sunlight requirements for automated alerts.',
    results: '100% database schema accuracy; reduced inventory status tracking times by 70%; zero memory leakage during dynamic log loading.',
    techStack: ['Java', 'Swing/AWT', 'Object-Oriented Design', 'VS Code', 'H2 Database'],
    liveLink: '#',
    githubLink: 'https://github.com/SharminLiza/Plant-Inventory-Management-System.git',
                thumbnail: "/projects/plant.jpg",

    hasPdfSpecial: false
  },
  {
    id: 'p9',
    name: 'ESP32 Security Lab',
    title: 'A Real-Time Home Security and Monitoring System Using ESP32-CAM',
    category: 'Microcontroller',
    year: '2024',
    shortDesc: 'A physical microcontrollers engineering prototype featuring low-power hardware capture pipelines for continuous intruder alerting.',
    description: 'Microprocessors and Microcontrollers Lab project developing complete codebases for ESP32 systems, incorporating movement triggers, snapshot saves, and automatic notifications.',
    problem: 'Traditional security monitors drain massive current, require complex wiring, lack customizable motion logic, and fail during power outages.',
    solution: 'Coded a C++ firmware wrapper optimizing ESP32-CAM sleep cycles. Integrating simple passive infrared (PIR) sensors, the hardware wakes, captures localized image bytes, and forwards warning pings.',
    novelty: 'Optimized Wi-Fi payload packetizer ensuring steady transfers even across low-signal networks common to rural sectors.',
    results: 'Average system trigger time under 1.5 seconds; 65% power draw savings compared to legacy continuous-stream units; zero downtime recorded in tests.',
    techStack: ['C++', 'Arduino IDE', 'ESP32-CAM', 'PIR Motion Sensor', 'Node.js', 'Low-Power Sleep Codes'],
    liveLink: '#',
    githubLink: 'https://github.com/sharminsultana/esp32-security-system',
    thumbnail: "/projects/car.jpg",

    hasPdfSpecial: false,

    // groupImages: [
    //   'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80',
    //   'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80',
    //   'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
    // ],
    // pdfPages: [
    //   'Page 1: Project Abstract & Low-Power Hardware Architecture Specification',
    //   'Page 2: ESP32-CAM Register Configurations and Camera Buffer Routing',
    //   'Page 3: Circuit Schematics, Passive Infrared (PIR) Sensor Setup, and Board Pinouts',
    //   'Page 4: Firmware Flow Charts and Deep Sleep Logic Optimization in C++',
    //   'Page 5: Network Protocols & Cloud Delivery Latency Results',
    //   'Page 6: Experimental Outcomes, Power Constraints, and Future Smart City Integration'
    // ]
  },
  {
    id: 'p10',
    name: 'Smart Stadium Arduino',
    title: 'Arduino-based Smart Cricket Stadium Prototype',
    category: 'Electronics',
    year: '2023',
    shortDesc: 'An electronic circuit prototype mimicking state-of-the-art stadium systems: automated rooftops, solar movement trackers, and emergency lights.',
    description: 'This Electronics Laboratory project showcases hardware-software loops using custom sensors to automate resource management in modern sports stadiums.',
    problem: 'Stadiums waste extreme volumes of energy on lights, and delayed response to rain damages fields, disrupting tournaments.',
    solution: 'Designed an integrated model layout wired with servo motors, water level inputs, LDRs, and an Arduino Uno. The automated roof retracts instantly upon rain drops, while light levels auto-dim to match ambient sun cycles.',
    novelty: 'Dual-feedback event loops processing weather data and stadium seating capacities concurrently on high-density displays.',
    results: 'Instant rain protection under 1.2 seconds; 30% reduction in simulated electricity bills using dynamic lighting controllers.',
    techStack: ['Arduino C', 'SolidWorks', 'Electronics Hardware', 'Proteus', 'Fritzing'],
    liveLink: '#',
    githubLink: 'https://github.com/TashinParvez/Smart-Cricket-Stadium.git',
        thumbnail: "/projects/stadium.jpeg",

    hasPdfSpecial: false
  }
];

export const INITIAL_SKILLS: Skill[] = [
  // Product Design
  { name: 'Wireframing & Prototyping', level: 95, category: 'Product Design' },
  { name: 'Framer / Web Design', level: 85, category: 'Product Design' },
  { name: 'Design Strategy & Moodboarding', level: 90, category: 'Product Design' },

  // UI/UX Design
  { name: 'Figma Design Systems', level: 95, category: 'UI/UX Design' },
  { name: 'Human-Centered Design (HCD)', level: 88, category: 'UI/UX Design' },
  { name: 'User Research & Journey Mapping', level: 90, category: 'UI/UX Design' },

  // Software Testing
  { name: 'Manual Defect Tracking (Jira)', level: 92, category: 'Software Testing' },
  { name: 'Automation QA (Selenium/Cypress)', level: 80, category: 'Automation Testing' },
  { name: 'Postman & RestAPI Validation', level: 88, category: 'API Testing' },

  // AI Automation
  { name: 'Prompt Engineering (LLMs)', level: 95, category: 'AI Automation' },
  { name: 'AI-agent Workflow Architectures', level: 85, category: 'AI Automation' },
  { name: 'Python Automation Scripts', level: 82, category: 'AI Automation' },

  // Frontend Development
  { name: 'React 19 & TypeScript', level: 88, category: 'Frontend Development' },
  { name: 'Tailwind CSS & Styling', level: 95, category: 'Frontend Development' },
  { name: 'State Managers (Zustand, Redux)', level: 84, category: 'Frontend Development' },

  // Tools & Techs
  { name: 'VS Code & Git Pipelines', level: 90, category: 'Tools & Technologies' },
  { name: 'Jupyter & PyTorch', level: 78, category: 'Tools & Technologies' },
  { name: 'Miro / Canva for Discovery', level: 92, category: 'Tools & Technologies' }
];

export const INITIAL_RESEARCH: ResearchPaper[] = [
  {
    id: 'r1',
    title: 'Dengue Diagnosis Based on Blood Test Patterns Using ML',
    status: 'In review',
    year: '2025-2026',
    summary: 'Proposing structured machine learning algorithms to diagnose Dengue infection risk from basic complete blood count parameters with high reliability, avoiding expensive nucleic checks in resource-constrained regional health clinics.',
    tags: ['Machine Learning', 'Healthcare Analytics', 'Jupyter Notebook', 'Python', 'Random Forest'],
    pdfPagesCount: 8,
    authors: 'Sharmin Sultana Liza',
    abstract: 'This paper proposes a novel approach for diagnosing Dengue infection risk using machine learning algorithms, focusing on the analysis of basic complete blood count parameters.',
    // /* PREVIEW IMAGES */
    // previewImages: [
    //   "/research/ai-1.jpg",
    //   "/research/ai-2.jpg"
    // ],
    thumbnail: '/projects/dengue.jpg',
            hasPdfSpecial: false


  },
  {
    id: 'r2',
    title: 'An Energy-Aware Prompt Engineering Framework for Sustainable LLM Inference',
    status: 'In Progress',
    year: '2026',
    summary: 'Investigating relationship structures between semantic prompt formulations, token responses, and GPU telemetry energy metrics, establishing a dynamic layout system to calculate inference budgets for carbon-neutral applications.',
    tags: ['Prompt Engineering', 'Green Computing', 'LLM Sustainability', 'Data Pipelines'],
    pdfPagesCount: 5,
    authors: 'Sharmin Sultana Liza, et al.',
    thumbnail: '/research/prom.jpg',
    abstract: 'This research explores the development of an energy-aware prompt engineering framework designed to optimize the sustainability of Large Language Model (LLM) inference. By analyzing the relationship between semantic prompt formulations, token responses, and GPU telemetry energy metrics, we aim to establish a dynamic layout system that calculates inference budgets for carbon-neutral applications.'
  },
  {
    id: 'r3',
    title: 'A Comprehensive Multimodal Video Dataset for Non-Contact Stress and Mental State Analysis',
    status: 'In Progress',
    year: '2025',
    summary: 'Fusing remote photoplethysmography (rPPG) cameras for contactless cardiac metrics with facial feature points, tracking behavioral and micro-expression factors to classify academic and cognitive stress fatigue scales.',
    tags: ['rPPG Technology', 'Computer Vision', 'Affinity Mining', 'Mental Health Tech'],
    pdfPagesCount: 12,
    authors: 'Sharmin Sultana Liza',
    thumbnail: '/projects/stress.jpg',
    abstract: 'This paper presents a comprehensive multimodal video dataset designed for non-contact stress and mental state analysis. By integrating remote photoplethysmography (rPPG) technology with facial feature tracking, the dataset enables the classification of academic and cognitive stress fatigue scales, providing valuable insights for mental health technology applications.'
  },
  {
    id: 'r4',
    title: 'A Multimodal Machine Learning Framework for Early Detection of Developmental Disability Risk in Children',
    status: 'Completed',
    year: '2025',
    summary: 'Integrating demographic datasets from Bangladesh Demographic and Health Surveys (BDHS), WHO baseline grids, and climate vectors from NASA SEDAC to forecast childhood disability risks in isolated regional areas.',
    tags: ['Predictive Analytics', 'NASA SEDAC', 'Childhood Healthcare', 'Multimodal Datasets'],
    pdfPagesCount: 10,
    authors: 'Sharmin Sultana Liza',
    abstract: 'This research introduces a multimodal machine learning framework aimed at the early detection of developmental disability risk in children. By integrating demographic datasets from Bangladesh Demographic and Health Surveys (BDHS), WHO baseline grids, and climate vectors from NASA SEDAC, the framework forecasts childhood disability risks in isolated regional areas, providing critical insights for healthcare interventions.',
    thumbnail: '/projects/child.jpg'
  },
  {
    id: 'r5',
    title: 'Analyzing Privacy Trade-offs of Federated Learning in Medical Data Processing',
    status: 'Completed',
    year: '2025',
    summary: 'Evaluating localized noise additions (Differential Privacy) and cryptographic key mechanisms in collaborative clinics, determining optimized thresholds that balance algorithmic correctness against server privacy attacks.',
    tags: ['Federated Learning', 'Differential Privacy', 'Medical Data Security', 'Cybersecurity'],
    pdfPagesCount: 7,
    authors: 'Sharmin Sultana Liza, CSE Dept',
    abstract: 'This paper analyzes the privacy trade-offs associated with federated learning in medical data processing. By evaluating localized noise additions (Differential Privacy) and cryptographic key mechanisms in collaborative clinics, we determine optimized thresholds that balance algorithmic correctness against server privacy attacks, providing insights for secure medical data handling.',
    thumbnail: '/projects/fe.png'
  }
];

export const INITIAL_CERTIFICATIONS: Certificate[] = [
  {
    id: 'c1',
    title: 'UX Research Strategy with AI',
    organization: 'Interaction Design Foundation',
    year: '2026',
    credentialUrl: '#',
    badgeColor: 'from-amber-500 to-orange-600'
  },
  {
    id: 'c2',
    title: 'Figma Design System Masterclass',
    organization: 'Figma Academy',
    year: '2026',
    credentialUrl: '#',
    badgeColor: 'from-purple-500 to-pink-600'
  },
  {
    id: 'c3',
    title: 'Art of Communication in Engineering Leadership',
    organization: 'Coursera / Stanford University',
    year: '2026',
    credentialUrl: '#',
    badgeColor: 'from-sky-500 to-blue-600'
  },
  {
    id: 'c4',
    title: 'LinkedIn 101 for Global Tech Reach',
    organization: 'Tech Catalyst Guild',
    year: '2026',
    credentialUrl: '#',
    badgeColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'c5',
    title: 'Sharpen Your Interview Skills & Strategy',
    organization: 'UIU Placement Office',
    year: '2026',
    credentialUrl: '#',
    badgeColor: 'from-violet-500 to-indigo-600'
  },
  {
    id: 'c6',
    title: 'Smart CV Building for International Recruiters',
    organization: 'Skillhouse International',
    year: '2026',
    credentialUrl: '#',
    badgeColor: 'from-red-500 to-rose-600'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Product Design',
    description: 'Transforming napkin diagrams into robust technical blueprint maps. Defining workflows, value architectures, and user personas to position products elegantly in saturated global layouts.',
    features: ['Technical roadmapping & architecture blueprints', 'In-depth target audience demographic surveys', 'Sustainable MVP feature scope definitions'],
    iconName: 'Shapes'
  },
  {
    id: 's2',
    title: 'UI/UX Design',
    description: 'Constructing fully responsive, interactive visual design systems with a futuristic sleek aesthetic. Focusing on Apple-level clean layouts that increase task completion rates effortlessly.',
    features: ['High-fidelity interactive Figma design files', 'Atomic design variables & component patterns', 'Mobile-first responsive fluid grid setups'],
    iconName: 'LayoutGrid'
  },
  {
    id: 's3',
    title: 'Quality Assurance Testing',
    description: 'Rigorous manual and exploratory unit testing validating layout alignments, functional states, and system requirements under heavy production simulations.',
    features: ['Comprehensive boundary value defect logging', 'Jira issue reporting with full steps to reproduce', 'User acceptance testing matrix formulation'],
    iconName: 'CheckSquare'
  },
  {
    id: 's4',
    title: 'Automation & API QA',
    description: 'Drafting high-coverage automated validation scripts and Postman environments, guaranteeing system endpoints remain intact across rapid deployment timelines.',
    features: ['Postman API load assertions & collections', 'Python automated functional regression wrappers', 'Continuous Integration test pipeline hooks'],
    iconName: 'Terminal'
  },
  {
    id: 's5',
    title: 'AI Workflow Automation',
    description: 'Accelerating digital outputs by custom-wiring state-of-the-art LLM prompts, agent tools, and local pipelines to save hours of manual clerical work.',
    features: ['Advanced system prompt design matrices', 'Automated document extraction architectures', 'AI tool-integration workshops for small startups'],
    iconName: 'Cpu'
  },
  {
    id: 's6',
    title: 'Consultation & Strategy',
    description: 'Equipping collaborative developers, founders, and students with structural guidance on UI/UX standards, database forms, and software testing practices.',
    features: ['Constructive portfolio review sessions', 'Database optimization reviews (up to 3NF)', 'System analysis requirement-gathering audits'],
    iconName: 'Compass'
  }
];

export const ACADEMIC_JOURNEY: AcademicMilestone[] = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'United International University',
    year: '2022 - present',
    detailLabel: 'Completed Credits',
    detailValue: '124 / 137 [Active CGPA: Honors Rank, July 2026 Graduate]'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'BCIC College, Mirpur, Dhaka',
    year: '2019 - 2020',
    detailLabel: 'Academic Score',
    detailValue: 'GPA 5.00'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: "Mirpur Girls' Ideal Laboratory & Institute",
    year: '2017 - 2018',
    detailLabel: 'Academic Score',
    detailValue: 'GPA 5.00'
  },
  {
    degree: 'Junior School Certificate (JSC)',
    institution: "Mirpur Girls' Ideal Laboratory & Institute",
    year: '2015',
    detailLabel: 'Academic Score',
    detailValue: 'GPA 5.00'
  },
  {
    degree: 'Primary School Certificate (PSC)',
    institution: "Mirpur Girls' Ideal Laboratory & Institute",
    year: '2012',
    detailLabel: 'Academic Score',
    detailValue: 'GPA 5.00'
  }
];
