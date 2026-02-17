import projectFoodApp from "@/assets/project-food-app.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectUnderbara from "@/assets/project-underbara.jpg";
import foodSurvey from "@/assets/food-survey.jpg";
import foodUserJourney from "@/assets/food-user-journey.jpg";
import foodWireframes from "@/assets/food-wireframes.jpg";
import fashionConcept from "@/assets/fashion-concept.jpg";
import fashionProto1 from "@/assets/fashion-proto-1.jpg";
import fashionProto2 from "@/assets/fashion-proto-2.jpg";
import fashionProto3 from "@/assets/fashion-proto-3.jpg";
import fashionProto4 from "@/assets/fashion-proto-4.jpg";
import fashionProto5 from "@/assets/fashion-proto-5.jpg";
import underbaraPersona from "@/assets/underbara-persona.jpg";
import underbaraJourney from "@/assets/underbara-journey.jpg";
import type { Project } from "@/types/project";

export interface ProjectSection {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  images?: { src: string; alt: string }[];
}

export interface ProjectFull extends Project {
  sections: ProjectSection[];
  focus?: string;
  prototypeLink?: string;
}

export const projects: ProjectFull[] = [
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    subtitle: "School Project",
    description:
      "A food delivery app for young adults focusing on easy navigation, allergy filtering, and a fast ordering process.",
    tags: ["UI/UX", "UX Research", "User Testing"],
    duration: "3 weeks",
    image: projectFoodApp,
    accentColor: "text-teal-600",
    accentBg: "bg-teal-500/10 text-teal-700",
    overview:
      "This was a 3-week school project focused on designing a food delivery app from the ground up. The project encompassed the complete UX design process, including user research to understand user needs and pain points, wireframing to explore layout and functionality, prototyping to create interactive mockups, and mapping user journeys to ensure a seamless experience from browsing to order completion.",
    challenge:
      "Our goal was to improve the user experience of a food delivery app by simplifying the ordering flow and making it easier for users to browse restaurants, customize meals, and track deliveries in real time.",
    solution:
      "We introduced clear ingredient lists with highlighted allergens, free-text fields for customizations, and a simple issue-reporting feature linked to ratings. The design follows Material Design principles with a focus on contrast and accessibility.",
    process: [
      "User survey with 11 respondents about food app habits",
      "User journey mapping with Miro",
      "Low-fidelity wireframes in Figma to test structure",
      "High-fidelity prototype with clickable flow",
      "Feedback session and iteration on colors and contrasts",
    ],
    role: "UX Designer",
    team: "Rebecka Rosqvist, Naomi Brorsson, Martin Larsson & Isabell Anderberg",
    sections: [
      {
        title: "User Testing",
        content: "To gather user insights, we distributed a short survey consisting of seven questions to people within our local network. We mainly targeted individuals who already used food delivery apps, in order to better understand their experiences and identify potential areas for improvement. In total, we collected 11 responses, primarily from people aged 18–29 living in urban areas.",
        image: foodSurvey,
        imageAlt: "Google survey chart showing user research results",
      },
      {
        title: "Design Process",
        content: "We began by creating a user journey map to better understand the users' needs and experiences. We mapped out the process a user goes through — from opening the app and selecting a restaurant, to placing an order and receiving the delivery confirmation. Based on our earlier user research, we were able to identify common pain points and potential improvements. This visualization helped us pinpoint key touchpoints, such as the homepage, category filters, and map view.",
        image: foodUserJourney,
        imageAlt: "User journey map created in Miro showing the complete ordering flow",
      },
      {
        title: "Wireframing",
        content: "Here we did a low-fidelity wireframe to prepare us for the prototype. This step allowed us to quickly iterate on layout and structure before moving into high-fidelity design.",
        image: foodWireframes,
        imageAlt: "Low-fidelity wireframes showing app layout and structure",
      },
    ],
  },
  {
    id: "cool-fashion",
    title: "Cool Fashion",
    subtitle: "E-commerce Concept",
    description:
      'A bold brand concept for a Swedish e-commerce platform focused on standing out — "Dare to Be Different".',
    tags: ["UI/UX", "Market Recommendations", "Brand Design"],
    duration: "3 weeks",
    image: projectFashion,
    accentColor: "text-neutral-100",
    accentBg: "bg-neutral-800 text-neutral-100",
    focus: "Visual direction, concept development, light research, rapid prototyping",
    prototypeLink: "https://www.figma.com/make/vyuB0lQkwcG8rizfyrI0CK/cool-fashion-1-protoyp?node-id=0-1&p=f&t=ngkVw8iFTIBbBIXf-0&fullscreen=1",
    overview:
      "Cool Fashion was a 3-week design project where we were tasked with creating a refreshed visual direction and e-commerce concept for a fictional fashion brand targeting young adults aged 15–25. The goal was to explore aesthetics, tone of voice, and user expectations rather than conducting deep research. The assignment encouraged fast decision-making, creative exploration, and building a strong visual concept within a short timeframe.",
    challenge:
      "Our challenge was to develop a bold, expressive and attitude-driven e-commerce identity that resonates with trend-aware young users. Cool Fashion's brand personality was defined as: Confident, Urban, Edgy, and Slightly provocative. Our task was to translate this personality into an interface that feels modern, energetic, and visually impactful.",
    solution:
      "A dark, editorial design direction with bold typography and a strong visual identity. The concept balances the brand's rebellious tone with an intuitive shopping experience. The design vision focused on creating a raw and expressive digital identity through high contrast color palette, large and bold typography, strong statement-driven layouts, and energetic streetwear-inspired visuals.",
    process: [
      "Quick trend scan of Zara, Weekday, and Urban Outfitters",
      "Identified dominant style trends: Urban Streetwear, Japanese Streetstyle, Grisch, Clean Girl Aesthetic",
      "Brand positioning and tone of voice development",
      "Moodboard and visual identity",
      "Low-fidelity and mid-fidelity screen design",
      "Final prototype with homepage, category navigation, product listing, and product detail pages",
    ],
    role: "UX/UI Designer & Brand Designer",
    sections: [
      {
        title: "Target Audience & Tone of Voice",
        content: "Audience: 15–25 year olds, fashion-conscious young adults, highly active on social media, who value authenticity, individuality, and visual identity. Tone of Voice: Urban Streetwear energy, high contrast, loud typography — confident, bold, unapologetic.",
      },
      {
        title: "Research (Lightweight & Fast)",
        content: "Since the project emphasized design exploration over heavy research, we conducted a quick trend scan to gather inspiration and understand current aesthetics in youth-oriented fashion brands. We looked at Zara, Weekday, and Urban Outfitters. We also identified four dominant style trends among young users today: Urban Streetwear, Japanese Streetstyle, Grisch, and Clean Girl Aesthetic. Based on the brand's tone, Urban Streetwear emerged as the strongest visual direction.",
      },
      {
        title: "Concept Development",
        content: "The design vision focused on creating a raw and expressive digital identity, built through: High contrast color palette, large and bold typography, strong statement-driven layouts, energetic streetwear-inspired visuals, and minimalistic but impactful components. We iterated through different layout structures before landing on a look that felt both digital-first and street-driven.",
        image: fashionConcept,
        imageAlt: "Concept development exploration with layout iterations",
      },
      {
        title: "Final Prototype",
        content: "The low-fidelity and mid-fidelity screens included: Homepage layout, category navigation, product listing page, product detail page, and brand identity exploration (typography, color palette, grid system). The goal was not pixel perfection but to communicate a clear direction and strong brand feeling.",
        images: [
          { src: fashionProto1, alt: "Cool Fashion prototype - Homepage" },
          { src: fashionProto2, alt: "Cool Fashion prototype - Category navigation" },
          { src: fashionProto3, alt: "Cool Fashion prototype - Product listing" },
          { src: fashionProto4, alt: "Cool Fashion prototype - Product detail" },
          { src: fashionProto5, alt: "Cool Fashion prototype - Brand identity" },
        ],
      },
      {
        title: "Key Learnings",
        content: "This project strengthened my ability to: Build strong visual concepts fast, make confident design decisions with limited research, understand how tone of voice translates into UI, present design rationale clearly and concisely, and collaborate and ideate in time-constrained scenarios.",
      },
    ],
  },
  {
    id: "underbara-unge",
    title: "Underbara Unge",
    subtitle: "WCAG 2.1 Redesign",
    description:
      "UX/UI redesign focused on accessibility according to WCAG 2.1 AA. Improved registration, navigation, and product filtering.",
    tags: ["UI/UX", "UX Research", "Interviews", "Secondary Research", "Product Design", "WCAG 2.1", "Accessibility", "Mobile App"],
    duration: "3 weeks | Nov – Dec 2026",
    image: projectUnderbara,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500/10 text-emerald-700",
    focus: "Accessibility, Contrast improvement, User flow optimisation",
    overview:
      "Underbara Unge is a mobile application concept designed to help parents document their child's development. This redesign project focused on improving usability, clarity, and accessibility according to WCAG 2.1 AA standards. The goal was to create a more intuitive user flow while ensuring inclusive design for a broader range of users.",
    challenge:
      "The original design presented issues with low contrast, unclear navigation, and insufficient accessibility considerations. This risked increasing cognitive load and reducing usability for a broader audience.",
    solution:
      "We redesigned the registration flow with clear password requirements, added visual indicators for selected milestones, changed the start page to 'My Books', and ensured WCAG AA compliance including 7:1 contrast ratio and 44x44px touch targets.",
    process: [
      "Analysis of the existing service based on research and personas",
      "Identification of improvement areas and pain points",
      "User flow mapping and persona development",
      "High-fidelity prototype in Figma (3–5 screens)",
      "WCAG 2.1 AA checklist and accessibility review",
    ],
    role: "UX Designer",
    sections: [
      {
        title: "Team & My Role",
        content: "This was a collaborative academic project developed in a team setting. I contributed throughout the design process, including user flows and high-fidelity prototyping in Figma. My primary responsibility was ensuring accessibility compliance according to WCAG 2.1 AA, including contrast adjustments, improved form structure, and clearer interactive elements.",
      },
      {
        title: "The Problem",
        content: "The original design presented issues with low contrast, unclear navigation, and insufficient accessibility considerations. This risked increasing cognitive load and reducing usability for a broader audience.",
      },
      {
        title: "Research & Insights",
        content: "We developed a persona and mapped the user journey to identify friction points and accessibility gaps in the current experience.",
        images: [
          { src: underbaraPersona, alt: "Persona developed for the Underbara Unge project" },
          { src: underbaraJourney, alt: "User journey map showing friction points" },
        ],
      },
    ],
  },
];
