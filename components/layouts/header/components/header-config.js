const headerConfig = {
    "/products/customer-experience/mystery-shopping": {
        topbar: {
            href: "https://mysteryshopping.servefirst.ai/",
            text: "Become a mystery shopper",
            target: "_blank",
            type: "mysteryShopper",
            fullLink: false,
        },
    },
    "/lp-audit": {
        headerType: "minimal",
    },
    "/lp-client-connect": {
        headerType: "minimal",
    },
    "/lp-customer-surveys": {
        headerType: "minimal",
    },
    "/lp-terminals": {
        headerType: "minimal",
    },
    "/lp-helpdesk": {
        headerType: "minimal",
    },
    "/products/operational-excellence/vision": {
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
