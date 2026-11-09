import { FaJava, FaPython, FaAndroid, FaGitAlt, FaGithub, FaDatabase, FaFileExcel } from "react-icons/fa";
import { SiKotlin, SiMysql, SiMongodb, SiPandas, SiNumpy, SiJupyter, SiGoogleanalytics } from "react-icons/si";

// Edit this file to add/remove your projects, certificates and skills.

export const projects = [
  {
    id: "pro-alarm",
    Title: "Pro-Alarm Android Application",
    Description:
      "A native Android alarm application built with Java and XML layouts, using AlarmManager and PendingIntent for precise background alarm scheduling.",
    Img: "/project-alarm.svg",
    Link: "", // live demo link (leave empty if none)
    Github: "https://github.com/vaibhavsw942", // put the exact repo link here
    TechStack: ["Java", "Android", "XML"],
    Features: [
      "Native Android alarm app developed using Java and XML UI layouts",
      "AlarmManager and PendingIntent for precise background alarm scheduling",
      "Responsive UI built with RecyclerView and custom TimePicker dialogs",
      "Broadcast Receivers to manage alarm execution across Android lifecycle events",
    ],
  },
];

export const certificates = [
  { Title: "Full Stack Data Science and AI Program (Gold, 83.75%)", Issuer: "NASSCOM FutureSkills Prime", Date: "Mar 2026", Img: "/certificates/full-stack-data-science-ai.jpg", File: "/certificates/full-stack-data-science-ai.pdf" },
  { Title: "Google Analytics Certification", Issuer: "Google", Date: "Sep 2026", Img: "/certificates/google-analytics.jpg", File: "/certificates/google-analytics.pdf" },
  { Title: "Google Data Analysis with Python Specialization", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/google-data-analysis-python.jpg", File: "/certificates/google-data-analysis-python.pdf" },
  { Title: "Databases and SQL for Data Science with Python", Issuer: "IBM, Coursera", Date: "Oct 2026", Img: "/certificates/databases-sql-python.jpg", File: "/certificates/databases-sql-python.pdf" },
  { Title: "Business Analytics with Excel", Issuer: "Microsoft", Date: "Oct 2026", Img: "/certificates/business-analytics-excel.jpg", File: "/certificates/business-analytics-excel.pdf" },
  { Title: "GenAI Powered Data Analytics Job Simulation", Issuer: "Forage", Date: "Nov 2026", Img: "/certificates/genai-data-analytics-simulation.jpg", File: "/certificates/genai-data-analytics-simulation.pdf" },
  { Title: "Hello, Python!", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/hello-python.jpg", File: "/certificates/hello-python.pdf" },
  { Title: "Functions and Conditional Statements", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/functions-conditionals.jpg", File: "/certificates/functions-conditionals.pdf" },
  { Title: "Loops and Strings", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/loops-strings.jpg", File: "/certificates/loops-strings.pdf" },
  { Title: "Data Structures in Python", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/data-structures-python.jpg", File: "/certificates/data-structures-python.pdf" },
  { Title: "Explore Raw Data", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/explore-raw-data.jpg", File: "/certificates/explore-raw-data.pdf" },
  { Title: "Clean Your Data", Issuer: "Google, Coursera", Date: "Oct 2026", Img: "/certificates/clean-your-data.jpg", File: "/certificates/clean-your-data.pdf" },
  { Title: "Introduction to Android Mobile Application Development", Issuer: "Meta, Coursera", Date: "Sep 2026", Img: "/certificates/android-app-development.jpg", File: "/certificates/android-app-development.pdf" },
  { Title: "Programming Fundamentals in Kotlin", Issuer: "Meta, Coursera", Date: "Oct 2026", Img: "/certificates/kotlin-fundamentals.jpg", File: "/certificates/kotlin-fundamentals.pdf" },
  { Title: "Version Control", Issuer: "Meta, Coursera", Date: "Sep 2026", Img: "/certificates/version-control.jpg", File: "/certificates/version-control.pdf" },
  { Title: "Artificial Intelligence Fundamentals", Issuer: "IBM SkillsBuild", Date: "Feb 2026", Img: "/certificates/ai-fundamentals.jpg", File: "/certificates/ai-fundamentals.pdf" },
  { Title: "Project Management Fundamentals", Issuer: "IBM SkillsBuild", Date: "Feb 2026", Img: "/certificates/project-management-fundamentals.jpg", File: "/certificates/project-management-fundamentals.pdf" },
  { Title: "Job Application Essentials", Issuer: "IBM SkillsBuild", Date: "Feb 2026", Img: "/certificates/job-application-essentials.jpg", File: "/certificates/job-application-essentials.pdf" },
];

export const techStacks = [
  { language: "Java", color: "#f89820", Icon: FaJava },
  { language: "Python", color: "#3776ab", Icon: FaPython },
  { language: "Kotlin", color: "#7f52ff", Icon: SiKotlin },
  { language: "Android", color: "#3ddc84", Icon: FaAndroid },
  { language: "SQL", color: "#00a3d9", Icon: FaDatabase },
  { language: "MySQL", color: "#4479a1", Icon: SiMysql },
  { language: "MongoDB", color: "#47a248", Icon: SiMongodb },
  { language: "Git", color: "#f05032", Icon: FaGitAlt },
  { language: "GitHub", color: "#ffffff", Icon: FaGithub },
  { language: "pandas", color: "#D4D4D4", Icon: SiPandas },
  { language: "NumPy", color: "#4dabcf", Icon: SiNumpy },
  { language: "Jupyter", color: "#f37626", Icon: SiJupyter },
  { language: "Excel", color: "#21a366", Icon: FaFileExcel },
  { language: "Google Analytics", color: "#f9ab00", Icon: SiGoogleanalytics },
];
