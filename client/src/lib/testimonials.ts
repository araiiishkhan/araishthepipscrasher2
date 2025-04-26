export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    title: string;
    initials: string;
  };
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I've been trading forex for 7 years, and Araish is by far the most profitable GBP/JPY system I've used. The entry points are incredibly precise.",
    author: {
      name: "James P.",
      title: "Professional Trader",
      initials: "JP",
    },
    rating: 5,
  },
  {
    id: 2,
    text: "Even as a beginner, I was able to follow the system and start generating profits within my first week. The support team is extremely helpful.",
    author: {
      name: "Sarah K.",
      title: "New Trader",
      initials: "SK",
    },
    rating: 5,
  },
  {
    id: 3,
    text: "The risk management alone is worth the investment. My account has grown 230% in 3 months with controlled drawdowns. Absolutely recommended.",
    author: {
      name: "Robert J.",
      title: "Institutional Trader",
      initials: "RJ",
    },
    rating: 5,
  },
];

export const performanceMetrics = [
  {
    id: 1,
    label: "GBP/JPY",
    value: "+213 pips",
    percentage: 85,
  },
  {
    id: 2,
    label: "Balance Growth",
    value: "$4,911.04",
    percentage: 90,
  },
  {
    id: 3,
    label: "Trading Weeks",
    value: "26 weeks",
    percentage: 75,
  },
  {
    id: 4,
    label: "Weekly Consistency",
    value: "97.8%",
    percentage: 97,
  },
];

export const quickLinks = [
  {
    id: 1,
    name: "Features",
    href: "#features",
  },
  {
    id: 2,
    name: "Dashboard",
    href: "#dashboard",
  },
  {
    id: 3,
    name: "Performance",
    href: "#performance",
  },
  {
    id: 4,
    name: "Buy Now",
    href: "#buy-now",
  },
];

export const supportLinks = [
  {
    id: 1,
    name: "Help Center",
    href: "#",
  },
  {
    id: 2,
    name: "Documentation",
    href: "#",
  },
  {
    id: 3,
    name: "Contact Support",
    href: "#",
  },
  {
    id: 4,
    name: "Community",
    href: "#",
  },
];

export const legalLinks = [
  {
    id: 1,
    name: "Terms of Service",
    href: "#",
  },
  {
    id: 2,
    name: "Privacy Policy",
    href: "#",
  },
  {
    id: 3,
    name: "Refund Policy",
    href: "#",
  },
  {
    id: 4,
    name: "Risk Disclaimer",
    href: "#",
  },
];

export const currentYear = new Date().getFullYear();
