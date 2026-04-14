export const siteConfig = {
  name: "Motor City Law Firm",
  domain: "motorcitylawfirm.com",
  phoneDisplay: "(313) 888-9900",
  phoneHref: "tel:+13138889900",
  consultationHref: "/contact",
  email: "intake@motorcitylawfirm.com",
  city: "Detroit",
  state: "Michigan",
  address: {
    street: "150 W Jefferson Ave, Suite 400",
    city: "Detroit",
    state: "MI",
    zip: "48226",
  },
  serviceArea: ["Detroit", "Wayne County", "Oakland County", "Macomb County", "Washtenaw County"],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/case-results" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges = [
  { label: "1000+ Cases Defended", description: "Experience built in high-stakes Michigan cases." },
  { label: "Available 24/7", description: "Immediate response when the pressure is highest." },
  { label: "Proven Results", description: "Focused on reduced charges, dismissals, and wins at trial." },
];

export const services = [
  {
    title: "DUI Defense",
    href: "/dui-defense",
    summary: "Protect your license and avoid serious penalties with aggressive DUI defense.",
    bullets: ["First-offense OWI", "High BAC", "License issues"],
  },
  {
    title: "Drug Crimes",
    href: "/drug-crimes",
    summary: "From possession to trafficking - we fight to reduce or dismiss charges.",
    bullets: ["Possession", "Distribution", "Prescription allegations"],
  },
  {
    title: "Assault & Violent Crimes",
    href: "/assault-violent-crimes",
    summary: "Serious accusations require a powerful legal defense.",
    bullets: ["Domestic charges", "Felony assault", "Weapons allegations"],
  },
  {
    title: "Theft Crimes",
    href: "/theft-property-crimes",
    summary: "Don't let one mistake impact your future - we defend your rights.",
    bullets: ["Retail theft", "Larceny", "Burglary"],
  },
];

export const results = [
  {
    charge: "DUI Case",
    outcome: "Charges Reduced",
  },
  {
    charge: "Drug Possession",
    outcome: "Case Dismissed",
  },
  {
    charge: "Assault Case",
    outcome: "Not Guilty",
  },
];

export const testimonials = [
  {
    quote:
      "Motor City Law Firm helped me reduce my DUI charges. I thought my life was over - they gave me a second chance.",
    name: "Client",
    detail: "Detroit",
  },
  {
    quote:
      "They answered my call immediately and guided me through everything. Highly professional.",
    name: "Client",
    detail: "Michigan",
  },
];

export const faqs = {
  home: {
    items: [
      {
        question: "What should I do after being arrested?",
        answer: "Stay silent and contact a lawyer immediately.",
      },
      {
        question: "Do you offer free consultation?",
        answer: "Yes, 100% free and confidential.",
      },
      {
        question: "Can charges be dismissed?",
        answer: "In many cases, yes - depending on evidence and strategy.",
      },
    ],
  },
  dui: {
    items: [
      {
        question: "What should I do after an OWI arrest?",
        answer:
          "Do not guess. Write down the stop details, save court dates, and get defense counsel involved before the state’s deadlines start closing in.",
      },
      {
        question: "Can a breath or blood test be challenged?",
        answer:
          "Often, yes. Testing procedures, timing, calibration, and chain of custody can all matter.",
      },
      {
        question: "Will you help with license consequences too?",
        answer:
          "Yes. In DUI cases, the legal charge and the driving consequences need to be handled together.",
      },
    ],
  },
  drug: {
    items: [
      {
        question: "Are search and seizure issues important in drug cases?",
        answer:
          "Very often. Many drug cases turn on whether police had a lawful basis to search, stop, or seize evidence.",
      },
      {
        question: "Do you handle felony and misdemeanor drug charges?",
        answer:
          "Yes. The strategy changes with exposure, but the need for early action is the same.",
      },
    ],
  },
  assault: {
    items: [
      {
        question: "Can self-defense be part of an assault case?",
        answer:
          "Yes. Witness statements, medical records, video, and the sequence of events can change the story quickly.",
      },
      {
        question: "What if there is a no-contact order already in place?",
        answer:
          "That needs immediate attention. The earlier the defense gets control of the file, the easier it is to protect your position.",
      },
    ],
  },
  theft: {
    items: [
      {
        question: "Can theft charges affect my job or professional license?",
        answer:
          "Yes. Theft allegations can follow you beyond the courtroom, so the defense plan should account for collateral damage.",
      },
      {
        question: "Do you handle retail fraud and embezzlement cases?",
        answer:
          "Yes. Those cases often depend on records, intent, and how quickly the response is managed.",
      },
    ],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: `https://${siteConfig.domain}`,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: siteConfig.serviceArea,
  priceRange: "$$",
};

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.name,
  url: `https://${siteConfig.domain}`,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  areaServed: siteConfig.serviceArea,
  serviceType: [
    "Criminal defense lawyer Michigan",
    "DUI lawyer Michigan",
    "Criminal lawyer Detroit",
  ],
};

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}