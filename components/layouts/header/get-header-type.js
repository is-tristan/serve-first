export const minimalHeaderPaths = [
    "/what-does-serve-first-do",
]

export function getHeaderType(pathname) {
    if (minimalHeaderPaths.includes(pathname)) {
        return "minimal"
    }

    return "default"
}
