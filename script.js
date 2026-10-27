// Configure Tailwind Custom Colors via JS Engine
if (window.tailwind) {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    brand: {
                        50: '#f0f7ff',
                        100: '#e0effe',
                        500: '#2563eb',
                        600: '#1d4ed8',
                        700: '#1e40af',
                        800: '#1e3a8a',
                        900: '#0f172a',
                    },
                    accent: {
                        500: '#06b6d4',
                        600: '#0891b2',
                        700: '#0e7490',
                    }
                },
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                }
            }
        }
    }
}

// ==================== ALL 17 COURSES DATABASE ====================
const COURSES_DATA = [
    {
        id: "ai-6m",
        title: "Artificial Intelligence (AI)",
        category: "AI & Data Technologies",
        duration: "6 Months",
        badge: "Hot Career",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
        overview: "Master Generative AI, Deep Learning architectures, Natural Language Processing, and Neural Networks with practical Python workflows.",
        modules: [
            "Module 1: Foundations of Artificial Intelligence & Math for AI",
            "Module 2: Neural Networks & Deep Learning with PyTorch",
            "Module 3: Natural Language Processing (NLP) & Transformer Models",
            "Module 4: Generative AI, LLM Prompt Engineering & LangChain",
            "Module 5: Capstone: Building & Deploying an AI Enterprise Bot"
        ],
        tools: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "LangChain", "HuggingFace"],
        targetAudience: "Engineering Graduates, IT Professionals, Data Enthusiasts",
        careerRoles: "AI Engineer, NLP Specialist, Machine Learning Architect"
    },
    {
        id: "ml-6m",
        title: "Machine Learning (ML)",
        category: "AI & Data Technologies",
        duration: "6 Months",
        badge: "High Demand",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
        overview: "Learn Supervised, Unsupervised learning algorithms, Feature Engineering, Model Optimization, and MLOps deployment.",
        modules: [
            "Module 1: Advanced Statistical Analysis & Data Wrangling",
            "Module 2: Supervised & Unsupervised Machine Learning Algorithms",
            "Module 3: Model Evaluation, Hyperparameter Tuning & Cross-Validation",
            "Module 4: Machine Learning Pipeline & MLOps with Docker",
            "Module 5: Real-World Predictive Analytics Capstone Project"
        ],
        tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "MLflow"],
        targetAudience: "Software Developers, Data Analysts, Math/Stats Graduates",
        careerRoles: "Machine Learning Engineer, Data Scientist, ML Analyst"
    },
    {
        id: "da-6m",
        title: "Data Analytics",
        category: "AI & Data Technologies",
        duration: "6 Months",
        badge: "Industry Favorite",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        overview: "Transform raw complex data into actionable business intelligence using modern analytics tools, SQL, and Power BI dashboards.",
        modules: [
            "Module 1: Business Analytics Fundamentals & Exploratory Data Analysis",
            "Module 2: Advanced SQL Querying, Views & Stored Procedures",
            "Module 3: Visual Analytics with Power BI & Tableau",
            "Module 4: Statistical Modeling with Excel & Python",
            "Module 5: Live Business Insights Dashboards Capstone"
        ],
        tools: ["SQL", "Power BI", "Excel", "Tableau", "Python Data Viz"],
        targetAudience: "Fresh Graduates, Business Analysts, Finance & Ops Professionals",
        careerRoles: "Data Analyst, BI Developer, Business Intelligence Associate"
    },
    {
        id: "py-4m",
        title: "Python Programming",
        category: "AI & Data Technologies",
        duration: "4 Months",
        badge: "Core Skill",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        overview: "Master core Python, Object-Oriented Programming, API integrations, web scraping, and automated script workflows from scratch.",
        modules: [
            "Module 1: Python Essentials, Data Structures & Control Flow",
            "Module 2: Object-Oriented Programming (OOP) & Modules",
            "Module 3: File I/O, Web Scraping & REST APIs",
            "Module 4: Automation Scripting & Database Connectivity",
            "Module 5: Building Python Utilities Capstone"
        ],
        tools: ["Python 3", "VS Code", "Git", "BeautifulSoup", "Requests", "SQLite"],
        targetAudience: "Beginners, Non-CS Students, IT Support Transitioning to Coding",
        careerRoles: "Python Developer, Automation Engineer, Software Trainee"
    },
    {
        id: "excel-sql-5m",
        title: "Advanced Excel, SQL & Power BI",
        category: "AI & Data Technologies",
        duration: "5 Months",
        badge: "Fast Track",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        overview: "Become an expert in data manipulation, complex SQL joins, Power Pivot, DAX expressions, and executive reporting dashboards.",
        modules: [
            "Module 1: Advanced Excel: Macros, Power Query & Pivot Tables",
            "Module 2: Relational Database Architecture & SQL Analytics",
            "Module 3: Power BI Data Modeling & Advanced DAX Calculations",
            "Module 4: Interactive Dashboard Design & Executive Storytelling",
            "Module 5: End-to-End Retail & Financial Dashboard Capstone"
        ],
        tools: ["Advanced Excel", "MS SQL Server", "Power BI Desktop", "DAX Studio"],
        targetAudience: "Freshers, Operations Managers, Marketing Analysts",
        careerRoles: "Reporting Analyst, Data Specialist, MIS Executive"
    },
    {
        id: "web-6m",
        title: "Web Development",
        category: "Software Development",
        duration: "6 Months",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
        overview: "Build responsive, modern web applications using HTML5, CSS3, Tailwind CSS, JavaScript ES6+, and frontend frameworks.",
        modules: [
            "Module 1: Modern HTML5, CSS3, Tailwind CSS & Responsive Layouts",
            "Module 2: JavaScript ES6+, DOM Manipulation & Asynchronous JS",
            "Module 3: Version Control with Git & GitHub Collaborations",
            "Module 4: React.js Fundamentals, Hooks & State Management",
            "Module 5: E-Commerce Web Application Capstone"
        ],
        tools: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript ES6+", "React", "Git"],
        targetAudience: "College Graduates, Web Designers, Aspiring Frontend Devs",
        careerRoles: "Frontend Developer, Web Application Engineer, UI Developer"
    },
    {
        id: "app-6m",
        title: "App Development",
        category: "Software Development",
        duration: "6 Months",
        badge: "Cross-Platform",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
        overview: "Create high-performance Android and iOS mobile applications using React Native and Flutter with cloud backend integration.",
        modules: [
            "Module 1: Mobile UI/UX Design Standards & Dart / JavaScript",
            "Module 2: Cross-Platform Frameworks: React Native & Flutter Basics",
            "Module 3: Mobile State Management & Native Device APIs",
            "Module 4: REST API Integration & Firebase Cloud Backend",
            "Module 5: Publishing App to Google Play Store & App Store"
        ],
        tools: ["React Native", "Flutter", "Dart", "Firebase", "Android Studio", "Xcode"],
        targetAudience: "Web Developers, CS Graduates, Mobile Enthusiasts",
        careerRoles: "Mobile App Developer, Flutter Engineer, iOS/Android Developer"
    },
    {
        id: "sdp-8m",
        title: "Software Developer Program",
        category: "Software Development",
        duration: "8 Months",
        badge: "Flagship Course",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        overview: "Comprehensive software engineering program covering Data Structures, System Design, Full Stack Coding, and Cloud Deployment.",
        modules: [
            "Module 1: Computer Science Fundamentals & Data Structures (DSA)",
            "Module 2: OOP & Core Programming in Java / C++",
            "Module 3: Web Stack Architecture & Database Systems",
            "Module 4: System Design Essentials & Microservices Architecture",
            "Module 5: Enterprise-Grade SaaS Application Capstone Project"
        ],
        tools: ["Java", "Data Structures", "System Design", "Docker", "SQL", "Git"],
        targetAudience: "Engineering Graduates, Career Switchers aiming for Product Companies",
        careerRoles: "Software Development Engineer (SDE 1), Full Stack Trainee"
    },
    {
        id: "fsd-6m",
        title: "Full Stack Developer",
        category: "Software Development",
        duration: "6 Months",
        badge: "High Job Openings",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        overview: "Master the MERN Stack (MongoDB, Express, React, Node.js) to build scalable full-fledged web applications.",
        modules: [
            "Module 1: Advanced Frontend with React.js & Redux Toolkit",
            "Module 2: Backend RESTful API Development with Node.js & Express",
            "Module 3: Database Design with MongoDB & PostgreSQL",
            "Module 4: Authentication, Security & Microservices Setup",
            "Module 5: Cloud Deployment on AWS / Vercel Capstone"
        ],
        tools: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS"],
        targetAudience: "Freshers, Web Developers upgrading to Backend, CS Students",
        careerRoles: "Full Stack Engineer, MERN Developer, Software Engineer"
    },
    {
        id: "java-6m",
        title: "Java Programming",
        category: "Software Development",
        duration: "6 Months",
        badge: "Enterprise Standard",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        overview: "Build robust backend applications using Core Java, Spring Boot microservices, Hibernate ORM, and enterprise architecture.",
        modules: [
            "Module 1: Core Java 17+, Object-Oriented Principles & Collections",
            "Module 2: Database Connectivity with JDBC & Hibernate / JPA",
            "Module 3: Enterprise Backend Development with Spring Boot",
            "Module 4: RESTful Web Services & Microservices Security",
            "Module 5: Enterprise Banking Microservice Capstone"
        ],
        tools: ["Java 17", "Spring Boot", "Hibernate", "MySQL", "Maven", "Docker"],
        targetAudience: "BE/B.Tech/BCA Graduates, Aspiring Backend Developers",
        careerRoles: "Java Developer, Backend Engineer, Spring Boot Specialist"
    },
    {
        id: "django-6m",
        title: "Django Developer",
        category: "Software Development",
        duration: "6 Months",
        badge: "Rapid Web Dev",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        overview: "Master Python Django and Django REST Framework (DRF) for fast, secure, and scalable backend web development.",
        modules: [
            "Module 1: Python Fundamentals & Advanced Object-Oriented Coding",
            "Module 2: Django Architecture (MVT), Models, Views & Forms",
            "Module 3: Building Scalable APIs with Django REST Framework",
            "Module 4: User Authentication, PostgreSQL & Redis Caching",
            "Module 5: Full Scalable Web Portal Capstone Project"
        ],
        tools: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis"],
        targetAudience: "Python Programmers, Web Developers, STEM Graduates",
        careerRoles: "Django Developer, Python Backend Engineer, Web Developer"
    },
    {
        id: "cyber-6m",
        title: "Cybersecurity",
        category: "Security & Infrastructure",
        duration: "6 Months",
        badge: "Critical Role",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        overview: "Learn ethical hacking, network defense, penetration testing, SIEM operations, and cloud security protocols.",
        modules: [
            "Module 1: Networking Fundamentals, Protocols & Security Basics",
            "Module 2: Ethical Hacking & Penetration Testing Techniques",
            "Module 3: Web Application Vulnerability Assessment (OWASP Top 10)",
            "Module 4: Security Information & Event Management (SIEM)",
            "Module 5: Simulated Cyber Attack Defense Capstone Lab"
        ],
        tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "Splunk"],
        targetAudience: "Network Engineers, System Admin, IT Security Enthusiasts",
        careerRoles: "Cybersecurity Analyst, Ethical Hacker, SOC Analyst"
    },
    {
        id: "cloud-6m",
        title: "Cloud Computing",
        category: "Security & Infrastructure",
        duration: "6 Months",
        badge: "Cloud Certified",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        overview: "Architect and manage secure cloud infrastructures across AWS, Microsoft Azure, and hybrid environment solutions.",
        modules: [
            "Module 1: Cloud Architecture Fundamentals & Virtualization",
            "Module 2: AWS Core Services: EC2, S3, RDS, VPC & IAM",
            "Module 3: Azure Infrastructure Solutions & Identity Management",
            "Module 4: Cloud Security, Cost Optimization & Serverless Setup",
            "Module 5: Multi-Cloud Infrastructure Migration Capstone"
        ],
        tools: ["AWS", "Microsoft Azure", "Terraform", "CloudWatch", "Linux"],
        targetAudience: "SysAdmins, IT Engineers, College Graduates seeking Cloud Careers",
        careerRoles: "Cloud Engineer, AWS Solutions Architect, Cloud Administrator"
    },
    {
        id: "devops-6m",
        title: "DevOps Engineering",
        category: "Security & Infrastructure",
        duration: "6 Months",
        badge: "High Salary",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
        overview: "Master Continuous Integration / Continuous Deployment (CI/CD), Docker containerization, Kubernetes, and Infrastructure as Code.",
        modules: [
            "Module 1: Linux System Administration & Shell Scripting",
            "Module 2: Containerization with Docker & Container Orchestration with Kubernetes",
            "Module 3: Continuous Integration & Delivery via Jenkins & GitHub Actions",
            "Module 4: Infrastructure as Code (IaC) with Terraform & Ansible",
            "Module 5: End-to-End Automated Cloud Pipeline Capstone"
        ],
        tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Git", "AWS"],
        targetAudience: "Developers, System Administrators, Infrastructure Engineers",
        careerRoles: "DevOps Engineer, SRE (Site Reliability Engineer), Cloud DevOps"
    },
    {
        id: "uiux-6m",
        title: "UI/UX Design",
        category: "Design & Growth",
        duration: "6 Months",
        badge: "Creative Track",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
        overview: "Design intuitive digital user experiences, wireframes, interactive mobile/web prototypes, and design systems.",
        modules: [
            "Module 1: Design Thinking, User Research & Persona Creation",
            "Module 2: Wireframing, Information Architecture & UX Writing",
            "Module 3: High-Fidelity UI Design with Figma & Visual Hierarchy",
            "Module 4: Interactive Prototyping & Usability Testing",
            "Module 5: Complete Product Redesign Portfolio Capstone"
        ],
        tools: ["Figma", "Adobe XD", "Miro", "Protopie", "UsabilityHub"],
        targetAudience: "Graphic Designers, Creative Mindsets, Frontend Devs",
        careerRoles: "UI/UX Designer, Product Designer, Interaction Designer"
    },
    {
        id: "dm-6m",
        title: "Digital Marketing",
        category: "Design & Growth",
        duration: "6 Months",
        badge: "Growth Engine",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
        overview: "Master Search Engine Optimization (SEO), Performance Marketing, Google Ads, Social Media Ads, and Growth Analytics.",
        modules: [
            "Module 1: Search Engine Optimization (SEO - Technical & On-Page)",
            "Module 2: Pay-Per-Click Advertising (Google Ads, Meta Ads & LinkedIn)",
            "Module 3: Content Marketing, Copywriting & Email Automation",
            "Module 4: Web Analytics with Google Analytics 4 (GA4) & Tag Manager",
            "Module 5: Live Brand Growth Campaign Capstone"
        ],
        tools: ["Google Ads", "Meta Ads Manager", "GA4", "SEMrush", "Mailchimp"],
        targetAudience: "Entrepreneurs, Marketing Graduates, Business Owners",
        careerRoles: "Digital Marketing Specialist, SEO Analyst, Performance Marketer"
    },
    {
        id: "testing-6m",
        title: "Software Testing & Automation",
        category: "Design & Growth",
        duration: "6 Months",
        badge: "High Placement",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        overview: "Learn Manual Testing methodologies alongside automated framework testing using Selenium WebDriver, Java, and Postman API testing.",
        modules: [
            "Module 1: Software Development Life Cycle (SDLC) & Manual QA Techniques",
            "Module 2: Automated Web Testing with Selenium WebDriver & Java",
            "Module 3: REST API Testing using Postman & RestAssured",
            "Module 4: TestNG Framework, Page Object Model (POM) & CI/CD Testing",
            "Module 5: E-Commerce Web & API Automation Suite Capstone"
        ],
        tools: ["Selenium", "Java", "TestNG", "Postman", "JIRA", "Git"],
        targetAudience: "Fresh Graduates, Non-Technical IT Staff, Manual Testers",
        careerRoles: "Automation Test Engineer, QA Analyst, Software Tester"
    }
];

// ==================== FAQ DATA ====================
const FAQ_DATA = [
    {
        q: "What makes Nextgen DMA Ventures different from other academies?",
        a: "We focus 100% on live practical projects guided by senior industry mentors working in top Bangalore tech companies. You don't just watch videos — you write real production code."
    },
    {
        q: "Do I need a Computer Science degree to join these programs?",
        a: "No! Our courses are built from beginner level to advanced. Students from non-CS backgrounds, commerce, arts, and fresh graduates have successfully transitioned into software engineering roles."
    },
    {
        q: "Are the classes available in offline Bangalore campus or online?",
        a: "We offer both! You can attend in-person hands-on training at our HSR Layout campus in Bangalore or join live interactive online sessions from anywhere."
    },
    {
        q: "What is the duration of the courses?",
        a: "Course durations range from 4 months for specialized skills (e.g. Python) to 6-8 months for comprehensive career tracks (e.g. Software Developer Program, Full Stack)."
    },
    {
        q: "Do you offer placement support and interview preparation?",
        a: "Yes! Every course includes dedicated career preparation modules: resume building, mock technical interviews, GitHub portfolio creation, and direct placement assistance."
    },
    {
        q: "Will I get a certificate upon course completion?",
        a: "Yes, you will receive an industry-recognized Course Completion Certificate along with project verification credentials to showcase on LinkedIn and your resume."
    },
    {
        q: "Can I pay the course fee in installments?",
        a: "Yes, we offer flexible no-cost EMI options and installment payment plans to ensure education is accessible."
    },
    {
        q: "How do I book a counselling session or free demo class?",
        a: "You can click on 'Enquire Now' or hit the floating WhatsApp button to speak with our admissions counsellors and reserve a free live demo session."
    }
];

