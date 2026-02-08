import { type JSX } from "react";
import { Leads, AWS, Azure, GCP, Events, Content, Design, Social, DevTeam } from "./images";
import { tabs, colorMap, type TabColor } from "../constants/leadmembersconstants";

// Images
const [Lead01, Lead02] = Leads
const [AWSLead, AWSCoLead1, AWSCoLead2] = AWS
const [AzureLead, AzureCoLead1, AzureCoLead2] = Azure
const [GCPLead] = GCP
const [EventsLead, EventsCoLead1, EventsCoLead2] = Events
const [ContentLead, ContentCoLead1, ContentCoLead2] = Content
const [DesignLead, DesignCoLead1, DesignCoLead2] = Design
const [SocialLead, SocialCoLead1, SocialCoLead2] = Social
const [DevLead,DevCoLead1] = DevTeam
//const [PHM, PHW] = PH 
//Import PH from ./images and uncomment the above line to use as placeholders

// Re-export for external usage
export { tabs, colorMap };
export type { TabColor };

// --- Team Cards ---
export const teamCards: Record<
  string,
  {
    src: string;
    alt: string;
    name: string;
    role: string;
    githubUrl?: string;
    linkedinUrl?: string;
  }[]
> = {
  Core: [
    {
      src: Lead01,
      alt: "Amrize JK",
      name: "Amrize JK",
      role: "President",
      githubUrl: "https://github.com/iamamrizejk",
      linkedinUrl: "https://www.linkedin.com/in/amrize-jk/",
    },
    {
      src: Lead02,
      alt: "Pooja S",
      name: "Pooja S",
      role: "President",
      githubUrl: "https://github.com/Poojsri",
      linkedinUrl: "https://www.linkedin.com/in/poojas1756/",
    },
  ],

  AWS: [
    {
      src: AWSLead,
      alt: "Anadha Nivas S",
      name: "Anadha Nivas S",
      role: "Lead",
      githubUrl: "https://github.com/sAnandha",
      linkedinUrl: "https://www.linkedin.com/in/anandhanivas-s/",
    },
    {
      src: AWSCoLead2,
      alt: "Dhanalakshmi D",
      name: "Dhanalakshmi D",
      role: "Co-Lead 1",
      githubUrl: "https://github.com/dhanalakshms",
      linkedinUrl: 'https://www.linkedin.com/in/dhanalakshmi-d-46a4212a3'
    },
    {
      src: AWSCoLead1,
      alt: "Dhivyaa M",
      name: "Dhivyaa M",
      role: "Co-Lead 2",
      githubUrl: "https://github.com/Dhivyaa12",
      linkedinUrl: 'www.linkedin.com/in/dhivyaa-m-8851a5291'
    },
  ],

  Azure: [
    {
      src: AzureLead,
      alt: "Arun Pranav AT",
      name: "Arun Pranav AT",
      role: "Lead",
      githubUrl: "https://github.com/arunpranav-at",
      linkedinUrl: "https://www.linkedin.com/in/arunpranavat",
    },
    {
      src: AzureCoLead2,
      alt: "Pavana Rajalakshimi K",
      name: "Pavana Rajalakshimi K",
      role: "Co-Lead 1",
      githubUrl: "https://github.com/pavana2004",
      linkedinUrl: "https://www.linkedin.com/in/k-pavana-rajalakshmi-a08663258/",
    },
    {
      src: AzureCoLead1,
      alt: "Roopashree S",
      name: "Roopashree S",
      role: "Co-Lead 2",
      githubUrl: "https://github.com/roopa-134",
      linkedinUrl: 'https://www.linkedin.com/in/roopashrees'
    },
  ],

  GCP: [
    {
      src: GCPLead,
      alt: "Tamizhazhagan SK",
      name: "Tamizhazhagan SK",
      role: "Lead",
      githubUrl: "https://github.com/TamizhSK",
      linkedinUrl: "https://linkedin.com/in/tamizh-sk",
    },
  ],

  Design: [
    {
      src: DesignLead,
      alt: "Azhagar Aadithyan",
      name: "Azhagar Aadithyan",
      role: "Lead",
      githubUrl: "https://github.com/aadi28-404",
      linkedinUrl: "https://www.linkedin.com/in/azhagar-aadithyan-549980249",
    },
    {
      src: DesignCoLead1,
      alt: "Shreeram S",
      name: "Shreeram S",
      role: "Co-Lead 1",
      githubUrl: "https://github.com/Shreeram000",
      linkedinUrl: "https://www.linkedin.com/in/shreeram-s-848b0b293/",
    },
    {
      src: DesignCoLead2,
      alt: "G.SAMYUKTH",
      name: "G.SAMYUKTH",
      role: "Co-Lead 2",
      githubUrl: "https://github.com/gsamyukthaiml2024-lab",
      linkedinUrl: "https://www.linkedin.com/in/samyukth-g-386833328"
    },
  ],

  Events: [
    {
      src: EventsLead,
      alt: "Sanjai S",
      name: "Sanjai S",
      role: "Lead",
      githubUrl: "https://github.com/SANJAI-SANSPARK",
      linkedinUrl: "https://www.linkedin.com/in/sanjai-s-34a4a7267/",
    },
    {
      src: EventsCoLead1,
      alt: "Cheran C",
      name: "Cheran C",
      role: "Co-Lead 1",
      githubUrl: "https://github.com/aj1seven",
      linkedinUrl: "https://www.linkedin.com/in/aj1seven/",
    },
    {
      src: EventsCoLead2,
      alt: "Naveen prasath S",
      name: "Naveen prasath S",
      role: "Co-Lead 2",
      githubUrl: 'https://github.com/naveenprasathsaravanan',
      linkedinUrl: 'https://www.linkedin.com/in/naveen-prasath-s-it-b56025291/'
    },
  ],

  Content: [
    {
      src: ContentLead,
      alt: "Arikaleeswaran G",
      name: "Arikaleeswaran G",
      role: "Lead",
      githubUrl: "https://github.com/arikaleeswaran",
      linkedinUrl: "https://in.linkedin.com/in/arikaleeswaran",
    },
    {
      src: ContentCoLead1,
      alt: "Pavadareni R",
      name: "Pavadareni R",
      role: "Co-Lead 1",
      githubUrl: 'https://github.com/Pavadareni',
      linkedinUrl:'Linkedin.com/in/pd1'
    },
    {
      src: ContentCoLead2,
      alt: "Devanadhan C K ",
      name: "Devanadhan C K ",
      role: "Co-Lead 2",
      githubUrl:'https://github.com/Devakesavan',
      linkedinUrl:'https://www.linkedin.com/in/devanadhan-c-k/'
    },
  ],

  "Social Media": [
    {
      src: SocialLead,
      alt: "Arivarasan A",
      name: "Arivarasan A",
      role: "Lead",
      githubUrl: "https://github.com/Nasaravira20",
      linkedinUrl: "https://www.linkedin.com/in/arivarasana",
    },
    {
      src: SocialCoLead1,
      alt: "Kamalanathan S",
      name: "Kamalanathan S",
      role: "Co-Lead 1",
      githubUrl: "https://github.com/spkamal",
      linkedinUrl: "https://www.linkedin.com/in/kamalanathan-s-a156a5291",
    },
    {
      src: SocialCoLead2,
      alt: "Shree Shanth R",
      name: "Shree Shanth R",
      role: "Co-Lead 2",
      githubUrl: "https://github.com/Maestro2903",
      linkedinUrl: "https://www.linkedin.com/in/shree-shanth-r-137a31294/",
    },
  ],

  Development: [
    {
      src: DevLead,
      alt: "Stephen Paul I",
      name: "Stephen Paul I",
      role: "Lead",
      githubUrl: "https://github.com/stephenpaul-03",
      linkedinUrl: "https://www.linkedin.com/in/stephen-paul-i",
    },
    {
      src: DevCoLead1,
      alt: "Manish Barath",
      name: "Manish Barath",
      role: "Co-Lead 1",
      githubUrl: "https://github.com/ManishBarath",
      linkedinUrl: "https://www.linkedin.com/in/manish-barath/"
    },
  ],
};


