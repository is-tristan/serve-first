const headerConfig = {
    "/": {
        topbar: {
            href: "/coming-soon",
            text: "Something big is coming: The future of operational excellence. Be the first to know",
            target: "_self",
            type: "home",
            fullLink: true,
        },
    },
    "/products/customer-experience/mystery-shopping": {
        topbar: {
            href: "https://mysteryshopping.servefirst.ai/",
            text: "Become a Mystery Shopper",
            target: "_blank",
            type: "default",
            fullLink: false,
        },
    },
    "/lp-audit": {
        headerType: "minimal",
    },
    "/lp-client-connect": {
        headerType: "minimal",
    },
    "/lp-terminals": {
        headerType: "minimal",
    },
    "/products/vision": {
        headerType: "productVisionHeader",
    },
};

export function getHeaderConfig(pathname) {
    return headerConfig[pathname] || {};
}

export function getHeaderType(pathname) {
    return getHeaderConfig(pathname).headerType || "default";
}

export default headerConfig;
