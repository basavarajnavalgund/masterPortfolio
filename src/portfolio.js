/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Basavaraj Navalgund",
  logo_name: "BasavarajNavalgund",
  nickname: "- Software developer",
  subTitle: "",
  resumeLink:
    "https://drive.google.com/file/d/16r8_8FEjJQeSSD9o1GwCirp6CCSgo98o/view?usp=drivesdk",
  portfolio_repository:
    "https://drive.google.com/file/d/16r8_8FEjJQeSSD9o1GwCirp6CCSgo98o/view?usp=drivesdk",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/basavarajnavalgund",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/basavarajnavalgund/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:basavarajnavalgund97@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "About",
      fileName: "FullStackImg",
      skills: [
        "I'm an experienced professional, who mastered both hardware and software skills throughout a journey of building personal projects, researching, and working in the industry. I am passionate about the autonomous systems field including ROS Robots and Automated Driving.",
        "I consider myself to be a strong software engineer who is capable of researching, designing, and developing software solutions.",
      ],
      softwareSkills: [
        /*
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
        */
      ],
    },
    {
      title: "Skills",
      fileName: "CloudInfraImg",
      skills: [
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c-plusplus",
          style: {
            backgroundColor: "#transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "#transparent",
          },
        },
        {
          skillName: "ROS",
          fontAwesomeClassname: "mdi-dots-grid",
          style: {
            backgroundColor: "#transparent",
          },
        },
        {
          skillName: "OpenCV / Image Processing",
          fontAwesomeClassname: "logos-opencv",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos-github-icon",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos-linux-tux",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos-arduino",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "Statistics",
          fontAwesomeClassname: "flat-color-icons:statistics",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "Continuous Integration",
          fontAwesomeClassname: "grommet-icons:integration",
          style: {
            color: "#transparent",
          },
        },
      ],
    },
    {
      title: "Interests ",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Robotics",
        "⚡ State Estimation",
        "⚡ Mapping & Localization",
        "⚡ Computer Vision & Image Processing",
        "⚡ Artificial Intelligence",
        "⚡ Algorithm Development",
        "⚡ Open Source",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page

const competitiveSites = {
  competitiveSites: [
    /*
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "KLE Technological University",
      subtitle: "BE in Electronics & Communication Engineering",
      logo_path: "klelogo.png",
      alt_name: "KLE Tech, Hubli, India",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic electronics & communication engineering subjects.",
        "⚡ Apart from this, I was a part of AEV(Autonomous Electric Vehicle) team, where i've done interesting projects like sensor fusion-based object tracking, vehicle-localization, and path planning for self-driving cars ",
      ],
      website_link: "http://kletech.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Self-Driving Cars Specialization",
      subtitle: "- Steven Waslander and Jonathan Kelly",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/988QG2ZQ3TJ9",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Bayesian Statistics: From Concept to Data Analysis",
      subtitle: "- Herbert Lee",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/M5LDSBCCD4LW",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    /*
    {
      title: "Intro to Self-Driving Cars Nanodegree",
      subtitle: "- Sebastian Thrun and team",
      logo_path: "udacity_logo.png",
      certificate_link: "",
      alt_name: "Udacity",
      color_code: "#FDFEFE",
    },
    {
      title: "Self-Driving Car Engineer Nanodegree",
      subtitle: "- Sebastian Thrun and team",
      logo_path: "udacity_logo.png",
      certificate_link: "",
      alt_name: "Udacity",
      color_code: "#FDFEFE",
    },
    {
      title: "Robotics Software Engineer Nanodegree",
      subtitle: "- Sebastian Thrun and team",
      logo_path: "udacity_logo.png",
      certificate_link: "",
      alt_name: "Udacity",
      color_code: "#FDFEFE",
    },
    {
      title: "Sensor Fusion Engineer Nanodegree",
      subtitle: "- Sebastian Thrun and team",
      logo_path: "udacity_logo.png",
      certificate_link: "",
      alt_name: "Udacity",
      color_code: "#FDFEFE",
    },
    {
      title: "C++ Nanodegree",
      subtitle: "- David Silver and team",
      logo_path: "udacity_logo.png",
      certificate_link: "",
      alt_name: "Udacity",
      color_code: "#FDFEFE",
    },
    */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Currently working at Mando as Algorithm Developer for ADAS applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Engineer",
          company: "Mando Softtech India Pvt. Ltd.",
          company_url: "https://www.mando.com/eng/",
          logo_path: "mando_logo.png",
          duration: "Oct 2020 - Present",
          location: "Bengaluru, India",
          description:
            "Working primarily as algorithm developer for ADAS applications. Image Processing algorithm design, development, and unit/integration testing. All software was written in C++ or Python.",
          color: "#0879bf",
        },
        /*
        {
          title: "Robotics Engineer",
          company: "Technoyantra",
          company_url: "https://www.technoyantra.com/",
          logo_path: "technoyantra_logo.png",
          duration: "Aug 2020 - Oct 2020",
          location: "WFH",
          description:
            "Worked on Autonomous Mobile Robot (AMR), primarily as a ROS developer. Made it to drive and map autonomously within a controlled environment. Hands-on Experience with 3D and 2D SLAM, RPLiDAR S1 and A3, Intel RealSense L515, T265, and D435i. Complete SLAM and navigation stack experience. Sensor Fusion of Wheel Odometry, Visual Odometry, and IMU. All software was based on ROS framework, and was written in C++ or Python.",
          color: "#138D75",
        },
        */
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Continental Automotive Components (India) Pvt. Ltd.,",
          company_url: "https://www.continental.com/en",
          logo_path: "conti_logo1.png",
          duration: "Feb 2020 - June 2020",
          location: "Bengaluru, India",
          description:
            "Worked on Autonomous Mobile Robot (AMR), a holonomic drive with 4 mecanum-wheels, primarily as a ROS developer with focus on SLAM and Navigation stack. Interfaced multiple ROS packages and coded nodes in C++ to autonomously map an environment, localize itself, and navigate to pick-up and drop-off objects in a manufacturing plant. Expanded my knowledge in both the hardware and software side of engineering especially in Linux, C++, and ROS",
          color: "#F39C12",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myimg.png",
    description:
      "Check out my LinkedIn profile, download my résumé, or send me an e-mail using the links below. Feel free to contact me!",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "These are my thoughts on a wide variety of topics.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bengaluru, India",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539598,77.4905091,11z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+919845268868",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
