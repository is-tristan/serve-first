export function mapPostCard(node) {
    return {
        image: node.featuredImage?.node?.mediaItemUrl ?? "",
        title: node.title,
        description: node.excerpt ?? "",
        date: new Date(node.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        author: node.author?.node?.name ?? "Admin",
        href: `/latest-news-and-updates/${node.slug}`,
    };
}
