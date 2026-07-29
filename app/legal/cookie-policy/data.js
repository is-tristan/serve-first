export const cookiePolicySections = [
  {
    title: "What are cookies?",
    paragraphs: [
      "Cookies are small text files placed on your device when you visit a website. They are used to make websites work more efficiently, provide functionality, analyse traffic, and personalise content.",
    ],
  },
  {
    title: "How we use cookies",
    paragraphs: ["We use cookies to:"],
    items: [
      "Ensure the Website operates correctly (essential cookies)",
      "Analyse and improve performance (analytics cookies)",
      "Remember your preferences (functional cookies)",
      "Enable third-party services (e.g. embedded video or support tools)",
      "Deliver personalised advertising and marketing messages (where consent is given)",
      "Track user behaviour and session recordings to improve the user experience (Microsoft Clarity)",
      "Measure the effectiveness of our Google Ads campaigns and attribute conversions",
      "Manage and deploy third-party scripts via Google Tag Manager",
      "Monitor website indexing and search performance via Google Search Console",
      "Track and manage leads and marketing contacts via HubSpot",
    ],
  },
  {
    title: "Types of cookies we use",
    cookieGroups: [
      {
        title: "Strictly Necessary",
        cookies: [
          {
            name: "__cfduid",
            provider: "Cloudflare / Vercel",
            type: "Strictly Necessary",
            purpose:
              "Used to detect malicious visitors and reduce the chance of blocking legitimate users.",
            duration: "1 month",
          },
          {
            name: "_vercel_jwt",
            provider: "Vercel",
            type: "Strictly Necessary",
            purpose:
              "Used for authentication on password-protected Vercel deployments.",
            duration: "Session",
          },
        ],
      },
      {
        title: "Google Tag Manager",
        cookies: [
          {
            name: "_ga",
            provider: "Google (via GTM)",
            type: "Performance / Analytics",
            purpose:
              "Registers a unique ID used to generate statistical data on how the visitor uses the website.",
            duration: "2 years",
          },
          {
            name: "_gid",
            provider: "Google (via GTM)",
            type: "Performance / Analytics",
            purpose:
              "Registers a unique ID used to generate statistical data on how the visitor uses the website.",
            duration: "24 hours",
          },
          {
            name: "_gat",
            provider: "Google (via GTM)",
            type: "Performance / Analytics",
            purpose: "Used to throttle request rate.",
            duration: "1 minute",
          },
        ],
      },
      {
        title: "Google Search Console",
        cookies: [
          {
            name: "NID",
            provider: "Google Search Console",
            type: "Functionality",
            purpose:
              "Registers a unique ID to remember user preferences and information for Google services.",
            duration: "6 months",
          },
          {
            name: "1P_JAR",
            provider: "Google Search Console",
            type: "Performance / Analytics",
            purpose:
              "Used by Google to gather website statistics and track conversion rates.",
            duration: "1 month",
          },
        ],
      },
      {
        title: "Google Ads",
        cookies: [
          {
            name: "_gcl_au",
            provider: "Google Ads",
            type: "Marketing / Third-Party",
            purpose: "Used by Google Ads to store and track conversions.",
            duration: "90 days",
          },
          {
            name: "IDE",
            provider: "Google Ads (DoubleClick)",
            type: "Marketing / Third-Party",
            purpose:
              "Used by Google DoubleClick to register and report actions taken after viewing or clicking one of the advertiser's ads.",
            duration: "13 months",
          },
        ],
      },
      {
        title: "Microsoft Clarity",
        cookies: [
          {
            name: "_clck",
            provider: "Microsoft Clarity",
            type: "Performance / Analytics",
            purpose:
              "Persists the Clarity User ID and preferences, unique to that site, on the browser.",
            duration: "1 year",
          },
          {
            name: "_clsk",
            provider: "Microsoft Clarity",
            type: "Performance / Analytics",
            purpose:
              "Connects multiple page views by a user into a single Clarity session recording.",
            duration: "1 day",
          },
          {
            name: "CLID",
            provider: "Microsoft Clarity",
            type: "Performance / Analytics",
            purpose:
              "Identifies the first time Clarity saw this user on any site using Clarity.",
            duration: "1 year",
          },
        ],
      },
      {
        title: "HubSpot",
        cookies: [
          {
            name: "hubspotutk",
            provider: "HubSpot",
            type: "Marketing / Third-Party",
            purpose:
              "Keeps track of a visitor's identity. Passed to HubSpot on form submission and used for de-duplication of contacts.",
            duration: "13 months",
          },
          {
            name: "__hstc",
            provider: "HubSpot",
            type: "Marketing / Third-Party",
            purpose:
              "Main cookie for tracking visitors. Contains the domain, initial timestamp, last timestamp, current timestamp, and session number.",
            duration: "13 months",
          },
          {
            name: "__hssc",
            provider: "HubSpot",
            type: "Marketing / Third-Party",
            purpose:
              "Keeps track of sessions. Used to determine if the session number and timestamps in the __hstc cookie should be incremented.",
            duration: "30 minutes",
          },
          {
            name: "__hssrc",
            provider: "HubSpot",
            type: "Strictly Necessary",
            purpose:
              "Whenever HubSpot changes the session cookie, this is set to determine if the visitor has restarted their browser.",
            duration: "Session",
          },
        ],
      },
    ],
  },
  {
    title: "Consent and control",
    paragraphs: [
      "We only set non-essential cookies (like analytics or functionality cookies) with your consent.",
      "You can:",
    ],
    items: [
      "Accept or reject cookies when you first visit the site.",
      "Control cookies via your browser settings.",
    ],
    trailingParagraphs: [
      "Blocking certain cookies may affect your experience on our site.",
    ],
  },
  {
    title: "More information",
    paragraphs: [
      "To find out more about cookies and how to manage or delete them, visit:",
    ],
    links: [
      {
        label: "About Cookies",
        href: "https://www.aboutcookies.org",
      },
      {
        label: "ICO guidance on cookies",
        href: "https://ico.org.uk/for-the-public/online/cookies/",
      },
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      "If you have any questions about this Cookies Policy or our data practices, contact:",
    ],
  },
];
