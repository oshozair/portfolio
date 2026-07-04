import { About, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Oshoze",
  lastName: "Oshoakpeme",
  name: `Oshoze Oshoakpeme`,
  role: "Entrepreneur & Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "heyoshoze@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

/*const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about reaching your full potential</>,
};*/

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/oshozair",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/oshozair",
    essential: false,
  },
  {
    name: "X (formerly Twitter)",
    icon: "twitter",
    link: "https://www.x.com/oshozair",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Website showcasing my work as an ${person.role}`,
  headline: <>Building systems and experiences that matter</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Oshoze Oshoakpeme</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-draftafrica",
  },
  subline: (
    <div className="text-on-background-weak">
      I'm {person.firstName}, an {person.role.toLowerCase()}, I craft intuitive and scalable experiences. <br />
      I believe in the power of design and technology to create meaningful change, and I'm always looking for new ways to push the boundaries of what's possible.
    </div>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/oshoze-oshoakpeme/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.location.split("/")[1]?.replace("_", " ")}-based {person.role.toLowerCase()} with a passion for transforming complex challenges
        into simple, elegant solutions. His work spans digital products, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ZUTA",
        timeframe: "2026 - Present",
        role: "Co-Founder & CEO",
        achievements: [
          <>
            Designed the landing page and technical copy, resulting in a 30% increase in user
            engagement.
          </>,
          <>
            Spearheaded the development of an AI tool that integrates into shopping experiences, enabling individuals to
            save time and money.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "GILAH GLOBAL",
        timeframe: "2021 - 2023",
        role: "QA Engineer",
        achievements: [
          <>
            Overhauled the team's QA processes using agile methodologies, leading to 45% increase in
            test efficiency.
          </>,
          <>
            Authored detailed test documentations, leading to increased efficiency in QA processes.
          </>,
        ],
        images: [
          {
          src: "/images/experience/gilah-global.jpg",
          alt: "Gilah Global Project",
          width: 16,
          height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "National Open University of Nigeria",
        description: <>Studied mathematics and computer science.</>,
      },
      {
        name: "National Institute of Information technology",
        description: <>Studied creative publication.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI.</>
        ),
        tags: [
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Android Development",
        description: (
          <>Building android apps with Java and Kotlin.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Kotlin",
            icon: "kotlin",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Database Management",
        description: (
          <>Managing databases with Supabase and other tools.</>
        ),
        tags: [
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
