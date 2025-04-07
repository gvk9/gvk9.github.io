/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Guna Veerendra's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Guna Veerendra J Portfolio",
    type: "website",
    url: "http://gunaveerendra.com/",
  },
};

//Home Page
const greeting = {
  title: "Guna Veerendra J",
  logo_name: "Guna Veerendra J",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
    resumeLink:
    "https://drive.google.com/file/d/1-DovdBVB48pPQPkehgBQNDDY2eL-SVMr/view?usp=sharing",
  portfolio_repository: "https://github.com/gvk9",
  githubProfile: "https://github.com/gvk9",
};

const socialMediaLinks = [
  /* Your Social Media Link */
 

  {
    name: "Github",
    link: "https://github.com/gvk9",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gunajammula/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  }, 
  {
    name: "Gmail",
    link: "mailto:gunaveerendraj@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/gunaveerendra/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/gunaveerendra",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/veeru09",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Koneru Laskmaiah University",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "KLU.png",
      alt_name: "KLU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.kluniversity.in",
    },
    {
      title: "University of Central Missouri",
      subtitle: "M.S. in Computer Science",
      logo_path: "ucm.png",
      alt_name: "University of Central Missouri",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Data Structures and Algorithms, Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.ucmo.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle: "-  Microsoft",
      logo_path: "microsoft.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/veerendrakumar-6418/credentials/499d2b9855feb5bd?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      alt_name: "Azure Certificate",
      color_code: "#8C151599",
    },
    {
      title: "Natural Language Processing ",
      subtitle: "- Microsoft",
      logo_path: "microsoft.png",
      certificate_link:
        "https://courses.edx.org/certificates/5e2d6b4515524ce2ad65c7f4ae38f4b8",
      alt_name: "nlp certificate",
      color_code: "#00000099",
    },
    {
      title: "Dell Certified Associate Cloud Infrastructure and Services",
      subtitle: "- DELL EC2",
      logo_path: "dell.png",
      certificate_link:
        "https://www.certmetrics.com/emc/public/verification.aspx",
      alt_name: "dell emc",
      color_code: "#0C9D5899",
    },
     
    {
      title: "Kuberenetes",
      subtitle: "- Linux",
      logo_path: "linux.png",
      certificate_link:
        "https://courses.edx.org/certificates/4bf8add4e6ec4622928ba46923c80ef9",
      alt_name: "Kubernetes",
      color_code: "#4285F499",
    },
     
     
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and well established companies as Software Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Java Developer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "Tcs_Logo.png",
          duration: "August 2020 - December 2022",
          location: "Hyderbad, TS, INDIA",
          description:
            "Built scalable, secure backend systems for Banking firm using Spring Boot, with a focus on API design, performance optimization, and cloud-native architecture. Developed ETL pipelines, integrated messaging systems (Kafka/RabbitMQ), and implemented caching strategies (Redis, EhCache). Led CI/CD automation, serverless infrastructure with AWS CDK, and mentored team members to deliver high-quality, enterprise-grade solutions",
          color: "#000000",
        },
        {
          title: "Software Development Engineer",
          company: "KLIQ Soft Solutions",
          company_url: "http://kliqsoft.in/",
          logo_path: "KLIQ.png",
          duration: "May 2018 - June 2020",
          location: "Guntur, AP, INDIA",
          description:
            "Developed secure, high-performance payment systems, cloud-based CI/CD automation, and responsive web applications. I collaborated closely with cross-functional teams to ensure seamless user experiences",
          color: "#0879bf",
        },
         
      ],
    },

    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Backend projects, web applications and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "My Research and Publications are on Computational Intelligence",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mlp-model-emotion-recognition",
      name: "MLP Model for Emotion Recognition using Acoustic Features",
      createdAt: "May 2020",
      description: "Paper published on IJETER ISSN 2347 - 3983 ",
      url: "https://www.warse.org/IJETER/static/pdf/file/ijeter34852020.pdf",
    }, 
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Spring, .Net, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Overland Park, Kansas, 66223",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