// ==================== STATE MANAGEMENT ====================
let currentTab = 'home';
let currentCategoryFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedCourses();
    renderAllCoursesGrid();
    renderFaqs();
    populateFormCourseDropdown();
});

// Navigation Functions
function navigateToTab(tabId) {
    currentTab = tabId;

    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(`tab-${tabId}`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-brand-600', 'bg-slate-100', 'font-bold');
    });
    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) {
        activeNav.classList.add('text-brand-600', 'bg-slate-100', 'font-bold');
    }

    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function filterCategoryAndSwitch(category) {
    navigateToTab('courses');
    setCategoryFilter(category);
}

function setCategoryFilter(category) {
    currentCategoryFilter = category;
    
    document.querySelectorAll('.cat-pill').forEach(pill => {
        if (pill.getAttribute('data-cat') === category) {
            pill.className = "cat-pill active-cat px-4 py-2 rounded-xl text-xs font-semibold transition bg-brand-600 text-white";
        } else {
            pill.className = "cat-pill px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition";
        }
    });

    filterCourses();
}

function filterCourses() {
    const searchQuery = document.getElementById('course-search-input').value.toLowerCase().trim();
    const durationQuery = document.getElementById('duration-filter').value;

    const filtered = COURSES_DATA.filter(course => {
        const matchesCat = (currentCategoryFilter === 'all') || (course.category === currentCategoryFilter);
        const matchesDuration = (durationQuery === 'all') || (course.duration === durationQuery);
        const matchesSearch = course.title.toLowerCase().includes(searchQuery) || 
                              course.overview.toLowerCase().includes(searchQuery) ||
                              course.tools.some(t => t.toLowerCase().includes(searchQuery));

        return matchesCat && matchesDuration && matchesSearch;
    });

    renderCoursesList(filtered, 'all-courses-grid');

    const noResults = document.getElementById('no-courses-found');
    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

function resetFilters() {
    document.getElementById('course-search-input').value = '';
    document.getElementById('duration-filter').value = 'all';
    setCategoryFilter('all');
}

// Rendering Functions
function createCourseCardHTML(course) {
    return `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
            <div>
                <div class="relative h-48 overflow-hidden bg-slate-100">
                    <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-3 left-3 bg-brand-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        ${course.duration}
                    </span>
                    <span class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                        ${course.badge}
                    </span>
                </div>

                <div class="p-5">
                    <span class="text-[11px] font-bold text-brand-600 uppercase tracking-wider">${course.category}</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-1 hover:text-brand-600 transition cursor-pointer" onclick="openCourseModal('${course.id}')">${course.title}</h3>
                    <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">${course.overview}</p>

                    <div class="flex flex-wrap gap-1.5 mt-4">
                        ${course.tools.slice(0, 4).map(tool => `<span class="bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded-md">${tool}</span>`).join('')}
                        ${course.tools.length > 4 ? `<span class="text-[10px] text-slate-400 font-semibold align-self-center">+${course.tools.length - 4} more</span>` : ''}
                    </div>
                </div>
            </div>

            <div class="p-5 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                <button onclick="openCourseModal('${course.id}')" class="flex-1 py-2.5 rounded-xl border border-slate-200 hover:border-brand-500 text-slate-700 hover:text-brand-600 text-xs font-bold transition flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-circle-info"></i> View Syllabus
                </button>
                <button onclick="scrollToEnquiry('${course.title}')" class="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition flex items-center justify-center gap-1">
                    Enquire
                </button>
            </div>
        </div>
    `;
}

function renderFeaturedCourses() {
    const container = document.getElementById('featured-courses-container');
    if (!container) return;
    const featured = COURSES_DATA.slice(0, 6);
    container.innerHTML = featured.map(c => createCourseCardHTML(c)).join('');
}

function renderAllCoursesGrid() {
    renderCoursesList(COURSES_DATA, 'all-courses-grid');
}

function renderCoursesList(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = list.map(c => createCourseCardHTML(c)).join('');
}

function renderFaqs() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = FAQ_DATA.map((faq, index) => `
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <button onclick="toggleFaq(${index})" class="w-full p-4 sm:p-5 text-left font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition text-sm sm:text-base">
                <span>${faq.q}</span>
                <i class="fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-200" id="faq-icon-${index}"></i>
            </button>
            <div id="faq-answer-${index}" class="hidden p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                ${faq.a}
            </div>
        </div>
    `).join('');
}

