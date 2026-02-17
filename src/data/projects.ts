import projectFoodApp from "@/assets/project-food-app.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectUnderbara from "@/assets/project-underbara.jpg";
import type { Project } from "@/types/project";

export const projects: Project[] = [
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
      "A mobile application for food delivery from local restaurants, designed for young adults (18–29). Focus on easy navigation, clear visual hierarchy, and a fast ordering process with a sleek design.",
    challenge:
      "Existing food apps feel cluttered and lack proper support for people with food allergies. Users are forced to contact restaurants themselves about allergies, and reporting issues with orders is cumbersome.",
    solution:
      "We introduced clear ingredient lists with highlighted allergens, free-text fields for customizations, and a simple issue-reporting feature linked to ratings. The design follows Material Design principles with a focus on contrast and accessibility.",
    process: [
      "User survey with 11 respondents about food app habits",
      "User journey mapping with Miro",
      "Wireframes in Figma to test structure",
      "High-fidelity prototype with clickable flow",
      "Feedback session and iteration on colors and contrasts",
    ],
    role: "UX Designer",
    team: "Rebecka Rosqvist, Naomi Brorsson, Martin Larsson & Isabell Anderberg",
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
    overview:
      'An e-commerce concept for a Swedish fashion brand with the bold tagline "Dare to Be Different". Focused on creating a unique brand identity that stands out in a saturated market.',
    challenge:
      "Fashion e-commerce often looks the same. The challenge was to create a concept that communicates boldness and individuality while remaining user-friendly and commercially viable.",
    solution:
      "A dark, editorial design direction with bold typography and a strong visual identity. The concept balances the brand's rebellious tone with an intuitive shopping experience.",
    process: [
      "Market analysis of existing Swedish fashion brands",
      "Brand positioning and tone of voice",
      "Moodboard and visual identity",
      "UI design for e-commerce platform",
    ],
    role: "UX/UI Designer & Brand Designer",
  },
  {
    id: "underbara-unge",
    title: "Underbara Unge",
    subtitle: "WCAG 2.1 Redesign",
    description:
      "UX/UI redesign focused on accessibility according to WCAG 2.1 AA. Improved registration, navigation, and product filtering.",
    tags: ["UI/UX", "UX Research", "Accessibility", "WCAG 2.1", "Product Design"],
    duration: "3 weeks",
    image: projectUnderbara,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500/10 text-emerald-700",
    overview:
      "A redesign of the digital service Underbara Unge focused on meeting WCAG 2.1 AA requirements and the EU Accessibility Directive (2019/882). The project was also linked to Agenda 2030.",
    challenge:
      "The existing service had several accessibility issues: password requirements were only shown as error messages, selected milestones lacked visual indication, and navigation was confusing with an unnecessary landing page.",
    solution:
      "We redesigned the registration flow with clear password requirements, added visual indicators for selected milestones, changed the start page to 'My Books', and ensured WCAG AA compliance including 7:1 contrast ratio and 44x44px touch targets.",
    process: [
      "Analysis of the existing service based on research and personas",
      "Identification of improvement areas and pain points",
      "High-fidelity prototype in Figma (3–5 screens)",
      "WCAG 2.1 AA checklist and accessibility review",
      "Connection to Agenda 2030 goals 4, 5, 9, and 10",
    ],
    role: "UX Designer",
  },
];
