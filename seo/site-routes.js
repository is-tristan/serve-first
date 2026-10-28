import { menuItemsData } from "@/components/layouts/header/items/menu-items-data"
import { company, solutions, products, explore, footerPolicyItems } from "@/components/layouts/footer/items/footer-items-data"

const extraPaths = ["/", "/get-a-demo", "/legal/accessibility"]

function collectPaths(items = []) {
    return items.flatMap((item) => [item.href, ...collectPaths(item.submenu)])
}

function isPagePath(path) {
    return typeof path === "string"
        && path.startsWith("/")
        && !path.startsWith("//")
        && !/\.[a-z0-9]+$/i.test(path)
}

export function getSitePaths() {
    const footerPaths = [company, solutions, products, explore].flatMap((group) => group.items.map((item) => item.href))

    const paths = [
        ...extraPaths,
        ...collectPaths(menuItemsData),
        ...footerPaths,
        ...footerPolicyItems.map((item) => item.href),
    ]

    return [...new Set(paths.filter(isPagePath).map((path) => (path === "/" ? path : path.replace(/\/$/, ""))))]
}
