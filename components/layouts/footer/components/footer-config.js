const footerConfig = {
    "/products/operational-excellence/vision": {
        theme: "dark",
        bottomText: "vision",
    },
    "/lp-audit": {
        footerType: "minimal",
    },
    "/lp-client-connect": {
        footerType: "minimal",
    },
    "/lp-customer-surveys": {
        footerType: "minimal",
    },
    "/lp-terminals": {
        footerType: "minimal",
    },
    "/lp-helpdesk": {
        footerType: "minimal",
    },
};

export function getFooterConfig(pathname) {
    return footerConfig[pathname] || {};
}

export function getFooterType(pathname) {
    return getFooterConfig(pathname).footerType || "default";
}

export default footerConfig;
