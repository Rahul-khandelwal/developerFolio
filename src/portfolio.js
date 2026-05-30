/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Khandelwal",
  title: "Hi, I'm Rahul Khandelwal",
  subTitle: emoji(
    "Senior Member of Technical Staff with 13+ years of experience designing and developing large scale distributed systems/applications. I am currently working with Nutanix building the next generation of Nutanix Database Service and mentoring new talent. I have extensive experience in resolving complex software problems, building Scalable Control Planes, Kubernetes architectures, and Distributed Systems with Java, Go, and Spring Boot. I have previously worked with Salesforce for Net Zero Cloud, ThoughtWorks for high-throughput lending/banking engines, and big data analytics/database engines at Intellicus and Cumulus-Systems."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rahul-khandelwal",
  linkedin: "https://www.linkedin.com/in/rahul-khandelwal91/",
  youtube: "https://youtube.com/@khandelwal_rahul?si=r2mpHDa2U6SO02rh",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced backend developer with expertise in Java",
  skills: [
    emoji("⚡ Developed distributed systems"),
    emoji("⚡ Developed enterprise applications"),
    emoji(
      "⚡ Migrated large legacy monoliths to kubernetes and microservice architecture"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  subtitle:
    "Skils that I have aquired while building many diverse and great products.",
  experience: [
    {
      Stack: "Backend Development (Java / Kotlin / Go / Scala)",
      progressPercentage: "94%"
    },
    {
      Stack: "Rest API Development (Spring Boot / Java EE)",
      progressPercentage: "94%"
    },
    {
      Stack: "Distributed Systems & Microservices",
      progressPercentage: "95%"
    },
    {
      Stack: "System Design & API Design",
      progressPercentage: "92%"
    },
    {
      Stack: "Database Design",
      progressPercentage: "88%"
    },
    {
      Stack: "Containerized Deployments (Docker / Kubernetes)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  subtitle:
    "My experience working with great companies and solving different challenges to build diverse and great products.",
  experience: [
    {
      role: "Senior Member of Technical Staff",
      company: "Nutanix",
      companylogo: require("./assets/images/nutanixLogo.jpg"),
      date: "Jun 2022 – Present",
      projects: [
        {
          name: "Nutanix Database Service (NDB)",
          desc: "Leading the re-architecture of NDB (formerly ERA) which is a Nutanix exterprise offering to provides backup/restore, provision, point in time restore and patching capabilities for different databases across on-prem/cloud deployments.",
          descBullets: [
            "Desigining next generation of NDB Control Plane by containerizing the CP deployment, Integrating with other Nutanix products such as SMSP, PC Marketplace, LCM, NDK for extended capabilities and consistent customer experience.",
            "Leading the effort to scale NDB CP for >3000 databases as part of the next generation of NDB Control Plane.",
            "Responsible for - Architecture and design, milestone and release planning, east-west communication for dependencies and deliverables, communication within and across teams for design reviews and deliverables, implementations, developer re-education and productivity etc.",
            "Led the effort to scale first generation of NDB CP to >1000 databases as part of the upgrade team.",
            "Identified bottlenecks, designed and implemented improvements (such as rate limiting) in the upgrade workflow to support upgrade of >1000 of DBs concurrently with reliability and predictability.",
            "Improved developer productivity for the product by introducing and intrgrating Spotbugs (static code analysis), UTs/ITs for java code which has added to performance optimization and stability of the product. Educated team on unit testing and integrated unit testing in build process.",
            "Contributed to the NDB cloud public preview by Delivering the Postgres DB snapshot (backup and PITR) support."
          ]
        }
      ],
      skills: [
        "Java 21",
        "Java EE",
        "Spring Boot",
        "Kubernetes",
        "System Design",
        "Microservices",
        "Distributed Systems",
        "Python",
        "GOLang",
        "Shell Scripting"
      ]
    },
    {
      role: "Senior Member of Technical Staff",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "Sep 2021 – May 2022",
      projects: [
        {
          name: "Net Zero Cloud",
          desc: "Senior developer for the product which is aimed to help customers track their carbon footprint and help them make informed decisions towards reducing their carbon emission.",
          descBullets: [
            "Added support for Data Gap Filling capabilities which used automated and manual methods to identify gaps in energy use records and help customer fill those gaps.",
            "Helping in onboarding of new folks joining Net Zero Cloud and Industries cloud."
          ]
        }
      ],
      skills: [
        "Java 11",
        "Spring Boot",
        "Javascript",
        "Salesforce Core Platform"
      ]
    },
    {
      role: "Senior Application Developer",
      company: "ThoughtWorks",
      companylogo: require("./assets/images/thoughtworks_logo.jpg"),
      date: "Jul 2019 – Sep 2021",
      projects: [
        {
          name: "Maximus",
          desc: "Lead developer for the scalable and extendible platform for all of the lending products of Axis Bank.",
          descBullets: [
            "Added support for E-KYC, E-NACH and Income Assessment capabilities which helped Axis Bank to disburse more than 150000 personal loan applications over the last year to existing to bank and new to bank customers.",
            "Helped increasing Axis Bank Lending revenue from 5.9 MN to 8.8 MN USDs in year 2020 by improving personal loan lending capabilities with E-KYC, E-NACH and Income Assessment.",
            "Accomplished complete support for new to bank customers on lending platform by developing Video-KYC capability.",
            "Accomplished integration and release of Auto Loan Top Up product as Feature owner in less than 3 months from inception.",
            "Accomplished onboarding of a new team of graduates in less than 2 months as Tech Lead for them."
          ]
        },
        {
          name: "Axis Digital",
          desc: "Platform to provide easy saving account opening for salaried customers.",
          descBullets: [
            "Enabled faster inception by doing rapid POCs for E-KYC, Video-KYC, etc."
          ]
        },
        {
          name: "Thanos",
          desc: "Axis Bank Marketplace to sell partners services e.g., mutual funds, insurance etc.",
          descBullets: [
            "Enabled faster inception and onboarding by doing rapid POCs for partner integration."
          ]
        }
      ],
      skills: [
        "Kotlin",
        "Spring Boot",
        "Mongo DB",
        "Apache Kafka",
        "Kubernetes",
        "Docker",
        "React",
        "Microservices",
        "Distributed Systems",
        "API Design"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Intellicus Technologies",
      companylogo: require("./assets/images/intellicusLogo.png"),
      date: "June 2017 – June 2019",
      projects: [
        {
          name: "Kyvos Insights",
          desc: "Kyvos Insights (http://www.kyvosinsights.com) is a product that provides blazing fast business intelligence on big data and Hadoop.",
          descBullets: [
            "Designed and implemented the SQL Parser and Engine for Kyvos which enabled integration with PowerBI, MicroStrategy and Qlik.",
            "Implemented SQL engine capabilities from statement parsing to serving result over proprietary Multidimensional OLAP cube data structures.",
            "It enabled product to gain customers like Adobe."
          ]
        }
      ],
      skills: [
        "Scala",
        "Java",
        "Spark SQL",
        "HDFS",
        "MOLAP",
        "Performance Tuning"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Cumulus Systems",
      companylogo: require("./assets/images/cumulus_logo.jpeg"),
      date: "Mar 2013 – May 2017",
      projects: [
        {
          name: "MARS For Logs",
          desc: "A new concept product to check prodoct market fit for providing Log Analysis capabilities.",
          descBullets: [
            'I Designed and implemented initial version of "MARS for logs" ensuring scalability, robustness & high performance which enabled faster time to market.',
            "Enabled faster time to market by doing POCs around parsing, analysing and storing different types of log messages.",
            "This project has further evolved into Bolt Analytics(https://boltanalytics.com)"
          ]
        },
        {
          name: "MARS",
          desc: "Flagship product which provides high-performance and scalable analytics engine over massive data. http://www.cumulus-systems.com/mars.",
          descBullets: [
            "Developed and maintained scalable and high-performance MARS TSDB (and its REST APIs) which is the USP of the product as part of as part of the database development team.",
            "MARS TSDB is a specialized, patented(US9081834) database to store Timeseries data.",
            "Developed active directory support for MARS which enabled large scale customers to take the advantage of MARS reporting engine.",
            "Integrated Eclipse BIRT reporting tool with MARS; Developed real time alerts and advance search for MARS."
          ]
        },
        {
          name: "TMEA Analyzer and I-SEC",
          desc: "Developed and maintained TMEA Analyzer and I-SEC which are part of Hitachi’s Performance Analytics software package.",
          descBullets: [
            "Designed and Implemented multiple new features in TMEA Analyzer.",
            "Designed and Implemeneted a common UI dashboard I-SEC and integrated it with TMEA and MARS to leverage ad-hoc reporting capabilities.",
            "I-SEC was implemeneted on tight deadlines to unblock multiple customer onboardings of more than 2 MN USDs."
          ]
        }
      ],
      skills: [
        "Java",
        "Java EE",
        "Apache Click",
        "Apache Solr",
        "RESTful APIs",
        "Apache Kafka",
        "SQL Server",
        "Database Design"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Reach out to me on LinkedIn."
  //number: "+92-0000000000",
  //email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const readingSection = {
  title: "Reading",
  subtitle:
    "This is an archive of Books, Papers and articles that I have read and currently reading. I hope everyone seeing this list find these gems helpful.",
  display: true
};

const youtubeSection = {
  display: true,
  subtitle:
    "Videos that I have posted on youtube which cover technical deep dives, architectural teardowns, and solving real engineering problems for scalable and robust backend systems.",
  // If no apiKey is provided, it will use rss2json with the channelId
  channelId: "UCRhcnwnGWS671wg3CUvk-8Q",
  apiKey: "", // Optional Google API key
  maxResults: 6
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  youtubeSection,
  readingSection
};
