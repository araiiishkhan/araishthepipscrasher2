export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    title: string;
    initials: string;
    location: string;
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
      location: "London, UK"
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
      location: "New York, USA"
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
      location: "Tokyo, Japan"
    },
    rating: 5,
  },
  {
    id: 4,
    text: "I've tried numerous GBP/JPY EAs before, but Araish truly stands out. The algorithm catches moves other systems miss completely. My account has grown 32% in just one month.",
    author: {
      name: "Emma T.",
      title: "Full-time Trader",
      initials: "ET",
      location: "Sydney, Australia"
    },
    rating: 5,
  },
  {
    id: 5,
    text: "The back-testing results actually match real-world performance, which is rare. Finally found a system that actually delivers on its promises for GBP/JPY.",
    author: {
      name: "Raj P.",
      title: "Algorithm Developer",
      initials: "RP",
      location: "Mumbai, India"
    },
    rating: 5,
  },
  {
    id: 6,
    text: "This system works incredibly well in both trending and ranging markets. The advanced filtering techniques prevent false signals that plagued other systems I've used.",
    author: {
      name: "Alexander K.",
      title: "Experienced Investor",
      initials: "AK",
      location: "Berlin, Germany"
    },
    rating: 4,
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
    name: "Email Support",
    href: "mailto:araiiishkhan@gmail.com",
  },
  {
    id: 2,
    name: "WhatsApp Support",
    href: "https://wa.me/923005952613",
  },
  {
    id: 3,
    name: "Call Us",
    href: "tel:+923005952613",
  },
  {
    id: 4,
    name: "FAQ",
    href: "#faq",
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