function toggleFaq(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        answer.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

function populateFormCourseDropdown() {
    const select = document.getElementById('form-course');
    if (!select) return;

    COURSES_DATA.forEach(course => {
        const opt = document.createElement('option');
        opt.value = course.title;
        opt.textContent = `${course.title} (${course.duration})`;
        select.appendChild(opt);
    });
}

function openCourseModal(courseId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return;

    const modalHolder = document.getElementById('modal-content-container');
    const encodedCourse = encodeURIComponent(course.title);
    const waLink = `https://wa.me/919787076296?text=Hi%20Nextgen%20DMA,%20I%20want%20to%20know%20more%20details%20about%20the%20${encodedCourse}%20course.`;

    modalHolder.innerHTML = `
        <div class="relative h-56 sm:h-64 overflow-hidden">
            <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
            <div class="absolute bottom-4 left-6 right-6 text-white">
                <span class="px-2.5 py-1 bg-brand-600 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">${course.category}</span>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2">${course.title}</h2>
                <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2">
                    <span><i class="fa-solid fa-clock text-brand-400 mr-1"></i> ${course.duration} Duration</span>
                    <span><i class="fa-solid fa-graduation-cap text-brand-400 mr-1"></i> Live Mentorship & Lab</span>
                    <span><i class="fa-solid fa-award text-brand-400 mr-1"></i> Bangalore Certified</span>
                </div>
            </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
            <div>
                <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-600">Course Overview</h3>
                <p class="text-slate-600 text-sm mt-1 leading-relaxed">${course.overview}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                    <span class="text-xs font-bold text-slate-800 block"><i class="fa-solid fa-users text-brand-600 mr-1"></i> Target Audience:</span>
                    <span class="text-xs text-slate-600 mt-0.5 block">${course.targetAudience}</span>
                </div>
                <div>
                    <span class="text-xs font-bold text-slate-800 block"><i class="fa-solid fa-briefcase text-brand-600 mr-1"></i> Career Roles:</span>
                    <span class="text-xs text-slate-600 mt-0.5 block">${course.careerRoles}</span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-600 mb-3">Syllabus & Learning Modules</h3>
                <div class="space-y-2">
                    ${course.modules.map(mod => `
                        <div class="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                            <div class="w-6 h-6 rounded-full bg-brand-100 text-brand-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                            <span class="text-xs font-semibold text-slate-800">${mod}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-600 mb-2">Technologies & Tools Learned</h3>
                <div class="flex flex-wrap gap-2">
                    ${course.tools.map(tool => `<span class="bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold px-3 py-1 rounded-lg">${tool}</span>`).join('')}
                </div>
            </div>

            <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <button onclick="enquireFromModal('${course.title}')" class="flex-1 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2">
                    <i class="fa-solid fa-paper-plane"></i> Enquire For This Course
                </button>
                <a href="${waLink}" target="_blank" class="py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp text-lg"></i> Instant WhatsApp Query
                </a>
            </div>
        </div>
    `;

    document.getElementById('course-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
    document.getElementById('course-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function enquireFromModal(courseTitle) {
    closeCourseModal();
    scrollToEnquiry(courseTitle);
}

function scrollToEnquiry(courseTitle) {
    navigateToTab('contact');

    if (courseTitle) {
        const select = document.getElementById('form-course');
        if (select) {
            select.value = courseTitle;
        }
    }

    const enquirySection = document.getElementById('enquiry-form-section');
    if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    const successBanner = document.getElementById('form-success-message');
    successBanner.classList.remove('hidden');

    document.getElementById('enquiry-form').reset();

    setTimeout(() => {
        successBanner.classList.add('hidden');
    }, 6000);
}