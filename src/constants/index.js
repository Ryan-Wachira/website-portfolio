import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    cisco,
    laravel,
    modcom,
    kenyattauniversity,
    eventstur,
    carrent,
    jobit,
    tripguide,
    ovs,
    cyber,
    threejs,
    eugene,
    stanley,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cybersecurity Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "cisco",
      icon: cisco,
    },
    {
      name: "laravel",
      icon: laravel,
    },
  ];
  
  const experiences = [
    {
      title: "Mobile App Developer (React Native and Kotlin) - Student Position",
      company_name: "Modcom Institute of Technology",
      icon: modcom,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - June 2020",
      points: [
        "Utilizing React Native and Kotlin to build cross-platform mobile applications, ensuring consistent performance, responsiveness, and compatibility across devices.",
        "Gaining insights into version control systems and collaborative development practices through teamwork and code reviews.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Contributing to coding tasks, including writing clean, efficient, and well-documented code to implement various functionalities.",
      ],
    },
    {
      title: "Telecom and IT Apprentice - Student",
      company_name: "Kenyatta University",
      icon: kenyattauniversity,
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
        "Gaining hands-on experience in both analogue and digital electronics, delving into the design and operation of electronic circuits and systems.",
        "Participating in practical sessions to comprehend the design and functionality of microwave systems.",
        "Developing programming skills in a diverse set of languages. Mastered C, C++, assembly language, and Python, enabling the creation of software solutions ranging from low-level programming to high-level scripting.",
        "Applied concepts learned in classes to design and implement computer networks using Cisco systems and labs.",
      ],
    },
    {
      title: "IT Support - Intern",
      company_name: "EventStur Solutions Limited",
      icon: eventstur,
      iconBg: "#E6DEDD",
      date: "June 2023 - September 2023",
      points: [
        "Developing and maintaining the backend of web applications using Laravel, including creating APIs, managing data models, and ensuring efficient server-side operations.",
        "Designing and optimizing database structures in MySQL for efficient data storage, retrieval, and manipulation, ensuring data integrity and performance.",
        "Troubleshooting and debugging issues, identifying and resolving technical challenges in both frontend and backend components.",
        "Creating visually captivating and informative visual assets that effectively communicate event details, themes, and participant information.",
        "Collaborating closely with project managers and other team members to deliver high-quality web applications on time and within scope.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ryan consistently demonstrated exceptional technical skills and a proactive approach, significantly contributing to the success of our projects at Eventstur Solutions Limited.",
      name: "Eugene Orimbo",
      designation: "Co-Founder",
      company: "EventStur Solutions Limited",
      image: eugene,
    },
    {
      testimonial:
        "Ryan has demonstrated exceptional technical skills and innovation, particularly through their online voting system project and their work in the Telecommunication labs. ",
      name: "Dr.Stanley Wambugu",
      designation: "Lecturer",
      company: "Kenyatta University",
      image: stanley,
    },
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs. (On development)",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Online Voting System",
      description:
        "A secure and efficient online voting system designed for private institutions, built using PHP, JavaScript, and MySQL.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
      ],
      image: ovs,
      source_code_link: "https://github.com/Ryan-Wachira/Online-Voting-System",
    },
    {
      name: "Cybersecurity Projects",
      description:
        "A collection of cybersecurity projects, including encryption tools, threat detection, and more.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "cybersecurity",
          color: "red-text-gradient",
        },
        {
          name: "encryption",
          color: "green-text-gradient",
        },
      ],
      image: cyber,
      source_code_link: "https://github.com/Ryan-Wachira",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };