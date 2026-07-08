// Footer Items
export const company = {
    title: "How It Works",
    items: [
        {
            label: "Capture",
            href: "/how-it-works/capture"
        },
        {
            label: "Analyse",
            href: "/how-it-works/analyse"
        },
        {
            label: "Action",
            href: "/how-it-works/action"
        }
    ]
}

export const solutions = {
    title: "Solutions",
    items: [
        {
            label: "By Role",
            href: "/solutions/by-role"
        },
        {
            label: "By Industry",
            href: "/solutions/by-industry"
        },
        {
            label: "By Challenge",
            href: "/solutions/by-challenge"
        }
    ]
}

export const products = {
    title: "Products",
    items: [
        {
            label: "Customer Experience",
            href: "/products/customer-experience"
        },
        {
            label: "Marketing Intelligence",
            href: "/products/marketing-intelligence"
        },
        {
            label: "Operational Excellence",
            href: "/products/operational-excellence"
        }
    ]
}

export const explore = {
    title: "Explore",
    items: [
        {
            label: "EVA",
            href: "#",
        },
        {
            label: "Company",
            href: "#",
        },
        {
            label: "Resources",
            href: "#",
        }
    ]
}

export const footerPolicyItems = [
    {
        label: "Privacy Policy",
        href: "/privacy-policy"
    },
    {
        label: "Terms & Conditions",
        href: "/terms-and-conditions"
    },
    {
        label: "Accessibility",
        href: "/accessibility"
    },
    {
        label: "Sitemap",
        href: "/sitemap"
    }
]

// Contact Items
import { emailIcon, mapPinIcon } from "@/utils/icons";

export const footerContactItems = {
    email: {
        label: "Email Us",
        text: "info@servefirst.co.uk",
        href: "mailto:info@servefirst.co.uk",
        icon: emailIcon
    },
    address: {
        label: "Based in",
        text: "Milton Keynes, UK",
        icon: mapPinIcon
    }
}

// Social Items
import { facebookIcon, instagramIcon, linkedInIcon } from "@/utils/icons";

export const footerSocialItems = {
    facebook: {
        label: "Facebook",
        href: "https://www.facebook.com/servefirstcx",
        icon: facebookIcon
    },
    instagram: {
        label: "Instagram",
        href: "https://www.instagram.com/servefirstcx",
        icon: instagramIcon
    },
    linkedIn: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/serve-first-cx",
        icon: linkedInIcon
    }
}
