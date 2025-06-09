"use client";
import Project from "@/components/Project";
import { Project as ProjectType } from "@/types";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

export default function ProjectsPage() {
  const projects: ProjectType[] = [
    {
      id: "talking-bench",
      title: "Frank the Talking Bench",
      subtitle: "AI-driven Conversational Urban Feedback System",
      period: "2024-02 – 2024-06",
      description:
        "As the AI developer, I integrated cutting-edge artificial intelligence components into an interactive bench designed to collect civic feedback. The bench uses voice interaction to ask citizens questions, transcribe and interpret their responses with sentiment analysis, and reply using synthesized speech.",
      highlights: [
        "Developed Speech-to-Text (STT) agent using Vosk for real-time transcription",
        "Built sentiment-aware LLM pipeline with Llama 3 70B via Groq API",
        "Created Text-to-Speech (TTS) system with Google TTS for natural responses",
        "Managed conversation flow using a state-machine-based manager agent",
        "Designed cloud-local hybrid architecture for low-latency AI communication",
        "Stored structured responses in Firestore for later analysis and visualization",
      ],
      technologies: [
        "Vosk",
        "Groq API",
        "Llama 3 70B",
        "gTTS",
        "Firestore",
        "Raspberry Pi",
        "JavaScript",
        "Python",
      ],
      image: "/talking_bench.jpeg",
      link: "https://drive.google.com/drive/folders/1-EmJJyiLjoPbyosqB8IrkR0crp_G2r1h?usp=sharing",
    },
    {
      id: "nlp-ai-assistant",
      title: "Personalized Learning AI Assistant",
      subtitle: "NLP-powered Educational Support System",
      period: "2024-11 - 2024-12",
      description:
        "Developed an advanced AI learning assistant using NLP techniques to answer queries, summarize course material, and generate quizzes. The system integrates multiple LLMs (Gemini, Groq) with RAG architecture for context-aware responses from uploaded documents and YouTube transcripts.",
      highlights: [
        "Implemented Retrieval-Augmented Generation (RAG) with FAISS vector search",
        "Integrated multiple LLMs (Google Gemini, Groq's Llama 3) with fallback mechanisms",
        "Developed document processing pipeline for PDFs and YouTube transcripts",
        "Created voice interaction system with dual transcription (Google STT & Wav2Vec2)",
        "Built Streamlit interface with document upload and LLM selection features",
        "Designed specialized agents for document-based and general knowledge queries",
        "Implemented reference tracking for answers (documents, videos, web sources)",
        "Developed cheat sheet generator for quick document summarization",
      ],
      technologies: [
        "Python",
        "Streamlit",
        "FAISS",
        "HuggingFace Transformers",
        "Google Gemini",
        "Groq API",
        "Speech Recognition",
        "Wav2Vec2",
        "RAG Architecture",
        "CrewAI",
        "Vector Databases",
        "NLP",
        "LLM Integration",
      ],
      image: "/nlp.png",
      link: "https://github.com/abdimutalipova-alfiya/personalized-learning-assistant",
    },
    {
      id: "sharepoint-challenge",
      title: "Frixion SharePoint Solution",
      subtitle: "Enterprise Collaboration Platform for Frixion Consulting",
      period: "2023-09 – 2023-12",
      description:
        "Developed a comprehensive SharePoint solution for Frixion Consulting to streamline their business operations, with my primary focus on building the financial management system for incoming invoices.",
      highlights: [
        "Designed and implemented the 'FrixionFinance' site for incoming invoices management",
        "Created automated workflows for invoice processing and approvals",
        "Developed financial reporting dashboards with Power BI integration",
        "Developed custom Power Apps for invoice data entry and managements",
        "Collaborated with the finance team to ensure regulatory compliance",
        "Integrated with Microsoft Teams for financial department communications",
        "Participated in architecture design for the entire SharePoint solution",
      ],
      technologies: [
        "SharePoint Online",
        "Power Automate",
        "Power BI",
        "Microsoft Teams",
        "Power Apps",
        "Microsoft 365 Security",
        "Azure Active Directory",
      ],
      image: "/ecs.png",
      link: "https://youtu.be/5d4OiSMfulY",
    },

    {
      id: "tomorrowland-bi-dashboard",
      title: "Tomorrowland BI Dashboard",
      subtitle: "Data Analytics Solution for Visitor Spending Optimization",
      period: "2024-10 – 2024-11",
      description:
        "Developed a comprehensive Business Intelligence dashboard in Qlik to analyze visitor spending patterns at Tomorrowland festival, enabling data-driven decisions to maximize revenue across tickets, food, and merchandise.",
      highlights: [
        "Designed star schema data model to analyze multi-dimensional festival data",
        "Created interactive visualizations showing spending patterns by visitor demographics",
        "Developed revenue analysis by ticket type (VIP vs regular) and time trends",
        "Implemented food & beverage profitability analysis with waste tracking",
        "Built merchandise performance dashboard showing best-selling items",
        "Analyzed pearl currency usage patterns to optimize the festival economy",
        "Delivered actionable insights for marketing, pricing, and operational strategies",
        "Presented findings to stakeholders with data-driven recommendations",
      ],
      technologies: [
        "Qlik Sense",
        "SQL",
        "Data Modeling",
        "ETL Processes",
        "Star Schema",
        "Data Visualization",
        "Dashboard Design",
        "Business Intelligence",
      ],
      image: "/bi.png",
      link: "https://youtu.be/F2zykwSHmoU",
    },
    {
      id: "digital-exam-training",
      title: "Digital Exam Summaries Training",
      subtitle: "Professional Skills Development Workshop",
      period: "2024-03",
      description:
        "Designed and delivered a professional training session for 50+ students on creating effective digital exam summaries using AI tools and collaborative techniques. The workshop focused on enhancing study skills for open-book exams through technology integration.",
      highlights: [
        "Co-developed curriculum on digital summarization techniques and AI tools",
        "Demonstrated practical applications of Affine, Obsidian, and AIBus for academic purposes",
        "Facilitated hands-on exercises with peer collaboration components",
        "Adapted teaching methods for different learning styles and engagement levels",
        "Received positive feedback on content clarity and practical relevance",
        "Implemented improvements based on participant feedback between sessions",
      ],
      technologies: [
        "Instructional Design",
        "Public Speaking",
        "Audience Engagement",
        "AI Tools Integration",
        "Peer Learning Techniques",
        "Feedback Analysis",
      ],
      image: "/professional_skills.png",
      link: "https://drive.google.com/drive/folders/139pi-oAHiSvxj3YIZLo1ZX1ZHbkMxJeE?usp=sharing",
    },
    {
      id: "meminder",
      title: "Meminder",
      subtitle: "Application to help people with memory problems",
      period: "2024-02 - 2024-05",
      description:
        "Developed a PHP-based application tailored for individuals with memory issues, working with a team of 7 people to create a user-friendly platform for managing daily tasks.",
      highlights: [
        "Worked on administrative features using Laravel and Tailwind CSS",
        "Enhanced database management for CRUD operations on user data",
        "Created database tables for user profiles, appointments, and medication",
        "Developed statistics page for tracking patient progress",
        "Implemented vital metrics display for completed tasks and medications",
        "Focused on frontend development for intuitive interface design",
      ],
      image: "/meminder.png",
      technologies: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
      link: "https://youtu.be/aKPTcmwb_q0",
    },
  ];
  const achievements: ProjectType[] = [
    {
      id: "flutter-certification",
      title: "Complete Flutter Development Bootcamp",
      subtitle: "Certified Flutter & Dart Developer",
      period: "2025-02",
      description:
        "Completed an intensive 29-hour Flutter and Dart development bootcamp taught by Dr. Angela Yu, covering all fundamental and advanced concepts of cross-platform mobile app development with Flutter.",
      highlights: [
        "Mastered Dart programming language fundamentals",
        "Built multiple complete Flutter applications",
        "Learned state management solutions",
        "Implemented Firebase backend integration",
        "Developed responsive layouts for all screen sizes",
        "Created custom widgets and animations",
        "Deployed apps to both iOS and Android platforms",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "State Management",
        "UI/UX Design",
        "Mobile Development",
        "Cross-platform Development",
      ],
      image: "/flutter_certificate.jpg", // Path to your certificate image
    },
  ];

  return (
    <div>
      <Navigation />
      <Project projects={projects} achievements={achievements} />
      <Contact />
    </div>
  );
}
