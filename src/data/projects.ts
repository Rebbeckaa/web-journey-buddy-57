import projectFoodApp from "@/assets/project-food-app.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectUnderbara from "@/assets/project-underbara.jpg";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    subtitle: "Skolprojekt",
    description:
      "Matleveransapp för unga vuxna med fokus på enkel navigering, allergifiltrering och snabb beställningsprocess.",
    tags: ["UI/UX", "UX Research", "User Testing"],
    duration: "3 veckor",
    image: projectFoodApp,
    accentColor: "text-teal-600",
    accentBg: "bg-teal-500/10 text-teal-700",
    overview:
      "En mobilapplikation för matleverans från lokala restauranger, designad för unga vuxna (18–29 år). Fokus på enkel navigering, tydlig visuell hierarki och en snabb beställningsprocess med en snygg design.",
    challenge:
      "Befintliga matappar upplevs som röriga och saknar bra stöd för personer med matallergier. Användare tvingas själva kontakta restaurangen vid allergier, och felanmälan vid problem med beställningar är krånglig.",
    solution:
      "Vi införde tydliga ingredienslistor med markerade allergener, fritextrutor för anpassningar, samt en enkel felanmälningsfunktion kopplad till betygsättning. Designen följer Material Design-principer med fokus på kontrast och tillgänglighet.",
    process: [
      "Användarundersökning med 11 respondenter om matappsvanor",
      "User journey-kartläggning med Miro",
      "Wireframes i Figma för att testa struktur",
      "High-fidelity prototyp med klickbart flöde",
      "Feedback-session och iteration på färger och kontraster",
    ],
    role: "UX Designer",
    team: "Rebecka Rosqvist, Naomi Brorsson, Martin Larsson & Isabell Anderberg",
  },
  {
    id: "cool-fashion",
    title: "Cool Fashion",
    subtitle: "E-commerce Concept",
    description:
      'Modigt varumärkeskoncept för en svensk e-handelsplattform med fokus på att sticka ut — "Våga Vara Annorlunda".',
    tags: ["UI/UX", "Market Research", "Brand Design"],
    duration: "3 veckor",
    image: projectFashion,
    accentColor: "text-neutral-100",
    accentBg: "bg-neutral-800 text-neutral-100",
    overview:
      'Ett e-handelskoncept för ett svenskt modemärke med den djärva tagline "Våga Vara Annorlunda". Fokus på att skapa en unik varumärkesidentitet som sticker ut i en mättad marknad.',
    challenge:
      "Mode-e-handel ser ofta likadan ut. Utmaningen var att skapa ett koncept som kommunicerar mod och individualitet, samtidigt som det är användarvänligt och kommersiellt gångbart.",
    solution:
      "En mörk, editorial designlinje med bold typografi och stark visuell identitet. Konceptet balanserar varumärkets rebelliska ton med en intuitiv shoppingupplevelse.",
    process: [
      "Marknadsanalys av befintliga svenska modevarumärken",
      "Varumärkespositionering och tonalitet",
      "Moodboard och visuell identitet",
      "UI-design för e-handelsplattform",
    ],
    role: "UX/UI Designer & Brand Designer",
  },
  {
    id: "underbara-unge",
    title: "Underbara Unge",
    subtitle: "WCAG 2.1 Redesign",
    description:
      "UX/UI-redesign med fokus på tillgänglighet enligt WCAG 2.1 AA. Förbättrad registrering, navigation och produktfiltrering.",
    tags: ["UI/UX", "Accessibility", "Prototyping"],
    duration: "Akademiskt projekt",
    image: projectUnderbara,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500/10 text-emerald-700",
    overview:
      "En redesign av den digitala tjänsten Underbara Unge med fokus på att uppfylla WCAG 2.1 AA-krav samt EU:s Tillgänglighetsdirektiv (2019/882). Projektet kopplades även till Agenda 2030.",
    challenge:
      "Den befintliga tjänsten hade flera tillgänglighetsproblem: lösenordskrav visades bara som felmeddelanden, valda milstolpar saknade visuell indikation, och navigationen var förvirrande med en onödig landningssida.",
    solution:
      "Vi omdesignade registreringsflödet med tydliga lösenordskrav, lade till visuella indikatorer för valda milstolpar, ändrade startsidan till 'Mina böcker', och säkerställde WCAG AA-krav som 7:1 kontrastförhållande och 44x44px klickytor.",
    process: [
      "Analys av befintlig tjänst baserat på research och personas",
      "Identifiering av förbättringsområden och smärtpunkter",
      "High-fidelity prototyp i Figma (3–5 skärmar)",
      "WCAG 2.1 AA-checklista och tillgänglighetsgranskning",
      "Koppling till Agenda 2030 mål 4, 5, 9 och 10",
    ],
    role: "UX Designer",
  },
];
