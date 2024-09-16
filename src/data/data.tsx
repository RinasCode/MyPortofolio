import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/logo skoolar.jpg';
import porfolioImage2 from '../images/portfolio/logo samsung.jpg';
import porfolioImage3 from '../images/portfolio/facebook.png';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rina Sismita | Full Stack Software Engineer',
  description: "Rina Sismita's portfolio website showcasing her skills, projects, and contact information.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Rina Sismita`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer </strong>based in
        <strong className="text-stone-100"> Jakarta</strong> I graduated with a degree in Information Systems and am an
        alumni of Hacktiv8 Fullstack JavaScript bootcamp. I have a strong passion for and interest in technological
        advancements.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        With over 5 years of experience as a trainer at Samsung, specializing in the latest Samsung technologies, I have
        a deep understanding of current tech trends and innovations.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy exploring new technologies and continuously developing my skills and knowledge in the
        field.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With over 5 years of experience in retail technology at Samsung, I have honed my skills in the latest technologies and current tech trends. I hold a degree in Information Systems and am an alumnus of the Hacktiv8 Fullstack JavaScript bootcamp, where I gained hands-on software development skills. My passion for technological advancements drives me to continuously explore and develop my expertise in the field.

`,
  aboutItems: [
    {label: 'Location', text: 'Jakarta', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesian', Icon: FlagIcon},
    {label: 'Interests', text: 'Tech Learning, Traveling, Coffee Enthusiast', Icon: SparklesIcon},
    {label: 'Study', text: 'Pembangunan Jaya University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Indonesian',
        level: 10,
      },
      {
        name: 'Japanese',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express',
        level: 9,
      },
      {
        name: 'Golang',
        level: 5,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Skoolar',
    description:
      'Skoolar is an innovative platform designed to streamline and secure communication between teachers and parents. It addresses the challenge of maintaining privacy while ensuring important information about students is effectively shared. By moving away from traditional methods like verbal notices or letters, Skoolar offers a modern solution for secure, organized communication. Key features include private and group messaging, integration with Google Classroom for task management, online school payments, and real-time notifications. This platform ensures that all communications, including assignments and payments, are easily accessible and timely, supporting a better learning environment and efficient school-home interaction.',
    url: 'https://skoolar.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Samsung Dummy',
    description:
      'The Samsung Dummy App is a sophisticated web application built with TypeScript, NEXT.js, and MongoDB, showcasing modern web development skills. It features user registration and login, a home page with promotional banners, and detailed eCommerce information. Users can browse featured products with search and infinite scroll, manage wishlists, and view product details with SEO-friendly meta tags. The app includes a wishlist management page for viewing and removing items. It effectively demonstrates navigation handling, authentication, and both CSR & SSR implementation with NEXT.js, highlighting a comprehensive skill set in web development.',
    url: 'https://samsung-lime.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Facebook Dummy',
    description:
      'Facebook dummy is a client-server application featuring a GraphQL server (server directory) and a mobile app built with React Native (app directory). Key functionalities include user registration and login, post creation and viewing (newest first), commenting on posts with embedded documents, and searching users by name or username. Users can follow others, view their followers and following lists, and like posts, with total likes displayed for each post.',
    url: 'https://expo.dev/preview/update?message=update%20port%20ke%2080&updateRuntimeVersion=1.0.0&createdAt=2024-08-25T08%3A16%3A26.561Z&slug=exp&projectId=61c678fd-acf8-453c-9b22-6c78ca328934&group=d6496b53-a310-4022-ab1b-c5c5d47e133a',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2024',
    location: 'Hacktiv8 BSD',
    title: 'Fullstack Javascript Bootcamp',
    content: (
      <p>
        Expert in both front-end and back-end development using JavaScript, including React, Node.js, and Express, for
        end-to-end application solutions
      </p>
    ),
  },
  {
    date: 'Maret 2023',
    location: 'Kelas.work by Kelas.com',
    title: 'Bootcamp Data Science',
    content: (
      <p>
        Completed a bootcamp with hands-on training in data analysis, machine learning, and Python, focusing on data
        visualization and predictive analytics.
      </p>
    ),
  },
  {
    date: 'September 2023',
    location: 'Pembangunan Jaya University',
    title: 'Information System',
    content: (
      <p>
        Completed a bootcamp with hands-on training in data analysis, machine learning, and Python, focusing on data
        visualization and predictive analytics.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2014 - July 2023',
    location: 'PT. Samsung Electronics Indonesia',
    title: 'Trainer',
    content: (
      <p>
        In my role, I introduced Samsung’s latest technologies to sales teams and managers, engaged with consumers
        through events featuring brand ambassadors, and collaborated with partners like Erafone and Blibli. I developed
        and delivered comprehensive training programs covering both soft and hard skills while maintaining Samsung’s
        brand image through effective communication. My skills include strong communication, brand image building, and
        training program execution. Notably, I led the highest sales area during COVID-19 by implementing a strategic
        long-term communication plan, launched "Samsung Close to You (S2U)" to enhance sales through school and service
        provider partnerships, and managed to boost sales even amid retail closures during PPKM.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */

/**
 * Contact section
 */

export const contact: ContactSection = {
  description:
    'Thank you for taking the time to explore my portfolio. If you have any questions, feedback, or if youd like to discuss potential opportunities, feel free to reach out. Im always excited to connect and collaborate on new projects. Drop me a message and let’s start a conversation!',
  items: [
    {
      type: ContactType.Email,
      text: 'rinasismita@gmail.com',
      href: 'mailto:rinasismita@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jakarta',
      href: 'https://www.google.com/maps/place/Jakarta,+DKI+Jakarta,+Indonesia/@-6.2088,106.8456,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@rina_smt171',
      href: 'https://www.instagram.com/rina_smt171/',
    },
    {
      type: ContactType.Github,
      text: 'rinascode',
      href: 'https://github.com/rinascode',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rinascode'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/24512671/rins-code'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rina-sismita/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rina_171smt/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/rinascode'},
];
