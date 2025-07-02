export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Full Stack Developer",
    subtitle: "Building digital experiences that matter",
    bio: "Passionate full-stack developer with 5+ years of experience creating scalable web applications. I love turning complex problems into simple, beautiful solutions.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.dev",
    avatar: "/api/placeholder/150/150",
    coverImage: "/api/placeholder/1200/400",
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      dribbble: "https://dribbble.com/johndoe",
      behance: "https://behance.net/johndoe"
    }
  },
  
  skills: {
    technical: [
      { name: "JavaScript", level: 95, category: "Languages" },
      { name: "TypeScript", level: 90, category: "Languages" },
      { name: "Python", level: 85, category: "Languages" },
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "Vue.js", level: 80, category: "Frontend" },
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "Express", level: 85, category: "Backend" },
      { name: "PostgreSQL", level: 80, category: "Database" },
      { name: "MongoDB", level: 75, category: "Database" },
      { name: "AWS", level: 80, category: "Cloud" },
      { name: "Docker", level: 75, category: "DevOps" },
      { name: "Git", level: 95, category: "Tools" },
      { name: "Figma", level: 70, category: "Design" }
    ],
    soft: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Project Management",
      "Mentoring",
      "Agile/Scrum"
    ]
  },
  
  experience: [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "Present",
      description: "Leading development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led team of 5 developers on critical product features",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Designed and built real-time dashboard used by 10k+ daily active users"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      type: "full-time"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Remote",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Built the core platform from ground up for a fintech startup. Responsible for both frontend and backend development.",
      achievements: [
        "Developed MVP that secured $2M Series A funding",
        "Built payment processing system handling $1M+ transactions",
        "Implemented OAuth2 authentication and authorization",
        "Created responsive web app with 99.9% uptime"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Stripe API"],
      type: "full-time"
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "New York, NY",
      startDate: "2019-01",
      endDate: "2020-05",
      description: "Developed custom websites and web applications for various clients across different industries.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved client website performance by average 50%",
        "Established frontend development best practices",
        "Collaborated with designers to create pixel-perfect implementations"
      ],
      technologies: ["JavaScript", "React", "SASS", "WordPress"],
      type: "full-time"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-stack e-commerce solution",
      description: "A complete e-commerce platform with admin dashboard, inventory management, and payment processing. Built with modern technologies for scalability and performance.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and management",
        "Responsive design for all devices"
      ],
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-demo.johndoe.dev",
      status: "Completed",
      duration: "3 months",
      role: "Full Stack Developer",
      challenges: [
        "Implementing real-time inventory updates",
        "Optimizing database queries for large product catalogs",
        "Ensuring PCI compliance for payment processing"
      ],
      learnings: [
        "Advanced React patterns and performance optimization",
        "Payment gateway integration best practices",
        "Database indexing and query optimization"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      subtitle: "Collaborative project management tool",
      description: "A modern task management application with real-time collaboration, drag-and-drop interface, and team management features.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      features: [
        "Real-time collaboration",
        "Drag and drop task management",
        "Team workspace management",
        "File attachments and comments",
        "Due date reminders",
        "Progress tracking and analytics",
        "Mobile-responsive design"
      ],
      github: "https://github.com/johndoe/task-manager",
      demo: "https://tasks.johndoe.dev",
      status: "In Development",
      duration: "2 months",
      role: "Lead Developer",
      challenges: [
        "Implementing real-time synchronization",
        "Managing complex state for drag-and-drop",
        "Optimizing performance for large teams"
      ],
      learnings: [
        "WebSocket implementation and scaling",
        "Complex state management patterns",
        "Performance optimization techniques"
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      subtitle: "Real-time weather monitoring",
      description: "A comprehensive weather dashboard with location-based forecasts, historical data, and interactive maps.",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox"],
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Historical weather data",
        "Location-based services",
        "Customizable dashboard widgets",
        "Weather alerts and notifications"
      ],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather.johndoe.dev",
      status: "Completed",
      duration: "1 month",
      role: "Frontend Developer",
      challenges: [
        "Integrating multiple weather APIs",
        "Creating responsive data visualizations",
        "Handling geolocation and permissions"
      ],
      learnings: [
        "Working with external APIs",
        "Data visualization best practices",
        "Progressive Web App development"
      ]
    },
    {
      id: 4,
      title: "Social Media Analytics",
      subtitle: "Instagram & Twitter analytics tool",
      description: "A comprehensive social media analytics platform that provides insights into audience engagement, growth trends, and content performance.",
      image: "/api/placeholder/600/400",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      features: [
        "Multi-platform social media integration",
        "Real-time analytics dashboard",
        "Engagement rate calculations",
        "Audience demographics analysis",
        "Content performance metrics",
        "Automated reporting",
        "Competitor analysis"
      ],
      github: "https://github.com/johndoe/social-analytics",
      demo: "https://analytics.johndoe.dev",
      status: "Completed",
      duration: "4 months",
      role: "Full Stack Developer",
      challenges: [
        "Handling large datasets efficiently",
        "Creating complex data visualizations",
        "Managing API rate limits"
      ],
      learnings: [
        "Advanced data visualization with D3.js",
        "ETL processes and data pipeline design",
        "Social media API integration"
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      location: "Berkeley, CA",
      startDate: "2015-08",
      endDate: "2019-05",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Machine Learning",
        "Human-Computer Interaction"
      ],
      achievements: [
        "Dean's List (6 semesters)",
        "Computer Science Department Honor Roll",
        "President of Web Development Club"
      ]
    },
    {
      id: 2,
      institution: "freeCodeCamp",
      degree: "Full Stack Web Development Certification",
      location: "Online",
      startDate: "2018-01",
      endDate: "2018-12",
      coursework: [
        "Responsive Web Design",
        "JavaScript Algorithms and Data Structures",
        "Frontend Libraries",
        "Data Visualization",
        "APIs and Microservices",
        "Information Security and Quality Assurance"
      ]
    }
  ],
  
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-03",
      credentialId: "AWS-SAA-123456",
      validUntil: "2026-03"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022-11",
      credentialId: "GCP-PD-789012",
      validUntil: "2024-11"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2022-08",
      credentialId: "MDB-DEV-345678",
      validUntil: "2025-08"
    }
  ],
  
  blog: [
    {
      id: 1,
      title: "Building Scalable React Applications",
      subtitle: "Best practices for large-scale React development",
      excerpt: "Learn how to structure and optimize React applications for scalability, maintainability, and performance.",
      content: `# Building Scalable React Applications

When building large-scale React applications, proper architecture and best practices become crucial for long-term maintainability and team productivity.

## Key Principles

### 1. Component Architecture
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation

### 2. State Management
- Choose the right state management solution
- Avoid prop drilling with Context API
- Consider using Redux Toolkit for complex state

### 3. Performance Optimization
- Implement code splitting and lazy loading
- Use React.memo for expensive components
- Optimize bundle size with tree shaking

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. Start with a solid foundation and iterate as your application grows.`,
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Architecture", "Performance"],
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout",
      subtitle: "Complete guide to CSS Grid",
      excerpt: "Comprehensive guide to CSS Grid layout system with practical examples and real-world use cases.",
      content: `# Mastering CSS Grid Layout

CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease.

## Getting Started

### Basic Grid Container
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

### Grid Areas
Grid areas allow you to name sections of your layout:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
\`\`\`

## Advanced Techniques

### Auto-fit and Auto-fill
These keywords help create responsive grids without media queries.

### Subgrid
The upcoming subgrid feature will make nested grids even more powerful.

## Conclusion

CSS Grid revolutionizes web layout. With proper understanding, you can create layouts that were previously impossible or required complex hacks.`,
      publishDate: "2024-01-08",
      readTime: "12 min read",
      tags: ["CSS", "Web Design", "Layout", "Frontend"],
      featured: false,
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "API Design Best Practices",
      subtitle: "Building RESTful APIs that developers love",
      excerpt: "Essential principles and patterns for designing clean, maintainable, and developer-friendly APIs.",
      content: `# API Design Best Practices

A well-designed API is the foundation of any successful application. Here are the key principles to follow.

## RESTful Design Principles

### 1. Use HTTP Methods Correctly
- GET for retrieving data
- POST for creating resources
- PUT/PATCH for updating
- DELETE for removing resources

### 2. Consistent URL Structure
\`\`\`
GET    /api/users          # Get all users
GET    /api/users/:id      # Get specific user
POST   /api/users          # Create new user
PUT    /api/users/:id      # Update user
DELETE /api/users/:id      # Delete user
\`\`\`

### 3. Status Codes
Use appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Documentation and Versioning

Always provide comprehensive API documentation and implement proper versioning strategies.

## Conclusion

Good API design is about consistency, clarity, and developer experience. Follow these principles to create APIs that are maintainable and easy to use.`,
      publishDate: "2023-12-22",
      readTime: "10 min read",
      tags: ["API", "Backend", "REST", "Design"],
      featured: true,
      image: "/api/placeholder/800/400"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Inc.",
      content: "John is an exceptional developer who consistently delivers high-quality work. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "StartupXYZ",
      content: "Working with John was a game-changer for our startup. He built our entire platform from scratch and helped us secure funding with his excellent technical execution.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Design Lead",
      company: "Digital Agency Pro",
      content: "John's attention to detail and ability to bring designs to life is outstanding. He's also great at suggesting improvements that enhance user experience.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    }
  ]
};
