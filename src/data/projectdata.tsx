import { projectImage } from "./images";

export type ProjectData = {
  id: string;
  title: string;
  src: string;
  ctaGithubLink?: string;
  badges?: string[];
  content: React.ReactNode | (() => React.ReactNode);
};

const [
  Cloud_Security,
  Containerized_Deployment,
  Create_and_Work,
  Host_a_Website,
  Multi_Cloud_Data_Transfer,
  Notification_Alert_System,
  Photo_Gallery_App,
  Setup_a_RAG_Chatbot,
  URL_Shortner,
  Visualize_AWS_RDS,
] = projectImage;

export const projectsData: ProjectData[] = [
  {
    id: "One",
    title: "Host a Website on AWS S3",
    src: Host_a_Website,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Host%20a%20Website%20on%20AWS%20S3",
    badges: ["AWS S3", "CloudFront", "Static Hosting"],
    content: (
      <p>
        Deploy a static website using Amazon S3 and learn how cloud hosting
        actually works under the hood.
        <br />
        Add CloudFront to enable caching, faster load times, and global delivery.
        <br />
        This project covers buckets, permissions, and CDN fundamentals.
        <br />
        Cloud basics, done right — no magic, no shortcuts.
      </p>
    ),
  },

  {
    id: "Two",
    title: "Visualize Data with AWS QuickSight",
    src: Visualize_AWS_RDS,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Visualize%20Data%20with%20AWS%20QuickSight",
    badges: ["AWS QuickSight", "S3", "Data Visualization"],
    content: (
      <p>
        Build interactive dashboards by connecting AWS QuickSight to datasets
        stored in Amazon S3.
        <br />
        Learn how raw data moves from storage to real-time insights.
        <br />
        Covers datasets, permissions, and basic analytics concepts.
        <br />
        Turning data into something you can actually understand.
      </p>
    ),
  },

  {
    id: "Three",
    title: "Cloud Security with AWS IAM",
    src: Cloud_Security,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Cloud%20Security%20with%20AWS%20IAM",
    badges: ["AWS IAM", "Security", "Access Control"],
    content: (
      <p>
        Implement least-privilege access using IAM users, roles, and policies.
        <br />
        Understand how AWS handles authentication and authorization internally.
        <br />
        Learn why bad IAM setups are the fastest way to break security.
        <br />
        If you touch AWS, this is non-negotiable.
      </p>
    ),
  },

  {
    id: "Four",
    title: "Create and Work with AWS EC2",
    src: Create_and_Work,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Create%20and%20Work%20with%20AWS%20EC2",
    badges: ["AWS EC2", "VPC", "SSH", "Security Groups"],
    content: (
      <p>
        Launch and configure EC2 instances inside a secure virtual network.
        <br />
        Connect via SSH, manage security groups, and deploy a sample app.
        <br />
        Learn how virtual servers behave in real cloud environments.
        <br />
        This is where cloud stops being abstract.
      </p>
    ),
  },

  {
    id: "Five",
    title: "Containerized Deployment with AWS Elastic Beanstalk",
    src: Containerized_Deployment,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Containerized%20Deployment%20with%20AWS%20Elastic%20Beanstalk",
    badges: ["Beanstalk", "Docker", "EC2", "AWS IAM"],
    content: (
      <p>
        Package an application using Docker and deploy it with Elastic Beanstalk.
        <br />
        Learn how AWS handles provisioning, scaling, and health checks.
        <br />
        Covers container basics, environments, and IAM integration.
        <br />
        Deploy once. Scale without panic.
      </p>
    ),
  },

  {
    id: "Six",
    title: "Setup a RAG Chatbot in AWS Bedrock",
    src: Setup_a_RAG_Chatbot,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Setup%20a%20RAG%20Chatbot%20in%20AWS%20Bedrock",
    badges: ["AWS Bedrock", "RAG", "OpenSearch", "S3"],
    content: (
      <p>
        Build a Retrieval-Augmented Generation chatbot using AWS Bedrock.
        <br />
        Store documents in S3 and fetch relevant context with OpenSearch.
        <br />
        Learn how modern AI systems answer questions from your own data.
        <br />
        LLMs, but actually useful.
      </p>
    ),
  },

  {
    id: "Seven",
    title: "Notification Alert System with AWS SNS",
    src: Notification_Alert_System,
    ctaGithubLink:
      "https://github.com/sAnandha/AWS-Project-Documentation/blob/main/AWS%20Project%20Documentation/S3%20File%20Upload%20Notification%20System.pdf",
    badges: ["AWS SNS", "Lambda", "Notifications"],
    content: (
      <p>
        Create an event-driven alert system using AWS SNS and Lambda.
        <br />
        Trigger notifications via email or SMS when key events occur.
        <br />
        Learn how messaging services fit into production systems.
        <br />
        Silence during failures is not an option.
      </p>
    ),
  },

  {
    id: "Eight",
    title: "URL Shortener using AWS Lambda",
    src: URL_Shortner,
    ctaGithubLink:
      "https://github.com/sAnandha/AWS-Project-Documentation/tree/main/AWS%20Project%20Documentation/Set%20Up%20Url%20Shortner%20Using%20AWS%20Services",
    badges: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless"],
    content: (
      <p>
        Build a fully serverless URL shortener using AWS Lambda and API Gateway.
        <br />
        Store URL mappings in DynamoDB and handle redirects at scale.
        <br />
        Learn how stateless services work in real-world apps.
        <br />
        Small service. Big concepts.
      </p>
    ),
  },

  {
    id: "Nine",
    title: "Multi-Cloud Data Transfer with AWS and GCP",
    src: Multi_Cloud_Data_Transfer,
    ctaGithubLink:
      "https://github.com/iamamrizejk/AWS/tree/main/Multi%20Cloud%20Data%20Transfer%20with%20AWS%20and%20GCP",
    badges: ["AWS S3", "GCP Cloud Storage", "IAM", "Multi-Cloud"],
    content: (
      <p>
        Securely transfer data between AWS S3 and Google Cloud Storage.
        <br />
        Configure IAM permissions across cloud providers.
        <br />
        Understand how multi-cloud setups work in practice.
        <br />
        One workflow. Two clouds.
      </p>
    ),
  },

  {
    id: "Ten",
    title: "Photo Gallery App using AWS S3",
    src: Photo_Gallery_App,
    ctaGithubLink:
      "https://github.com/sAnandha/AWS-Project-Documentation/tree/main/AWS%20Project%20Documentation/PHOTO%20%26%20GALLERY%20WEB%20APP",
    badges: ["AWS S3", "EC2", "DynamoDB", "Web App"],
    content: (
      <p>
        Build a web-based photo gallery backed by AWS S3 storage.
        <br />
        Allow users to upload, view, and download images securely.
        <br />
        Store metadata in DynamoDB for fast access.
        <br />
        Storage, databases, and web — all in one project.
      </p>
    ),
  },
];