// --- Content ---
export const content: Record<
  string,
  {
    title: string;
    description: JSX.Element;
    mobile_description: JSX.Element;
  }
> = {
  Core: {
    title: "CORE TEAM",
    description: (
      <p>
        The backbone of Horizon. The Core Team sets direction, makes decisions,
        and ensures the community actually moves forward.
        <br /><br />
        From planning initiatives to aligning teams, they balance vision with execution —
        keeping Horizon focused, sustainable, and impactful.
        <br /><br />
        When things need ownership, clarity, or a final call, this is where it happens.
      </p>
    ),
    mobile_description: (
      <p>
        Leadership & direction.<br />
        Vision meets execution.<br />
        Keeping Horizon on track.
      </p>
    ),
  },
  AWS: {
    title: "AWS TEAM",
    description: (
      <p>
        Focused on building and operating real-world cloud infrastructure using AWS.
        This team works hands-on with compute, storage, networking, and security.
        <br /><br />
        From deploying services to understanding how systems scale and fail,
        they go beyond theory into practical cloud engineering.
        <br /><br />
        If it runs on AWS and needs to work in production, they’re on it.
      </p>
    ),
    mobile_description: (
      <p>
        AWS infrastructure.<br />
        Real cloud builds.<br />
        From deploy to scale.
      </p>
    ),
  },
  Azure: {
    title: "AZURE TEAM",
    description: (
      <p>
        Dedicated to Microsoft Azure and its ecosystem of services and tools.
        This team explores cloud solutions used widely in enterprise environments.
        <br /><br />
        From identity and DevOps to application hosting and monitoring,
        they focus on building reliable and secure systems.
        <br /><br />
        Bridging cloud fundamentals with real-world Azure use cases.
      </p>
    ),
    mobile_description: (
      <p>
        Microsoft Azure.<br />
        Enterprise-focused cloud.<br />
        Secure & scalable systems.
      </p>
    ),
  },
  GCP: {
    title: "GCP TEAM",
    description: (
      <p>
        Specializing in Google Cloud Platform and its data-driven services.
        This team works with cloud-native tools built for scale and performance.
        <br /><br />
        From cloud compute to analytics and container-based workflows,
        they focus on modern architectures.
        <br /><br />
        Ideal for those interested in high-scale systems and cloud innovation.
      </p>
    ),
    mobile_description: (
      <p>
        Google Cloud Platform.<br />
        Modern cloud stacks.<br />
        Built to scale.
      </p>
    ),
  },
  Design: {
    title: "DESIGN TEAM",
    description: (
      <p>
        Responsible for how Horizon looks, feels, and communicates visually.
        The Design Team shapes the user experience across platforms.
        <br /><br />
        From UI and UX to branding and motion, they turn ideas into clear,
        usable, and engaging designs.
        <br /><br />
        Good design isn’t decoration — it’s problem-solving.
      </p>
    ),
    mobile_description: (
      <p>
        UI & UX design.<br />
        Visual identity.<br />
        Design with purpose.
      </p>
    ),
  },
  Events: {
    title: "EVENTS TEAM",
    description: (
      <p>
        The team that brings Horizon to life offline and online.
        They plan, organize, and execute workshops, meetups, and sessions.
        <br /><br />
        From logistics to speaker coordination, they handle the details
        so learning experiences actually run smoothly.
        <br /><br />
        If there’s an event, this team made it happen.
      </p>
    ),
    mobile_description: (
      <p>
        Workshops & meetups.<br />
        Community events.<br />
        Learning, live.
      </p>
    ),
  },
  Content: {
    title: "CONTENT TEAM",
    description: (
      <p>
        Focused on turning knowledge into clear, useful content.
        This team creates blogs, documentation, and learning resources.
        <br /><br />
        Their work supports workshops, projects, and self-paced learning
        within the community.
        <br /><br />
        If it helps someone understand faster, they wrote it.
      </p>
    ),
    mobile_description: (
      <p>
        Blogs & docs.<br />
        Learning resources.<br />
        Knowledge, simplified.
      </p>
    ),
  },
  "Social Media": {
    title: "SOCIAL MEDIA TEAM",
    description: (
      <p>
        Manages Horizon’s presence across social platforms.
        This team handles communication, engagement, and outreach.
        <br /><br />
        From announcements to community highlights,
        they keep Horizon active and visible.
        <br /><br />
        If you heard about Horizon online, this team did their job.
      </p>
    ),
    mobile_description: (
      <p>
        Online presence.<br />
        Community engagement.<br />
        Horizon, everywhere.
      </p>
    ),
  },
  Development: {
    title: "DEVELOPMENT TEAM",
    description: (
      <p>
        Builds and maintains Horizon’s digital platforms and tools.
        This team handles frontend, backend, and system architecture.
        <br /><br />
        From websites to internal tools, they turn ideas into working products.
        <br /><br />
        If it’s technical and needs to ship, they’re responsible.
      </p>
    ),
    mobile_description: (
      <p>
        Product engineering.<br />
        Platforms & tools.<br />
        Built to ship.
      </p>
    ),
  },
};
