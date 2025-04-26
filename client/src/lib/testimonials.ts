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
  {
    id: 7,
    text: "Araish has transformed my approach to the GBP/JPY pair. The precision of the entry and exit points has eliminated much of the guesswork in my trading.",
    author: {
      name: "Michael C.",
      title: "Forex Strategist",
      initials: "MC",
      location: "Toronto, Canada"
    },
    rating: 5,
  },
  {
    id: 8,
    text: "I was skeptical at first, but after seeing consistent results for two months straight, I'm a believer. This system is particularly effective during London session volatility.",
    author: {
      name: "Olivia M.",
      title: "Part-time Trader",
      initials: "OM",
      location: "Edinburgh, UK"
    },
    rating: 5,
  },
  {
    id: 9,
    text: "The automated alert system has saved me countless hours. I no longer have to stare at charts all day - Araish does the heavy lifting for me.",
    author: {
      name: "David L.",
      title: "Corporate Professional",
      initials: "DL",
      location: "Singapore"
    },
    rating: 5,
  },
  {
    id: 10,
    text: "I've been trading for over a decade, and Araish's algorithm for GBP/JPY is one of the most sophisticated I've encountered. The win rate is remarkable.",
    author: {
      name: "William H.",
      title: "Senior Market Analyst",
      initials: "WH",
      location: "Geneva, Switzerland"
    },
    rating: 5,
  },
  {
    id: 11,
    text: "The customer support is outstanding. When I had questions about optimizing settings for my trading style, the team was incredibly responsive and helpful.",
    author: {
      name: "Sophia R.",
      title: "Portfolio Manager",
      initials: "SR",
      location: "Amsterdam, Netherlands"
    },
    rating: 5,
  },
  {
    id: 12,
    text: "Araish has completely changed my results with GBP/JPY. I've seen a 47% account increase in just 11 weeks using the recommended risk settings.",
    author: {
      name: "Noah K.",
      title: "Independent Trader",
      initials: "NK",
      location: "Auckland, New Zealand"
    },
    rating: 5,
  },
  {
    id: 13,
    text: "What impressed me most is the system's ability to adapt to different market conditions. It catches big moves in trending markets but also excels in consolidation phases.",
    author: {
      name: "Isabella J.",
      title: "Technical Analyst",
      initials: "IJ",
      location: "Barcelona, Spain"
    },
    rating: 5,
  },
  {
    id: 14,
    text: "I was about to give up on forex trading until I discovered Araish. This system has not only recovered my previous losses but has consistently grown my account.",
    author: {
      name: "Ethan B.",
      title: "Former Skeptic",
      initials: "EB",
      location: "Melbourne, Australia"
    },
    rating: 5,
  },
  {
    id: 15,
    text: "The detailed setup guide made implementation a breeze. I was up and running within an hour and saw my first profitable trade the same day.",
    author: {
      name: "Mia P.",
      title: "Tech-Savvy Trader",
      initials: "MP",
      location: "Stockholm, Sweden"
    },
    rating: 5,
  },
  {
    id: 16,
    text: "What sets Araish apart is its focus on the GBP/JPY pair. This specialization has resulted in an algorithm that truly understands this pair's unique movements.",
    author: {
      name: "Lucas G.",
      title: "Currency Specialist",
      initials: "LG",
      location: "Paris, France"
    },
    rating: 5,
  },
  {
    id: 17,
    text: "The risk-reward ratio of the trades is exceptional. Most of my winning trades have at least a 1:3 ratio, which has dramatically improved my overall performance.",
    author: {
      name: "Ava D.",
      title: "Risk Management Expert",
      initials: "AD",
      location: "Dublin, Ireland"
    },
    rating: 5,
  },
  {
    id: 18,
    text: "I appreciate how transparent the creators are about the system's limitations. It's refreshing to use a product that doesn't claim to be perfect but still delivers exceptional results.",
    author: {
      name: "Henry S.",
      title: "Fintech Consultant",
      initials: "HS",
      location: "Cape Town, South Africa"
    },
    rating: 4,
  },
  {
    id: 19,
    text: "The community aspect is an unexpected bonus. Being able to discuss strategies with other Araish users has enhanced my understanding and results.",
    author: {
      name: "Charlotte W.",
      title: "Community Member",
      initials: "CW",
      location: "Vancouver, Canada"
    },
    rating: 5,
  },
  {
    id: 20,
    text: "I've been able to reduce my screen time by 70% since implementing Araish. The peace of mind that comes with having a reliable system cannot be overstated.",
    author: {
      name: "Benjamin F.",
      title: "Lifestyle Trader",
      initials: "BF",
      location: "Miami, USA"
    },
    rating: 5,
  },
  {
    id: 21,
    text: "As a data scientist, I'm impressed by the algorithmic approach. The statistical edge is evident, and the results speak for themselves. +18% in my first month.",
    author: {
      name: "Amelia N.",
      title: "Data Scientist",
      initials: "AN",
      location: "Seattle, USA"
    },
    rating: 5,
  },
  {
    id: 22,
    text: "The way Araish handles news events is exceptional. It effectively filters out market noise during major announcements that would typically cause false signals.",
    author: {
      name: "Theodore M.",
      title: "News Trader",
      initials: "TM",
      location: "Brussels, Belgium"
    },
    rating: 4,
  },
  {
    id: 23,
    text: "Araish has given me confidence in my trading that I never had before. Knowing the system has been thoroughly tested across multiple market cycles provides peace of mind.",
    author: {
      name: "Violet K.",
      title: "Psychology Student",
      initials: "VK",
      location: "Seoul, South Korea"
    },
    rating: 5,
  },
  {
    id: 24,
    text: "The regular updates keep the system performing at its best. The development team is clearly committed to ongoing improvement and maintenance.",
    author: {
      name: "Jack Q.",
      title: "Software Engineer",
      initials: "JQ",
      location: "San Francisco, USA"
    },
    rating: 5,
  },
  {
    id: 25,
    text: "I appreciate how the system includes guidance on position sizing and risk management. This holistic approach has been crucial for my consistent growth.",
    author: {
      name: "Scarlett Z.",
      title: "Finance Professor",
      initials: "SZ",
      location: "Vienna, Austria"
    },
    rating: 5,
  },
  {
    id: 26,
    text: "Araish's ability to identify key support and resistance levels for GBP/JPY is remarkable. The precision has allowed me to place tighter stop losses with confidence.",
    author: {
      name: "Leo V.",
      title: "Technical Trader",
      initials: "LV",
      location: "Rome, Italy"
    },
    rating: 5,
  },
  {
    id: 27,
    text: "The system has paid for itself more than tenfold in just three months. It's rare to find such a high ROI in the trading education space.",
    author: {
      name: "Penelope Y.",
      title: "Investment Advisor",
      initials: "PY",
      location: "Hong Kong"
    },
    rating: 5,
  },
  {
    id: 28,
    text: "As someone who trades multiple currency pairs, I've found Araish's specialized focus on GBP/JPY to be a perfect complement to my diversified strategy.",
    author: {
      name: "Gabriel H.",
      title: "Multi-Market Trader",
      initials: "GH",
      location: "Chicago, USA"
    },
    rating: 4,
  },
  {
    id: 29,
    text: "The education resources included with Araish have enhanced my overall trading knowledge. The creators clearly want users to understand why the system works.",
    author: {
      name: "Josephine A.",
      title: "Continuous Learner",
      initials: "JA",
      location: "Copenhagen, Denmark"
    },
    rating: 5,
  },
  {
    id: 30,
    text: "I've been using Araish alongside my own analysis, and the combined approach has been incredibly powerful. My win rate has increased from 62% to 87%.",
    author: {
      name: "Samuel R.",
      title: "Hybrid Trader",
      initials: "SR",
      location: "Tel Aviv, Israel"
    },
    rating: 5,
  },
  {
    id: 31,
    text: "The detailed trade logs make performance tracking and tax reporting so much easier. It's clear the developers thought about the whole trading experience.",
    author: {
      name: "Claire T.",
      title: "Accountant",
      initials: "CT",
      location: "Montreal, Canada"
    },
    rating: 5,
  },
  {
    id: 32,
    text: "I was concerned about overoptimization, but after six months of consistent results, it's clear this system has true predictive value for GBP/JPY movements.",
    author: {
      name: "Nathan O.",
      title: "Quantitative Analyst",
      initials: "NO",
      location: "Boston, USA"
    },
    rating: 5,
  },
  {
    id: 33,
    text: "The overnight trade capability has been particularly valuable for me as I have a full-time job. I can set up the system in the evening and wake up to profits.",
    author: {
      name: "Isabel U.",
      title: "Working Professional",
      initials: "IU",
      location: "Zurich, Switzerland"
    },
    rating: 5,
  },
  {
    id: 34,
    text: "What I love about Araish is how it minimizes emotional trading decisions. The objective entry and exit criteria have eliminated my tendency to cut winners short.",
    author: {
      name: "Xavier P.",
      title: "Behavioral Finance Expert",
      initials: "XP",
      location: "Auckland, New Zealand"
    },
    rating: 5,
  },
  {
    id: 35,
    text: "As a fund manager, I've integrated Araish into our institutional trading strategy with excellent results. It works seamlessly at larger capital scales.",
    author: {
      name: "Eleanor I.",
      title: "Fund Manager",
      initials: "EI",
      location: "Dubai, UAE"
    },
    rating: 5,
  },
  {
    id: 36,
    text: "The mobile alerts feature allows me to trade on the go. I never miss an opportunity even when I'm away from my desk, which has been game-changing.",
    author: {
      name: "Felix N.",
      title: "Digital Nomad",
      initials: "FN",
      location: "Bali, Indonesia"
    },
    rating: 4,
  },
  {
    id: 37,
    text: "I've tested this against multiple other GBP/JPY systems, and Araish consistently outperforms them all. The edge in identifying reversal points is significant.",
    author: {
      name: "Lily E.",
      title: "System Tester",
      initials: "LE",
      location: "Oslo, Norway"
    },
    rating: 5,
  },
  {
    id: 38,
    text: "Having used Araish through both high and low volatility periods, I'm impressed by its adaptability. It adjusts parameter sensitivity based on market conditions.",
    author: {
      name: "Oscar W.",
      title: "Volatility Trader",
      initials: "OW",
      location: "Helsinki, Finland"
    },
    rating: 5,
  },
  {
    id: 39,
    text: "The correlation with major economic indicators is impressive. Araish seems to anticipate GBP/JPY moves even before key data releases, which is remarkable.",
    author: {
      name: "Rebecca Q.",
      title: "Macro Analyst",
      initials: "RQ",
      location: "Washington D.C., USA"
    },
    rating: 5,
  },
  {
    id: 40,
    text: "After years of searching for a reliable system, I finally found Araish. What stands out is the consistency - no massive drawdowns or account-blowing losses.",
    author: {
      name: "Marcus B.",
      title: "Long-term Trader",
      initials: "MB",
      location: "Berlin, Germany"
    },
    rating: 5,
  },
  {
    id: 41,
    text: "The installation process couldn't be simpler. Even with minimal technical knowledge, I had everything up and running perfectly within minutes.",
    author: {
      name: "Hannah J.",
      title: "Non-Technical User",
      initials: "HJ",
      location: "Prague, Czech Republic"
    },
    rating: 5,
  },
  {
    id: 42,
    text: "I've recommended Araish to my entire trading group, and everyone has reported positive results. It's rare to find a system with such universal success.",
    author: {
      name: "Vincent L.",
      title: "Trading Community Leader",
      initials: "VL",
      location: "Athens, Greece"
    },
    rating: 5,
  },
  {
    id: 43,
    text: "The way Araish handles the overnight GBP/JPY volatility is impressive. It captures moves during the Asian session that most systems miss entirely.",
    author: {
      name: "Diana M.",
      title: "Asian Session Trader",
      initials: "DM",
      location: "Shanghai, China"
    },
    rating: 5,
  },
  {
    id: 44,
    text: "The system's ability to detect false breakouts has saved me from countless bad trades. It waits for proper confirmation before generating signals.",
    author: {
      name: "Kevin R.",
      title: "Breakout Trader",
      initials: "KR",
      location: "Johannesburg, South Africa"
    },
    rating: 5,
  },
  {
    id: 45,
    text: "I love how Araish combines both price action and indicator-based analysis. This dual approach creates a more robust system that excels in all market conditions.",
    author: {
      name: "Audrey T.",
      title: "Technical Analyst",
      initials: "AT",
      location: "Manila, Philippines"
    },
    rating: 5,
  },
  {
    id: 46,
    text: "After a year of using Araish, my trading journal shows a remarkable improvement in all my key metrics - win rate, average win size, and drawdown reduction.",
    author: {
      name: "Paul V.",
      title: "Systematic Trader",
      initials: "PV",
      location: "Warsaw, Poland"
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
